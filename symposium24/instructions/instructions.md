# Project overview 
You are building a web application, where users can see a schedule of lectures and workshops, view information about individual lecturers, and view other individual sites that redirect them to other websites

You will be usin Next.js, Tailwind and Lucid icon, Shadcn, motion framer

# Core functionalities
1. Zobrazit jednoduchou stranku s textem a obrazky
   1. Zobrazeni textu s durazem na dobrou citelnost
   2. Zobrazeni obrazku
   3. Text a obrazky jsou ziskavany primo z aplikace (json soubory, png obrazky)
2. Zobrazit casovy rozvrh s proklikem na detaily udalosti a recnika
   1. Zobrazeni rozvrhu s udalostmi podobne jako google calendar
   2. Zvyrazneni udalosti ktera prave probiha a zesednuti udalosti ktera jiz probehla
   3. Informace v nahledu (misto, cas, recnik)
   4. Detail udalosti pri prokliku (popis, proklik na recnika, zobrazeni fotky a informaci)
   5. Udalosti maji 3 druhy barev podle toho jeslti jde o workshop, prednasku nebo networking
3. Responzivita - menit zpusob navigace podle velikosti obrazovky
   1. Pri zobrazeni na telefonu navigovat pomoci navbaru ktery je na spodu obrazovky
   2. Pri vetsim zobrazeni zobrazit postranni navigacni menu
4. Elegantni design, animace
   1. Aplikace by kvuli svoji jednoduchosti mela byt maximalne vizualne pritazliva
5. Proklik pres tlacitko na externi stranku
   1. Jednoduchy proklik a otevreni nove stranky
6. Struktura aplikace je nasledujici:
   1. Uvod (obrazek s textem, proklik na instagram a linkedin)
   2. Rozvrh (kalendar)
   3. Networking (obrazek a texty)
   4. panelova diskuse - odkaz na slido
   5. zpetna vazba - odkaz na google forms
# Doc
Documentation how to use React big calenda
'''
// pages/calendar.js
import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Příklad událostí
    setEvents([
      {
        title: 'Meeting with Bob',
        start: new Date(2024, 10, 8, 10, 0),
        end: new Date(2024, 10, 8, 11, 0),
      },
      {
        title: 'Conference Call',
        start: new Date(2024, 10, 8, 13, 30),
        end: new Date(2024, 10, 8, 14, 30),
      },
    ]);
  }, []);

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="day"
        style={{ height: '100%' }}
      />
    </div>
  );
}
'''


# Current file structure
├── README.md
├── components.json
├── instructions
│   └── instructions.md
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   └── ui
│   └── lib
│       └── utils.ts
├── tailwind.config.ts
└── tsconfig.json