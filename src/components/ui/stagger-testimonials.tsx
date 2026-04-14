import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Oi Visão Total! Queria agradecer, foi a melhor ótica que já visitei. O atendimento de vcs é impecável e as armações perfeitas 😍",
    by: "Mariana S., Arquiteta",
    imgSrc: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 1,
    testimonial: "Gente, meus óculos de grau acabaram de chegar! Entrega super rápida. Enxergar bem com estilo não tem preço hahaha 🤓",
    by: "Diego F., Engenheiro de Software",
    imgSrc: "https://images.unsplash.com/photo-1594819047050-99defca82545?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 2,
    testimonial: "Amei a curadoria de estilo que vcs fizeram pra mim! Sempre tive dificuldade de achar uma armação pro meu rosto, ficou perfeita 💖",
    by: "Camila R., Designer",
    imgSrc: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 3,
    testimonial: "Pessoal, os óculos de sol de vcs duram uma vida! Fiz minha primeira compra há 3 anos e continuam intactos. Qualidade nota mil 💯",
    by: "Rafael M., Fotógrafo",
    imgSrc: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 4,
    testimonial: "As lentes superaram minhas expectativas, especialmente pra mim que passo 10h por dia no PC. Muito obg pelo cuidado! 🙏",
    by: "Amanda L., Copywriter",
    imgSrc: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 5,
    testimonial: "Simplesmente incrível! Sou cliente há anos e o padrão premium do serviço se mantém excelente. Não troco por nada 🚀",
    by: "Lucas P., Empreendedor",
    imgSrc: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&auto=format&fit=crop&q=80"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;
  const firstName = testimonial.by.split(' ')[0];

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer transition-all duration-500 ease-in-out flex flex-col overflow-hidden rounded-2xl border border-border/50",
        isCenter 
          ? "z-10 shadow-xl opacity-100 scale-100" 
          : "z-0 shadow-md opacity-40 hover:opacity-70 scale-90 filter grayscale hover:grayscale-0"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -30 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `
      }}
    >
      {/* WhatsApp Header */}
      <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3 shrink-0">
        <img
          src={testimonial.imgSrc}
          alt={testimonial.by}
          className="w-10 h-10 rounded-full object-cover border border-white/20"
        />
        <div className="flex flex-col">
          <span className="text-white font-semibold text-sm md:text-base leading-tight">
            {testimonial.by.split(',')[0]}
          </span>
          <span className="text-white/80 text-[11px] leading-tight mt-0.5">online</span>
        </div>
      </div>

      {/* WhatsApp Chat Body */}
      <div 
        className="flex-1 p-3 md:p-4 bg-[#efeae2] flex flex-col gap-4 relative"
        style={{ 
          backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', 
          backgroundSize: 'cover', 
          backgroundBlendMode: 'overlay' 
        }}
      >
        {/* Store's Message */}
        <div className="bg-[#dcf8c6] self-end p-2.5 rounded-lg text-[13px] md:text-sm text-gray-800 max-w-[85%] shadow-sm relative rounded-tr-none">
           Oi {firstName}, tudo bem? O que achou da sua experiência conosco? 🥰
           <span className="text-[10px] text-gray-500 float-right mt-2 ml-3 flex items-center gap-1">
             14:30 <span className="text-[#53bdeb] font-bold tracking-tighter">✓✓</span>
           </span>
           <div className="absolute top-0 -right-2 w-0 h-0 border-[6px] border-transparent border-t-[#dcf8c6] border-l-[#dcf8c6]" />
        </div>

        {/* Client's Reply (Testimonial) */}
        <div className="bg-white self-start p-3 rounded-lg text-[13px] md:text-sm text-gray-800 max-w-[90%] shadow-sm relative rounded-tl-none font-normal leading-relaxed">
          {testimonial.testimonial}
          <div className="text-[10px] text-gray-400 text-right mt-1.5">14:32</div>
          <div className="absolute top-0 -left-2 w-0 h-0 border-[6px] border-transparent border-t-white border-r-white" />
        </div>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      handleMove(1);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [testimonialsList, isHovered]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FAF9F6] to-white">
      <div className="container mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-light text-center text-foreground">
          O que nossos <span className="font-serif italic font-medium text-primary">clientes</span> dizem
        </h2>
      </div>
      <div
        className="relative w-full overflow-hidden"
        style={{ height: 500 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length - 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 z-20">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-12 w-12 md:h-14 md:w-14 items-center justify-center text-xl md:text-2xl transition-colors rounded-full",
              "bg-background text-primary border border-border hover:bg-primary hover:text-primary-foreground shadow-sm",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-12 w-12 md:h-14 md:w-14 items-center justify-center text-xl md:text-2xl transition-colors rounded-full",
              "bg-background text-primary border border-border hover:bg-primary hover:text-primary-foreground shadow-sm",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
