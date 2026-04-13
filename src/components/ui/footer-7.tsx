import React from "react";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: React.ReactNode;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/placeholder.svg",
    alt: "logo",
    title: "Visão Total Ótica",
  },
  sections = [],
  description = "Especialistas em saúde visual e estilo.",
  socialLinks = [],
  copyright = `© ${new Date().getFullYear()} Visão Total Ótica. Todos os direitos reservados.`,
  legalLinks = [],
}: Footer7Props) => {
  return (
    <section className="py-12 md:py-16 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-10 md:h-12"
                />
              </a>
            </div>
            <div className="max-w-[80%] text-sm text-background/70 leading-relaxed">
              {description}
            </div>
            <ul className="flex items-center space-x-6 text-background/60">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-white transition-colors">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-8 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-6 font-bold uppercase tracking-widest text-xs text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm text-background/70">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-white transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-background/10 py-8 text-[10px] md:text-xs font-medium text-background/50 md:flex-row md:items-center md:text-left uppercase tracking-tighter">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-4 md:order-2 md:flex-row md:gap-8">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-white transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
