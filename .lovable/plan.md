

## Plan: Bädda in Instagram-inlägg i Portfolio-sektionen

### Vad som görs
Ersätter den nuvarande portfolio-sektionen med inbäddade Instagram-inlägg via Instagrams officiella embed-script.

### Inlägg att bädda in (5 unika)
1. `https://www.instagram.com/p/DWCLiiODJgx/`
2. `https://www.instagram.com/p/DVY3BFmjH5O/`
3. `https://www.instagram.com/p/DVwEUrODIMQ/`
4. `https://www.instagram.com/p/DV9PyYwDCqu/`
5. `https://www.instagram.com/p/DUyVfpDDIkg/`

### Tekniska ändringar

**1. `index.html`** — Lägg till Instagrams embed-script i `<body>`:
```html
<script async src="//www.instagram.com/embed.js"></script>
```

**2. `src/components/Portfolio.tsx`** — Uppdatera komponenten:
- Skapa en `InstagramEmbed`-komponent som renderar en `blockquote` med klass `instagram-media` och korrekt `data-instgrm-permalink`
- Använd `useEffect` för att anropa `window.instgrm.Embeds.process()` efter render så att embeds aktiveras
- Visa inläggen i en responsiv grid (1 kolumn mobil, 2-3 kolumner desktop)
- Behåll "Vad vi erbjuder"-listan och Instagram-länkknappen

### Layout
- Responsiv grid med `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` gap
- Varje embed centrerad med max-width 540px (Instagrams standard)
- Befintlig stilistik (svart/vit, typsnitt) bevaras

