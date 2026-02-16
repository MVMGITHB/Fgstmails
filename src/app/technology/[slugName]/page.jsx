import Article from "@/components/Article/Article";
import { base_url } from "@/components/Helper/helper";
import Script from "next/script";

const Base_url = "https://fgstmails.com/";

export async function generateMetadata({ params }) {
  const { slugName } = params;

  try {
    const response = await fetch(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`,
      { cache: "no-store" }
    );
    const data = await response.json();

    return {
      title: data?.title || "Fgstmails",
      description: data?.mdesc || "Latest article from Fgstmails",
      metadataBase: new URL("https://fgstmails.com"),
      alternates: {
        canonical: `https://fgstmails.com/technology/${slugName}`,
      },
      openGraph: {
        title: data?.title,
        description: data?.mdesc,
        url: `https://fgstmails.com/technology/${slugName}`,
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
  } catch (error) {
    return {
      title: "Fgstmails",
      description: "Latest news, blogs and stories from Fgstmails.",
    };
  }
}

export default async function Page({ params }) {
  const { slugName } = params;

  try {
    const response = await fetch(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`,
      { cache: "no-store" }
    );
    const data1 = await response.json();

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
          name: data1?.title,
          item: `https://fgstmails.com/technology/${slugName}`,
        },
      ],
    };

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://fgstmails.com/technology/${slugName}`,
      },
      headline: data1?.title,
      description: data1?.mdesc,
      image: [`${base_url}${data1?.image}`],
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
      datePublished: data1?.createdAt,
      dateModified: data1?.updatedAt || data1?.createdAt,
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

        <Article data={data1} />
      </>
    );
  } catch (error) {
    return <div>Failed to load article.</div>;
  }
}
