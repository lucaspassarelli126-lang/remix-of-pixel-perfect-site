import { Search, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-3 gap-4">
        <a href="/" className="flex-shrink-0">
          <span className="text-2xl font-bold text-primary tracking-tight">VISÃO TOTAL ÓTICA</span>
        </a>

        <div className="flex-1 max-w-xl hidden md:flex">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="w-full border border-border rounded-full py-2.5 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <a href="#" className="flex flex-col items-center text-foreground hover:text-primary transition-colors">
            <Heart className="h-5 w-5" />
            <span className="text-[10px] mt-0.5 hidden md:block">Favoritos</span>
          </a>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="w-full border border-border rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-1.5">
            <Search className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
