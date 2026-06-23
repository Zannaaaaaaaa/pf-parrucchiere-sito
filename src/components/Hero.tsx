"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { salon } from "@/lib/content";
import { CtaButton } from "./CtaButton";

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const shouldReduceMotion = useReducedMotion();

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const words = salon.nome.split(" ");

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[130%]">
        <Image
          src="/images/hero-fire.jpg"
          alt="Colore fashion realizzato da P.F. Parrucchiere"
          fill
          priority
          className="object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center gap-7 px-6 text-center"
      >
        <span className="font-sans text-sm font-medium uppercase tracking-[0.35em] text-gold">
          Parrucchiere a Villorba
        </span>
        <h1 className="font-serif text-5xl font-bold text-cream sm:text-7xl md:text-8xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={shouldReduceMotion ? undefined : { opacity: 0, filter: "blur(10px)", y: 18 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="mr-4 inline-block last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <p className="max-w-xl font-serif text-xl italic text-cream/85 sm:text-2xl">
          {salon.slogan}
        </p>
        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <CtaButton href={salon.telefonoHref}>Prenota ora</CtaButton>
          <a
            href="#servizi"
            className="rounded-full border border-cream/30 px-9 py-3.5 font-sans text-base font-medium text-cream transition hover:border-gold hover:text-gold"
          >
            Scopri i servizi
          </a>
        </div>
      </motion.div>
    </section>
  );
};
