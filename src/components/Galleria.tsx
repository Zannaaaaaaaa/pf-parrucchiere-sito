"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { galleria } from "@/lib/content";

// Distribuzioni round-robin: ogni gruppo-colonna corrisponde esattamente al numero
// di colonne mostrate al suo breakpoint, così nessuna colonna va a capo sbilanciando.
const cols3 = [
  [galleria[0], galleria[3], galleria[6]],
  [galleria[1], galleria[4], galleria[7]],
  [galleria[2], galleria[5], galleria[8]],
];
const cols2 = [
  [galleria[0], galleria[2], galleria[4], galleria[6], galleria[8]],
  [galleria[1], galleria[3], galleria[5], galleria[7]],
];

const offsets3: [number, number][] = [
  [0, -70],
  [0, 90],
  [0, -50],
];
const offsets2: [number, number][] = [
  [0, -50],
  [0, 60],
];

const GalleryColumn: React.FC<{
  items: typeof galleria;
  offset: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}> = ({ items, offset, progress }) => {
  const y = useTransform(progress, [0, 1], offset);

  return (
    <motion.div style={{ y }} className="flex flex-col gap-4 sm:gap-6">
      {items.map((item) => (
        <div key={item.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-charcoal">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 45vw"
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>
      ))}
    </motion.div>
  );
};

export const Galleria: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section id="galleria" className="bg-charcoal-soft px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-cream sm:text-5xl">I Nostri Lavori</h2>
          <p className="mt-3 font-sans text-cream/60">Colore, taglio e styling firmati P.F. Parrucchiere</p>
        </motion.div>

        <div ref={ref}>
          {/* Sotto i 1024px: 2 colonne bilanciate */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
            {cols2.map((items, i) => (
              <GalleryColumn key={i} items={items} offset={offsets2[i]} progress={scrollYProgress} />
            ))}
          </div>

          {/* Da 1024px in su: 3 colonne bilanciate con parallasse */}
          <div className="hidden gap-6 lg:grid lg:grid-cols-3">
            {cols3.map((items, i) => (
              <GalleryColumn key={i} items={items} offset={offsets3[i]} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
