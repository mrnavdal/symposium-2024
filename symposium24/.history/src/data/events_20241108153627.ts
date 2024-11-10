import { CalendarEvent } from '@/types/event'

export const events: CalendarEvent[] = [
  {
    id: '1',
    title: 'Nečekejte na diplom. Jak správně chápat pojem “Investice”',
    type: 'workshop',
    start: new Date(2024, 10, 8, 13, 0), 
    end: new Date(2024, 10, 8, 14, 30),
    speaker: 'Jane Smith',
    location: 'Main Hall',
    description: 'Naučíte se rozpoznat investiční příležitosti, pochopíte možná rizika a objevíte také alternativní možnosti investic jako P2B platformy. Odnesete si praktické tipy, jak si už nyní zajistit finančně svobodnější budoucnost – bez složitostí, jen reálné možnosti.'
  },
  {
    id: '2',
    title: 'Sebehodnota a peníze',
    type: 'workshop',
    start: new Date(2024, 10, 8, 13, 0),
    end: new Date(2024, 10, 8, 15, 0),
    speaker: 'John Doe',
    location: 'Workshop Room A',
    description: 'Zabránila ti někdy nervozita projevit vlastní názor? Je pro tebe těžké mluvit nahlas speciálně o penězích? Popovídáme si o tom, jak zvládat vlastní nervozitu. Půjdeme do běžných situací a řekneme si, jak si říkat o peníze v případě, že podnikáš, na pohovoru nebo jak si říct o povýšení.'
  },
  {
    id: '3',
    title: 'Jak to říct, když to může být nepříjemné?',
    type: 'workshop',
    start: new Date(2024, 10, 8, 17, 0),
    end: new Date(2024, 10, 8, 18, 0),
    speaker: '',
    location: 'Dining Hall',
    description: 'Network with fellow attendees over lunch.'
  }
] 