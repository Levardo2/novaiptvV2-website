import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - NovaIPTV",
  description: "Terms and conditions for using NovaIPTV streaming service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-4xl">
            <h1 className="mb-8">Terms of Service</h1>
            <p className="text-sm text-[var(--color-muted)] mb-12">
              Last updated: October 22, 2025
            </p>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8 prose prose-invert max-w-none">
                  <h2>1. Acceptance of Terms</h2>
                  <p className="text-[var(--color-muted)]">
                    By accessing and using NovaIPTV ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                  </p>

                  <h2 className="mt-8">2. Service Description</h2>
                  <p className="text-[var(--color-muted)]">
                    NovaIPTV provides internet protocol television (IPTV) streaming services, including access to live TV channels, video on demand, and related features. We reserve the right to modify, suspend, or discontinue any part of the Service at any time.
                  </p>

                  <h2 className="mt-8">3. Account Registration</h2>
                  <p className="text-[var(--color-muted)]">
                    You must provide accurate, complete, and current information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                  </p>

                  <h2 className="mt-8">4. Subscription and Billing</h2>
                  <ul className="text-[var(--color-muted)]">
                    <li>Subscriptions are billed on a recurring basis (monthly or yearly)</li>
                    <li>Payment is due at the beginning of each billing cycle</li>
                    <li>You can cancel your subscription at any time</li>
                    <li>Refunds are available within 7 days of initial purchase</li>
                  </ul>

                  <h2 className="mt-8">5. Acceptable Use</h2>
                  <p className="text-[var(--color-muted)]">
                    You agree to use the Service only for lawful purposes. You may not:
                  </p>
                  <ul className="text-[var(--color-muted)]">
                    <li>Share your account credentials with others</li>
                    <li>Use the Service to access copyrighted content illegally</li>
                    <li>Attempt to circumvent any security measures</li>
                    <li>Resell or redistribute the Service</li>
                    <li>Use automated systems to access the Service</li>
                  </ul>

                  <h2 className="mt-8">6. Content Rights</h2>
                  <p className="text-[var(--color-muted)]">
                    We only provide access to content for which we have proper distribution rights and licensing agreements. We do not host, produce, or promote pirated content.
                  </p>

                  <h2 className="mt-8">7. Privacy</h2>
                  <p className="text-[var(--color-muted)]">
                    Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
                  </p>

                  <h2 className="mt-8">8. Limitation of Liability</h2>
                  <p className="text-[var(--color-muted)]">
                    The Service is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
                  </p>

                  <h2 className="mt-8">9. Termination</h2>
                  <p className="text-[var(--color-muted)]">
                    We reserve the right to terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                  </p>

                  <h2 className="mt-8">10. Changes to Terms</h2>
                  <p className="text-[var(--color-muted)]">
                    We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
                  </p>

                  <h2 className="mt-8">11. Contact Information</h2>
                  <p className="text-[var(--color-muted)]">
                    For questions about these Terms, please contact us at:
                    <br />
                    Email: legal@novaiptv.com
                    <br />
                    Address: [Your Business Address]
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
