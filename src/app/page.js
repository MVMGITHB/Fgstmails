import Home from "@/components/Home/Home";

// ✅ Static SEO Metadata for fgstmails.com
export const metadata = {
  title: "DailyNewzMail - Top News, Trends & Picks",
  description:
    "Get the latest news, trending stories, and expert picks all in one place. Stay informed with DailyNewzMail’s handpicked highlights.",
  keywords: [
    "daily news",
    "top news picks",
    "trending blogs",
    "DailyNewzMail",
    "latest updates",
  ],
  alternates: {
    canonical: "https://fgstmails.com",
  },
  openGraph: {
    title: "DailyNewzMail - Top News, Trends & Picks",
    description:
      "Get the latest breaking news, top headlines & trending updates across India and the world. Stay informed with DailyNewzMail.",
    url: "https://fgstmails.com",
    siteName: "DailyNewzMail",
    images: [
      {
        url: "https://fgstmails.com/images/og-banner.png", // 🔁 Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "DailyNewzMail Hero Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyNewzMail - Top News, Trends & Picks",
    description:
      "Get the latest breaking news, top headlines & trending updates across India and the world. Stay informed with DailyNewzMail..",
    images: ["https://fgstmails.com/images/og-banner.png"], // 🔁 Replace with actual image
  },
};

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
