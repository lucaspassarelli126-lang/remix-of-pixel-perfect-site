import promoDesktop from "@/assets/promo-desktop.png";
import promoMobile from "@/assets/promo-mobile.png";

const PromoBanner = () => {
  return (
    <section className="py-4 md:py-6">
      <div className="container">
        <a href="#" className="block relative overflow-hidden rounded-xl group">
          <div className="hidden md:block">
            <img src={promoDesktop} alt="Verão - tendências de óculos" className="w-full h-auto object-cover" />
          </div>
          <div className="block md:hidden">
            <img src={promoMobile} alt="Verão - tendências de óculos" className="w-full h-auto object-cover" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
