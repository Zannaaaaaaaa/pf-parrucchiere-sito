"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const ChiSiamo: React.FC = () => {
  return (
    <section className="bg-charcoal px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 md:flex-row md:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full max-w-sm flex-shrink-0 overflow-hidden rounded-2xl shadow-[0_20px_45px_-15px_rgba(8,5,3,0.55)] md:w-[42%] md:max-w-none"
        >
          <Image
            src="/images/staff-work.jpg"
            alt="Fabio al lavoro nel salone P.F. Parrucchiere"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover object-top"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:flex-1 md:text-left"
        >
          <h2 className="font-serif text-4xl font-bold text-cream sm:text-5xl">Conosci il tuo Parrucchiere</h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-cream/70">
            Da P.F. Parrucchiere ogni cliente è atteso per nome, non per numero. Fabio e il suo team uniscono anni
            di esperienza a una vera passione per la cura dei capelli — dal taglio di precisione alle colorazioni
            più audaci, con la stessa attenzione per ogni persona che si siede sulla poltrona.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
