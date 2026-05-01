import terrace from "@/assets/terrace.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const menu = [
  {
    name: "Poisson grillé aux herbes",
    desc: "Capitaine entier mariné aux herbes fraîches, grillé au feu de bois, accompagné de légumes du marché et d'une sauce citronnée maison.",
    price: "13 €",
    img: dish3,
    benefits: ["Riche en oméga-3", "Sans additifs", "Cuisson au feu de bois"],
  },
  {
    name: "Plat signature ARTISTIK",
    desc: "Notre création iconique : viande braisée lentement, igname dorée au beurre clarifié et jus corsé aux épices locales du Bénin.",
    price: "15 €",
    img: dish1,
    benefits: ["Recette signature", "Épices locales", "Cuisson lente"],
  },
  {
    name: "Symphonie de fruits frais",
    desc: "Sélection raffinée de fruits de saison du terroir béninois, sublimés par un coulis maison et une touche de menthe fraîche.",
    price: "5,50 €",
    img: dish2,
    benefits: ["100% naturel", "Vitamines essentielles", "Fruits de saison"],
  },
];

export const Terrace = () => {
  return (
    <section id="terrasse" className="relative">
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={terrace}
          alt="Terrasse culinaire ARTISTIK à Parakou"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="container text-white animate-fade-in">
            <p className="eyebrow mb-4">L'expérience</p>
            <h2 className="heading-section text-white max-w-2xl text-balance">
              La terrasse culinaire,
              <br />
              <span className="italic text-gold">un art à savourer</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-primary-deep text-white py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <span className="gold-divider mb-6 block" />
              <h3 className="font-display text-3xl md:text-4xl mb-6">
                Une cuisine naturelle et créative
              </h3>
              <p className="text-white/75 leading-relaxed mb-4">
                Inspirée du terroir béninois et sublimée par une approche
                artistique, chaque assiette est composée d'ingrédients frais,
                <span className="text-gold"> sans additifs artificiels</span>.
              </p>
              <p className="text-white/75 leading-relaxed">
                Une cuisine vivante, dressée comme une œuvre, à savourer
                sur place ou à emporter.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { n: "100%", l: "Naturel" },
                { n: "0", l: "Additif" },
                { n: "★★★", l: "Excellence" },
              ].map((s) => (
                <div key={s.l} className="border border-white/20 bg-white/[0.03] p-6">
                  <div className="font-display text-3xl text-gold mb-1">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-white/75">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="font-display text-2xl uppercase tracking-widest text-center mb-12">
            <span className="text-gold">— </span>Notre carte<span className="text-gold"> —</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {menu.map((m, i) => (
              <article
                key={m.name}
                className="group bg-white/[0.03] border border-white/10 hover-lift animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="image-zoom aspect-square">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" loading="lazy" width={900} height={900} />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl text-white mb-2">{m.name}</h4>
                  <p className="text-sm text-white/75 mb-4 leading-relaxed">{m.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {m.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-white/80">
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-white/15">
                    <span className="font-display text-lg text-gold">{m.price}</span>
                    <a
                      href={`https://wa.me/2290197693078?text=${encodeURIComponent(`Bonjour, je souhaite commander : ${m.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest text-white/90 hover:text-accent transition-smooth"
                    >
                      Commander →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="https://wa.me/2290197693078?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20une%20table"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-gold text-accent-foreground uppercase tracking-widest text-sm font-medium shadow-gold hover:opacity-90 transition-smooth"
            >
              Réserver une table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
