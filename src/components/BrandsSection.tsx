import pradaLogo from "@/assets/brands/prada.png";
import raybanLogo from "@/assets/brands/rayban.png";
import vogueLogo from "@/assets/brands/vogue.png";
import miumiuLogo from "@/assets/brands/miumiu.png";
import guessLogo from "@/assets/brands/guess.png";
import diiLogo from "@/assets/brands/dii-collection.png";
import hitLogo from "@/assets/brands/hit-eyewear.png";

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
        <div className="flex items-center justify-start md:justify-center gap-6 md:gap-8 overflow-x-auto no-scrollbar snap-x pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {brandItems.map((brand) => (
            <a 
              key={brand.name} 
              href="#" 
              className="flex flex-col items-center gap-2 group flex-shrink-0 snap-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-[1.5px] border-primary/30 flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:border-primary group-hover:shadow-lg transition-all shadow-sm overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  width={80}
                  height={80}
                />
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
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
