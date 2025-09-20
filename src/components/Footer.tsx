import { Tv } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Support", href: "#" },
      { name: "Setup Guides", href: "#" },
      { name: "FAQ", href: "#faq" },
    ],
    services: [
      { name: "Pricing Plans", href: "#pricing" },
      { name: "Channel List", href: "#" },
      { name: "Free Trial", href: "#" },
      { name: "Reseller Program", href: "#" },
    ],
  };

  const paymentMethods = [
    "💳", "💰", "🏦", "💎", "🔐", "⚡"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <Tv className="h-8 w-8 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">IPTV UK</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Leading IPTV service provider in the UK, delivering premium entertainment 
                with crystal-clear quality and unmatched reliability since 2020.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground mr-2">📧 Email:</span>
                  support@iptvuk.com
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground mr-2">📞 Phone:</span>
                  +44 20 7946 0958
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground mr-2">⏰ Support:</span>
                  24/7 Available
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Company Links */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Links */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Support</h3>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services Links */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © 2024 IPTV UK. All rights reserved. | Providing premium streaming services across the United Kingdom.
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Secure Payments:</span>
              <div className="flex space-x-2">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-background border border-border rounded flex items-center justify-center text-sm hover:border-primary transition-colors duration-200"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;