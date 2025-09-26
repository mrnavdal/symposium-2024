# Symposium 2024

![Next.js](https://img.shields.io/badge/Next.js-12.0.7-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0.23-teal)

## Popis projektu

Symposium 2024 je podpůrná webová aplikace určená pro konferenci Symposium 2024. Tato aplikace a nabízí účastníkům přehledný a interaktivní způsob, jak se orientovat v programu konference, získat informace o jednotlivých řečnících a snadno přistupovat k externím zdrojům.
Funkční verzi aplikace si můžete prohlédnout na [Vercelu](https://symposium-2024.vercel.app)

## Hlavní funkce

1. **Úvodní stránka**
   - Zobrazení textu s důrazem na čitelnost
   - Prezentace obrázků
   - Data načítaná z lokálních JSON souborů a PNG obrázků

2. **Časový rozvrh**
   - Implementace pomocí React Big Calendar
   - Tři typy událostí (workshop, přednáška, networking) s odlišnými barvami
   - Zvýraznění aktuálně probíhající události
   - Ztlumení minulých událostí
   - Náhled informací jako místo, čas a řečník
   - Detailní zobrazení událostí při kliknutí, včetně popisu, odkazu na řečníka a fotek

3. **Responzivní navigace**
   - Mobilní verze s navigačním panelem na spodní části obrazovky
   - Desktopová verze se postranním navigačním menu
   - Přechod mezi režimy na základě velikosti obrazovky definované v Tailwind konfiguraci

4. **Design a animace**
   - Elegantní a vizuálně přitažlivý design
   - Plynulé přechody a animace pomocí Framer Motion

5. **Externí odkazy**
   - Odkazy na Instagram, LinkedIn, Slido pro panelové diskuse a Google Forms pro zpětnou vazbu

## Technologický stack

- **Frontend:**
  - [Next.js](https://nextjs.org)
  - [React](https://reactjs.org)
  - [Tailwind CSS](https://tailwindcss.com)
  - [React Big Calendar](https://github.com/jquense/react-big-calendar)
  - [Framer Motion](https://www.framer.com/motion/)
  - [Lucide](https://lucide.dev) ikony
  - [Shadcn/ui](https://shadcn.com/ui)

- **Jiné závislosti:**
  - [Moment.js](https://momentjs.com) pro manipulaci s daty
  - [Next Themes](https://github.com/pacocoursey/next-themes) pro správu témat
  - [Radix UI](https://www.radix-ui.com) pro přístupné UI komponenty

## Instalace

1. **Klonejte repozitář:**

   ```bash
   git clone https://github.com/vaš-repo/symposium-2024.git
   ```

2. **Přejděte do adresáře projektu:**

   ```bash
   cd symposium-2024
   ```

3. **Nainstalujte závislosti:**

   ```bash
   npm install
   # nebo
   yarn install
   # nebo
   pnpm install
   # nebo
   bun install
   ```

4. **Spusťte vývojový server:**

   ```bash
   npm run dev
   # nebo
   yarn dev
   # nebo
   pnpm dev
   # nebo
   bun dev
   ```

5. **Otevřete aplikaci v prohlížeči:**

   Přejděte na [http://localhost:3000](http://localhost:3000)

## Struktura projektu
```
symposium24/
├── README.md
├── components.json
├── instructions/
│ └── instructions.md
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/
│ ├── file.svg
│ ├── globe.svg
│ ├── next.svg
│ ├── vercel.svg
│ └── window.svg
├── src/
│ ├── app/
│ │ ├── favicon.ico
│ │ ├── fonts/
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── components/
│ │ ├── ui/
│ │ └── ... další komponenty
│ └── lib/
│ └── utils.ts
├── tailwind.config.ts
└── tsconfig.json
```


## Konfigurace

### Tailwind CSS

Konfigurační soubor Tailwind CSS je umístěn v `tailwind.config.ts` a definuje vlastní barvy, písma a responzivní přerušení.

### TypeScript

Projekt je napsán v TypeScriptu, což přináší typovou kontrolu a zlepšenou vývojářskou zkušenost.


