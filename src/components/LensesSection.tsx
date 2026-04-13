import lensesModel from "@/assets/lenses-model.png";

const LensesSection = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Estilo & Personalidade</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Encontre o óculos perfeito para você
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              Cada rosto conta uma história. Descubra armações que combinam com seu estilo e realçam sua personalidade. De clássicos a modernos, temos o par ideal para você.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider"
            >
              Ver coleção
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={lensesModel}
              alt="Modelo usando óculos de sol"
              className="w-full max-w-sm rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LensesSection;
