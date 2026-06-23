"use client";

import { motion } from "framer-motion";
import { servizi } from "@/lib/content";
import { BlowDryerIcon, DropIcon, LeafIcon, RazorIcon, ScissorsIcon } from "./Icons";

const icone = [ScissorsIcon, BlowDryerIcon, RazorIcon, DropIcon, LeafIcon];

export const Servizi: React.FC = () => {
  return (
    <section id="servizi" className="bg-charcoal px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-serif text-4xl font-bold text-cream sm:text-5xl"
        >
          I Nostri Servizi
        </motion.h2>

        <div className="mt-14 divide-y divide-gold/10">
          {servizi.map((servizio, i) => {
            const Icon = icone[i];
            return (
              <motion.div
                key={servizio.titolo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="flex items-center gap-4 sm:w-64 sm:flex-shrink-0">
                  <Icon size={30} className="text-gold" />
                  <h3 className="font-serif text-2xl font-semibold text-cream">{servizio.titolo}</h3>
                </div>
                <p className="font-sans text-sm leading-relaxed text-cream/60 sm:flex-1">
                  {servizio.descrizione}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
