import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <section id="kontakt" className="py-24 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Kontakt</h2>
      <div className="ink-line w-20 mx-auto mb-10" />

      <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
        Vill du boka en tid eller har frågor? Hör av dig så återkommer vi så snart som möjligt.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <a href="mailto:jpfftesting@mejl.com" className="flex flex-col items-center gap-3 p-6 border border-border hover:border-foreground/40 transition-colors group">
          <Mail size={24} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">jpfftesting@mejl.com</span>
        </a>

        <a href="tel:0702128998" className="flex flex-col items-center gap-3 p-6 border border-border hover:border-foreground/40 transition-colors group">
          <Phone size={24} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">070-212 89 98</span>
        </a>

        <div className="flex flex-col items-center gap-3 p-6 border border-border">
          <MapPin size={24} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Göteborgsvägen 21<br />Uddevalla
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
