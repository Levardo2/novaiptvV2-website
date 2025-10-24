"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Phone, FileText, Search, Send } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      action: "Start Chat",
      variant: "default" as const,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "We'll respond within 2 hours",
      availability: "Response in 2hrs",
      action: "Send Email",
      variant: "outline" as const,
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Premium & Ultimate plans only",
      availability: "Mon-Fri 9AM-6PM",
      action: "Call Now",
      variant: "outline" as const,
    },
  ];

  const popularTopics = [
    { title: "How to set up on Android TV", views: "12.5K", category: "Setup" },
    { title: "Troubleshooting buffering issues", views: "8.2K", category: "Technical" },
    { title: "How to change subscription plan", views: "6.8K", category: "Account" },
    { title: "Setting up parental controls", views: "5.4K", category: "Features" },
    { title: "Supported payment methods", views: "4.9K", category: "Billing" },
    { title: "How to cancel subscription", views: "3.7K", category: "Account" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-mesh">
          <div className="container-custom text-center">
            <Badge className="mb-6" variant="secondary">
              24/7 Support Available
            </Badge>

            <h1 className="mb-6">
              How can we <span className="text-gradient">help you?</span>
            </h1>

            <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              Search our knowledge base or contact our support team.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-muted)]" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-12 bg-[var(--color-surface)]/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6">
              {supportOptions.map((option, index) => (
                <Card key={index} className="hover:border-[var(--color-primary)]/50 transition-all">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <option.icon className="h-8 w-8 text-[var(--color-primary)]" />
                    </div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <p className="text-sm text-[var(--color-muted)]">
                      {option.description}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="mb-4">
                      {option.availability}
                    </Badge>
                    <Button variant={option.variant} className="w-full">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Popular <span className="text-gradient">help topics</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {popularTopics.map((topic, index) => (
                <Link key={index} href={`/support/article/${index}`}>
                  <Card className="hover:border-[var(--color-primary)]/50 transition-all cursor-pointer group">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <FileText className="h-6 w-6 text-[var(--color-primary)]" />
                        <div>
                          <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                            {topic.title}
                          </h3>
                          <p className="text-sm text-[var(--color-muted)]">
                            {topic.views} views • {topic.category}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">{topic.category}</Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/support/all">
                <Button variant="outline">View All Articles</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-[var(--color-surface)]/30">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Still need <span className="text-gradient">help?</span>
              </h2>
              <p className="text-lg text-[var(--color-muted)]">
                Send us a message and we'll get back to you within 2 hours.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[var(--color-text)]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full h-12 px-4 rounded-lg bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[var(--color-text)]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full h-12 px-4 rounded-lg bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-[var(--color-text)]">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="w-full h-12 px-4 rounded-lg bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-[var(--color-text)]">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your issue or question..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
