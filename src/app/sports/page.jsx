// app/sports/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "Fgstmails Sports – Cricket, Football & Global Sports News",
  description:
    "Follow the latest matches, results, highlights and sports analysis from Indian and international arenas.",
  alternates: {
    canonical: "https://fgstmails.com/sports",
  },
  openGraph: {
    title: "Fgstmails Sports – Cricket, Football & Global Sports News",
    description:
      "Follow the latest matches, results, highlights and sports analysis from Indian and international arenas.",
    url: "https://fgstmails.com/sports",
    siteName: "Fgstmails",
    images: [
      {
        url: "https://fgstmails.com/logo.png", // ✅ Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Fgstmails Sports",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fgstmails Sports – Cricket, Football & Global Sports News",
    description:
      "Follow the latest matches, results, highlights and sports analysis from Indian and international arenas.",
    images: ["https://fgstmails.com/logo.png"], // ✅ Replace if needed
    site: "@Fgstmails", // ✅ Replace with real handle if available
    creator: "@Fgstmails",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="sports" />
    </div>
  );
};

export default Page;
