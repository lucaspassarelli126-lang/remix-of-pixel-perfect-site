const priceRangeItems = [
  { price: "250", label: "Óculos até R$ 250,00" },
  { price: "450", label: "Óculos de até R$ 450,00" },
  { price: "650", label: "Óculos de até R$ 650,00" },
  { price: "850", label: "Óculos de até R$ 850,00" },
  { price: "1.500", label: "Óculos de até R$ 1.500" },
];

const PriceRangeSection = () => {
  return (
    <section className="py-8 md:py-12 bg-muted/50">
      <div className="container">
        <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide text-center mb-8">
          Navegue por Faixas de Preço
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {priceRangeItems.map((range) => (
            <a
              key={range.price}
              href="#"
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-full aspect-[5/4] bg-[#1a3a8a] rounded-md flex flex-col items-start justify-end p-3 group-hover:scale-105 transition-transform shadow-md relative overflow-hidden">
                <span className="text-[#d4a017] text-xs font-semibold uppercase tracking-wider">
                  Até
                </span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[#d4a017] text-sm font-bold">R$</span>
                  <span className="text-[#d4a017] text-4xl md:text-5xl font-extrabold leading-none">
                    {range.price}
                  </span>
                  <span className="text-[#d4a017] text-sm font-bold">,00</span>
                </div>
              </div>
              <p className="text-sm font-bold text-foreground text-center group-hover:text-primary transition-colors">
                {range.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceRangeSection;
