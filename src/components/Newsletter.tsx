import { useState } from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="bg-primary text-primary-foreground py-10 md:py-14">
      <div className="container text-center">
        <Mail className="h-10 w-10 mx-auto mb-4 opacity-80" />
        <h2 className="text-xl md:text-2xl font-bold mb-2">Fique por dentro das novidades!</h2>
        <p className="text-sm opacity-80 mb-6 max-w-md mx-auto">
          Cadastre-se e receba ofertas exclusivas, lançamentos e promoções diretamente no seu e-mail.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-full text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-background/30"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-full text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-background/30"
          />
          <button type="submit" className="w-full sm:w-auto bg-background text-foreground font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wider">
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
