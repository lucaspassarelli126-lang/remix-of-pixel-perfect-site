import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "COMPRE E GANHE",
    subtitle: "Na compra de qualquer óculos de grau, ganhe uma armação solar!",
    bgClass: "bg-primary",
    cta: "Aproveite",
  },
  {
    id: 2,
    title: "RAY-BAN",
    subtitle: "Autenticidade que atravessa o tempo",
    bgClass: "bg-foreground",
    cta: "Confira",
  },
  {
    id: 3,
    title: "LENTES DE CONTATO",
    subtitle: "As melhores marcas com os melhores preços",
    bgClass: "bg-primary",
    cta: "Compre agora",
  },
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
          {banners.map((banner) => (
            <div key={banner.id} className="flex-[0_0_100%] min-w-0">
              <div className={`${banner.bgClass} text-primary-foreground relative overflow-hidden`}>
                <div className="container flex items-center min-h-[300px] md:min-h-[420px] py-12 relative z-10">
                  <div className="max-w-lg">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">{banner.title}</h2>
                    <p className="text-base md:text-lg mb-6 opacity-90">{banner.subtitle}</p>
                    <button className="bg-background text-foreground font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wider">
                      {banner.cta}
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-[30px] border-current" />
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full border-[40px] border-current" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-background transition-colors z-20"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-background transition-colors z-20"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === selectedIndex ? "bg-background" : "bg-background/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
