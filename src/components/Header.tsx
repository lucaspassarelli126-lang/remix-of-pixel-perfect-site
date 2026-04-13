import { useState, useEffect } from "react";
import { Search, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full bg-[#0A1490] sticky top-0 z-50 transition-all duration-300 shadow-md ${isScrolled ? "py-2" : "py-3 md:py-4"}`}>
      <div className="container flex items-center justify-between gap-4">
        {/* Lado Esquerdo: Logo */}
        <div className="flex-1">
          <a href="/" className="inline-block">
            <img 
              src={logo} 
              alt="Visão Total Ótica" 
              className={`transition-all duration-300 object-contain w-auto ${isScrolled ? "h-10 md:h-12" : "h-12 md:h-16"}`}
            />
          </a>
        </div>

        {/* Centro: Barra de Pesquisa */}
        <div className="flex-[2] max-w-xl hidden md:flex justify-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="w-full border-none rounded-full py-2.5 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/20 text-white placeholder:text-white/70"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-[#0A1490] rounded-full p-2 hover:scale-105 transition-transform">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Lado Direito: Favoritos */}
        <div className="flex-1 flex justify-end">
          <div className="flex items-center gap-3 md:gap-5">
            <a href="#" className="flex flex-col items-center text-white hover:opacity-80 transition-opacity group">
              <div className="relative">
                <Heart className="h-6 w-6 group-hover:fill-white transition-all" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
              </div>
              <span className="text-[10px] mt-0.5 hidden md:block uppercase font-bold tracking-wider">Favoritos</span>
            </a>
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3">
        <div className="relative w-full px-2">
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="w-full border-none rounded-full py-2.5 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/20 text-white placeholder:text-white/70"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-[#0A1490] rounded-full p-2">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
