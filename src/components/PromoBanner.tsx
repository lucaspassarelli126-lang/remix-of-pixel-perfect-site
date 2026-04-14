import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import promoDesktop from "@/assets/promo-desktop.png";
import promoMobile from "@/assets/promo-mobile.png";

const PromoBanner = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect: moves image from -10% to 10% on Y axis as user scrolls past it
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-7xl px-4">
        <a 
          ref={ref}
          href="#" 
          className="block relative overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-shadow duration-700 bg-primary/5 group"
        >
          {/* Desktop Version */}
          <div className="hidden md:block w-full aspect-[1920/430] overflow-hidden relative">
            <motion.img 
              style={{ y }}
              src={promoDesktop} 
              alt="Verão - tendências de óculos" 
              className="absolute -top-[15%] left-0 w-full h-[130%] object-cover transform transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
          
          {/* Mobile Version */}
          <div className="block md:hidden w-full aspect-[1080/420] overflow-hidden relative">
            <motion.img 
              style={{ y }}
              src={promoMobile} 
              alt="Verão - tendências de óculos" 
              className="absolute -top-[15%] left-0 w-full h-[130%] object-cover transform transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
          
          {/* Subtle Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
