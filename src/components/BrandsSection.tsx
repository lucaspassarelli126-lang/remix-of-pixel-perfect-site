import pradaLogo from "@/assets/brands/prada.webp";
import raybanLogo from "@/assets/brands/rayban.webp";
import vogueLogo from "@/assets/brands/vogue.webp";
import miumiuLogo from "@/assets/brands/miumiu.webp";
import guessLogo from "@/assets/brands/guess.webp";
import diiLogo from "@/assets/brands/dii-collection.webp";
import hitLogo from "@/assets/brands/hit-eyewear.webp";

const brandItems = [
  { name: "Prada", logo: pradaLogo },
  { name: "Ray-Ban", logo: raybanLogo },
  { name: "Vogue", logo: vogueLogo },
  { name: "Miu Miu", logo: miumiuLogo },
  { name: "Guess", logo: guessLogo },
  { name: "Dii Collection", logo: diiLogo },
  { name: "Hit Eyewear", logo: hitLogo },
];

const BrandsSection = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary/50">
      <div className="container">
        <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide text-center mb-8">
          Explore por Marcas
        </h2>
        <div className="flex items-center justify-start md:justify-center gap-6 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 px-[calc(50vw-45px)] md:px-0">
          {brandItems.map((brand) => (
            <a 
              key={brand.name} 
              href="#" 
              className="flex flex-col items-center gap-2 flex-shrink-0 snap-center group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-[1.5px] border-primary/10 flex items-center justify-center p-2.5 shadow-sm overflow-hidden opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 group-hover:border-primary">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                  width={80}
                  height={80}
                />
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                {brand.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
