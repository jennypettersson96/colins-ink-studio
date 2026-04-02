import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const POSTS = [
  "https://www.instagram.com/p/DWCLiiODJgx/",
  "https://www.instagram.com/p/DVY3BFmjH5O/",
  "https://www.instagram.com/p/DVwEUrODIMQ/",
  "https://www.instagram.com/p/DV9PyYwDCqu/",
  "https://www.instagram.com/p/DUyVfpDDIkg/",
];

const InstagramEmbed = ({ url }: { url: string }) => (
  <blockquote
    className="instagram-media"
    data-instgrm-permalink={url}
    data-instgrm-version="14"
    style={{
      background: "hsl(var(--card))",
      border: 0,
      margin: "0 auto",
      maxWidth: 540,
      width: "100%",
      minWidth: 326,
    }}
  />
);

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.instgrm?.Embeds.process();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="portfolio" className="py-24 px-4 bg-card" ref={sectionRef}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Portfolio</h2>
        <div className="ink-line w-20 mx-auto mb-10" />

        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Utforska våra senaste arbeten och hitta inspiration till din nästa tatuering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {POSTS.map((url) => (
            <div key={url} className="flex justify-center">
              <InstagramEmbed url={url} />
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Vad vi erbjuder</h3>
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
};

export default Portfolio;
