import { MapPin, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground text-xs">
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1 hover:underline">
            <MapPin className="h-3 w-3" />
            <span>Encontre uma Diniz</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1 hover:underline">
            <span>Seja um Franqueado</span>
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <Phone className="h-3 w-3" />
            <span>Central de Atendimento</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
