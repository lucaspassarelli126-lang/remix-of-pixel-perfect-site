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
    <section className="py-10 md:py-16 overflow-hidden">
      <div className="container max-w-7xl px-4">
        <a 
          ref={ref}
          href="#" 
          className="block relative overflow-hidden rounded-[2rem] shadow-xl transition-shadow duration-1000 group hover:shadow-2xl"
          style={{ height: 'auto', aspectRatio: '1920/430' }} // Ensuring fixed container aspect ratio for parallax to work within
        >
          {/* We scale the image to 120% so it has room to translate up and down without showing edges */}
          <div className="hidden md:block absolute inset-0 -top-[20%] -bottom-[20%]">
            <motion.img 
              style={{ y }}
              src={promoDesktop} 
              alt="Verão - tendências de óculos" 
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
          <div className="block md:hidden absolute inset-0 -top-[20%] -bottom-[20%]">
            <motion.img 
               style={{ y }}
              src={promoMobile} 
              alt="Verão - tendências de óculos" 
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" 
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
