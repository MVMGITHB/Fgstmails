import Authors from "@/components/authorSection/Authors";


export const metadata = {
  title: "Our Authors – fgstmails",
  description:
    "Meet the expert authors at fgstmails who provide accurate government and private job updates, career guidance, and exam preparation tips.",

  metadataBase: new URL("https://fgstmails.com"),

  alternates: {
    canonical: "/author",
  },

  openGraph: {
    title: "Our Authors – fgstmails",
    description:
      "Get to know the expert authors behind fgstmails delivering trusted job updates and career guidance.",
    url: "https://fgstmails.com/author",
    siteName: "fgstmails",
    type: "website",
    images: [
      {
        url: "/images/logo3.webp",
        width: 1200,
        height: 630,
        alt: "fgstmails – author page",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Authors – fgstmails",
    description:
      "Meet the experts who write trusted job updates and career content at fgstmails.",
    images: ["/og-authors.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div>
      <Authors />
    </div>
  );
}
