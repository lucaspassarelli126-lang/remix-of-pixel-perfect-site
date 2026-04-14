import { lazy, Suspense } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import HeroBanner from "@/components/HeroBanner";
import ProductCarousel from "@/components/ProductCarousel";
import BrandsSection from "@/components/BrandsSection";
import PriceRangeSection from "@/components/PriceRangeSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import { queridinosProducts, rayBanProducts } from "@/data/products";

const PromoBanner = lazy(() => import("@/components/PromoBanner"));
const LensesSection = lazy(() => import("@/components/LensesSection"));
const StaggerTestimonials = lazy(() =>
  import("@/components/ui/stagger-testimonials").then((m) => ({
    default: m.StaggerTestimonials,
  }))
);
const Newsletter = lazy(() => import("@/components/Newsletter"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
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

        <Suspense fallback={<SectionFallback />}>
          <PromoBanner />
        </Suspense>

        <ProductCarousel
          title="Ray-Bans Mais Vendidos"
          products={rayBanProducts}
        />

        <Suspense fallback={<SectionFallback />}>
          <LensesSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <StaggerTestimonials />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Newsletter />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default Index;
