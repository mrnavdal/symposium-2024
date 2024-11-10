import { CalendarEvent } from '@/types/event'

export const events: CalendarEvent[] = [
    {
        id: '0',
        title: 'Networking',
        type: 'networking',
        start: new Date(2024, 10, 8, 20, 0),
        end: new Date(2024, 10, 8, 23, 59),
        speaker: '',
        location: 'Hlavní sál',
        description: 'Networkujte s ostatními účastníky.'
    },
  {
    id: '1',
    title: 'Nečekejte na diplom. Jak správně chápat pojem “Investice”',
    type: 'workshop',
    start: new Date(2024, 10, 8, 15, 10), 
    end: new Date(2024, 10, 8, 16, 40),
    speaker: 'Martin Urban',
    location: 'Main Hall',
    description: 'Naučíte se rozpoznat investiční příležitosti, pochopíte možná rizika a objevíte také alternativní možnosti investic jako P2B platformy. Odnesete si praktické tipy, jak si už nyní zajistit finančně svobodnější budoucnost – bez složitostí, jen reálné možnosti.'
  },
  {
    id: '2',
    title: 'Sebehodnota a peníze',
    type: 'workshop',
    start: new Date(2024, 10, 8, 13, 20),
    end: new Date(2024, 10, 8, 14, 50),
    speaker: 'Sylva Žáková Talpová',
    location: 'Workshop Room A',
    description: 'Zabránila ti někdy nervozita projevit vlastní názor? Je pro tebe těžké mluvit nahlas speciálně o penězích? Popovídáme si o tom, jak zvládat vlastní nervozitu. Půjdeme do běžných situací a řekneme si, jak si říkat o peníze v případě, že podnikáš, na pohovoru nebo jak si říct o povýšení.'
  },
  {
    id: '3',
    title: 'Jak to říct, když to může být nepříjemné?',
    type: 'workshop',
    start: new Date(2024, 10, 8, 10, 0),
    end: new Date(2024, 10, 8, 12, 0),
    speaker: 'Kateřina Leiutner Genttnerová',
    location: 'Dining Hall',
    description: 'Rádi byste v práci mluvili otevřeně a konstruktivně o nepříjemných věcech? Stáli byste o to umět ustát emočně vypjatou situaci? Nenásilná komunikace nabízí principy a postupy, které vám v tom mohou pomoci. Pojďte si je vyzkoušet na vlastní kůži.'
  }
] 