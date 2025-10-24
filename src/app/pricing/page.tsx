"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Shield, CreditCard, Zap } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans - NovaIPTV | 7-Day Money-Back Guarantee",
  description: "Choose the perfect IPTV plan. Monthly from $14.99. 10,000+ channels, 4K streaming, 7-day money-back guarantee.",
  openGraph: {
    title: "NovaIPTV Pricing Plans",
    description: "Flexible IPTV pricing starting at $14.99/month",
    type: "website",
  },
};

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NovaIPTV Premium Plan",
    description: "Premium IPTV streaming with 10,000+ channels in 4K quality",
    brand: {
      "@type": "Brand",
      name: "NovaIPTV"
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "14.99",
      highPrice: "34.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2025-12-31"
    }
  };

  const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals",
      monthly: 14.99,
      yearly: 149.99,
      features: [
        "5,000+ Live Channels",
        "HD Quality (1080p)",
        "2 Simultaneous Devices",
        "EPG & Catch-Up TV",
        "Email Support",
        "Basic Channel Selection",
      ],
      notIncluded: [
        "4K Ultra HD",
        "Premium Sports Channels",
        "Priority Support",
      ],
    },
    {
      name: "Premium",
      description: "Most popular choice",
      monthly: 24.99,
      yearly: 249.99,
      popular: true,
      features: [
        "10,000+ Live Channels",
        "4K Ultra HD Quality",
        "4 Simultaneous Devices",
        "EPG & Catch-Up TV",
        "Priority Support",
        "Premium Sports Channels",
        "Video on Demand Library",
        "Anti-Freeze Technology",
      ],
      notIncluded: [],
    },
    {
      name: "Ultimate",
      description: "For the whole family",
      monthly: 34.99,
      yearly: 349.99,
      features: [
        "15,000+ Live Channels",
        "4K Ultra HD Quality",
        "Unlimited Devices",
        "EPG & Catch-Up TV",
        "24/7 VIP Support",
        "All Premium Channels",
        "Extensive VOD Library",
        "Anti-Freeze Technology",
        "Multi-Language Support",
        "Custom Channel Lists",
      ],
      notIncluded: [],
    },
  ];

  const comparisonFeatures = [
    { name: "Live Channels", basic: "5,000+", premium: "10,000+", ultimate: "15,000+" },
    { name: "Video Quality", basic: "HD (1080p)", premium: "4K Ultra HD", ultimate: "4K Ultra HD" },
    { name: "Simultaneous Devices", basic: "2", premium: "4", ultimate: "Unlimited" },
    { name: "EPG & Catch-Up", basic: true, premium: true, ultimate: true },
    { name: "4K Streaming", basic: false, premium: true, ultimate: true },
    { name: "Premium Sports", basic: false, premium: true, ultimate: true },
    { name: "VOD Library", basic: "Limited", premium: "Full", ultimate: "Full + Exclusive" },
    { name: "Support", basic: "Email", premium: "Priority", ultimate: "24/7 VIP" },
    { name: "Anti-Freeze Tech", basic: false, premium: true, ultimate: true },
    { name: "Multi-Language", basic: "Limited", premium: "Extended", ultimate: "Full" },
  ];

  const faqs = [
    {
      question: "Can I change my plan later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
    },
    {
      question: "What's included in the 7-day money-back guarantee?",
      answer: "If you're not satisfied with our service for any reason, request a full refund within 7 days of your initial purchase. No questions asked.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 3-day free trial on all plans. No credit card required to start.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and cryptocurrency payments.",
    },
  ];

  const getPrice = (plan: typeof plans[0]) => {
    const price = billingPeriod === "monthly" ? plan.monthly : plan.yearly;
    const perMonth = billingPeriod === "yearly" ? (price / 12).toFixed(2) : price;
    return { price, perMonth };
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-mesh">
          <div className="container-custom text-center">
            <Badge className="mb-6" variant="secondary">
              7-Day Money-Back Guarantee
            </Badge>

            <h1 className="mb-6">
              Choose your <span className="text-gradient">perfect plan</span>
            </h1>

            <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              Flexible pricing for everyone. Start with a free trial, cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm ${billingPeriod === "monthly" ? "text-[var(--color-text)]" : "text-[var(--color-muted)]"}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
                className="relative w-16 h-8 bg-[var(--color-surface)] rounded-full border border-white/10 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-[var(--color-primary)] transition-transform ${
                    billingPeriod === "yearly" ? "translate-x-8" : ""
                  }`}
                />
              </button>
              <span className={`text-sm ${billingPeriod === "yearly" ? "text-[var(--color-text)]" : "text-[var(--color-muted)]"}`}>
                Yearly
                <Badge variant="success" className="ml-2">Save 17%</Badge>
              </span>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {plans.map((plan) => {
                const { price, perMonth } = getPrice(plan);
                return (
                  <Card
                    key={plan.name}
                    className={`relative ${plan.popular ? "border-[var(--color-primary)] shadow-2xl scale-105" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge variant="default">Most Popular</Badge>
                      </div>
                    )}

                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                      <p className="text-sm text-[var(--color-muted)] mb-6">
                        {plan.description}
                      </p>

                      <div className="mb-6">
                        <div className="text-5xl font-bold text-gradient mb-2">
                          ${perMonth}
                        </div>
                        <div className="text-sm text-[var(--color-muted)]">
                          per month
                          {billingPeriod === "yearly" && (
                            <span className="block mt-1">
                              Billed ${price}/year
                            </span>
                          )}
                        </div>
                      </div>

                      <Link href="/trial">
                        <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                          Start Free Trial
                        </Button>
                      </Link>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-[var(--color-success)] shrink-0 mt-0.5" />
                            <span className="text-sm text-[var(--color-text)]">{feature}</span>
                          </div>
                        ))}
                        {plan.notIncluded.map((feature, index) => (
                          <div key={`not-${index}`} className="flex items-start gap-3 opacity-50">
                            <X className="h-5 w-5 text-[var(--color-muted)] shrink-0 mt-0.5" />
                            <span className="text-sm text-[var(--color-muted)]">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-[var(--color-surface)]/30 border-y border-white/10">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-[var(--color-primary)] mb-4" />
                <h3 className="text-lg font-semibold mb-2">7-Day Money-Back</h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Not satisfied? Get a full refund within 7 days.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <CreditCard className="h-12 w-12 text-[var(--color-primary)] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
                <p className="text-sm text-[var(--color-muted)]">
                  All transactions are encrypted and secure.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="h-12 w-12 text-[var(--color-primary)] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Instant Activation</h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Start streaming immediately after signup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Compare <span className="text-gradient">all features</span>
              </h2>
              <p className="text-lg text-[var(--color-muted)]">
                See exactly what's included in each plan
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 text-[var(--color-text)]">Feature</th>
                    <th className="text-center py-4 px-6 text-[var(--color-text)]">Basic</th>
                    <th className="text-center py-4 px-6 text-[var(--color-text)]">Premium</th>
                    <th className="text-center py-4 px-6 text-[var(--color-text)]">Ultimate</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-4 px-6 text-[var(--color-text)]">{feature.name}</td>
                      <td className="py-4 px-6 text-center text-[var(--color-muted)]">
                        {typeof feature.basic === "boolean" ? (
                          feature.basic ? (
                            <Check className="h-5 w-5 text-[var(--color-success)] mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-[var(--color-muted)] mx-auto" />
                          )
                        ) : (
                          feature.basic
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-[var(--color-muted)]">
                        {typeof feature.premium === "boolean" ? (
                          feature.premium ? (
                            <Check className="h-5 w-5 text-[var(--color-success)] mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-[var(--color-muted)] mx-auto" />
                          )
                        ) : (
                          feature.premium
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-[var(--color-muted)]">
                        {typeof feature.ultimate === "boolean" ? (
                          feature.ultimate ? (
                            <Check className="h-5 w-5 text-[var(--color-success)] mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-[var(--color-muted)] mx-auto" />
                          )
                        ) : (
                          feature.ultimate
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-[var(--color-surface)]/30">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Pricing <span className="text-gradient">questions?</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--color-muted)]">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
