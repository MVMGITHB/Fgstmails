import { base_url } from "@/components/Helper/helper";
import Home from "@/components/Home/Home";

/* ISR → page cached globally and regenerated every 60 sec */
export const revalidate = 60;

/* Static SEO Metadata (already optimal) */
export const metadata = {
  title: "Fgstmails - Top News, Trends & Picks",
  description:
    "Get the latest news, trending stories, and expert picks all in one place.",
  keywords: [
    "daily news",
    "top news picks",
    "trending blogs",
    "Fgstmails",
    "latest updates",
  ],
  alternates: {
    canonical: "https://fgstmails.com",
  },
  openGraph: {
    title: "Fgstmails - Top News, Trends & Picks",
    description:
      "Get the latest breaking news and trending updates across India and the world.",
    url: "https://fgstmails.com",
    siteName: "Fgstmails",
    images: [
      {
        url: "https://fgstmails.com/images/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "Fgstmails Hero Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fgstmails - Top News, Trends & Picks",
    description:
      "Get the latest breaking news, top headlines & trending updates.",
    images: ["https://fgstmails.com/images/og-banner.webp"],
  },
};

/* Fetch function with caching */
async function getNews() {
  const res = await fetch(`${base_url}/api/blog/getAllBlog`, {
    next: { revalidate: 60 }, // cache API result
  });

  if (!res.ok) throw new Error("Failed to fetch news");

  return res.json();
}

export default async function Page() {
  const news = await getNews();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fgstmails",
    url: "https://fgstmails.com/",
    logo: "https://fgstmails.com/images/logo2.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contact@fgstmails.com",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <Home news={news} />
    </>
  );
}
