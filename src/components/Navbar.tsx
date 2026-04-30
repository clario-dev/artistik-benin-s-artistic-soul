import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#galerie", label: "Galerie" },
  { href: "#terrasse", label: "Terrasse" },
  { href: "#histoire", label: "Histoire" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center gap-3">
          <Logo className={cn("h-11 w-11 transition-smooth", scrolled ? "" : "drop-shadow-lg")} />
          <span
            className={cn(
              "font-display text-xl tracking-[0.25em] transition-smooth",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            ARTISTIK
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "text-sm tracking-widest uppercase transition-smooth hover:text-accent",
                  scrolled ? "text-foreground" : "text-white/90"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/2290197693078"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-gold text-accent-foreground text-xs uppercase tracking-widest font-medium shadow-gold hover:opacity-90 transition-smooth"
        >
          Commander
        </a>

        <button
          className={cn("md:hidden p-2", scrolled ? "text-foreground" : "text-white")}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground uppercase tracking-widest text-sm"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/2290197693078"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-gradient-gold text-accent-foreground uppercase tracking-widest text-sm"
              >
                Commander via WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
