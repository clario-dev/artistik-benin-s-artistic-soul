import logo from "@/assets/logo.webp";

export const Logo = ({ className = "h-12 w-12" }: { className?: string }) => (
  <img src={logo} alt="ARTISTIK logo" className={className} width={64} height={64} />
);
