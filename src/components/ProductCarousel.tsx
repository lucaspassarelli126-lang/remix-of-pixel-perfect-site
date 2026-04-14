import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel = ({ title, products }: ProductCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    update();
    return () => {
      emblaApi.off("select", update);
    };
  }, [emblaApi]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-8 md:py-12"
    >
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide">
            {title}
          </h2>
          <div className="flex items-center gap-2">
            <a href="#" className="text-sm text-primary font-semibold hover:underline mr-3 hidden md:block">
              Ver todos
            </a>
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="p-1.5 rounded-full border border-border hover:bg-accent disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="p-1.5 rounded-full border border-border hover:bg-accent disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-3">
            {products.map((product) => (
              <div key={product.id} className="flex-[0_0_70%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-3 min-w-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductCarousel;
