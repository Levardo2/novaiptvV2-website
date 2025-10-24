import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-mesh">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Page not found
            </h2>
            <p className="text-xl text-[var(--color-muted)] mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </Link>
            <Link href="/channels">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Search className="mr-2 h-5 w-5" />
                Browse Channels
              </Button>
            </Link>
          </div>

          {/* Popular Links */}
          <div className="mt-16">
            <p className="text-sm text-[var(--color-muted)] mb-4">
              Popular pages:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/pricing" className="text-sm text-[var(--color-primary)] hover:underline">
                Pricing
              </Link>
              <span className="text-[var(--color-muted)]">•</span>
              <Link href="/how-it-works" className="text-sm text-[var(--color-primary)] hover:underline">
                How It Works
              </Link>
              <span className="text-[var(--color-muted)]">•</span>
              <Link href="/apps" className="text-sm text-[var(--color-primary)] hover:underline">
                Apps & Devices
              </Link>
              <span className="text-[var(--color-muted)]">•</span>
              <Link href="/support" className="text-sm text-[var(--color-primary)] hover:underline">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
