import promoDesktop from "@/assets/promo-desktop.png";
import promoMobile from "@/assets/promo-mobile.png";

const PromoBanner = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-7xl px-4">
        <a 
          href="#" 
          className="block relative overflow-hidden rounded-[2rem] shadow-xl transition-all duration-1000 group hover:shadow-2xl hover:scale-[1.01]"
        >
          <div className="hidden md:block">
            <img 
              src={promoDesktop} 
              alt="Verão - tendências de óculos" 
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
          <div className="block md:hidden">
            <img 
              src={promoMobile} 
              alt="Verão - tendências de óculos" 
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
          
          {/* Subtle Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
