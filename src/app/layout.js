import { Geist, Geist_Mono, Prata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Header/Footer";
import { AuthProvider } from "@/components/context/auth";
import BreadcrumbSchema from "@/components/Seo/breadcrumb";
import Breadcrumb from "@/components/Breadcrumb/BreadCrumbVisible";
import MainPopDynamic from "@/components/popup/MainPopDynamic";
import MainPopup from "@/components/popup/MainPopup";
import NewPopup from "@/components/popup/NewPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prata = Prata({
  weight: "400", // ✅ fixed
  subsets: ["latin"],
  variable: "--font-prata",
});
export const metadata = {
  title: "fgstmails",
  description: "Get Latest News and Updates",
  icons: {
    // chnage images favicon to faviconlogo
    icon: "/images/faviconlogo.png", // path inside /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
          <link
    rel="icon"
    href="/images/faviconlogo.png"
    type="image/x-icon"
    sizes="16x16"
  />

  {/* ✅ Google Analytics - fixed version */}
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-T6XFEKGCEX"
  ></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-T6XFEKGCEX');
      `,
    }}
  />
</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${prata.variable} antialiased`}
      >
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* <FgstmailsPopup /> */}

            <BreadcrumbSchema />
            <Breadcrumb />
            <main className="flex-grow">{children}</main>
            {/* popup components */}
            {/* <MainPopup /> */}
            {/* <MainPopDynamic/> */}

            <NewPopup/>

            
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
