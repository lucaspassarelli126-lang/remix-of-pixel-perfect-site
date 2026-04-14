import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import banner1Desktop from "@/assets/banners/banner1-desktop.webp";
import banner1Mobile from "@/assets/banners/banner1-mobile.webp";
import banner2Desktop from "@/assets/banners/banner2-desktop.webp";
import banner2Mobile from "@/assets/banners/banner2-mobile.webp";
import banner3Desktop from "@/assets/banners/banner3-desktop.webp";
import banner3Mobile from "@/assets/banners/banner3-mobile.webp";

const banners = [
  { id: 1, desktop: banner1Desktop, mobile: banner1Mobile, alt: "Catálogo de Óculos" },
  { id: 2, desktop: banner2Desktop, mobile: banner2Mobile, alt: "Gente que ama" },
  { id: 3, desktop: banner3Desktop, mobile: banner3Mobile, alt: "Promoção óculos de sol" },
];

const HeroBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {banners.map((banner, index) => (
            <div key={banner.id} className="flex-[0_0_100%] min-w-0">
              {/* Desktop */}
              <div className="hidden md:block aspect-[1920/430]">
                <img
                  src={banner.desktop}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "sync" : "async"}
                  width={1920}
                  height={430}
                />
              </div>
              {/* Mobile */}
              <div className="block md:hidden aspect-[1080/420]">
                <img
                  src={banner.mobile}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "sync" : "async"}
                  width={1080}
                  height={420}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-md hover:bg-background transition-colors z-20"
      >
        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-md hover:bg-background transition-colors z-20"
      >
        <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
      </button>

      <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
