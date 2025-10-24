"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Channels - NovaIPTV",
  description: "Browse thousands of live TV channels from around the world.",
};

export default function ChannelsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Channels", count: 15000 },
    { id: "sports", name: "Sports", count: 2500 },
    { id: "movies", name: "Movies", count: 3000 },
    { id: "news", name: "News", count: 1200 },
    { id: "entertainment", name: "Entertainment", count: 2800 },
    { id: "kids", name: "Kids", count: 800 },
    { id: "international", name: "International", count: 4700 },
  ];

  const channels = [
    { name: "ESPN HD", category: "sports", quality: "4K", language: "EN" },
    { name: "Fox Sports 1", category: "sports", quality: "HD", language: "EN" },
    { name: "beIN Sports", category: "sports", quality: "4K", language: "EN/AR" },
    { name: "Sky Sports Premier League", category: "sports", quality: "4K", language: "EN" },
    { name: "HBO HD", category: "movies", quality: "4K", language: "EN" },
    { name: "Cinemax", category: "movies", quality: "HD", language: "EN" },
    { name: "Netflix Originals", category: "movies", quality: "4K", language: "Multi" },
    { name: "CNN International", category: "news", quality: "HD", language: "EN" },
    { name: "BBC World News", category: "news", quality: "HD", language: "EN" },
    { name: "Al Jazeera English", category: "news", quality: "HD", language: "EN" },
    { name: "NBC", category: "entertainment", quality: "4K", language: "EN" },
    { name: "ABC Entertainment", category: "entertainment", quality: "HD", language: "EN" },
    { name: "Discovery Channel", category: "entertainment", quality: "4K", language: "EN" },
    { name: "Cartoon Network", category: "kids", quality: "HD", language: "EN" },
    { name: "Disney Channel", category: "kids", quality: "4K", language: "EN" },
    { name: "Nickelodeon", category: "kids", quality: "HD", language: "EN" },
    { name: "RAI Uno", category: "international", quality: "HD", language: "IT" },
    { name: "France 24", category: "international", quality: "HD", language: "FR" },
    { name: "Deutsche Welle", category: "international", quality: "HD", language: "DE" },
    { name: "MBC Action", category: "international", quality: "4K", language: "AR" },
  ];

  const filteredChannels = channels.filter((channel) => {
    const matchesCategory = selectedCategory === "all" || channel.category === selectedCategory;
    const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-mesh">
          <div className="container-custom text-center">
            <h1 className="mb-6">
              <span className="text-gradient">15,000+</span> live channels
            </h1>

            <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              Stream your favorite channels in HD and 4K quality. Browse by category or search for specific channels.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-muted)]" />
              <input
                type="text"
                placeholder="Search channels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-[var(--color-surface)]/30 border-y border-white/10 sticky top-20 z-40 backdrop-blur-lg">
          <div className="container-custom">
            <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2.5 rounded-lg whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-white/5"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Channels Grid */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="mb-8 flex justify-between items-center">
              <p className="text-[var(--color-muted)]">
                Showing {filteredChannels.length} channels
              </p>
              <Badge variant="secondary">EPG Available</Badge>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredChannels.map((channel, index) => (
                <Card key={index} className="hover:border-[var(--color-primary)]/50 transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-[var(--color-primary)]">
                          {channel.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant={channel.quality === "4K" ? "default" : "secondary"} className="text-xs">
                          {channel.quality}
                        </Badge>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {channel.name}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                      <Badge variant="outline" className="text-xs">
                        {channel.language}
                      </Badge>
                      <span className="capitalize">{channel.category}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredChannels.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[var(--color-muted)] text-lg">
                  No channels found matching your search.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* EPG Notice */}
        <section className="py-12 bg-[var(--color-surface)]/30">
          <div className="container-custom max-w-4xl">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Full <span className="text-gradient">EPG</span> Available
                </h3>
                <p className="text-[var(--color-muted)] mb-6">
                  Browse the electronic program guide for all channels. See what's playing now and schedule recordings for later.
                </p>
                <Badge variant="success">14-Day EPG History</Badge>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
