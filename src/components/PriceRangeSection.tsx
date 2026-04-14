const priceRangeItems = [
  { price: "250", tier: "Essencial", subtitle: "Qualidade Básica" },
  { price: "450", tier: "Estilo", subtitle: "Fashion & Trendy" },
  { price: "650", tier: "Fashion", subtitle: "Marcas Premium" },
  { price: "850", tier: "Premium", subtitle: "Design & Conforto" },
  { price: "1.500", tier: "Luxo", subtitle: "Grifes Internacionais" },
];

const PriceRangeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1490] uppercase tracking-[0.2em] mb-3">
            Explorar Coleção
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mx-auto">
            Encontre o par perfeito que se adapta ao seu estilo e ao seu bolso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {priceRangeItems.map((range) => (
            <a
              key={range.price}
              href="#"
              className="group relative flex flex-col items-center"
            >
              <div className="w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 bg-gradient-to-br from-[#0A1490] to-[#040842] shadow-xl group-hover:shadow-[0_20px_40px_rgba(10,20,144,0.3)] group-hover:-translate-y-2 border border-white/10">
                {/* Subtle Shine Effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div>
                  <span className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-1">
                    Coleção
                  </span>
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">
                    {range.tier}
                  </h3>
                  <p className="text-white/50 text-[10px] md:text-xs">
                    {range.subtitle}
                  </p>
                </div>

                <div className="relative">
                  <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest block mb-1">
                    Até
                  </span>
                  <div className="flex items-baseline">
                    <span className="text-[#D4AF37] text-sm md:text-base font-bold mr-0.5">R$</span>
                    <span className="text-white text-4xl md:text-5xl font-black leading-none group-hover:text-[#D4AF37] transition-colors duration-300">
                      {range.price.split('.')[0]}
                    </span>
                    {range.price.includes('.') && (
                      <span className="text-white text-lg font-bold">.{range.price.split('.')[1]}</span>
                    )}
                    <span className="text-[#D4AF37] text-xs font-bold ml-1">,00</span>
                  </div>
                </div>

                {/* Hover Action */}
                <div className="absolute inset-0 bg-[#0A1490]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="text-white text-sm font-bold uppercase tracking-widest border-b-2 border-[#D4AF37] pb-1">
                     Ver Coleção
                   </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceRangeSection;
