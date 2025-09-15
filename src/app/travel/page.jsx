// app/travel/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "Fgstmails Travel – Destinations, Tips & Travel Guides",
  description:
    "Explore travel destinations, expert tips, itineraries and updates to fuel your next adventure.",
  alternates: {
    canonical: "https://fgstmails.com/travel",
  },
  openGraph: {
    title: "Fgstmails Travel – Destinations, Tips & Travel Guides",
    description:
      "Explore travel destinations, expert tips, itineraries and updates to fuel your next adventure.",
    url: "https://fgstmails.com/travel",
    siteName: "Fgstmails",
    images: [
      {
        url: "https://fgstmails.com/logo.png", // ✅ Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "Fgstmails Travel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fgstmails Travel – Destinations, Tips & Travel Guides",
    description:
      "Explore travel destinations, expert tips, itineraries and updates to fuel your next adventure.",
    images: ["https://fgstmails.com/logo.png"], // ✅ Replace with actual image
    site: "@Fgstmails", // ✅ Use your real Twitter handle if available
    creator: "@Fgstmails",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="travel" />
    </div>
  );
};

export default Page;
