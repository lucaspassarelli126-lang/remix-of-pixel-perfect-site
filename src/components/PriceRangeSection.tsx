import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const priceRangeItems = [
  { price: "250", tier: "Essencial", subtitle: "Qualidade Básica" },
  { price: "450", tier: "Estilo", subtitle: "Fashion & Trendy" },
  { price: "650", tier: "Fashion", subtitle: "Marcas Premium" },
  { price: "850", tier: "Premium", subtitle: "Design & Conforto" },
  { price: "1.500", tier: "Luxo", subtitle: "Grifes Internacionais" },
];

const PriceRangeSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 md:py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#0A1490] uppercase tracking-[0.2em] mb-2">
            Navegue por Preço
          </h2>
          <p className="text-gray-500 text-xs md:text-sm font-medium">
            O par perfeito para o seu estilo e bolso.
          </p>
        </div>

        <div className="relative group/nav">
          {/* Mobile Arrows */}
          <button 
            onClick={() => scroll("left")}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 bg-white/90 shadow-lg rounded-full p-2 text-[#0A1490] hover:bg-white transition-all active:scale-90"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 bg-white/90 shadow-lg rounded-full p-2 text-[#0A1490] hover:bg-white transition-all active:scale-90"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto no-scrollbar snap-x pb-4 -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth"
          >
            {priceRangeItems.map((range) => (
              <a
                key={range.price}
                href="#"
                className="group relative flex-shrink-0 w-[220px] md:w-auto snap-center"
              >
              <div className="w-full aspect-[5/3] rounded-xl p-4 md:p-5 flex flex-col justify-between overflow-hidden transition-all duration-300 bg-gradient-to-br from-[#0A1490] to-[#040842] shadow-md group-hover:shadow-lg border border-white/5 active:scale-95">
                {/* Fixed Shine Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />

                <div className="relative z-10">
                  <h3 className="text-white text-sm md:text-base font-bold tracking-tight leading-tight">
                    {range.tier}
                  </h3>
                  <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-wider">
                    {range.subtitle}
                  </p>
                </div>

                <div className="relative z-10">
                  <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest block -mb-0.5">
                    Até
                  </span>
                  <div className="flex items-baseline">
                    <span className="text-[#D4AF37] text-xs font-bold mr-0.5">R$</span>
                    <span className="text-white text-2xl md:text-3xl font-black leading-none tracking-tighter">
                      {range.price.split('.')[0]}
                    </span>
                    {range.price.includes('.') && (
                      <span className="text-white text-base font-bold">.{range.price.split('.')[1]}</span>
                    )}
                    <span className="text-[#D4AF37] text-[10px] font-bold ml-0.5">,00</span>
                  </div>
                </div>

                {/* Simplified Hover Indicator */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceRangeSection;
