import { Logo } from "./Logo";

export const About = () => {
  return (
    <section id="histoire" className="py-28 bg-background">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <Logo className="h-20 w-20 mx-auto mb-6" />
          <p className="eyebrow mb-4">Notre histoire</p>
          <h2 className="heading-section mb-6">
            Là où l'art rencontre <span className="italic">le goût</span>
          </h2>
          <span className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 text-lg leading-relaxed text-foreground/85">
          <p>
            Né au cœur de Parakou, <strong className="text-primary-deep">ARTISTIK</strong> est
            un lieu rare où la création visuelle dialogue avec l'art culinaire.
            Une vision portée par la conviction que la beauté nourrit autant
            que les saveurs.
          </p>
          <p>
            Nos artistes, artisans et chefs partagent une même exigence :
            faire de chaque œuvre, de chaque plat, une émotion sincère —
            authentique, créative, inoubliable.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { t: "Authenticité", d: "Des œuvres et créations enracinées dans notre culture." },
            { t: "Créativité", d: "L'audace de réinventer chaque jour la beauté." },
            { t: "Excellence", d: "Le souci du détail dans chaque geste partagé." },
          ].map((v) => (
            <div key={v.t} className="text-center p-8 bg-card border border-border hover:border-accent transition-smooth shadow-soft">
              <div className="font-display text-2xl text-primary-deep mb-3">{v.t}</div>
              <p className="text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
