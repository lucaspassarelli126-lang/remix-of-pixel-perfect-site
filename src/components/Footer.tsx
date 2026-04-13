import { ChevronDown, Instagram, Facebook, Youtube, Linkedin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const FooterAccordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-background/10 md:border-none">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-3 md:cursor-default">
        <h3 className="text-sm font-bold uppercase tracking-wider">{title}</h3>
        <ChevronDown className={`h-4 w-4 md:hidden transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`${open ? "block" : "hidden"} md:block pb-4 md:pb-0`}>{children}</div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
          <FooterAccordion title="Visão Total Ótica">
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Nossas Lojas</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
            </ul>
          </FooterAccordion>
          <FooterAccordion title="Políticas">
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Política de Envio</a></li>
            </ul>
          </FooterAccordion>
          <FooterAccordion title="Ajuda">
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Meus Favoritos</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Fale Conosco</a></li>
            </ul>
          </FooterAccordion>
          <FooterAccordion title="Atendimento">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Seg a Sex: 09:00 às 18:00 | Sáb: 09:00 às 13:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(19) 99586-4431</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contato@visaototalótica.com.br</span>
              </div>
            </div>
          </FooterAccordion>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider">Siga-nos:</span>
            <a href="#" className="hover:text-background transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-background transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-background transition-colors"><Youtube className="h-5 w-5" /></a>
            <a href="#" className="hover:text-background transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider">Pagamento:</span>
            {["Visa", "Master", "Elo", "Amex", "Pix"].map((p) => (
              <span key={p} className="bg-background/10 text-[10px] font-bold px-2 py-1 rounded">{p}</span>
            ))}
          </div>
        </div>

        <div className="border-t border-background/10 mt-6 pt-6 text-center text-[11px] text-background/50 space-y-1">
          <p>VISÃO TOTAL ÓTICA LTDA - CNPJ: 00.000.000/0001-00</p>
          <p>Av. Carlos Lacerda, 1498 - Parque Res. Vila União, Campinas - SP, 13060-497</p>
          <p>© {new Date().getFullYear()} Visão Total Ótica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
