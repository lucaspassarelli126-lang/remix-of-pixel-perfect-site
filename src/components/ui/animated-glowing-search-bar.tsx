import React from 'react';
import { Search, Glasses } from 'lucide-react';

const SearchComponent = () => {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative group">
        <input
          placeholder="O que você está procurando?"
          type="text"
          className="w-full h-[46px] rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white pl-12 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 placeholder-white/70 transition-all duration-300"
        />
        <Glasses className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" strokeWidth={1.5} />
        <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white text-[#0A1490] rounded-full p-2 hover:scale-105 transition-transform">
          <Search className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
