// app/health/page.tsx
import NewsUi from "@/components/NewsCategory/NewsUi";

export const metadata = {
  title: "Fgstmails Health – Trusted Health News & Wellness Tips",
  description:
    "Up‑to‑date health insights, medical news, wellness advice, and fitness tips tailored for your well‑being.",
  alternates: {
    canonical: "https://fgstmails.com/health",
  },
  openGraph: {
    title: "Fgstmails Health – Trusted Health News & Wellness Tips",
    description:
      "Up‑to‑date health insights, medical news, wellness advice, and fitness tips tailored for your well‑being.",
    url: "https://fgstmails.com/health",
    siteName: "Fgstmails",
    images: [
      {
        url: "https://fgstmails.com/logo.png", // 🔄 replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Fgstmails Health News",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fgstmails Health – Trusted Health News & Wellness Tips",
    description:
      "Up‑to‑date health insights, medical news, wellness advice, and fitness tips tailored for your well‑being.",
    images: ["https://fgstmails.com/logo.png"], // 🔄 replace with actual image
    site: "@Fgstmails", // 🔄 your Twitter handle if available
    creator: "@Fgstmails",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <NewsUi url="health" />
    </div>
  );
};

export default Page;
