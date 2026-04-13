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
    <nav className="bg-background border-b border-border">
      <div className="container">
        <ul className="flex items-center justify-center gap-1 overflow-x-auto py-2">
          {categories.map((cat) => (
            <li key={cat.name}>
              <a
                href={cat.href}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors whitespace-nowrap"
              >
                <cat.icon className="h-4 w-4" />
                <span>{cat.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;
