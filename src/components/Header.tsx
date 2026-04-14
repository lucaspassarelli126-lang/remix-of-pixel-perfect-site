import { useState, useEffect } from "react";
import { Search, Heart } from "lucide-react";
import logo from "@/assets/logo.webp";
import SearchComponent from "@/components/ui/animated-glowing-search-bar";

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
    <header className="w-full sticky top-0 z-50 shadow-md flex flex-col font-sans">
      <div className={`bg-[#0A1490] transition-all duration-300 ${isScrolled ? "py-2" : "py-3 md:py-4"}`}>
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

          {/* Centro: Barra de Pesquisa Animada */}
          <div className="flex-[2] max-w-xl hidden md:flex justify-center shrink-0">
            <SearchComponent />
          </div>

          {/* Lado Direito: Ações */}
          <div className="flex-1 flex justify-end">
            <div className="flex items-center gap-4 md:gap-5">
              {/* Lupa Mobile */}
              <button className="md:hidden text-white hover:opacity-80 transition-opacity p-1">
                <Search className="h-6 w-6" />
              </button>
              
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
      </div>

      {/* Letreiro em movimento (Marquee) */}
      <div className="bg-[#F0F2F5] text-[#0A1490] border-b border-[#E0E2E5] overflow-hidden w-full flex items-center shadow-inner">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {[...Array(4)].map((_, j) => (
                <div key={j} className="flex gap-4 md:gap-8 px-2 md:px-4 py-1.5 md:py-2 text-[9px] md:text-[11px] font-extrabold tracking-widest uppercase items-center shrink-0">
                  <span>🚚 ATENDIMENTO PREMIUM VIA WHATSAPP</span>
                  <span className="text-primary/30">•</span>
                  <span>💳 PARCELE EM ATÉ 10X S/ JUROS</span>
                  <span className="text-primary/30">•</span>
                  <span>👓 10% OFF NA PRIMEIRA COMPRA</span>
                  <span className="text-primary/30">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
