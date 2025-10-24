import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Download, Play, Tv, Smartphone, Monitor, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - NovaIPTV",
  description: "Get started with NovaIPTV in 3 simple steps. Setup guides for all devices.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up & Get Credentials",
      description: "Create your account and receive your unique playlist URL and login credentials instantly via email.",
      details: [
        "Choose your plan",
        "Complete registration",
        "Receive credentials via email",
        "No credit card required for trial",
      ],
    },
    {
      icon: Download,
      title: "Get Playlist or App",
      description: "Download our app for your device or configure your preferred IPTV player with our playlist URL.",
      details: [
        "Download app from store",
        "Or use your favorite player",
        "Enter your credentials",
        "Automatic configuration",
      ],
    },
    {
      icon: Play,
      title: "Start Watching",
      description: "Browse channels, enjoy 4K streaming, and experience seamless TV on all your devices.",
      details: [
        "Browse 15,000+ channels",
        "Use EPG to find content",
        "Watch in HD or 4K",
        "Stream on multiple devices",
      ],
    },
  ];

  const deviceSetup = [
    {
      icon: Tv,
      name: "Android TV & Fire TV",
      steps: [
        "Open app store on your TV",
        "Search for 'NovaIPTV'",
        "Install and open the app",
        "Enter your credentials",
      ],
      time: "2 minutes",
    },
    {
      icon: Monitor,
      name: "Smart TV (Samsung/LG)",
      steps: [
        "Download our app from TV store",
        "Or use built-in IPTV player",
        "Enter playlist URL",
        "Start streaming",
      ],
      time: "3 minutes",
    },
    {
      icon: Smartphone,
      name: "iOS & Android",
      steps: [
        "Download app from App Store/Play Store",
        "Sign in with your credentials",
        "Browse channels",
        "Enjoy on mobile",
      ],
      time: "2 minutes",
    },
    {
      icon: Monitor,
      name: "Windows & Mac",
      steps: [
        "Download VLC or IPTV player",
        "Open network stream",
        "Paste your playlist URL",
        "Save and watch",
      ],
      time: "3 minutes",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-mesh">
          <div className="container-custom text-center">
            <h1 className="mb-6">
              Get started in <span className="text-gradient">3 simple steps</span>
            </h1>

            <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              Setup takes less than 5 minutes. No technical knowledge required.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] opacity-20" />

              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center relative z-10">
                        <step.icon className="h-8 w-8 text-[var(--color-primary)]" />
                      </div>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-sm font-bold z-20">
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl mb-4">{step.title}</CardTitle>
                      <p className="text-[var(--color-muted)] mb-6">{step.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                            <ArrowRight className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/trial">
                <Button size="xl" className="group">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Device Setup Section */}
        <section className="py-16 md:py-24 bg-[var(--color-surface)]/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Setup guides for <span className="text-gradient">every device</span>
              </h2>
              <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                Detailed step-by-step instructions for each platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deviceSetup.map((device, index) => (
                <Card key={index} className="hover:border-[var(--color-primary)]/50 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                      <device.icon className="h-6 w-6 text-[var(--color-primary)]" />
                    </div>
                    <CardTitle className="text-lg">{device.name}</CardTitle>
                    <p className="text-sm text-[var(--color-muted)]">
                      Setup time: {device.time}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      {device.steps.map((stepText, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-[var(--color-muted)]">
                          <span className="text-[var(--color-primary)] font-semibold shrink-0">
                            {idx + 1}.
                          </span>
                          {stepText}
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Common setup <span className="text-gradient">questions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if I get stuck?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--color-muted)]">
                    Our support team is available 24/7 to help you with setup. Contact us via live chat, email, or phone.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I use multiple devices?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--color-muted)]">
                    Yes! Your subscription works on multiple devices. The number depends on your plan (2-unlimited devices).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do I need special equipment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--color-muted)]">
                    No special equipment needed. Works with your existing TV, phone, tablet, or computer.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What internet speed do I need?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--color-muted)]">
                    Minimum 10 Mbps for HD streaming, 25 Mbps recommended for 4K quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/10 border-y border-white/10">
          <div className="container-custom text-center">
            <h2 className="mb-6">
              Ready to get <span className="text-gradient">started?</span>
            </h2>
            <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers streaming today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trial">
                <Button size="xl">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/support">
                <Button size="xl" variant="outline">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
