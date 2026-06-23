import { salon } from "@/lib/content";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gold/10 bg-charcoal px-6 py-10 text-center">
      <p className="font-serif text-xl italic text-rose">{salon.nome}</p>
      <p className="mt-2 font-sans text-xs text-cream/40">{salon.indirizzo}</p>
    </footer>
  );
};
