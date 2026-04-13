import premiumModel from "@/assets/premium-model.png";

const LensesSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#FAF9F6]">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8E4D9] rounded-full blur-[100px] -z-0 opacity-50" />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">
            <div className="space-y-2">
              <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                Curadoria de Estilo
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
                A moldura ideal <br className="hidden md:block" />
                para o seu olhar
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
              Sua visão é única. Descubra armações que não apenas vestem seu rosto, 
              mas elevam sua essência com o equilíbrio perfeito entre 
              sofisticação contemporânea e conforto absoluto.
            </p>
            
            <div className="pt-4">
              <a
                href="#"
                className="inline-block bg-[#1A1A1A] text-white font-bold px-10 py-4 rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-xl text-sm uppercase tracking-widest"
              >
                Ver coleção
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl group">
            <div className="relative">
              {/* Image Frame/Shadow Effect */}
              <div className="absolute -inset-4 bg-white/50 backdrop-blur-sm rounded-[2rem] -z-10 transition-transform group-hover:scale-105" />
              
              <img
                src={premiumModel}
                alt="Modelo usando óculos de luxo"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
              
              {/* Modern Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block animate-bounce-slow">
                <p className="text-[#1A1A1A] font-bold text-lg">100% Autêntico</p>
                <p className="text-xs text-muted-foreground">Coleção 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LensesSection;

