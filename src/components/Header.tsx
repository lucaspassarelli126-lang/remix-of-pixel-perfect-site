import { Search, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[#0A1490] sticky top-0 z-50 shadow-md">
      <div className="container flex items-center justify-between py-2 gap-4">
        <a href="/" className="flex-shrink-0">
          <img 
            src={logo} 
            alt="Visão Total Ótica" 
            className="h-10 md:h-14 w-auto object-contain" 
          />
        </a>

        <div className="flex-1 max-w-xl hidden md:flex">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="w-full border-none rounded-full py-2.5 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/10 text-white placeholder:text-white/60"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-[#0A1490] rounded-full p-2">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <a href="#" className="flex flex-col items-center text-white hover:opacity-80 transition-opacity">
            <Heart className="h-5 w-5" />
            <span className="text-[10px] mt-0.5 hidden md:block uppercase font-semibold tracking-wide">Favoritos</span>
          </a>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="w-full border-none rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/10 text-white placeholder:text-white/60"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-[#0A1490] rounded-full p-1.5">
            <Search className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
