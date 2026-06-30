# TODO.md — Elegantnejší dizajn pre inMediaVeritas

## Cieľ dizajnu

Premeniť stránku z technického prototypu na elegantnú, dôveryhodnú landing page v štýle:

* premium SaaS
* investigatívna žurnalistika
* trust-tech
* privacy / verification infrastructure

---

## 1. Globálny vizuálny štýl

* [ ] Nastaviť jednotnú tmavú farebnú paletu
* [ ] Použiť iba 1–2 accent farby
* [ ] Zjednotiť pozadie, texty, borders a card styling
* [ ] Pridať jemné gradienty namiesto výrazných farieb
* [ ] Zväčšiť whitespace medzi sekciami
* [ ] Zjednotiť border radius na kartách, buttonoch a inputoch

### Navrhovaná paleta

```css
:root {
  --bg: #0b1020;
  --surface: #111827;
  --surface-soft: #172033;
  --text: #f8fafc;
  --muted: #94a3b8;
  --accent: #38bdf8;
  --accent-2: #a78bfa;
  --border: rgba(255,255,255,.10);
}
```

---

## 2. Homepage štruktúra

Premeniť homepage na túto štruktúru:

* [ ] Hero section
* [ ] 3-step “How it works” cards
* [ ] Demo / “See it in action”
* [ ] Technical architecture
* [ ] Subscribe CTA
* [ ] Footer

Odporúčané poradie:

```md
Hero
↓
How it works
↓
See it in action
↓
Technical architecture
↓
Subscribe CTA
↓
Footer
```

---

## 3. Hero sekcia

* [ ] Prepísať headline na silnejší a elegantnejší
* [ ] Pridať krátky eyebrow text nad headline
* [ ] Pridať jasné CTA buttons
* [ ] Zväčšiť headline
* [ ] Zarovnať hero na stred
* [ ] Pridať viac priestoru nad a pod hero sekciou

### Navrhovaný text

```md
Eyebrow:
Verifiable media infrastructure

Headline:
Truth you can prove, not just trust.

Description:
inMediaVeritas helps journalists, witnesses and newsrooms verify real-world media with privacy-preserving proofs and blockchain-backed credibility.

Buttons:
See proof of concept
Meet the team
```

---

## 4. Navigácia

* [ ] Spraviť navigáciu sticky
* [ ] Použiť glassmorphism efekt
* [ ] Zmenšiť a zjednodušiť menu
* [ ] Premeniť Subscribe link na button
* [ ] Pridať hover states
* [ ] Zabezpečiť dobré správanie na mobile

### Menu

```md
Home
Team
Subscribe
```

---

## 5. “How it works” sekcia

* [ ] Nahradiť dlhý technický popis tromi jednoduchými kartami
* [ ] Každá karta má číslo, názov a krátky popis
* [ ] Použiť jednotný card design
* [ ] Technický diagram presunúť nižšie

### Karty

```md
01 Capture
Verified reporters upload original media with location proof.

02 Verify
Local witnesses confirm or dispute the event privately using zk proofs.

03 Publish
Newsrooms access trusted media and verification proofs.
```

---

## 6. Technický diagram

* [ ] Nepoužívať technický diagram ako hlavný hero vizuál
* [ ] Presunúť diagram do sekcie “Technical architecture”
* [ ] Pridať krátky úvodný text pred diagram
* [ ] Zmenšiť vizuálnu dominanciu diagramu
* [ ] Dať diagram do elegantnej card kontajnera
* [ ] Pridať border, radius a jemný shadow

### Nadpis sekcie

```md
Technical architecture

A privacy-preserving verification pipeline connecting reporters, witnesses and media agencies through zero-knowledge proofs and blockchain-backed credibility.
```

---

## 7. Odstránenie duplicít

* [ ] Skontrolovať homepage HTML
* [ ] Odstrániť duplicitnú sekciu “So what’s our plan?”
* [ ] Odstrániť duplicitnú sekciu “See It In Action”
* [ ] Nepoužívať duplicitu pre desktop/mobile layout
* [ ] Riešiť responsive zobrazenie iba cez CSS

---

## 8. Typography

* [ ] Použiť elegantnejší font pre nadpisy
* [ ] Zväčšiť hlavný headline
* [ ] Zmenšiť množstvo textu v prvom pohľade
* [ ] Nastaviť lepší line-height pre paragraph text
* [ ] Použiť muted farbu pre sekundárne texty
* [ ] Zjednotiť veľkosti nadpisov naprieč stránkami

### Odporúčané nastavenie

