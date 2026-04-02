import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl tracking-widest uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
          Colins Ink
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://www.instagram.com/colins_lnk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={handleClick} className="block text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors py-2">
              {l.label}
            </a>
          ))}
          <a href="https://www.instagram.com/colins_lnk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2">
            <Instagram size={18} /> Instagram
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
