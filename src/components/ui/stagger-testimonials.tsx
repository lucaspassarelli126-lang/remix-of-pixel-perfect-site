import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "A melhor ótica que já visitei. O atendimento é impecável e as armações são de altíssima qualidade. Recomendo para todos!",
    by: "Mariana S., Arquiteta",
    imgSrc: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 1,
    testimonial: "Comprei meus óculos de grau na Visão Total e a entrega foi super rápida. Enxergar bem com estilo não tem preço.",
    by: "Diego F., Engenheiro de Software",
    imgSrc: "https://images.unsplash.com/photo-1594819047050-99defca82545?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 2,
    testimonial: "Sempre tive dificuldade em achar uma armação que combinasse com o meu rosto, mas a curadoria de estilo deles mudou tudo!",
    by: "Camila R., Designer",
    imgSrc: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 3,
    testimonial: "Os óculos de sol duram uma vida! Fiz minha primeira compra há 3 anos e continuam intactos. Qualidade nota mil.",
    by: "Rafael M., Fotógrafo",
    imgSrc: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 4,
    testimonial: "As lentes superaram minhas expectativas, especialmente para quem passa 10 horas por dia no computador como eu.",
    by: "Amanda L., Copywriter",
    imgSrc: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=150&h=150&auto=format&fit=crop&q=80"
  },
  {
    tempId: 5,
    testimonial: "Simplesmente incrível! Sou cliente há anos e o padrão premium do serviço se mantém excelente. Não troco por nada.",
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

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-primary text-primary-foreground border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-14 rounded-full bg-muted object-cover"
        style={{
          boxShadow: isCenter ? "none" : "3px 3px 0px hsl(var(--background))"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-lg font-medium leading-relaxed font-serif",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic font-medium tracking-wide",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

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
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
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
