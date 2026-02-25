"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/components/index";


export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Island Navbar */}
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="pointer-events-auto w-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
          style={{
            maxWidth: isScrolled ? "56rem" : "100%",
            marginTop: isScrolled ? "0.75rem" : "0",
            borderRadius: isScrolled ? "9999px" : "0",
            background: isScrolled
              ? "rgba(26, 58, 42, 0.85)"
              : "transparent",
            backdropFilter: isScrolled ? "blur(16px) saturate(1.8)" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(16px) saturate(1.8)" : "none",
            boxShadow: isScrolled
              ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(61, 107, 85, 0.5), inset 0 1px 0 rgba(245, 239, 224, 0.08)"
              : "none",
            padding: isScrolled ? "0 0.5rem" : "0",
          }}
        >
          <div className={`mx-auto transition-all duration-500 ${isScrolled ? "px-6" : "px-6 lg:px-8 max-w-7xl"}`}>
            <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-14" : "h-20"}`}>
              {/* Logo */}
              <a href="#" className="flex items-center gap-2 group">
                <span className={`font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight transition-all duration-500 ${isScrolled ? "text-lg text-foreground" : "text-2xl text-zinc-900"}`}>
                  {siteConfig.company.name}
                </span>
                <span className={`font-[family-name:var(--font-space-grotesk)] font-light tracking-tight transition-all duration-500 ${isScrolled ? "text-lg text-muted hidden lg:inline" : "text-2xl text-zinc-400"}`}>
                  {siteConfig.company.tagline}
                </span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                {siteConfig.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative font-[family-name:var(--font-inter)] font-medium transition-all duration-300 group ${isScrolled ? "text-xs text-accent-muted hover:text-foreground" : "text-sm text-zinc-500 hover:text-zinc-900"}`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-foreground" : "bg-zinc-900"}`} />
                  </a>
                ))}
                <a
                  href="#contact"
                  className={`font-[family-name:var(--font-inter)] font-semibold tracking-wide transition-all duration-500 ${isScrolled ? "ml-2 px-5 py-1.5 text-xs rounded-full bg-foreground text-background hover:bg-accent-muted" : "ml-4 px-6 py-2.5 text-sm rounded-full bg-zinc-900 text-white hover:bg-zinc-800"}`}
                >
                  Get Quote
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 6 : 0,
                    }}
                    className={`w-6 h-0.5 block origin-center transition-colors duration-500 ${isScrolled ? "bg-foreground" : "bg-zinc-900"}`}
                  />
                  <motion.span
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    className={`w-6 h-0.5 block transition-colors duration-500 ${isScrolled ? "bg-foreground" : "bg-zinc-900"}`}
                  />
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -6 : 0,
                    }}
                    className={`w-6 h-0.5 block origin-center transition-colors duration-500 ${isScrolled ? "bg-foreground" : "bg-zinc-900"}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {siteConfig.navigation.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium text-foreground hover:text-accent-muted transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="mt-4 px-8 py-3 bg-foreground text-background font-[family-name:var(--font-inter)] text-lg font-semibold rounded-full"
              >
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
