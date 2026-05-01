import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="bg-primary-deep text-white/80 py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <span className="font-display text-lg tracking-[0.25em] text-white">ARTISTIK</span>
        </div>
        <p className="text-xs uppercase tracking-widest text-center text-white/70">
          L'art qui se vit et se ressent · Parakou, Bénin
        </p>
        <p className="text-xs text-white/70">© {new Date().getFullYear()} ARTISTIK</p>
      </div>
    </div>
  </footer>
);
