"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { salon } from "@/lib/content";

const links = [
  { href: "#servizi", label: "Servizi" },
  { href: "#galleria", label: "Lavori" },
  { href: "#contatti", label: "Contatti" },
];

export const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-10">
      <div className="flex items-center gap-3">
        <Image src="/images/logo.jpg" alt={salon.nome} width={40} height={40} className="rounded-full" />
        <span className="font-serif text-lg font-semibold text-cream">{salon.nome}</span>
      </div>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-8 sm:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-sans text-sm font-medium text-cream/80 transition hover:text-gold"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href={salon.telefonoHref}
        className="hidden rounded-full border border-cream/30 px-5 py-2 font-sans text-sm font-medium text-cream transition hover:border-gold hover:text-gold sm:inline-block"
      >
        {salon.telefono}
      </a>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label={open ? "Chiudi menu" : "Apri menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-gold hover:text-gold sm:hidden"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-6 top-20 flex flex-col gap-1 rounded-2xl border border-gold/20 bg-charcoal-soft p-4 shadow-[0_20px_45px_-15px_rgba(8,5,3,0.7)] sm:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 font-sans text-base font-medium text-cream/90 transition hover:bg-cream/5 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={salon.telefonoHref}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-4 py-3 text-center font-sans text-base font-semibold text-charcoal transition hover:bg-gold-light"
            >
              Chiama {salon.telefono}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
