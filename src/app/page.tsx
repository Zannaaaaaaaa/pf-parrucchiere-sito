import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { MobileCallBar } from "@/components/MobileCallBar";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { Servizi } from "@/components/Servizi";
import { Galleria } from "@/components/Galleria";
import { ChiSiamo } from "@/components/ChiSiamo";
import { Prodotti } from "@/components/Prodotti";
import { Recensioni } from "@/components/Recensioni";
import { Contatti } from "@/components/Contatti";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <Hero />
      <MarqueeStrip />
      <Servizi />
      <Galleria />
      <ChiSiamo />
      <Prodotti />
      <Recensioni />
      <Contatti />
      <Footer />
      <MobileCallBar />
    </div>
  );
}
