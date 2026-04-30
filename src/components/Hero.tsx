import heroImg from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(215_75%_6%)]"
    >
      {/* Background image */}
      <img
        src={heroImg}
        alt="Composition artistique bleu et or — ARTISTIK"
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        width={1920}
        height={1280}
      />

      {/* Layered gradients */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid-gold opacity-40" />

      {/* Animated orbs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-50 animate-orb-float"
        style={{ background: "radial-gradient(circle, hsl(211 90% 55% / 0.55), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-32 w-[44rem] h-[44rem] rounded-full blur-3xl opacity-40 animate-orb-float-slow"
        style={{ background: "radial-gradient(circle, hsl(42 80% 55% / 0.45), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-30 animate-orb-float"
        style={{ background: "radial-gradient(circle, hsl(211 100% 70% / 0.4), transparent 70%)", animationDelay: "4s" }}
      />

      {/* Drifting gold lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[15, 35, 55, 75, 90].map((left, i) => (
          <span
            key={left}
            className="absolute top-0 w-px h-32 animate-drift-line"
            style={{
              left: `${left}%`,
              background: "linear-gradient(to bottom, transparent, hsl(42 80% 65% / 0.6), transparent)",
              animationDelay: `${i * 2.4}s`,
              animationDuration: `${10 + i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Noise texture for premium feel */}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.07] mix-blend-overlay" />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, hsl(215 80% 4% / 0.7) 100%)" }}
      />

      {/* Content */}
      <div className="relative container text-center text-white px-6 animate-fade-in-slow z-10">
        <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
          <span className="h-px w-8 bg-accent" />
          <p className="text-accent uppercase tracking-[0.5em] text-[10px] md:text-xs">
            Parakou · Bénin
          </p>
          <span className="h-px w-8 bg-accent" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] font-medium leading-[1.02] text-balance mb-8 animate-slide-up">
          L'art qui se vit
          <br />
          <span className="italic text-shimmer-gold">et se ressent</span>
        </h1>

        <div className="flex justify-center mb-10">
          <span className="gold-divider" />
        </div>

        <p
          className="max-w-xl mx-auto text-base md:text-lg text-white/75 leading-relaxed mb-12 animate-fade-in font-light"
          style={{ animationDelay: "300ms" }}
        >
          Une galerie d'œuvres uniques et une terrasse culinaire
          <br className="hidden md:inline" />
          où chaque création raconte une émotion.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in"
          style={{ animationDelay: "500ms" }}
        >
          <a
            href="#galerie"
            className="btn-premium px-10 py-4 uppercase tracking-[0.2em] text-xs font-semibold rounded-sm"
          >
            <span>Explorer la galerie</span>
          </a>
          <a
            href="https://wa.me/2290197693078?text=Bonjour%2C%20je%20souhaite%20commander"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-premium px-10 py-4 text-white uppercase tracking-[0.2em] text-xs font-semibold rounded-sm"
          >
            Commander
          </a>
        </div>

        {/* Premium meta badges */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[10px] uppercase tracking-[0.3em] text-white/40 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <span>Œuvres originales</span>
          <span className="h-1 w-1 rounded-full bg-accent/60" />
          <span>Cuisine d'auteur</span>
          <span className="h-1 w-1 rounded-full bg-accent/60" />
          <span>Paiement sécurisé</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in z-10" style={{ animationDelay: "1.2s" }}>
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">Découvrir</span>
        <div className="w-px h-14 bg-gradient-to-b from-accent/80 to-transparent animate-scroll-bounce" />
      </div>
    </section>
  );
};
