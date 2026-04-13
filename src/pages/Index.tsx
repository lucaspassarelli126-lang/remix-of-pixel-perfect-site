import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import HeroBanner from "@/components/HeroBanner";
import ProductCarousel from "@/components/ProductCarousel";
import BrandsSection from "@/components/BrandsSection";
import PriceRangeSection from "@/components/PriceRangeSection";
import PromoBanner from "@/components/PromoBanner";
import LensesSection from "@/components/LensesSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import { queridinosProducts, rayBanProducts } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col pt-[32px] md:pt-[40px]">
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <TopBar />
      </div>
      <Header />

      <main className="flex-1">
        <HeroBanner />
        <CategoryNav />

        <ProductCarousel
          title="Os Queridinhos do Momento"
          products={queridinosProducts}
        />

        <BrandsSection />

        <PriceRangeSection />

        <PromoBanner />

        <ProductCarousel
          title="Ray-Bans Mais Vendidos"
          products={rayBanProducts}
        />

        <LensesSection />

        <Newsletter />
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default Index;
