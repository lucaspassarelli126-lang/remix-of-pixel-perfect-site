import { MapPin, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#0A1490] text-white/90 text-[10px] md:text-xs border-b border-white/10">
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap">
            <MapPin className="h-3 w-3 text-white/60" />
            <span>Encontre uma loja</span>
          </a>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <a href="#" className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap">
            <span>Seja um Franqueado</span>
          </a>
          <a href="tel:19995864431" className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap">
            <Phone className="h-3 w-3 text-white/60" />
            <span className="font-medium">(19) 99586-4431</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
