// app/fashion/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "Fgstmails Fashion – Style Trends, Tips & Industry News",
  description:
    "Discover fashion news, style advice, trend reports and wardrobe inspiration for every season.",
  alternates: {
    canonical: "https://fgstmails.com/fashion",
  },
  openGraph: {
    title: "Fgstmails Fashion – Style Trends, Tips & Industry News",
    description:
      "Discover fashion news, style advice, trend reports and wardrobe inspiration for every season.",
    url: "https://fgstmails.com/fashion",
    siteName: "Fgstmails",
    images: [
      {
        url: "https://fgstmails.com/logo.png", // ✅ Replace with real OG image if available
        width: 1200,
        height: 630,
        alt: "Fgstmails Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fgstmails Fashion – Style Trends, Tips & Industry News",
    description:
      "Discover fashion news, style advice, trend reports and wardrobe inspiration for every season.",
    images: ["https://fgstmails.com/logo.png"], // ✅ Replace if needed
    site: "@Fgstmails", // ✅ Update to real handle if exists
    creator: "@Fgstmails",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="fashion" />
    </div>
  );
};

export default Page;
