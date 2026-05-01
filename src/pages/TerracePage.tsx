import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Terrace } from "@/components/Terrace";

const TerracePage = () => {
  useEffect(() => {
    document.title = "Terrasse Culinaire ARTISTIK Parakou | Restaurant Bénin — Cuisine Créative";
    const desc =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    desc.setAttribute(
      "content",
      "Restaurant terrasse à Parakou, Bénin. Cuisine béninoise créative, naturelle, sans additifs. Une étape gastronomique incontournable pour les voyageurs européens en Afrique de l'Ouest."
    );
    if (!desc.parentNode) document.head.appendChild(desc);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-12 bg-primary-deep text-white">
        <div className="container">
          <nav className="text-xs uppercase tracking-widest text-white/60 mb-6">
            <Link to="/" className="hover:text-gold transition-smooth">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">Terrasse culinaire</span>
          </nav>
          <p className="eyebrow text-gold mb-4">L'expérience gourmande</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-balance">
            Terrasse culinaire
            <br />
            <span className="italic text-gold">ARTISTIK Parakou</span>
          </h1>
          <span className="gold-divider mb-8 block" />
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Une cuisine béninoise vivante, dressée comme une œuvre. Une étape
            <span className="text-gold"> incontournable pour les voyageurs et expatriés européens </span>
            en quête d'authenticité.
          </p>
        </div>
      </section>

      <Terrace />

      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="heading-section mb-6">Une étape gastronomique au cœur du Bénin</h2>
          <span className="gold-divider mb-8 block" />
          <div className="prose-artistik space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Recommandée par les guides de voyage et plébiscitée par la communauté
              expatriée européenne de Parakou, la terrasse ARTISTIK propose une
              cuisine d'auteur ancrée dans le terroir béninois : igname, fonio,
              poissons d'eau douce, épices locales, fruits de saison.
            </p>
            <p>
              <strong>Réservations</strong> facilitées via WhatsApp pour les groupes,
              touristes, ONG et entreprises de passage. Tarifs affichés en euros,
              menus adaptables (végétarien, sans gluten sur demande), service
              attentif en français et anglais.
            </p>
            <p>
              Une adresse rare où l'<strong>art visuel et l'art culinaire</strong> dialoguent — déjeuner,
              dîner, ou simple pause artistique sous les arbres.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TerracePage;
