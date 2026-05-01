import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Gallery, type Artwork } from "@/components/Gallery";
import { ArtworkModal } from "@/components/ArtworkModal";

const GalleryPage = () => {
  const [selected, setSelected] = useState<Artwork | null>(null);

  useEffect(() => {
    document.title = "Galerie d'Art Contemporain Béninois | ARTISTIK Parakou — Livraison Europe";
    const desc =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    desc.setAttribute(
      "content",
      "Découvrez et achetez des œuvres d'art contemporain africain : peintures, sculptures bronze & bois, artisanat béninois. Pièces uniques signées, livraison sécurisée vers la France, la Belgique, la Suisse et toute l'Europe."
    );
    if (!desc.parentNode) document.head.appendChild(desc);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero page */}
      <section className="pt-32 pb-16 bg-primary-deep text-white">
        <div className="container">
          <nav className="text-xs uppercase tracking-widest text-white/60 mb-6">
            <Link to="/" className="hover:text-gold transition-smooth">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">Galerie</span>
          </nav>
          <p className="eyebrow text-gold mb-4">Collection ARTISTIK</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-balance">
            Galerie d'art contemporain
            <br />
            <span className="italic text-gold">béninois</span>
          </h1>
          <span className="gold-divider mb-8 block" />
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Peintures, sculptures et artisanat d'auteur. Chaque œuvre est unique,
            signée, certifiée et expédiée avec soin. <span className="text-gold">Livraison internationale sécurisée — France, Belgique, Suisse, Europe entière.</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl">
            {[
              { n: "100%", l: "Pièces uniques" },
              { n: "✓", l: "Certificat d'authenticité" },
              { n: "EU", l: "Livraison Europe" },
              { n: "€", l: "Paiement sécurisé" },
            ].map((s) => (
              <div key={s.l} className="border border-white/20 bg-white/[0.03] p-5 text-center">
                <div className="font-display text-2xl text-gold mb-1">{s.n}</div>
                <div className="text-[0.65rem] uppercase tracking-widest text-white/75">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery onSelect={setSelected} showHeader={false} />

      {/* SEO content block */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="heading-section mb-6">L'art africain contemporain, livré chez vous en Europe</h2>
          <span className="gold-divider mb-8 block" />
          <div className="prose-artistik space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Basée à Parakou, au cœur du Bénin, la galerie ARTISTIK représente
              une nouvelle génération d'artistes africains. Nos peintures à la
              feuille d'or, sculptures en bronze patiné, masques sculptés et
              textiles tissés main séduisent les collectionneurs européens
              à la recherche d'œuvres authentiques, durables et chargées de sens.
            </p>
            <p>
              Chaque pièce est <strong>signée par l'artiste</strong>, accompagnée
              d'un <strong>certificat d'authenticité</strong>, et expédiée dans
              un emballage muséal vers la France, la Belgique, la Suisse, le
              Luxembourg, l'Allemagne, l'Italie et l'ensemble de l'Union européenne.
              Les prix sont affichés en euros, taxes incluses ; les frais de
              livraison sont calculés selon la destination.
            </p>
            <p>
              Vous êtes décorateur, architecte d'intérieur, galeriste ou amateur
              éclairé&nbsp;? Notre équipe vous accompagne dans le choix d'œuvres
              adaptées à vos espaces — résidences privées, hôtels, bureaux —
              et vous propose un suivi personnalisé via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <ArtworkModal artwork={selected} onClose={() => setSelected(null)} />
    </main>
  );
};

export default GalleryPage;
