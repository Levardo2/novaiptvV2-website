import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - NovaIPTV",
  description: "Our 7-day money-back guarantee and refund policy.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="success" className="mb-6">
                7-Day Money-Back Guarantee
              </Badge>
              <h1 className="mb-8">Refund Policy</h1>
              <p className="text-sm text-[var(--color-muted)]">
                Last updated: October 22, 2025
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8 prose prose-invert max-w-none">
                  <h2>Our Commitment</h2>
                  <p className="text-[var(--color-muted)]">
                    At NovaIPTV, we stand behind the quality of our service. We offer a 7-day money-back guarantee to all new customers, ensuring you can try our service risk-free.
                  </p>

                  <h2 className="mt-8">Eligibility</h2>
                  <p className="text-[var(--color-muted)]">
                    You are eligible for a full refund if:
                  </p>
                  <ul className="text-[var(--color-muted)]">
                    <li>You request a refund within 7 days of your initial purchase</li>
                    <li>This is your first subscription with NovaIPTV</li>
                    <li>You have not violated our Terms of Service</li>
                    <li>You have not exceeded reasonable usage limits</li>
                  </ul>

                  <h2 className="mt-8">Refund Process</h2>
                  <p className="text-[var(--color-muted)]">
                    To request a refund:
                  </p>
                  <ol className="text-[var(--color-muted)]">
                    <li>Contact our support team via email at refunds@novaiptv.com</li>
                    <li>Include your account email and order number</li>
                    <li>Briefly explain your reason for the refund (optional)</li>
                    <li>We'll process your request within 24 hours</li>
                  </ol>

                  <h2 className="mt-8">Refund Timeline</h2>
                  <p className="text-[var(--color-muted)]">
                    Once approved, refunds are typically processed as follows:
                  </p>
                  <ul className="text-[var(--color-muted)]">
                    <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                    <li><strong>PayPal:</strong> 2-5 business days</li>
                    <li><strong>Cryptocurrency:</strong> Not refundable (platform limitations)</li>
                  </ul>

                  <h2 className="mt-8">Non-Refundable Situations</h2>
                  <p className="text-[var(--color-muted)]">
                    Refunds will not be issued in the following cases:
                  </p>
                  <ul className="text-[var(--color-muted)]">
                    <li>Requests made after the 7-day window</li>
                    <li>Renewal payments (you can cancel before renewal)</li>
                    <li>Account termination due to Terms of Service violations</li>
                    <li>Partial month refunds after the initial 7-day period</li>
                    <li>Third-party purchases (buy only from our official website)</li>
                  </ul>

                  <h2 className="mt-8">Cancellation vs. Refund</h2>
                  <p className="text-[var(--color-muted)]">
                    Important distinction:
                  </p>
                  <ul className="text-[var(--color-muted)]">
                    <li><strong>Refund:</strong> Get your money back within 7 days of initial purchase</li>
                    <li><strong>Cancellation:</strong> Stop future billing but continue service until end of billing period</li>
                  </ul>
                  <p className="text-[var(--color-muted)]">
                    You can cancel your subscription at any time to prevent future charges. Your service will remain active until the end of your current billing period.
                  </p>

                  <h2 className="mt-8">Technical Issues</h2>
                  <p className="text-[var(--color-muted)]">
                    If you're experiencing technical difficulties:
                  </p>
                  <ul className="text-[var(--color-muted)]">
                    <li>Contact support first - we can resolve most issues quickly</li>
                    <li>Technical issues don't automatically qualify you for a refund outside the 7-day window</li>
                    <li>We may offer service credits or extensions for prolonged outages</li>
                  </ul>

                  <h2 className="mt-8">Fair Use Policy</h2>
                  <p className="text-[var(--color-muted)]">
                    We reserve the right to deny refunds to customers who:
                  </p>
                  <ul className="text-[var(--color-muted)]">
                    <li>Have a history of repeated refund requests</li>
                    <li>Attempt to abuse the refund policy</li>
                    <li>Show patterns of fraudulent behavior</li>
                  </ul>

                  <h2 className="mt-8">Contact Information</h2>
                  <p className="text-[var(--color-muted)]">
                    For refund requests or questions:
                    <br />
                    Email: refunds@novaiptv.com
                    <br />
                    Response Time: Within 24 hours
                  </p>

                  <h2 className="mt-8">Changes to This Policy</h2>
                  <p className="text-[var(--color-muted)]">
                    We may update this refund policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the service after changes constitutes acceptance of the new policy.
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
