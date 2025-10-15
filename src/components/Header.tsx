import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { BetaWaitlist } from './BetaWaitlist';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features', isButton: true },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Security', href: '#security' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
];

export function Header({ 
  onNavigateToFeatures, 
  onNavigateToHome,
  currentPage 
}: { 
  onNavigateToFeatures?: () => void;
  onNavigateToHome?: (targetSection?: string) => void;
  currentPage?: 'home' | 'features';
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isButton?: boolean) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If clicking Features button, navigate to features page
    if (isButton && href === '#features' && onNavigateToFeatures) {
      onNavigateToFeatures();
      return;
    }

    // If we're on features page and clicking a home section link
    if (currentPage === 'features' && href !== '#features' && onNavigateToHome) {
      // Navigate to home page first, then scroll to section
      onNavigateToHome(href);
      return;
    }

    // Otherwise, just scroll to the section (we're already on home page)
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0F1C]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Shabari
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isButton)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors duration-300 relative group text-sm"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden lg:block"
            >
              <BetaWaitlist 
                className="bg-[#D4AF37] hover:bg-[#C19B2F] text-white rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
              />
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-[#0A0F1C] border-l border-white/10 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-white text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Shabari
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2 mb-8">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.isButton)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="text-[#C0C0C0] hover:text-[#D4AF37] hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <BetaWaitlist 
                    className="w-full bg-[#D4AF37] hover:bg-[#C19B2F] text-white rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
                    fullWidth
                  />
                </motion.div>

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-[#C0C0C0] text-sm mb-4">
                    Get protected with AI-powered security
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-xs text-[#C0C0C0]">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                      <span>100% Privacy</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#C0C0C0]">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                      <span>Made in India</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
