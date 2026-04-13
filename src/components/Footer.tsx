import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Footer7 } from "./ui/footer-7";
import { Clock, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const sections = [
    {
      title: "Institucional",
      links: [
        { name: "Quem Somos", href: "#" },
        { name: "Nossas Lojas", href: "#" },
        { name: "Trabalhe Conosco", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Políticas",
      links: [
        { name: "Política de Privacidade", href: "#" },
        { name: "Termos de Uso", href: "#" },
        { name: "Trocas e Devoluções", href: "#" },
        { name: "Política de Envio", href: "#" },
      ],
    },
    {
      title: "Ajuda",
      links: [
        { name: "Perguntas Frequentes", href: "#" },
        { name: "Meus Favoritos", href: "#" },
        { name: "Fale Conosco", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
    { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
    { icon: <FaYoutube className="size-5" />, href: "#", label: "YouTube" },
    { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
  ];

  const legalLinks = [
    { name: "Termos e Condições", href: "#" },
    { name: "Privacidade", href: "#" },
  ];

  const description = (
    <div className="space-y-4">
      <p className="text-sm">Especialistas em saúde visual e as melhores marcas de óculos em Campinas.</p>
      <div className="space-y-2 mt-4 text-xs">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 shrink-0 text-primary" />
          <span>Av. Carlos Lacerda, 1498 - Parque Res. Vila União, Campinas - SP, 13060-497</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 shrink-0 text-primary" />
          <span>(19) 99586-4431</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 shrink-0 text-primary" />
          <span>contato@visaototalotica.com.br</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0 text-primary" />
          <span>Seg a Sex: 09:00 - 18:00 | Sáb: 09:00 - 13:00</span>
        </div>
      </div>
    </div>
  );

  return (
    <Footer7
      logo={{
        url: "/",
        src: logo,
        alt: "Visão Total Ótica",
        title: "Visão Total Ótica",
      }}
      sections={sections}
      description={description}
      socialLinks={socialLinks}
      legalLinks={legalLinks}
      copyright={`VISÃO TOTAL ÓTICA LTDA - CNPJ: 00.000.000/0001-00 | © ${new Date().getFullYear()} Todos os direitos reservados.`}
    />
  );
};

export default Footer;

export default Footer;
