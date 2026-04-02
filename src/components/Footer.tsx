import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span style={{ fontFamily: 'var(--font-heading)' }} className="tracking-widest uppercase">Colins Ink</span>
      <span>Studio 451 · Göteborgsvägen 21, Uddevalla</span>
      <div className="flex items-center gap-4">
        <a href="https://www.instagram.com/colins_lnk/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          <Instagram size={18} />
        </a>
        <span>© {new Date().getFullYear()} JPFF</span>
      </div>
    </div>
  </footer>
);

export default Footer;
