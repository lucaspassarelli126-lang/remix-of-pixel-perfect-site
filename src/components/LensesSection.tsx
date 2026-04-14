import premiumModel from "@/assets/premium-model.png";

const LensesSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-[#FAF9F6]">
      {/* Decorative Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] z-0">
        <span className="text-[20rem] md:text-[35rem] font-black leading-none tracking-tight">
          2026
        </span>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-0" />
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left space-y-8 md:space-y-10">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="h-[1px] w-8 bg-primary/30" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-primary/60 font-bold">
                  Curadoria de Estilo
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#1A1A1A] leading-[1.05] tracking-tight">
                A moldura <span className="font-serif italic font-medium text-primary/90">ideal</span> <br className="hidden md:block" />
                para o seu olhar
              </h2>
            </div>
            
            <p className="text-base md:text-xl text-muted-foreground/80 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              Sua visão é única. Descubra armações que não apenas vestem seu rosto, 
              mas elevam sua essência com o equilíbrio perfeito entre 
              sofisticação e conforto.
            </p>
            
            <div className="pt-6">
              <a
                href="#"
                className="group relative inline-flex items-center gap-4 bg-[#1A1A1A] text-white px-12 py-5 rounded-full overflow-hidden transition-all hover:pr-16"
              >
                <span className="relative z-10 font-bold uppercase tracking-widest text-xs">Ver coleção</span>
                <div className="absolute right-6 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-2xl group">
            <div className="relative">
              {/* Asymmetrical Frame Effect */}
              <div className="absolute top-8 left-8 -right-8 -bottom-8 border-[1px] border-primary/20 rounded-2xl -z-10 transition-all duration-700 group-hover:top-4 group-hover:left-4" />
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={premiumModel}
                  alt="Modelo usando óculos de luxo"
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Image Lens Flare Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
              </div>
              
              {/* Refined Certified Seal */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 md:p-8 rounded-full shadow-2xl border border-primary/5 flex flex-col items-center justify-center text-center w-32 h-32 md:w-40 md:h-40 group-hover:rotate-12 transition-transform duration-500">
                <div className="absolute inset-2 border-[1px] border-dashed border-primary/20 rounded-full" />
                <span className="text-[10px] uppercase tracking-widest text-primary/60 font-bold mb-1">Authentic</span>
                <span className="text-lg md:text-xl font-serif italic text-primary font-bold">2026</span>
                <span className="text-[8px] uppercase tracking-tighter text-muted-foreground mt-1">Certified Product</span>
              </div>

              {/* Graphic Detail Accent */}
              <div className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center">
                <div className="absolute h-full w-[1px] bg-primary/20" />
                <div className="absolute w-full h-[1px] bg-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LensesSection;

