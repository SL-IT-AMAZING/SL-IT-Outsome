import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/#programs' },
  { label: 'Success', href: '/#success' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">
          {/* Logo: SL:IT × Outsome */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-base font-semibold tracking-tight text-[#0A0A0A]" style={{ fontVariationSettings: '"wght" 600' }}>SL:IT</span>
            <span className="text-sm font-light text-[#0A0A0A]/25">×</span>
            <span className="text-base font-semibold tracking-tight text-[#0A0A0A]" style={{ fontVariationSettings: '"wght" 600' }}>Outsome</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors"
                style={{ fontVariationSettings: '"wght" 500' }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2">
              <a
                href="/request-demo.html"
                className="text-sm px-5 py-2.5 rounded-lg border border-[rgba(47,44,37,0.12)] text-[#0A0A0A]/70 hover:bg-[#F1EADD] hover:border-[rgba(47,44,37,0.2)] transition-all"
                style={{ fontVariationSettings: '"wght" 500' }}
              >
                Book a call
              </a>
              <a
                href="/apply.html"
                className="text-sm px-5 py-2.5 rounded-lg bg-[#0A0A0A] text-[#FEFAF3] hover:bg-[#0A0A0A]/85 transition-all"
                style={{ fontVariationSettings: '"wght" 500' }}
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#0A0A0A]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#FEFAF3] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-8">
              <a href="/" className="flex items-center gap-2">
                <span className="text-base font-semibold tracking-tight text-[#0A0A0A]" style={{ fontVariationSettings: '"wght" 600' }}>SL:IT</span>
                <span className="text-sm font-light text-[#0A0A0A]/25">×</span>
                <span className="text-base font-semibold tracking-tight text-[#0A0A0A]" style={{ fontVariationSettings: '"wght" 600' }}>Outsome</span>
              </a>
              <button
                className="p-2 text-[#0A0A0A]"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-2xl font-serif text-[#0A0A0A]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 mt-4 w-64">
                <motion.a
                  href="/request-demo.html"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                  className="text-center text-sm px-6 py-3 rounded-lg border border-[rgba(47,44,37,0.12)] text-[#0A0A0A]/70"
                  onClick={() => setMenuOpen(false)}
                >
                  Book a call
                </motion.a>
                <motion.a
                  href="/apply.html"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + navLinks.length * 0.05 }}
                  className="text-center text-sm px-6 py-3 rounded-lg bg-[#0A0A0A] text-[#FEFAF3]"
                  onClick={() => setMenuOpen(false)}
                >
                  Apply Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
