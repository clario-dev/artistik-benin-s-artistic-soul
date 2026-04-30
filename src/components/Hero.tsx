import heroImg from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Composition artistique bleu et or — ARTISTIK"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative container text-center text-white px-6 animate-fade-in-slow">
        <p className="text-accent uppercase tracking-[0.5em] text-xs mb-8 animate-fade-in">
          Parakou · Bénin
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] text-balance mb-8 animate-slide-up">
          L'art qui se vit
          <br />
          <span className="italic text-gold">et se ressent</span>
        </h1>
        <div className="flex justify-center mb-10">
          <span className="gold-divider" />
        </div>
        <p
          className="max-w-xl mx-auto text-base md:text-lg text-white/80 leading-relaxed mb-12 animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          Une galerie d'œuvres uniques et une terrasse culinaire où chaque
          création raconte une émotion.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "500ms" }}
        >
          <a
            href="#galerie"
            className="px-10 py-4 bg-white text-primary-deep uppercase tracking-widest text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-smooth"
          >
            Explorer la galerie
          </a>
          <a
            href="https://wa.me/2290197693078?text=Bonjour%2C%20je%20souhaite%20commander"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-white/40 text-white uppercase tracking-widest text-sm font-medium hover:border-accent hover:text-accent transition-smooth"
          >
            Commander
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/60" />
      </div>
    </section>
  );
};
