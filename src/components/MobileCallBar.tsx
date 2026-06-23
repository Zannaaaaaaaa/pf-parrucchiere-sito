"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { salon } from "@/lib/content";
import { PhoneIcon } from "./Icons";

export const MobileCallBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-charcoal/95 p-3 backdrop-blur sm:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <a
            href={salon.telefonoHref}
            className="flex items-center justify-center gap-2 rounded-full bg-gold py-3.5 font-sans text-base font-semibold text-charcoal transition hover:bg-gold-light"
          >
            <PhoneIcon size={20} className="text-charcoal" />
            Chiama il salone
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
