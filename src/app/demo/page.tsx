import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DemoPlayer } from "@/components/demo-player";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Eye, Tv } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Demo - NovaIPTV | Try Our Streaming Interface",
  description: "Experience our IPTV player interface. See how easy it is to browse channels, switch content, and enjoy premium streaming.",
};

export default function DemoPage() {
  const features = [
    { icon: Zap, text: "Instant channel switching" },
    { icon: Eye, text: "Intuitive user interface" },
    { icon: Tv, text: "EPG guide integration" },
    { icon: Check, text: "Full playback controls" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-mesh">
          <div className="container-custom text-center">
            <Badge className="mb-6" variant="secondary">
              Interactive Demo
            </Badge>

            <h1 className="mb-6">
              Try our <span className="text-gradient">streaming interface</span>
            </h1>

            <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              Experience the NovaIPTV player before you subscribe. Switch channels, browse content, and see why our interface is rated #1.
            </p>
          </div>
        </section>

        {/* Demo Player */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <DemoPlayer />

              {/* Features Below Player */}
              <div className="mt-12 grid md:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-[var(--color-primary)]" />
                      </div>
                      <p className="text-sm text-[var(--color-muted)]">{feature.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="py-16 md:py-24 bg-[var(--color-surface)]/30">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                How to use the <span className="text-gradient">demo</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">Press Play</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--color-muted)]">
                    Click the play button to start the demo. The interface will simulate live streaming.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">Switch Channels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--color-muted)]">
                    Use the arrow buttons or open the channel list to browse available content.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">Explore Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--color-muted)]">
                    Try all the playback controls, add favorites, and check the settings menu.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom text-center">
            <h2 className="mb-6">
              Ready for the <span className="text-gradient">real thing?</span>
            </h2>
            <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              This is just a preview. Get access to 15,000+ channels in stunning 4K quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trial">
                <Button size="xl">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="xl" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm text-[var(--color-muted)]">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--color-success)]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--color-success)]" />
                <span>7-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--color-success)]" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
