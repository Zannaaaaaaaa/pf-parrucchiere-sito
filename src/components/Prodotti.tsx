"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const prodotti = [
  { src: "/images/prodotti-1.jpg", alt: "Linea Menta P.F. Parrucchiere", nome: "Linea Menta", desc: "Shampoo e fluidi sebo-equilibranti" },
  { src: "/images/prodotti-2.jpg", alt: "Linea Ninfea P.F. Parrucchiere", nome: "Linea Ninfea", desc: "Shampoo e balsamo idratante intensivo" },
];

export const Prodotti: React.FC = () => {
  return (
    <section className="bg-charcoal-soft px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-cream sm:text-5xl">
            La Nostra Linea Cosmetica
          </h2>
          <p className="mx-auto mt-3 max-w-md font-sans text-sm text-cream/60">
            Prodotti professionali firmati P.F. Parrucchiere, pensati per continuare la coccola anche a casa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {prodotti.map((prodotto, i) => (
            <motion.div
              key={prodotto.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-2xl bg-charcoal shadow-[0_20px_45px_-15px_rgba(8,5,3,0.55)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-10px_rgba(205,160,106,0.18)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={prodotto.src}
                  alt={prodotto.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-cream">{prodotto.nome}</h3>
                <p className="mt-1 font-sans text-sm text-cream/65">{prodotto.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
