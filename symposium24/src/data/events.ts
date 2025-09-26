import { CalendarEvent } from '@/types/event'

export const events: CalendarEvent[] = [
    {
        id: '0',
        title: 'Networking',
        type: 'networking',
        start: new Date(2024, new Date().getMonth(), new Date().getDate(), 19, 0),
        end: new Date(2024, new Date().getMonth(), new Date().getDate(), 22, 59),
        speaker: '',
        location: 'Hlavní sál',
        description: 'Networkujte s ostatními účastníky.'
    },
  {
    id: '1',
    title: 'Nečekejte na diplom. Jak správně chápat pojem "Investice"',
    type: 'workshop',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 10), 
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 40),
    speaker: 'Václav Vidlička',
    location: 'Cashmere (sraz před schody do nejnižšího patra)',
    description: 'Naučíte se rozpoznat investiční příležitosti, pochopíte možná rizika a objevíte také alternativní možnosti investic jako P2B platformy. Odnesete si praktické tipy, jak si už nyní zajistit finančně svobodnější budoucnost – bez složitostí, jen reálné možnosti.'
  },
  {
    id: '2',
    title: 'Sebehodnota a peníze',
    type: 'workshop',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 12, 20),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 50),
    speaker: 'Lucie Audi',
    location: 'Cashmere (sraz před schody do nejnižšího patra)',
    description: 'Zabránila ti někdy nervozita projevit vlastní názor? Je pro tebe těžké mluvit nahlas speciálně o penězích? Popovídáme si o tom, jak zvládat vlastní nervozitu. Půjdeme do běžných situací a řekneme si, jak si říkat o peníze v případě, že podnikáš, na pohovoru nebo jak si říct o povýšení.'
  },
  {
    id: '3',
    title: 'Jak to říct, když to může být nepříjemné?',
    type: 'workshop',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 9, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 11, 0),
    speaker: 'Petr Sucháček',
    location: 'Cashmere (sraz před schody do nejnižšího patra)',
    description: 'Rádi byste v práci mluvili otevřeně a konstruktivně o nepříjemných věcech? Stáli byste o to umět ustát emočně vypjatou situaci? Nenásilná komunikace nabízí principy a postupy, které vám v tom mohou pomoci. Pojďte si je vyzkoušet na vlastní kůži.'
  },
  {
    id: '4',
    title: 'Udržitelnost jako cesta k vyspělému Česku',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 40),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 10),
    speaker: 'Lukáš Rolf',
    location: 'Hlavní sál',
    description: 'Celý svět hledá cesty k zelenější ekonomice. 92 procent světového HDP je tvořeno v zemích, které se zavázaly snížit emise na čistou nulu. Směr je jasný a Čína i USA zařadily další rychlostní stupeň. Jaké byznysové příležitosti tento zelený závod přináší pro Česko? A pro vaši firmu nebo startup?'
  },
  {
    id: '5',
    title: 'Jak CzechInvest akceleruje inovace',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 12, 20),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 12, 50),
    speaker: 'Dominik Urban',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'V této přednášce budou představeny dva klíčové startupové programy CzechInvestu: Technologická Inkubace a Akcelerace. Tyto programy se zaměřují na podporu inovativních technologií napříč různými obory. Posluchači se seznámí s hlavními kritérii pro přijetí, procesem hodnocení projektů a kategorizací uznatelných výdajů. Získáte tak ucelený přehled o tom, jak tyto programy mohou podpořit růst a rozvoj vašeho startupu.'
  },
  {
    id: '6',
    title: 'Warriors mindset, jak vybudovat globální firmu s dosahem z gauče',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 12, 50),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 20),
    speaker: 'Tomáš Svoboda',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Jak používám Warrior Mindset v podnikání, při kterém jsem rozjel firmu z gauče do 7-místného exitu za 3 roky? Jaké principy používat pro pozitivní dopad, úspěch zákazníků a přeměnu jejich firem na údržitelné podnikání? To vše se dozvíte v přednášce Tomáše Svobody.'
  },
  {
    id: '7',
    title: 'Najdi (znovu) svůj směr: tipy z koučovací praxe',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 20),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 50),
    speaker: 'Sylva Žáková Talpová',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Začátek podnikání je typickou složitou situací, ve které je třeba udělat velké množství rozhodnutí. Taková rozhodnutí ale děláme každý den, celý život. Koučink jedním z nejefektivnějších nástrojů pro osobní a profesní růst. Společně si projdeme, o čem koučink je a také si ukážeme praktické tipy a triky, které vám pomohou posunout se správným směrem. Dotkneme se i komunikace, vyjednávání a dobrých otázek.'
  },
  {
    id: '8',
    title: 'Kontroverze leadersipu, jak nekonvenční přístupy mění hru.',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 10),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 40),
    speaker: 'Martin Urban',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'V této přednášce se podíváme na kontroverzní témata v leadershipu, která často vyvracejí tradiční představy o tom, jak by vedení mělo vypadat. Zaměříme se na to, jak mohou netradiční přístupy měnit pravidla hry a proč v některých situacích funguje přesný opak toho, co se běžně očekává. Na základě svých zkušeností vám ukážu, proč některé zavedené metody neplatí v určitých situacích, týmech, firmách či dokonce generacích. Připravte se na příběhy z reálných situací, které mohou změnit váš pohled na leadership.'
  },
  
  {
    id: '10',
    title: 'Jak testovat produkt za minimální náklady',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 10),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 40),
    speaker: 'Markéta Uhrová',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Testování se zákazníky: I bez hotového produktu můžete svůj produkt / prototyp otestovat rychle a levně. Zaměřím se nejen na to, jak a na co ptát budoucích zákazníků, ale i jak levně ukázat, co máte pro zákazníky připraveno. Jak si to ověřit dříve než utratíte spoustu peněz za vývoj.'
  },
  {
    id: '11',
    title: 'Komunikace s dopadem, jak přetavit udržitelnost v úspěšnou strategii',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 30),
    speaker: 'Kateřina Leiutner Genttnerová',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Udržitelné podnikání – termín, který slyšíme ze všech stran. Ale rozumíme mu opravdu všichni? Ve skutečnosti jde o témata, na kterých se většina z nás shodne, jen se nyní skrývají pod jedním označením, které může mít pro někoho negativní konotaci. Jak zajistit, aby ve vaší firmě skutečně chápali, co to znamená? Jak tento pojem a s ním spojené principy prezentovat nejen interně, ale i obchodním partnerům, zákazníkům a investorům? A co je nejdůležitější – kde začít, co prioritizovat a na co nezapomenout při zavádění principů udržitelnosti do vašeho podnikání?'
  },
  {
    id: '12',
    title: 'Mohou moje peníze vydělávat místo mě?',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 30),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 0),
    speaker: 'Václav Vidlička',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Pojďme se společně podívat pod pokličku velmi populárního pojmu "investování". Co to vlastně znamená, jak nám dnešní technologie umožňují investovat velmi snadno, rychle a prakticky odkudkoliv. Vysvětlíme si, že investice se nerovná tomu, že přijdu o peníze, ani se neztotožníme s tím, že investice = akcie, bitcoin, zlato. Podíváme se na to, co pojem investice znamená ve své pravé podstatě a jak si své portfolium nastavit podle svých životních cílů a potřeb.'
  },
  {
    id: '13',
    title: 'Jak z komunity vybudovat firmu',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 30),
    speaker: 'Lucie Audi',
    location: 'Hlavní sál',
    //TODO: Add description
    description: 'Vzdělávací platforma #HolkyzMarketingu se za posledních 10 let svého fungování stala největší českou komunitou marketérek. V tuhle chvíli má už 40 000 členek. Na základě jejího úspěchu se zakladatelky rozhodly vybudovat další vzdělávací platformu a komunitu #HolkyzByznysu. Jak takové budování komunity probíhá? Co to vlastně komunita je a jak ji využít pro svůj byznys? A jak si ji dlouhodobě a efektivně udržet?'
  },
  {
    id: '14',
    title: 'Panelová diskuse',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 50),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 18, 45),
    speaker: '',
    location: 'Hlavní sál',
    //TODO: Add description
    description: ''
  },
  {
    id: '14',
    title: 'Prohlídka Clubca s CTP',
    type: 'other',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 19, 10),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 19, 40),
    speaker: 'Eliška Malachová',
    location: 'Sraz před schody do nejnižšího patra',
    description: 'Kromě přednášek a workshopů se také můžete těšit na jedinečnou CLUBCO TOUR a nechat se provést prostory Clubco ve Vlněně. 😍 Pokud jste začínající podnikatelé nebo prostě jen hledáte inspiraci pro své podnikatelské ambice, neměli byste si rozhodně nechat ujít tuto jedinečnou příležitost v rámci konference Symposium. Večer od 20:10 se můžete připojit ke komentované prohlídce prostor Clubco ve Vlněně, kterou povede Event and community associate Eliška Malachová. \n\nNa programu bude:\n🔸 Historie Clubco - jak vše začalo až po současnost.\n🔸 Nahlédnutí do moderního interiéru, který může být inspirací pro váš pracovní prostor.\n🔸 Výhody členství v coworkingovém prostoru - kultura, networking a podpora, kterou potřebujete. \n🔸 Podcastové studio a další novinky.\n\nEliška Malachová vás provede úžasným prostorem Clubco ve Vlněně. Těšíme se na vás! 🚀'
},
]