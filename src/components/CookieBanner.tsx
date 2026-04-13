import { useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-foreground text-background p-4 shadow-2xl">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-background/80">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <a href="#" className="underline text-background">Política de Privacidade</a>.
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button onClick={() => setVisible(false)} className="bg-primary text-primary-foreground text-xs font-bold px-5 py-2 rounded-full hover:bg-primary/90 transition-colors">
            Aceitar
          </button>
          <button onClick={() => setVisible(false)} className="border border-background/30 text-background text-xs px-5 py-2 rounded-full hover:bg-background/10 transition-colors">
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
