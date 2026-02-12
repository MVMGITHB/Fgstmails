import Article from "@/components/Article/Article";
import { base_url } from "@/components/Helper/helper";
import Script from "next/script";

const Base_url = "https://fgstmails.com/";

async function getArticle(slug) {
  const res = await fetch(
    `${base_url}/api/blog/getOneBlogByslug/${slug}`,
    {
      // choose one depending on your needs:
      cache: "no-store",        // always fresh
      // next: { revalidate: 60 } // or ISR caching
    }
  );

  if (!res.ok) throw new Error("Fetch failed");

  return res.json();
}

export async function generateMetadata({ params }) {
  const { slugName } = params;

  try {
    const data = await getArticle(slugName);

    return {
      title: data?.title || "Fgstmails",
      description: data?.mdesc || "Latest article from Fgstmails",
      metadataBase: new URL("https://fgstmails.com"),
      alternates: {
        canonical: `https://fgstmails.com/travel/${slugName}`,
      },
      openGraph: {
        title: data?.title,
        description: data?.mdesc,
        url: `https://fgstmails.com/travel/${slugName}`,
        type: "article",
        siteName: "Fgstmails",
        images: [
          {
            url: `${base_url}${data?.image}`,
            width: 1200,
            height: 630,
            alt: data?.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: data?.title,
        description: data?.mdesc,
        images: [`${base_url}${data?.image}`],
      },
    };
  } catch {
    return {
      title: "Fgstmails",
      description: "Latest news, blogs and stories from Fgstmails.",
    };
  }
}

export default async function Page({ params }) {
  const { slugName } = params;

  try {
    const data = await getArticle(slugName);

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://fgstmails.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data?.title,
          item: `https://fgstmails.com/blog/${slugName}`,
        },
      ],
    };

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://fgstmails.com/blog/${slugName}`,
      },
      headline: data?.title,
      description: data?.mdesc,
      image: [`${base_url}${data?.image}`],
      author: {
        "@type": "Organization",
        name: "Fgstmails",
        url: "https://fgstmails.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Fgstmails",
        logo: {
          "@type": "ImageObject",
          url: "https://fgstmails.com/images/logo.png",
        },
      },
      datePublished: data?.createdAt,
      dateModified: data?.updatedAt || data?.createdAt,
    };

    return (
      <>
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <Article data={data} />
      </>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <div>Failed to load article.</div>;
  }
}
