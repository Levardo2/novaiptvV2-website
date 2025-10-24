import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaIPTV - Stream Live TV the Easy Way",
  description: "Thousands of channels, 4K-ready streams, on every device. 99.9% uptime, EPG & catch-up, 24/7 support.",
  keywords: "IPTV, live TV, streaming, 4K, channels, sports, movies, entertainment",
  authors: [{ name: "NovaIPTV" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novaiptv.com",
    siteName: "NovaIPTV",
    title: "NovaIPTV - Stream Live TV the Easy Way",
    description: "Thousands of channels, 4K-ready streams, on every device.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NovaIPTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaIPTV - Stream Live TV the Easy Way",
    description: "Thousands of channels, 4K-ready streams, on every device.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NovaIPTV",
  url: "https://novaiptv.com",
  logo: "https://novaiptv.com/logo.png",
  description: "Premium IPTV streaming service with thousands of channels",
  sameAs: [
    "https://twitter.com/novaiptv",
    "https://facebook.com/novaiptv",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    availableLanguage: ["en", "es", "ar"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
