import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Pricing", href: "/pricing" },
      { label: "Channels", href: "/channels" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Apps & Devices", href: "/apps" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    support: [
      { label: "Help Center", href: "/support" },
      { label: "Setup Guides", href: "/support/guides" },
      { label: "FAQ", href: "/support/faq" },
      { label: "Report Issue", href: "/support/report" },
    ],
    legal: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Refund Policy", href: "/legal/refund" },
      { label: "DMCA", href: "/legal/dmca" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/novaiptv", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/novaiptv", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/novaiptv", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/novaiptv", label: "YouTube" },
  ];

  return (
    <footer className="bg-[var(--color-surface)] border-t border-white/5 mt-auto">
      <div className="container-custom py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4 uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4 uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo & Copyright */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                © {currentYear} NovaIPTV. All rights reserved.
              </p>
            </div>

            {/* Language Selector (placeholder) */}
            <div className="flex items-center space-x-4">
              <select
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                aria-label="Select language"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ar">العربية</option>
              </select>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-[var(--color-muted)]" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-[var(--color-muted)] text-center">
              We only provide access to content for which we have distribution rights.
              Do not use our service to stream copyrighted content you do not own the rights to.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
