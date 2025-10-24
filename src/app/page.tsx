import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StreamingPlatforms } from "@/components/streaming-platforms";
import { DemoPlayer } from "@/components/demo-player";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Zap,
  Clock,
  Tv,
  Headphones,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Star,
  Check,
  ArrowRight,
  Film,
  Trophy,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const usps = [
    { icon: Zap, title: "Ultra-fast zapping", description: "Instant channel switching" },
    { icon: Clock, title: "99.9% uptime", description: "Reliable service guarantee" },
    { icon: Tv, title: "EPG & catch-up", description: "Never miss your shows" },
    { icon: Headphones, title: "24/7 support", description: "We're here to help" },
    { icon: Shield, title: "Secure streaming", description: "Privacy protected" },
    { icon: Globe, title: "Cancel anytime", description: "No long-term contracts" },
  ];

  const devices = [
    { name: "Android TV", icon: Monitor },
    { name: "Fire TV", icon: Tv },
    { name: "Samsung TV", icon: Monitor },
    { name: "LG TV", icon: Monitor },
    { name: "iOS", icon: Smartphone },
    { name: "Android", icon: Smartphone },
    { name: "Web Player", icon: Globe },
    { name: "Tablet", icon: Tablet },
  ];

  const features = [
    {
      icon: Tv,
      title: "10,000+ Live Channels",
      description: "Access thousands of channels from around the world, including sports, movies, news, and entertainment.",
    },
    {
      icon: Zap,
      title: "4K Ultra HD Quality",
      description: "Experience crystal-clear picture quality with support for 4K resolution on compatible devices.",
    },
    {
      icon: Clock,
      title: "EPG & Catch-Up TV",
      description: "Browse the electronic program guide and catch up on shows you missed with our catch-up feature.",
    },
    {
      icon: Shield,
      title: "Anti-Freeze Technology",
      description: "Advanced buffering prevention ensures smooth playback even on slower connections.",
    },
    {
      icon: Globe,
      title: "Multi-Device Support",
      description: "Stream on multiple devices simultaneously with a single subscription.",
    },
    {
      icon: Headphones,
      title: "Premium Support",
      description: "Get help whenever you need it with our 24/7 customer support team.",
    },
  ];

  const testimonials = [
    {
      name: "Michael R.",
      location: "New York, USA",
      rating: 5,
      text: "The best IPTV service I've used. Picture quality is amazing and it never buffers.",
    },
    {
      name: "Sarah L.",
      location: "London, UK",
      rating: 5,
      text: "Great selection of channels and the EPG makes it so easy to find what I want to watch.",
    },
    {
      name: "Ahmed K.",
      location: "Dubai, UAE",
      rating: 5,
      text: "Finally found a service that works perfectly on all my devices. Customer support is excellent.",
    },
    {
      name: "Carlos M.",
      location: "Madrid, Spain",
      rating: 5,
      text: "Cancelled my cable subscription after trying this. Way better value for money.",
    },
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Start your free 3-day trial without entering payment details. Experience all features with full access to our channel library. Cancel anytime during the trial period at no charge.",
    },
    {
      question: "What devices are supported?",
      answer: "We support Android TV, Fire TV, Samsung Smart TV, LG Smart TV, iOS, Android, Windows, Mac, and web browsers. You can stream on up to 5 devices simultaneously.",
    },
    {
      question: "Why does buffering happen and how do you prevent it?",
      answer: "Buffering is usually caused by slow internet or server congestion. We use advanced CDN technology and adaptive streaming to minimize buffering. We recommend at least 10 Mbps for HD and 25 Mbps for 4K.",
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied with the service, request a full refund within 7 days of purchase, no questions asked.",
    },
    {
      question: "How do I set up the service?",
      answer: "It's simple: 1) Sign up and get your credentials, 2) Download our app or configure your device using our setup guides, 3) Start watching. The entire process takes less than 5 minutes.",
    },
    {
      question: "Is this legal?",
      answer: "We only provide access to content for which we have proper distribution rights and licensing agreements. We do not host or promote pirated content.",
    },
    {
      question: "Can I share my account?",
      answer: "Each subscription is for personal use only. However, you can stream on multiple devices in your household simultaneously based on your plan.",
    },
    {
      question: "Do you offer international channels?",
      answer: "Yes! We offer channels from over 50 countries in multiple languages including English, Spanish, Arabic, French, German, and many more.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/10 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Hero Content */}
              <div className="text-center lg:text-left">
                <Badge className="mb-6" variant="secondary">
                  New: 4K Streaming Now Available
                </Badge>

                <h1 className="mb-6">
                  Stream live TV <span className="text-gradient">the easy way</span>
                </h1>

                <p className="text-xl md:text-2xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto lg:mx-0">
                  Thousands of channels, 4K-ready streams, on every device.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/trial">
                    <Button size="xl" className="w-full sm:w-auto group">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="xl" variant="outline" className="w-full sm:w-auto">
                      Try Live Demo
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-[var(--color-muted)]">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[var(--color-success)]" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[var(--color-success)]" />
                    <span>Cancel anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[var(--color-success)]" />
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>

              {/* Right: Device Mockup */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg)] p-8 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-radial opacity-50" />
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center">
                      <Tv className="h-24 w-24 mx-auto mb-4 text-[var(--color-primary)]" />
                      <p className="text-[var(--color-muted)]">Premium Streaming Experience</p>
                    </div>
                  </div>
                </div>
                {/* Floating stats */}
                <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-2xl">
                  <p className="text-2xl font-bold text-gradient">10K+</p>
                  <p className="text-sm text-[var(--color-muted)]">Channels</p>
                </div>
                <div className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl">
                  <p className="text-2xl font-bold text-gradient">99.9%</p>
                  <p className="text-sm text-[var(--color-muted)]">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Badge className="mb-6" variant="secondary">
                Try It Now
              </Badge>
              <h2 className="mb-4">
                Experience our <span className="text-gradient">streaming interface</span>
              </h2>
              <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                See how easy it is to switch between channels, browse content, and enjoy premium streaming.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <DemoPlayer />

              <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">Instant</div>
                  <p className="text-sm text-[var(--color-muted)]">Channel switching with zero lag</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">4K Quality</div>
                  <p className="text-sm text-[var(--color-muted)]">Ultra HD on compatible devices</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">EPG Guide</div>
                  <p className="text-sm text-[var(--color-muted)]">See what's playing and coming up</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USPs Section */}
        <section className="py-16 md:py-24 bg-[var(--color-surface)]/30">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <usp.icon className="h-6 w-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1">
                    {usp.title}
                  </h3>
                  <p className="text-xs text-[var(--color-muted)]">{usp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Device Compatibility */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Watch on <span className="text-gradient">any device</span>
              </h2>
              <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                Stream seamlessly across all your favorite devices with our universal compatibility.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {devices.map((device, index) => (
                <Card key={index} className="hover:scale-105 transition-transform cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <device.icon className="h-8 w-8 mx-auto mb-3 text-[var(--color-primary)]" />
                    <p className="text-sm font-medium text-[var(--color-text)]">{device.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Streaming Platforms */}
        <StreamingPlatforms />

        {/* Content Showcase */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                <span className="text-gradient">Premium content</span> at your fingertips
              </h2>
              <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                From blockbuster movies to live sports, enjoy unlimited entertainment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Movies Card */}
              <Card className="overflow-hidden group cursor-pointer hover:border-[var(--color-primary)]/50 transition-all">
                <div className="relative h-48 bg-gradient-to-br from-red-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial opacity-50" />
                  <Film className="h-20 w-20 text-white/80 relative z-10" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary">3,000+ Movies</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Movies & Series</CardTitle>
                  <p className="text-sm text-[var(--color-muted)]">
                    Latest blockbusters, classics, and exclusive series in stunning 4K quality.
                  </p>
                </CardHeader>
              </Card>

              {/* Sports Card */}
              <Card className="overflow-hidden group cursor-pointer hover:border-[var(--color-primary)]/50 transition-all">
                <div className="relative h-48 bg-gradient-to-br from-green-500/20 to-blue-600/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial opacity-50" />
                  <Trophy className="h-20 w-20 text-white/80 relative z-10" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary">Live Sports</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Live Sports</CardTitle>
                  <p className="text-sm text-[var(--color-muted)]">
                    Watch every game live. Football, basketball, UFC, and 50+ sports channels.
                  </p>
                </CardHeader>
              </Card>

              {/* Entertainment Card */}
              <Card className="overflow-hidden group cursor-pointer hover:border-[var(--color-primary)]/50 transition-all">
                <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial opacity-50" />
                  <PlayCircle className="h-20 w-20 text-white/80 relative z-10" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary">24/7 Streaming</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Entertainment</CardTitle>
                  <p className="text-sm text-[var(--color-muted)]">
                    News, documentaries, kids shows, and international content from around the world.
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-[var(--color-surface)]/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Everything you need for the <span className="text-gradient">perfect stream</span>
              </h2>
              <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                Premium features designed to deliver the ultimate streaming experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-[var(--color-primary)]" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--color-muted)]">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Loved by <span className="text-gradient">thousands</span>
              </h2>
              <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                See what our customers are saying about their experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[var(--color-warning)] text-[var(--color-warning)]" />
                      ))}
                    </div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <p className="text-xs text-[var(--color-muted)]">{testimonial.location}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[var(--color-muted)]">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
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
              Join thousands of satisfied customers. Start your free trial today.
            </p>
            <Link href="/trial">
              <Button size="xl" className="group">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Frequently asked <span className="text-gradient">questions</span>
              </h2>
              <p className="text-lg text-[var(--color-muted)]">
                Everything you need to know about our service.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-[var(--color-muted)] mb-4">Still have questions?</p>
              <Link href="/support">
                <Button variant="outline">Contact Support</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
