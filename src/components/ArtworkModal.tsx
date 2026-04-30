import { X } from "lucide-react";
import { useEffect } from "react";
import type { Artwork } from "./Gallery";

export const ArtworkModal = ({
  artwork,
  onClose,
}: {
  artwork: Artwork | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (artwork) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [artwork]);

  if (!artwork) return null;

  const message = encodeURIComponent(
    `Bonjour, je suis intéressé(e) par cette œuvre : "${artwork.title}" (${artwork.price})`
  );

  return (
    <div
      className="fixed inset-0 z-[100] bg-primary-deep/95 backdrop-blur-md overflow-y-auto animate-fade-in-slow"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-10 p-3 text-white hover:text-accent transition-smooth"
        aria-label="Fermer"
      >
        <X size={28} />
      </button>

      <div
        className="container py-20 md:py-24 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden shadow-deep">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-full object-cover"
              width={900}
              height={1100}
            />
          </div>

          <div className="text-white">
            <p className="text-accent uppercase tracking-[0.4em] text-xs mb-4">
              {artwork.category}
            </p>
            <h2 className="font-display text-4xl md:text-6xl mb-6">{artwork.title}</h2>
            <span className="gold-divider mb-8 block" />
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {artwork.description}
            </p>
            <p className="font-display text-3xl text-gold mb-2">{artwork.price}</p>
            <p className="text-xs uppercase tracking-widest text-white/60 mb-10">
              Paiement à la livraison · cash ou accord direct
            </p>

            <a
              href={`https://wa.me/2290197693078?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-gold text-accent-foreground uppercase tracking-widest text-sm font-medium shadow-gold hover:opacity-90 transition-smooth"
            >
              Commander via WhatsApp
            </a>

            <div className="mt-10 pt-8 border-t border-white/15 text-sm text-white/60 space-y-2">
              <p>· Livraison locale et internationale</p>
              <p>· Authentifié et signé par l'artiste</p>
              <p>· Accompagnement personnalisé</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
