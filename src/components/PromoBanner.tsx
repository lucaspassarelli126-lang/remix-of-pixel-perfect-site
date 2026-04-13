const PromoBanner = () => {
  return (
    <section className="py-4 md:py-6">
      <div className="container">
        <a href="#" className="block relative overflow-hidden rounded-xl bg-foreground text-background group">
          <div className="flex items-center justify-between p-8 md:p-12">
            <div className="max-w-md">
              <p className="text-sm uppercase tracking-widest mb-2 opacity-70">Ray-Ban</p>
              <h2 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight">
                Autenticidade que atravessa o tempo
              </h2>
              <span className="inline-block border border-background text-background px-6 py-2 rounded-full text-sm font-semibold group-hover:bg-background group-hover:text-foreground transition-colors">
                Confira a coleção
              </span>
            </div>
            <div className="hidden md:block">
              <div className="w-48 h-48 rounded-full border-[20px] border-background/10" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
