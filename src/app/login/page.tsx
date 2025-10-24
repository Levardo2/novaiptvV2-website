"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, User } from "lucide-react";
import type { Metadata } from "next";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-mesh p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center space-x-2 mb-8 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className="text-2xl font-bold text-gradient">NovaIPTV</span>
        </Link>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </CardTitle>
            <p className="text-sm text-[var(--color-muted)] mt-2">
              {isSignUp
                ? "Start your free trial today"
                : "Sign in to your account"}
            </p>
          </CardHeader>

          <CardContent>
            <form className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--color-text)]">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-muted)]" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-12 pl-10 pr-4 rounded-lg bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--color-text)]">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-muted)]" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-12 pl-10 pr-4 rounded-lg bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--color-text)]">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-muted)]" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full h-12 pl-10 pr-4 rounded-lg bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-[var(--color-muted)] cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    Remember me
                  </label>
                  <Link href="/forgot-password" className="text-sm text-[var(--color-primary)] hover:underline">
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button type="submit" className="w-full" size="lg">
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[var(--color-muted)]">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}
                {" "}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-[var(--color-primary)] hover:underline font-medium"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>

            {isSignUp && (
              <p className="mt-4 text-xs text-[var(--color-muted)] text-center">
                By signing up, you agree to our{" "}
                <Link href="/legal/terms" className="text-[var(--color-primary)] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/legal/privacy" className="text-[var(--color-primary)] hover:underline">
                  Privacy Policy
                </Link>
              </p>
            )}
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-text)]">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
