import { CalendarEvent } from '@/types/event'

export const events: CalendarEvent[] = [
    {
        id: '0',
        title: 'Networking',
        type: 'networking',
        start: new Date(2024, new Date().getMonth(), new Date().getDate(), 20, 0),
        end: new Date(2024, new Date().getMonth(), new Date().getDate(), 23, 59),
        speaker: '',
        location: 'Hlavní sál',
        description: 'Networkujte s ostatními účastníky.'
    },
  {
    id: '1',
    title: 'Nečekejte na diplom. Jak správně chápat pojem "Investice"',
    type: 'workshop',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 10), 
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 40),
    speaker: 'Martin Urban',
    location: 'Hlavní sál',
    description: 'Naučíte se rozpoznat investiční příležitosti, pochopíte možná rizika a objevíte také alternativní možnosti investic jako P2B platformy. Odnesete si praktické tipy, jak si už nyní zajistit finančně svobodnější budoucnost – bez složitostí, jen reálné možnosti.'
  },
  {
    id: '2',
    title: 'Sebehodnota a peníze',
    type: 'workshop',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 20),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 50),
    speaker: 'Sylva Žáková Talpová',
    location: 'Workshop Room A',
    description: 'Zabránila ti někdy nervozita projevit vlastní názor? Je pro tebe těžké mluvit nahlas speciálně o penězích? Popovídáme si o tom, jak zvládat vlastní nervozitu. Půjdeme do běžných situací a řekneme si, jak si říkat o peníze v případě, že podnikáš, na pohovoru nebo jak si říct o povýšení.'
  },
  {
    id: '3',
    title: 'Jak to říct, když to může být nepříjemné?',
    type: 'workshop',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 10, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 12, 0),
    speaker: 'Kateřina Leiutner Genttnerová',
    location: 'Dining Hall',
    description: 'Rádi byste v práci mluvili otevřeně a konstruktivně o nepříjemných věcech? Stáli byste o to umět ustát emočně vypjatou situaci? Nenásilná komunikace nabízí principy a postupy, které vám v tom mohou pomoci. Pojďte si je vyzkoušet na vlastní kůži.'
  },
  {
    id: '4',
    title: 'Udržitelnost jako cesta k vyspělému Česku',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 40),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 10),
    speaker: 'Lukáš Rolf',
    location: 'Hlavní sál',
    description: 'Celý svět hledá cesty k zelenější ekonomice. 92 procent světového HDP je tvořeno v zemích, které se zavázaly snížit emise na čistou nulu. Směr je jasný a Čína i USA zařadily další rychlostní stupeň. Jaké byznysové příležitosti tento zelený závod přináší pro Česko? A pro vaši firmu nebo startup?'
  },
  {
    id: '5',
    title: 'Jak CzechInvest akceleruje inovace',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 20),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 50),
    speaker: 'Dominik Urban',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Celý svět hledá cesty k zelenější ekonomice. 92 procent světového HDP je tvořeno v zemích, které se zavázaly snížit emise na čistou nulu. Směr je jasný a Čína i USA zařadily další rychlostní stupeň. Jaké byznysové příležitosti tento zelený závod přináší pro Česko? A pro vaši firmu nebo startup?'
  },
  {
    id: '6',
    title: 'Warriors mindset, jak vybudovat globální firmu s dosahem z gauče',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 50),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 20),
    speaker: 'Tomáš Svoboda',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Celý svět hledá cesty k zelenější ekonomice. 92 procent světového HDP je tvořeno v zemích, které se zavázaly snížit emise na čistou nulu. Směr je jasný a Čína i USA zařadily další rychlostní stupeň. Jaké byznysové příležitosti tento zelený závod přináší pro Česko? A pro vaši firmu nebo startup?'
  },
  {
    id: '7',
    title: 'Najdi (znovu) svůj směr: tipy z koučovací praxe',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 20),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 50),
    speaker: 'Sylva Žáková Talpová',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Celý svět hledá cesty k zelenější ekonomice. 92 procent světového HDP je tvořeno v zemích, které se zavázaly snížit emise na čistou nulu. Směr je jasný a Čína i USA zařadily další rychlostní stupeň. Jaké byznysové příležitosti tento zelený závod přináší pro Česko? A pro vaši firmu nebo startup?'
  },
  {
    id: '8',
    title: 'Kontroverze leadersipu, jak nekonvenční přístupy mění hru.',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 10),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 40),
    speaker: 'Martin Urban',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Celý svět hledá cesty k zelenější ekonomice. 92 procent světového HDP je tvořeno v zemích, které se zavázaly snížit emise na čistou nulu. Směr je jasný a Čína i USA zařadily další rychlostní stupeň. Jaké byznysové příležitosti tento zelený závod přináší pro Česko? A pro vaši firmu nebo startup?'
  },
  
  {
    id: '10',
    title: 'Jak testovat produkt za minimální náklady',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 10),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 40),
    speaker: 'Markéta Uhrová',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Celý svět hledá cesty k zelenější ekonomice. 92 procent světového HDP je tvořeno v zemích, které se zavázaly snížit emise na čistou nulu. Směr je jasný a Čína i USA zařadily další rychlostní stupeň. Jaké byznysové příležitosti tento zelený závod přináší pro Česko? A pro vaši firmu nebo startup?'
  },
  {
    id: '11',
    title: 'Komunikace s dopadem, jak přetavit udržitelnost v úspěšnou strategii',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 30),
    speaker: 'Kateřina Leiutner Genttnerová',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Celý svět hledá cesty k zelenější ekonomice. 92 procent světového HDP je tvořeno v zemích, které se zavázaly snížit emise na čistou nulu. Směr je jasný a Čína i USA zařadily další rychlostní stupeň. Jaké byznysové příležitosti tento zelený závod přináší pro Česko? A pro vaši firmu nebo startup?'
  },
  {
    id: '12',
    title: 'Mohou moje peníze vydělávat místo mě?',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 30),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 18, 0),
    speaker: 'Václav Vidlička',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Celý svět hledá cesty k zelenější ekonomice. 92 procent světového HDP je tvořeno v zemích, které se zavázaly snížit emise na čistou nulu. Směr je jasný a Čína i USA zařadily další rychlostní stupeň. Jaké byznysové příležitosti tento zelený závod přináší pro Česko? A pro vaši firmu nebo startup?'
  },
  {
    id: '13',
    title: 'Jak z komunity vybudovat firmu',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 18, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 18, 30),
    speaker: 'Lucie Audi',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Celý svět hledá cesty k zelenější ekonomice. 92 procent světového HDP je tvořeno v zemích, které se zavázaly snížit emise na čistou nulu. Směr je jasný a Čína i USA zařadily další rychlostní stupeň. Jaké byznysové příležitosti tento zelený závod přináší pro Česko? A pro vaši firmu nebo startup?'
  },
  {
    id: '14',
    title: 'Panelová diskuse',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 18, 50),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 19, 45),
    speaker: '',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Celý svět hledá cesty k zelenější ekonomice. 92 procent světového HDP je tvořeno v zemích, které se zavázaly snížit emise na čistou nulu. Směr je jasný a Čína i USA zařadily další rychlostní stupeň. Jaké byznysové příležitosti tento zelený závod přináší pro Česko? A pro vaši firmu nebo startup?'
  },

]