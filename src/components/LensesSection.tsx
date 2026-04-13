const LensesSection = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Lentes de Contato</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Conforto e praticidade para o seu dia a dia
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              Encontre as melhores marcas de lentes de contato com preços especiais. Acuvue, Bausch + Lomb, Alcon e muito mais.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider"
            >
              Ver lentes
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-4xl">👁️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LensesSection;
