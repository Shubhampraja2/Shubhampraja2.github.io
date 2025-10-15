import { motion } from 'motion/react';
import { Shield, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Security', href: '#security' },
    { name: 'Pricing', href: '#pricing' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact', isPage: true },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy', isPage: true },
    { name: 'Terms of Service', href: '#terms', isPage: true },
    { name: 'Security', href: '#security' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Mail, href: 'mailto:mrdrsp4@gmail.com', label: 'Email' },
];

export function Footer({ 
  onNavigateToPage 
}: { 
  onNavigateToPage?: (page: 'privacy' | 'terms' | 'contact') => void;
}) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage?: boolean) => {
    e.preventDefault();
    
    if (isPage && onNavigateToPage) {
      // Extract page name from href
      const page = href.replace('#', '') as 'privacy' | 'terms' | 'contact';
      onNavigateToPage(page);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#0A0F1C] border-t border-white/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C19B2F] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Shabari
                </span>
              </div>

              {/* Tagline */}
              <p className="text-[#C0C0C0] mb-6 max-w-sm">
                India's first AI-powered mobile security suite. Built with privacy-first principles to protect you from digital fraud.
              </p>

              {/* Contact info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <a href="mailto:mrdrsp4@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                    mrdrsp4@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Made in India 🇮🇳</span>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Shield className="w-4 h-4" />
                  Privacy-First
                </div>
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <div className="w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse" />
                  AI-Secured
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-white mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href, link.isPage)}
                      className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors duration-300 text-sm inline-block hover:translate-x-1 transition-transform"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#C0C0C0] text-sm text-center md:text-left"
          >
            © 2025 Shabari. All rights reserved. Built with ❤️ in India.
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C0C0C0] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 hover:bg-white/10 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Extra info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-[#C0C0C0] text-sm">
            Built in India • Privacy-First • AI-Secured • Trusted by 10,000+ Users
          </p>
        </motion.div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007BFF] via-[#D4AF37] to-[#00C9A7] opacity-50" />
    </footer>
  );
}
