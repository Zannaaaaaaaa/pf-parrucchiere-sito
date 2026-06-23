"use client";

import { motion } from "framer-motion";
import { recensioni } from "@/lib/content";
import { StarIcon } from "./Icons";

export const Recensioni: React.FC = () => {
  return (
    <section className="bg-charcoal px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-cream sm:text-5xl">Cosa Dicono di Noi</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {recensioni.map((recensione, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 rounded-2xl bg-charcoal-soft px-7 py-8 shadow-[0_20px_45px_-15px_rgba(8,5,3,0.55)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-10px_rgba(205,160,106,0.18)]"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, star) => (
                  <StarIcon key={star} size={18} />
                ))}
              </div>
              <p className="font-sans text-sm leading-relaxed text-cream/75">{recensione.testo}</p>
              <span className="font-sans text-xs font-medium uppercase tracking-wide text-rose">
                — {recensione.autore}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
