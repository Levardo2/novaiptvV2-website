import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Tv, Smartphone, Monitor, Globe, Tablet, Apple, } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps & Devices - NovaIPTV",
  description: "Download NovaIPTV apps for all your devices. Android TV, Fire TV, iOS, Android, and more.",
};

export default function AppsPage() {
  const platforms = [
    {
      icon: Tv,
      name: "Android TV",
      description: "Native app for Android TV devices",
      version: "v2.4.1",
      size: "28 MB",
      features: ["4K Support", "Voice Control", "Chromecast"],
      downloadLink: "#",
    },
    {
      icon: Tv,
      name: "Amazon Fire TV",
      description: "Optimized for Fire TV Stick & Cube",
      version: "v2.4.0",
      size: "26 MB",
      features: ["Alexa Integration", "4K HDR", "Quick Access"],
      downloadLink: "#",
    },
    {
      icon: Monitor,
      name: "Samsung Tizen",
      description: "For Samsung Smart TVs (2016+)",
      version: "v1.8.2",
      size: "22 MB",
      features: ["Tizen OS 4.0+", "Smart Hub", "One Remote"],
      downloadLink: "#",
    },
    {
      icon: Monitor,
      name: "LG webOS",
      description: "For LG Smart TVs (2017+)",
      version: "v1.7.9",
      size: "20 MB",
      features: ["webOS 3.5+", "Magic Remote", "ThinQ AI"],
      downloadLink: "#",
    },
    {
      icon: Apple,
      name: "iOS & iPadOS",
      description: "iPhone, iPad, and Apple TV",
      version: "v3.1.5",
      size: "45 MB",
      features: ["AirPlay", "Picture in Picture", "iOS 14+"],
      downloadLink: "#",
    },
    {
      icon: Smartphone,
      name: "Android Mobile",
      description: "For Android phones and tablets",
      version: "v3.2.1",
      size: "32 MB",
      features: ["Chromecast", "Offline Mode", "Android 8+"],
      downloadLink: "#",
    },
    {
      icon: Monitor,
      name: "Windows",
      description: "For Windows 10 & 11",
      version: "v2.9.4",
      size: "65 MB",
      features: ["4K Support", "Keyboard Shortcuts", "Multi-Monitor"],
      downloadLink: "#",
    },
    {
      icon: Apple,
      name: "macOS",
      description: "For Mac computers",
      version: "v2.8.7",
      size: "58 MB",
      features: ["M1/M2 Optimized", "Touch Bar", "macOS 11+"],
      downloadLink: "#",
    },
    {
      icon: Globe,
      name: "Web Player",
      description: "Watch in any modern browser",
      version: "Latest",
      size: "N/A",
      features: ["No Download", "Cross-Platform", "Instant Access"],
      downloadLink: "#",
    },
  ];

  const systemRequirements = [
    {
      platform: "Android Devices",
      requirements: [
        "Android 8.0 or later",
        "2GB RAM minimum",
        "10 Mbps internet for HD",
        "25 Mbps for 4K",
      ],
    },
    {
      platform: "iOS Devices",
      requirements: [
        "iOS 14.0 or later",
        "iPhone 6s or newer",
        "iPad (5th gen) or newer",
        "Stable internet connection",
      ],
    },
    {
      platform: "Smart TVs",
      requirements: [
        "2016 model or newer",
        "Updated to latest firmware",
        "Ethernet or 5GHz WiFi",
        "4GB RAM recommended",
      ],
    },
    {
      platform: "Desktop",
      requirements: [
        "Windows 10/11 or macOS 11+",
        "4GB RAM minimum",
        "Intel i3 or equivalent",
        "Graphics card for 4K",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-mesh">
          <div className="container-custom text-center">
            <Badge className="mb-6" variant="secondary">
              Available on 9+ Platforms
            </Badge>

            <h1 className="mb-6">
              Stream on <span className="text-gradient">any device</span>
            </h1>

            <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              Download our apps or use the web player. One subscription works everywhere.
            </p>
          </div>
        </section>

        {/* Apps Grid */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="hover:border-[var(--color-primary)]/50 transition-all group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <platform.icon className="h-8 w-8 text-[var(--color-primary)]" />
                      </div>
                      <Badge variant="outline">{platform.version}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{platform.name}</CardTitle>
                    <p className="text-sm text-[var(--color-muted)] mb-4">
                      {platform.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {platform.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-[var(--color-muted)]">
                        <span>Size: {platform.size}</span>
                      </div>

                      <Link href={platform.downloadLink}>
                        <Button className="w-full group">
                          <Download className="mr-2 h-4 w-4" />
                          Download App
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-16 md:py-24 bg-[var(--color-surface)]/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                System <span className="text-gradient">requirements</span>
              </h2>
              <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                Make sure your device meets these minimum specifications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemRequirements.map((req, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{req.platform}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {req.requirements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[var(--color-muted)]">
                          <span className="text-[var(--color-primary)] shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Premium features on <span className="text-gradient">every platform</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                    <Tv className="h-6 w-6 text-[var(--color-primary)]" />
                  </div>
                  <CardTitle>4K Streaming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--color-muted)]">
                    Experience crystal-clear 4K Ultra HD on supported devices with HDR support.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                    <Download className="h-6 w-6 text-[var(--color-primary)]" />
                  </div>
                  <CardTitle>Offline Downloads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--color-muted)]">
                    Download content for offline viewing on mobile devices (Premium & Ultimate plans).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                    <Tablet className="h-6 w-6 text-[var(--color-primary)]" />
                  </div>
                  <CardTitle>Multi-Device Sync</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--color-muted)]">
                    Your watchlist and preferences sync automatically across all your devices.
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
              Ready to start <span className="text-gradient">streaming?</span>
            </h2>
            <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              Download our app and start your free trial today.
            </p>
            <Link href="/trial">
              <Button size="xl">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
