// app/education/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "Fgstmails Education – Learning, Policy & Study Insights",
  description:
    "Stay informed on education news, policy updates, study tips, and academic trends for all learners.",
  alternates: {
    canonical: "https://fgstmails.com/education",
  },
  openGraph: {
    title: "Fgstmails Education – Learning, Policy & Study Insights",
    description:
      "Stay informed on education news, policy updates, study tips, and academic trends for all learners.",
    url: "https://fgstmails.com/education",
    siteName: "Fgstmails",
    images: [
      {
        url: "https://fgstmails.com/logo.png", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Fgstmails Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fgstmails Education – Learning, Policy & Study Insights",
    description:
      "Stay informed on education news, policy updates, study tips, and academic trends for all learners.",
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
      <NewsUi url="education" />
    </div>
  );
};

export default Page;
