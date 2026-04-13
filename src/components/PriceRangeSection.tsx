import { priceRanges } from "@/data/brands";

const PriceRangeSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide text-center mb-8">
          Navegue por Faixas de Preço
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {priceRanges.map((range) => (
            <a
              key={range.value}
              href="#"
              className="group relative overflow-hidden rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ backgroundColor: range.color }}
            >
              <p className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {range.label}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Ver produtos →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceRangeSection;
