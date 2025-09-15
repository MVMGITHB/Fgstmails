// app/terms-of-service/page.tsx

export const metadata = {
  title: "Terms of Service | Fgstmails",
  description:
    "Review the terms and conditions of using Fgstmails. Understand your rights and responsibilities as a user.",
  alternates: {
    canonical: "https://fgstmails.com/terms-of-service",
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 prose prose-lg prose-headings:font-semibold prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:underline">
      <h1 className="text-6xl font-bold mb-6">Terms of Service</h1>

      <p>
        This Agreement sets forth the terms and conditions that apply to the
        access and use of <strong>Fgstmails.com</strong>, managed and operated
        by MVM Business Services, incorporated under the laws of India. By
        accessing this website or registering your information, you agree to be
        bound by these Terms of Use (“TOU”), along with our Privacy Policy and
        Disclaimer.
      </p>

      <h2>1. Description and Acceptance of Services</h2>
      <p>
        Fgstmails provides access to information about products and services,
        including news blogs across categories such as{" "}
        <strong>
          Health, Technology, Education, Travel, Sports, Fashion, and Food
        </strong>
        . We also work with brands to advertise their products and services on
        our platform.
      </p>
      <p>
        Your participation is voluntary. Continued use of our services
        constitutes acceptance of these Terms, including any updates or
        modifications.
      </p>
      <p>
        You agree to receive communications via{" "}
        <strong>email, phone, or SMS</strong>
        from us or our third-party partners regarding updates, promotions, or
        announcements, even if your number is on the DND/NCPR list under TRAI
        regulations.
      </p>

      <h2>2. License and Website Access</h2>
      <p>
        All content and services on this website are owned or licensed by
        Fgstmails and protected by intellectual property laws. You are granted a
        <strong> limited, non-commercial license</strong> to access and use the
        website.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>No commercial use or redistribution without written consent.</li>
        <li>No reverse engineering, copying, or creating derivative works.</li>
        <li>
          No automated access (robots, scrapers) without prior permission.
        </li>
        <li>Do not bypass security measures or copy content for others.</li>
        <li>
          No framing, mirroring, or embedding content into other websites.
        </li>
      </ul>

      <h2>3. Privacy Policy</h2>
      <p>
        By using our website, you consent to the collection and use of your
        information as described in our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>4. Your Registration / Account</h2>
      <p>
        You must be of legal age and provide{" "}
        <strong>accurate, current, and complete information</strong>
        when registering. You are responsible for the confidentiality of your
        login credentials and all activity under your account.
      </p>
      <p>
        Please log out after each session and notify us immediately of any
        unauthorized access. You agree to keep your registration information
        up-to-date.
      </p>

      <h2>5. Eligibility</h2>
      <p>
        You must be an <strong>Indian resident, 18+ years of age</strong>, and
        legally capable of entering into contracts.
      </p>

      <h2>6. Third-Party Links</h2>
      <p>
        We may link to third-party websites. Fgstmails has no control over these
        sites and is not responsible for their content, services, or any
        resulting damages. Your interaction with third parties is at your own
        risk.
      </p>

      <h2>7. Disclaimer of Warranty</h2>
      <p>
        Services and content are provided on an{" "}
        <strong>“as is” and “as available”</strong>
        basis. We disclaim all warranties regarding accuracy, reliability,
        completeness, or fitness for a particular purpose.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        Fgstmails and its affiliates are not liable for any{" "}
        <strong>direct, indirect, incidental, or consequential damages</strong>{" "}
        arising from your use of the website. Any liability shall be limited to
        fees paid by you, if applicable.
      </p>

      <h2>9. Site-Provided Email and Postings</h2>
      <p>
        Users may send emails or post content. You must not post unlawful,
        harmful, abusive, misleading, or infringing material. We may monitor,
        remove, or restrict postings at our discretion.
      </p>

      <h2>10. Indemnity</h2>
      <p>
        You agree to <strong>indemnify and hold harmless</strong> Fgstmails, its
        affiliates, officers, and employees from any claims, losses, or damages
        arising from your use of the website or violation of these Terms.
      </p>

      <h2>11. Additional Terms and Conditions</h2>
      <p>
        Fgstmails reserves the right to update the website, services, and Terms
        at any time. Continued use constitutes acceptance of the updated Terms.
        Promotional offers, if any, are governed by additional terms which will
        prevail in case of conflict.
      </p>

      <p className="mt-8 text-gray-600">
        <strong>Last updated:</strong> September 2025
      </p>
    </main>
  );
}
