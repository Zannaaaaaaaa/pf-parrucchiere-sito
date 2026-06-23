"use client";

import { motion } from "framer-motion";
import { salon } from "@/lib/content";
import { ClockIcon, PhoneIcon, PinIcon } from "./Icons";
import { CtaButton } from "./CtaButton";

export const Contatti: React.FC = () => {
  return (
    <section id="contatti" className="bg-charcoal-soft px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center"
      >
        <h2 className="font-serif text-4xl font-bold text-cream sm:text-5xl">Prenota il tuo Appuntamento</h2>

        <CtaButton href={salon.telefonoHref} className="px-10 py-4 text-lg">
          Chiama {salon.telefono}
        </CtaButton>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <PinIcon size={26} className="text-gold" />
            <p className="font-sans text-sm text-cream/75">{salon.indirizzo}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PhoneIcon size={26} className="text-gold" />
            <a href={salon.telefonoHref} className="font-sans text-sm text-cream/75 hover:text-gold">
              {salon.telefono}
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ClockIcon size={26} className="text-gold" />
            <p className="font-sans text-sm text-cream/75">Mar–Sab</p>
          </div>
        </div>

        <div className="w-full max-w-md rounded-2xl bg-charcoal px-6 py-6 shadow-[0_20px_45px_-15px_rgba(8,5,3,0.55)]">
          <h3 className="mb-4 font-serif text-lg font-semibold text-cream">Orari</h3>
          <dl className="flex flex-col gap-2">
            {salon.orari.map((o) => (
              <div key={o.giorno} className="flex justify-between font-sans text-sm">
                <dt className="text-cream/60">{o.giorno}</dt>
                <dd className={o.ore === "Chiuso" ? "text-cream/40" : "text-cream/85"}>{o.ore}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
};
