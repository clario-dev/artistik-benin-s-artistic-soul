import { useState } from "react";
import { Link } from "react-router-dom";
import painting1 from "@/assets/art-painting-1.jpg";
import painting2 from "@/assets/art-painting-2.jpg";
import sculpture1 from "@/assets/art-sculpture-1.jpg";
import sculpture2 from "@/assets/art-sculpture-2.jpg";
import craft1 from "@/assets/art-craft-1.jpg";
import craft2 from "@/assets/art-craft-2.jpg";

type Category = "tous" | "peinture" | "sculpture" | "artisanat";

export type Artwork = {
  id: string;
  title: string;
  category: Exclude<Category, "tous">;
  description: string;
  price: string;
  priceEur: number;
  image: string;
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Confluence d'Or",
    category: "peinture",
    description: "Acrylique et feuille d'or sur toile. Dialogue entre tradition et modernité.",
    price: "535 €",
    priceEur: 535,
    image: painting1,
  },
  {
    id: "2",
    title: "Regard Souverain",
    category: "peinture",
    description: "Portrait contemporain — pigments naturels et technique mixte.",
    price: "425 €",
    priceEur: 425,
    image: painting2,
  },
  {
    id: "3",
    title: "Mère Originelle",
    category: "sculpture",
    description: "Bronze patiné. Une ode à la maternité et à l'enracinement.",
    price: "1 145 €",
    priceEur: 1145,
    image: sculpture1,
  },
  {
    id: "4",
    title: "Masque Ancestral",
    category: "sculpture",
    description: "Bois sculpté à la main, finition huilée. Pièce unique.",
    price: "275 €",
    priceEur: 275,
    image: sculpture2,
  },
  {
    id: "5",
    title: "Trésors d'Argile",
    category: "artisanat",
    description: "Ensemble de poterie et vannerie tressée — savoir-faire local.",
    price: "145 €",
    priceEur: 145,
    image: craft1,
  },
  {
    id: "6",
    title: "Tissage Royal",
    category: "artisanat",
    description: "Textile tissé main, motifs indigo et or. Édition limitée.",
    price: "185 €",
    priceEur: 185,
    image: craft2,
  },
];

const categories: Category[] = ["tous", "peinture", "sculpture", "artisanat"];

export const Gallery = ({
  onSelect,
  showHeader = true,
  showCta = false,
}: {
  onSelect: (a: Artwork) => void;
  showHeader?: boolean;
  showCta?: boolean;
}) => {
  const [filter, setFilter] = useState<Category>("tous");
  const items = filter === "tous" ? artworks : artworks.filter((a) => a.category === filter);

  return (
    <section id="galerie" className="py-28 bg-secondary">
      <div className="container">
        {showHeader && (
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Collection</p>
            <h2 className="heading-section mb-6">Galerie d'œuvres</h2>
            <span className="gold-divider" />
            <p className="lead-muted max-w-xl mx-auto mt-6">
              Chaque pièce est une narration. Sélectionnez la catégorie qui vous inspire.
            </p>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2.5 text-xs uppercase tracking-widest border transition-smooth ${
                filter === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground border-border hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((art, i) => (
            <article
              key={art.id}
              className="group bg-card hover-lift cursor-pointer animate-fade-in shadow-soft"
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={() => onSelect(art)}
            >
              <div className="image-zoom aspect-[4/5] bg-muted">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={900}
                  height={1100}
                />
              </div>
              <div className="p-6">
                <p className="eyebrow mb-2 text-[0.65rem]">{art.category}</p>
                <h3 className="font-display text-2xl text-foreground mb-2">{art.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {art.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-display text-lg text-primary-deep">{art.price}</span>
                  <span className="text-xs uppercase tracking-widest text-accent group-hover:translate-x-1 transition-smooth">
                    Découvrir →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showCta && (
          <div className="text-center mt-16">
            <Link
              to="/galerie"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-smooth"
            >
              Voir toute la collection →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
