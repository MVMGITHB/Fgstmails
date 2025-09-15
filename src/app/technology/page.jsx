// app/technology/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "Fgstmails Technology – Latest Tech & Innovation News",
  description:
    "Discover the newest in gadgets, apps, AI, software and tech trends shaping tomorrow.",
  alternates: {
    canonical: "https://fgstmails.com/technology",
  },
  openGraph: {
    title: "Fgstmails Technology – Latest Tech & Innovation News",
    description:
      "Discover the newest in gadgets, apps, AI, software and tech trends shaping tomorrow.",
    url: "https://fgstmails.com/technology",
    siteName: "Fgstmails",
    images: [
      {
        url: "https://fgstmails.com/logo.png", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Fgstmails Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fgstmails Technology – Latest Tech & Innovation News",
    description:
      "Discover the newest in gadgets, apps, AI, software and tech trends shaping tomorrow.",
    images: ["https://fgstmails.com/logo.png"], // ✅ Replace with actual image
    site: "@Fgstmails", // ✅ Your Twitter handle if available
    creator: "@Fgstmails",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="technology" />
    </div>
  );
};

export default Page;
