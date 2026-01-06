import Register from "@/components/Auth/Register";

export const metadata = {
  title: "Register",
  description: "Create your FGS T Mails account and get started today.",
  alternates: {
    canonical: "https://fgstmails.com/register",
  },
};

export default function Page() {
  return <Register />;
}
