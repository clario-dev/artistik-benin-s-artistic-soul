import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Bonjour, je suis ${form.name} (${form.email}).\n\n${form.message}`
    );
    window.open(`https://wa.me/2290197693078?text=${text}`, "_blank");
    toast.success("Votre message a été préparé sur WhatsApp.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="heading-section mb-6">Parlons art</h2>
          <span className="gold-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            {[
              { icon: Phone, label: "Téléphone", value: "+229 01 97 69 30 78", href: "tel:+2290197693078" },
              { icon: MessageCircle, label: "WhatsApp", value: "Discuter directement", href: "https://wa.me/2290197693078" },
              { icon: Mail, label: "Email", value: "artistik@gmail.com", href: "mailto:artistik@gmail.com" },
              { icon: MapPin, label: "Adresse", value: "Parakou, Bénin", href: "https://www.google.com/maps?q=Parakou,Benin" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-5 p-6 bg-card border border-border hover:border-accent hover-lift transition-smooth"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground shrink-0">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="eyebrow mb-1 text-[0.65rem]">{c.label}</p>
                  <p className="text-foreground font-medium">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="p-6 bg-primary-deep text-white">
              <p className="text-xs uppercase tracking-widest text-gold mb-2">Paiement</p>
              <p className="text-sm leading-relaxed">
                Paiement à la livraison <span className="text-white/70">— cash ou accord direct.</span>
                <br />
                Livraison locale et internationale disponible.
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-card p-8 border border-border space-y-5 shadow-soft">
            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/80 mb-2">Nom</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:border-primary py-3 outline-none transition-smooth"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/80 mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-border text-foreground focus:border-primary py-3 outline-none transition-smooth"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/80 mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-border text-foreground focus:border-primary py-3 outline-none resize-none transition-smooth"
              />
            </div>
            <button
              type="submit"
              className="w-full px-10 py-4 bg-gradient-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:opacity-90 transition-smooth"
            >
              Envoyer via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
