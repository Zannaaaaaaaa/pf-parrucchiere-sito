---
name: P.F. Parrucchiere
description: Sito vetrina caldo e accogliente per un salone di parrucchieri a Villorba (TV)
colors:
  bruno-sera: "#15110e"
  bruno-sera-soft: "#211a16"
  crema: "#f7ecdf"
  miele: "#cda06a"
  miele-chiaro: "#e7c896"
  rosa-antico: "#b9706c"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  pill: "9999px"
  card: "16px"
spacing:
  section: "112px"
  gap: "24px"
components:
  button-primary:
    backgroundColor: "{colors.miele}"
    textColor: "{colors.bruno-sera}"
    rounded: "{rounded.pill}"
    padding: "14px 40px"
  button-primary-hover:
    backgroundColor: "{colors.miele-chiaro}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.crema}"
    rounded: "{rounded.pill}"
    padding: "14px 36px"
---

# Design System: P.F. Parrucchiere

## 1. Overview

**Creative North Star: "La Sera al Salone"**

Il sito vive l'atmosfera di fine giornata in un salone di quartiere: luce dorata morbida, legno scuro, il profumo dei trattamenti, un titolare che conosce i clienti per nome. È elegante senza essere distante — l'opposto di una boutique di lusso fredda, l'opposto di un'app aziendale clinica. Le foto vere del salone e dei lavori fatti sono il cuore del sito: il design le incornicia, non compete con loro.

Il sistema rifiuta esplicitamente: l'estetica da "sito-prodotto"/app (dashboard, UI clinica), i template generici da parrucchiere con icone e card tutte uguali, qualsiasi freddezza da brand di lusso irraggiungibile.

**Key Characteristics:**
- Sfondo quasi-nero ma caldo (bruno, non grigio/blu)
- Un solo accento dorato (miele) usato con parsimonia sui CTA e i dettagli che contano
- Tipografia serif per il carattere, sans pulito per la leggibilità
- Le sezioni si susseguono una alla volta: un messaggio, una foto, mai affollamento

## 2. Colors

Palette ristretta e calda: un fondo bruno-sera che non è mai grigio freddo, un accento miele usato con parsimonia, crema per il testo.

### Primary
- **Miele** (#cda06a): l'accento dorato-caldo. CTA principali, icone, dettagli che devono attirare l'occhio. Usato con parsimonia — non più del 10% di ogni schermata.
- **Miele Chiaro** (#e7c896): stato hover del Miele, bagliori/glow sui pulsanti.

### Secondary
- **Rosa Antico** (#b9706c): firma del brand (nome del salone in corsivo nel footer), attribuzione delle recensioni. Tocco caldo secondario, mai su superfici grandi.

### Neutral
- **Bruno Sera** (#15110e): sfondo primario di tutto il sito. Bruno-nero caldo, non antracite freddo.
- **Bruno Sera Soft** (#211a16): superficie delle card e delle sezioni alternate, un gradino più chiaro del fondo.
- **Crema** (#f7ecdf): testo primario su sfondo scuro, sempre a contrasto alto.

### Named Rules
**La Regola del Bruno Caldo.** Il nero di questo sito ha sempre una componente bruno/rossa (non scendere mai sotto hue ~25° o verso il blu/grigio): è "sera al salone", non "modalità scura di un'app".

## 3. Typography

**Display Font:** Playfair Display (serif, con fallback Georgia)
**Body Font:** Poppins (sans-serif)

**Character:** Un serif caldo ed espressivo per i titoli (il carattere del salone), un sans geometrico e leggibile per tutto il resto — contrasto netto tra i due, mai due font simili.

### Hierarchy
- **Display** (700, clamp(2.75rem, 7vw, 6rem), 1.05): nome del salone in Hero. Mai oltre 6rem.
- **Headline** (700, clamp(2rem, 4vw, 3rem), 1.1): titoli di sezione ("I Nostri Servizi", "I Nostri Lavori"...).
- **Body** (400, 0.95rem, 1.6): descrizioni, recensioni, testi di supporto. Max ~70ch di riga.
- **Label** (500, 0.875rem): nav, pulsanti, orari.

### Named Rules
**La Regola del Serif Unico.** Solo i titoli usano Playfair Display. Tutto il resto è Poppins — niente terza famiglia di font.

## 4. Elevation

Il sito usa ombre morbide e diffuse per dare profondità calda alle card (recensioni, prodotti, orari), invece di bordi netti o piattezza totale. L'ombra è sempre scura/bruna e molto diffusa, mai dura o grigia — deve sembrare luce di sera che si attenua dietro l'oggetto, non un'ombra di interfaccia.

### Shadow Vocabulary
- **card-ambient** (`box-shadow: 0 20px 45px -15px rgba(8, 5, 3, 0.55)`): ombra di base sotto ogni card/contenitore con sfondo bruno-sera-soft.
- **card-hover** (`box-shadow: 0 24px 60px -10px rgba(205, 160, 106, 0.18)`): bagliore caldo leggero al hover, mai un'ombra grigia generica.

### Named Rules
**La Regola della Luce di Sera.** Nessuna ombra grigia o nera dura. Ogni ombra è bruna/calda e diffusa — mai un rettangolo grigio sotto una card.

## 5. Components

I componenti sono caldi e invitanti: bordi morbidi, niente spigoli duri, il Miele pieno sui pulsanti principali.

### Buttons
- **Shape:** pill (radius 9999px, sempre)
- **Primary:** sfondo Miele piano, testo Bruno Sera, padding 14px 40px
- **Hover / Focus:** sfondo Miele Chiaro, transizione 200ms
- **Ghost:** trasparente, bordo crema/30%, usato come CTA secondaria ("Scopri i servizi")

### Cards / Containers
- **Corner Style:** 16px (rounded-2xl)
- **Background:** Bruno Sera Soft su sfondo Bruno Sera (un gradino di contrasto)
- **Shadow Strategy:** card-ambient di base, card-hover su interazione (vedi Elevation)
- **Border:** nessuno di default — l'ombra calda sostituisce il bordo netto

### Navigation
Overlay trasparente sopra l'Hero (logo + link + numero di telefono), testo Crema, hover Miele. Su mobile collassa al logo + numero di telefono.

### Galleria a Parallasse (componente firma)
Griglia a colonne dove ogni colonna scorre a una velocità leggermente diversa durante lo scroll (via Framer Motion `useScroll`/`useTransform`), per dare movimento alle foto reali dei lavori senza animazioni decorative finte.

## 6. Do's and Don'ts

### Do:
- **Do** usare il Miele (#cda06a) con parsimonia — CTA e dettagli, non superfici larghe.
- **Do** mantenere il bruno-sera caldo come fondo, mai virare verso grigio/blu freddo.
- **Do** lasciare che le foto vere guidino ogni sezione che le contiene.
- **Do** usare ombre calde diffuse (card-ambient) invece di bordi netti per la profondità.

### Don't:
- **Don't** far sembrare il sito un prodotto/app (niente UI clinica, dashboard-like).
- **Don't** usare il template generico da parrucchiere con icone e card tutte identiche in fila.
- **Don't** ripetere lo stesso "eyebrow" maiuscolo-tracciato sopra ogni sezione — è il tic da AI del 2023, va variato o eliminato.
- **Don't** introdurre un terzo font oltre Playfair Display e Poppins.
