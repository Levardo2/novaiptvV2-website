import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - NovaIPTV",
  description: "How NovaIPTV collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-4xl">
            <h1 className="mb-8">Privacy Policy</h1>
            <p className="text-sm text-[var(--color-muted)] mb-12">
              Last updated: October 22, 2025
            </p>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8 prose prose-invert max-w-none">
                  <h2>1. Information We Collect</h2>
                  <p className="text-[var(--color-muted)]">
                    We collect information you provide directly to us, including:
                  </p>
                  <ul className="text-[var(--color-muted)]">
                    <li>Name and email address</li>
                    <li>Payment information (processed securely by third parties)</li>
                    <li>Device information and IP address</li>
                    <li>Viewing preferences and history</li>
                    <li>Support inquiries and communications</li>
                  </ul>

                  <h2 className="mt-8">2. How We Use Your Information</h2>
                  <p className="text-[var(--color-muted)]">
                    We use your information to:
                  </p>
                  <ul className="text-[var(--color-muted)]">
                    <li>Provide and maintain the Service</li>
                    <li>Process payments and prevent fraud</li>
                    <li>Send service-related communications</li>
                    <li>Improve and personalize your experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h2 className="mt-8">3. Data Security</h2>
                  <p className="text-[var(--color-muted)]">
                    We implement industry-standard security measures to protect your personal information. All payment processing is handled by PCI-DSS compliant payment processors.
                  </p>

                  <h2 className="mt-8">4. Cookies and Tracking</h2>
                  <p className="text-[var(--color-muted)]">
                    We use cookies and similar technologies to improve your experience, analyze usage, and deliver personalized content. You can control cookie settings through your browser.
                  </p>

                  <h2 className="mt-8">5. Third-Party Services</h2>
                  <p className="text-[var(--color-muted)]">
                    We may share your information with trusted third parties who assist in operating our Service, including payment processors, analytics providers, and customer support tools.
                  </p>

                  <h2 className="mt-8">6. Your Rights (GDPR/CCPA)</h2>
                  <p className="text-[var(--color-muted)]">
                    You have the right to:
                  </p>
                  <ul className="text-[var(--color-muted)]">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Object to or restrict processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>

                  <h2 className="mt-8">7. Data Retention</h2>
                  <p className="text-[var(--color-muted)]">
                    We retain your personal information for as long as necessary to provide the Service and comply with legal obligations. You can request deletion of your account at any time.
                  </p>

                  <h2 className="mt-8">8. Children's Privacy</h2>
                  <p className="text-[var(--color-muted)]">
                    Our Service is not intended for users under 18 years of age. We do not knowingly collect personal information from children.
                  </p>

                  <h2 className="mt-8">9. International Data Transfers</h2>
                  <p className="text-[var(--color-muted)]">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                  </p>

                  <h2 className="mt-8">10. Contact Us</h2>
                  <p className="text-[var(--color-muted)]">
                    For privacy-related questions or to exercise your rights, contact us at:
                    <br />
                    Email: privacy@novaiptv.com
                    <br />
                    Data Protection Officer: dpo@novaiptv.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
