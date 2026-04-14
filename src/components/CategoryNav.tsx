import { Glasses, Sun, Eye, Watch, Star, Sparkles } from "lucide-react";

const categories = [
  { name: "Armações", icon: Glasses, href: "#" },
  { name: "Óculos de Sol", icon: Sun, href: "#" },
  { name: "Lentes de Contato", icon: Eye, href: "#" },
  { name: "Acessórios", icon: Watch, href: "#" },
  { name: "Grandes Marcas", icon: Star, href: "#" },
  { name: "Marcas Exclusivas", icon: Sparkles, href: "#" },
];

const CategoryNav = () => {
  return (
    <nav className="relative z-40 -mt-6 md:-mt-8 mb-4 md:mb-8">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.1)] rounded-2xl md:rounded-full px-2 py-2 overflow-hidden">
            <ul className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar snap-x snap-mandatory">
              {categories.map((cat) => (
                <li key={cat.name} className="snap-center">
                  <a
                    href={cat.href}
                    className="group flex flex-col md:flex-row items-center gap-2 px-4 md:px-6 py-3 rounded-xl md:rounded-full transition-all duration-300 hover:bg-primary/5 whitespace-nowrap"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted/30 group-hover:bg-primary/10 transition-colors duration-300">
                      <cat.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground group-hover:text-primary transition-colors">
                      {cat.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
