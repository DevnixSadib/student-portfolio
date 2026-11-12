"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import useActiveSection from "@/hooks/useActiveSection";
import { navLinks, profile, socials } from "@/lib/content";
import { EASE } from "@/lib/motion";

export default function Navbar() {
  const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
          scrolled && !open
            ? "border-b border-line bg-base/75 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-20 md:px-10"
        >
          <a
            href="#home"
            className="text-sm font-extrabold uppercase tracking-[0.22em] text-primary transition-colors duration-300 hover:text-accent-light"
          >
            {profile.name}
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative pb-1 text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-secondary hover:text-primary"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        transition={{ duration: 0.45, ease: EASE }}
                        className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-accent"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 p-2 text-primary transition-colors duration-300 hover:text-accent-light md:hidden"
          >
            {open ? (
              <X size={22} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={1.75} aria-hidden="true" />
            )}
          </motion.button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-base/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8 pb-8">
              <ul>
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.5,
                      ease: EASE,
                    }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-baseline gap-5 py-3 text-4xl font-extrabold tracking-tight transition-colors duration-300 ${
                        active === link.id ? "text-accent-light" : "text-primary"
                      }`}
                    >
                      <span className="text-xs font-bold text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3"
              >
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="text-sm font-medium text-secondary transition-colors duration-300 hover:text-accent-light"
                  >
                    {social.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
