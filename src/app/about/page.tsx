import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Users, Globe, Award, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - NovaIPTV",
  description: "Learn about NovaIPTV's mission to provide premium IPTV streaming services worldwide.",
};

export default function AboutPage() {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "15K+", label: "Channels" },
    { value: "24/7", label: "Support" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Compliance",
      description: "We operate with full legal compliance and only provide content we have distribution rights for.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Our infrastructure is designed for 99.9% uptime with redundant servers worldwide.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We offer 24/7 support and a 7-day money-back guarantee.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers in over 100 countries with content in multiple languages.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Premium streaming quality with 4K support and anti-freeze technology.",
    },
    {
      icon: Lock,
      title: "Privacy Focused",
      description: "We respect your privacy and implement industry-standard security measures.",
    },
  ];

  const paymentLogos = [
    { name: "Visa", width: 60 },
    { name: "Mastercard", width: 60 },
    { name: "PayPal", width: 80 },
    { name: "American Express", width: 60 },
    { name: "Crypto", width: 60 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-mesh">
          <div className="container-custom text-center">
            <Badge className="mb-6" variant="secondary">
              Trusted by 50,000+ Customers
            </Badge>

            <h1 className="mb-6">
              Premium IPTV <span className="text-gradient">made simple</span>
            </h1>

            <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              We're on a mission to make premium live TV streaming accessible, reliable, and affordable for everyone.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-[var(--color-surface)]/30 border-y border-white/10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--color-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Our <span className="text-gradient">story</span>
              </h2>
            </div>

            <Card>
              <CardContent className="p-8 space-y-6 text-[var(--color-muted)]">
                <p>
                  Founded in 2020, NovaIPTV started with a simple vision: to provide high-quality IPTV streaming that's accessible, reliable, and legally compliant. We recognized that many streaming services were either too expensive, unreliable, or operating in legal gray areas.
                </p>
                <p>
                  Today, we serve over 50,000 satisfied customers across 100+ countries, delivering thousands of channels with industry-leading uptime and customer support. Our commitment to quality and compliance has made us a trusted name in the IPTV industry.
                </p>
                <p>
                  We invest heavily in our infrastructure, maintaining partnerships with content providers worldwide, and continuously improving our platform to deliver the best possible streaming experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-[var(--color-surface)]/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                What we <span className="text-gradient">stand for</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-[var(--color-primary)]" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--color-muted)]">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Trusted & <span className="text-gradient">secure</span>
              </h2>
              <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                Your security and privacy are our top priorities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-[var(--color-success)]" />
                  </div>
                  <CardTitle>SSL Encrypted</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-[var(--color-muted)]">
                    All data transmitted through our platform is encrypted with industry-standard SSL/TLS.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center">
                    <Lock className="h-8 w-8 text-[var(--color-success)]" />
                  </div>
                  <CardTitle>PCI-DSS Compliant</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-[var(--color-muted)]">
                    Payment processing meets the highest security standards for handling card data.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-[var(--color-success)]" />
                  </div>
                  <CardTitle>GDPR Compliant</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-[var(--color-muted)]">
                    Full compliance with European data protection regulations.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Payment Methods */}
            <div className="mt-16 text-center">
              <p className="text-sm text-[var(--color-muted)] mb-6">
                We accept all major payment methods:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                {paymentLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="h-10 flex items-center justify-center px-4 bg-white/5 rounded-lg"
                    style={{ width: logo.width }}
                  >
                    <span className="text-xs text-[var(--color-muted)]">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legal Compliance Notice */}
        <section className="py-12 bg-[var(--color-surface)]/30">
          <div className="container-custom max-w-4xl">
            <Card className="border-[var(--color-primary)]/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Legal & Compliance
                </h3>
                <p className="text-[var(--color-muted)] mb-4">
                  NovaIPTV operates in full compliance with international copyright laws. We maintain licensing agreements with content providers and only distribute content for which we have proper authorization. We do not condone or facilitate piracy in any form.
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  If you believe any content on our platform infringes your copyright, please contact our DMCA team immediately.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
