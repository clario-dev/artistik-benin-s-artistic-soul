import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => (
  <a
    href="https://wa.me/2290197693078?text=Bonjour%20ARTISTIK%2C"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-deep hover:scale-110 transition-smooth"
    aria-label="Contacter via WhatsApp"
  >
    <MessageCircle size={26} />
  </a>
);
