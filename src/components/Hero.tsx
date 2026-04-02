const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative px-4">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_0%_10%)_0%,_hsl(0_0%_5%)_70%)]" />
    <div className="relative text-center max-w-3xl mx-auto">
      <p className="text-sm tracking-[0.4em] uppercase text-muted-foreground mb-4">Tattoo Studio · Uddevalla</p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
        Colins Ink
      </h1>
      <div className="ink-line w-32 mx-auto mb-6" />
      <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-8">
        Konst på hud. Varje tatuering är unik – skapad med passion och precision.
      </p>
      <a
        href="#kontakt"
        className="inline-block border border-foreground px-8 py-3 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors"
      >
        Boka tid
      </a>
    </div>
  </section>
);

export default Hero;