```css
body {
  font-family: Inter, system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
}

h1, h2, h3 {
  letter-spacing: -0.04em;
}

p {
  color: var(--muted);
  line-height: 1.7;
}
```

---

## 9. Buttons

* [ ] Vytvoriť `.btn`
* [ ] Vytvoriť `.btn.primary`
* [ ] Vytvoriť `.btn.secondary`
* [ ] Zjednotiť výšku buttonov
* [ ] Pridať hover efekt
* [ ] Použiť gradient iba na hlavné CTA

### Button štýl

```css
.btn {
  height: 52px;
  padding: 0 22px;
  border-radius: 14px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn.primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #020617;
}

.btn.secondary {
  border: 1px solid var(--border);
  color: var(--text);
  background: rgba(255,255,255,.04);
}
```

---

## 10. Cards

* [ ] Zjednotiť card komponent
* [ ] Použiť jemný gradient
* [ ] Pridať border
* [ ] Pridať veľký border radius
* [ ] Pridať jemný shadow
* [ ] Použiť rovnaký padding na všetkých kartách

### Card štýl

```css
.card {
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,.06),
    rgba(255,255,255,.02)
  );
  box-shadow: 0 24px 80px rgba(0,0,0,.22);
}
```

---

## 11. Team page

* [ ] Zjednotiť profily členov tímu do kariet
* [ ] Použiť rovnaký crop fotiek
* [ ] Skrátiť bio texty
* [ ] Zobraziť meno, rolu a krátke bio
* [ ] Pridať malé tagy pre skills / technológie
* [ ] Dlhšie bio presunúť do detailu alebo ponechať nižšie
* [ ] Zabezpečiť rovnaké výšky kariet

### Štruktúra profilu

```md
Photo
Name
Role
Short bio
Tags
```

---

## 12. Subscribe page

* [ ] Premeniť subscribe form na centrovanú card
* [ ] Zjednotiť inputy a selecty
* [ ] Použiť jasný hlavný submit button
* [ ] Pridať trust text pod formulár
* [ ] Zachovať “No spam. No sharing.”
* [ ] Vizuálne zvýrazniť dôvody na odber

### Navrhovaná štruktúra

```md
Stay close to the future of verified media.

Get beta access, development updates and early product insights.

[Email input]
[Role select]
[Subscribe button]

No spam. No sharing. Just meaningful updates.
```

---

## 13. Responsive dizajn

* [ ] Na mobile zmeniť 3-column cards na 1-column
* [ ] Zmenšiť hero headline na mobile
* [ ] Zmenšiť padding sekcií na mobile
* [ ] Skontrolovať overflow pri obrázkoch
* [ ] Skontrolovať navigáciu na malých obrazovkách
* [ ] Otestovať homepage, team page a subscribe page

### Breakpoint

```css
@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }

  .hero {
    padding: 88px 20px 72px;
  }

  .section {
    padding: 72px 20px;
  }
}
```

---

## 14. Footer

* [ ] Pridať jednoduchý elegantný footer
* [ ] Zopakovať krátky positioning projektu
* [ ] Pridať odkazy Home / Team / Subscribe
* [ ] Pridať copyright
* [ ] Použiť muted text

### Footer text

```md
inMediaVeritas
Verifiable media infrastructure for a post-truth world.

Home
Team
Subscribe

© 2026 inMediaVeritas. All rights reserved.
```

---

## 15. Priorita implementácie

### High priority

* [ ] Odstrániť duplicitné sekcie
* [ ] Upraviť hero section
* [ ] Nastaviť novú farebnú paletu
* [ ] Pridať jednotný card styling
* [ ] Vytvoriť 3-step “How it works” sekciu

### Medium priority

* [ ] Upraviť navigáciu
* [ ] Presunúť technický diagram nižšie
* [ ] Vylepšiť subscribe page
* [ ] Upraviť team page profily

### Low priority

* [ ] Pridať micro animations
* [ ] Pridať jemné hover efekty
* [ ] Doplniť detailnejší footer
* [ ] Pridať dark gradient background dekorácie

---

## 16. Finálna kontrola

* [ ] Stránka pôsobí viac ako produkt než školský projekt
* [ ] Hero je jasný do 5 sekúnd
* [ ] CTA sú viditeľné
* [ ] Texty nie sú príliš dlhé
* [ ] Dizajn je jednotný medzi stránkami
* [ ] Mobile verzia funguje dobre
* [ ] Žiadne duplicitné sekcie
* [ ] Žiadny prvok nepôsobí náhodne alebo nedokončene
