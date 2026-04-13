const brandItems = [
  { name: "Prada", letter: "P", bg: "bg-foreground" },
  { name: "Ray-Ban", letter: "R", bg: "bg-primary" },
  { name: "Vogue", letter: "V", bg: "bg-foreground" },
  { name: "Miu Miu", letter: "M", bg: "bg-primary" },
  { name: "Guess", letter: "G", bg: "bg-muted-foreground" },
  { name: "Dii Collection", letter: "D", bg: "bg-foreground" },
  { name: "Hit Eyewear", letter: "H", bg: "bg-primary" },
];

const BrandsSection = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary/50">
      <div className="container">
        <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide text-center mb-8">
          Explore por Marcas
        </h2>
        <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
          {brandItems.map((brand) => (
            <a key={brand.name} href="#" className="flex flex-col items-center gap-2 group">
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${brand.bg} text-primary-foreground flex items-center justify-center text-2xl md:text-3xl font-bold group-hover:scale-110 transition-transform shadow-md`}>
                {brand.letter}
              </div>
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
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
