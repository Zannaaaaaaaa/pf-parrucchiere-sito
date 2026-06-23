"use client";

import Image from "next/image";
import { salon } from "@/lib/content";

const links = [
  { href: "#servizi", label: "Servizi" },
  { href: "#galleria", label: "Lavori" },
  { href: "#contatti", label: "Contatti" },
];

export const Nav: React.FC = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 sm:px-10">
      <div className="flex items-center gap-3">
        <Image src="/images/logo.jpg" alt={salon.nome} width={40} height={40} className="rounded-full" />
        <span className="font-serif text-lg font-semibold text-cream">{salon.nome}</span>
      </div>
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
        className="rounded-full border border-cream/30 px-5 py-2 font-sans text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
      >
        {salon.telefono}
      </a>
    </header>
  );
};
