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
    <nav className="relative z-40 -mt-5 md:-mt-6 mb-4 md:mb-8">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_-15px_rgba(10,20,144,0.25)] rounded-full px-1 py-1 relative">
            {/* Neon Flash Accent */}
            <div className="absolute inset-x-8 -bottom-px h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-[1px]" />
            
            <ul className="flex items-center justify-center gap-0.5 md:gap-1 overflow-x-auto no-scrollbar snap-x relative z-10">
              {categories.map((cat) => (
                <li key={cat.name} className="snap-center">
                  <a
                    href={cat.href}
                    className="group flex items-center gap-1.5 px-2 md:px-3.5 py-2 rounded-full transition-all duration-300 hover:bg-primary/5 whitespace-nowrap"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted/20 group-hover:bg-primary/10 transition-colors">
                      <cat.icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-all duration-300" />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wide text-muted-foreground group-hover:text-primary transition-colors">
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
