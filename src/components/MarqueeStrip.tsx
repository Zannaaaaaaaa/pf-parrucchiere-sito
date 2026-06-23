"use client";

import { motion, useReducedMotion } from "framer-motion";

const ITEMS = ["Taglio", "Colore", "Piega", "Barba", "Cheratina"];
const LOOP = [...ITEMS, ...ITEMS];

export const MarqueeStrip: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden border-y border-gold/10 bg-charcoal py-7">
      <motion.div
        className="flex w-max items-center gap-12 whitespace-nowrap"
        animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {LOOP.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span
              className="font-serif text-3xl font-semibold text-transparent sm:text-4xl"
              style={{ WebkitTextStroke: "1px rgba(205,160,106,0.65)" }}
            >
              {item}
            </span>
            <span className="text-lg text-gold/40">✦</span>
          </span>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-charcoal to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-charcoal to-transparent sm:w-32" />
    </div>
  );
};
