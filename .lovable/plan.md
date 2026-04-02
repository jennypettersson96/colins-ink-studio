

## Plan: Clarify that Colins Ink is a tattooer at Studio 451 (not a studio itself)

The current content describes Colins Ink as a "tatueringsstudio" (tattoo studio). The correct framing is that Colins Ink is a **tattoo artist/tatuerare** who works **at** Studio 451. Here are the changes needed:

### Files to update

**1. `src/components/Hero.tsx`**
- Change subtitle from "Tattoo Studio · Uddevalla" to "Tatuerare på Studio 451 · Uddevalla"

**2. `src/components/About.tsx`**
- Rewrite intro: "Colins Ink är en tatuerare baserad på Studio 451 i Uddevalla" (not "en tatueringsstudio")
- Change "Vår studio erbjuder..." to reference Studio 451 properly (e.g. "På Studio 451 erbjuds en avslappnad och professionell miljö...")
- Adjust "vi" (we) language to reflect a single artist if appropriate, or keep plural if it's a brand

**3. `index.html`**
- Title: "Colins Ink – Tatuerare på Studio 451, Uddevalla"
- Meta description: "Colins Ink är en tatuerare på Studio 451 i Uddevalla..."
- OG title: "Colins Ink – Tatuerare på Studio 451"
- OG description: update similarly

**4. `src/components/Contact.tsx`**
- No structural changes needed, contact info already correct

**5. `src/components/Footer.tsx`**
- Already says "Studio 451 · Göteborgsvägen 21" — this is fine

