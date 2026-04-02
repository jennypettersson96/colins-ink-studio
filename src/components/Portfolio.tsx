import { Instagram } from "lucide-react";

const Portfolio = () => (
  <section id="portfolio" className="py-24 px-4 bg-card">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Portfolio</h2>
      <div className="ink-line w-20 mx-auto mb-10" />

      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        Utforska våra senaste arbeten och hitta inspiration till din nästa tatuering. Följ oss på
        Instagram för att se hela vårt portfolio.
      </p>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Vad vi erbjuder</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
          {["Fineline", "Blackwork", "Realism", "Illustrativ", "Dotwork", "Lettering", "Cover-ups", "Custom design"].map((s) => (
            <div key={s} className="border border-border py-3 px-4 hover:border-foreground/40 transition-colors">
              {s}
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://www.instagram.com/colins_lnk/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-foreground px-8 py-3 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors"
      >
        <Instagram size={18} />
        Se portfolio på Instagram
      </a>
    </div>
  </section>
);

export default Portfolio;
