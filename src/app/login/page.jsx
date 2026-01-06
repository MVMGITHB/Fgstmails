import Login from "@/components/Auth/Login";

export const metadata = {
  title: "Login",
  description: "Login to your FGS T Mails account securely.",
  alternates: {
    canonical: "https://fgstmails.com/login",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Login />;
}
