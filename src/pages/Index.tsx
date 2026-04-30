import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Gallery, type Artwork } from "@/components/Gallery";
import { ArtworkModal } from "@/components/ArtworkModal";
import { Terrace } from "@/components/Terrace";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


const Index = () => {
  const [selected, setSelected] = useState<Artwork | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Gallery onSelect={setSelected} />
      <Terrace />
      <About />
      <Contact />
      <Footer />
      
      <ArtworkModal artwork={selected} onClose={() => setSelected(null)} />
    </main>
  );
};

export default Index;
