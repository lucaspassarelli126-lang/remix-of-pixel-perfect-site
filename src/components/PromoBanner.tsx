import promoDesktop from "@/assets/promo-desktop.png";
import promoMobile from "@/assets/promo-mobile.png";

const PromoBanner = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-7xl px-4">
        <a 
          href="#" 
          className="block relative overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-shadow duration-700 bg-primary/5 group"
        >
          {/* Desktop Version */}
          <img 
            src={promoDesktop} 
            alt="Verão - tendências de óculos" 
            className="hidden md:block w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" 
          />
          
          {/* Mobile Version */}
          <img 
            src={promoMobile} 
            alt="Verão - tendências de óculos" 
            className="block md:hidden w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" 
          />
          
          {/* Subtle Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
