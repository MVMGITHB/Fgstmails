import { base_url } from "@/components/Helper/helper";
import FirstHero from "@/components/Hero/FirstHero";
import Home from "@/components/Home/Home";
import MainPopup from "@/components/popup/MainPopup";

// ✅ Static SEO Metadata for fgstmails.com
export const metadata = {
  title: "Fgstmails - Top News, Trends & Picks",
  description:
    "Get the latest news, trending stories, and expert picks all in one place. Stay informed with Fgstmails’s handpicked highlights.",
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
      "Get the latest breaking news, top headlines & trending updates across India and the world. Stay informed with Fgstmails.",
    url: "https://fgstmails.com",
    siteName: "Fgstmails",
    images: [
      {
        url: "https://fgstmails.com/images/og-banner.png", // 🔁 Replace with actual OG image URL
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
      "Get the latest breaking news, top headlines & trending updates across India and the world. Stay informed with Fgstmails..",
    images: ["https://fgstmails.com/images/og-banner.png"], // 🔁 Replace with actual image
  },
};

export default async function Page() {
 
    const res = await fetch(`${base_url}/api/blog/getAllBlog`, {
      cache: "no-store", // always fresh data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const news = await res.json();

    // console.log("News data in page.js:", news);

  return (
    <>
      <Home news={news} />
      {/* <div className="md:col-span-2">
          <FirstHero news={news} />
        </div> */}
    </>
  );
}
