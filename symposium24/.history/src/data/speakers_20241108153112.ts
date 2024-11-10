export interface Speaker {
  imageUrl: string;
  name: string;
  description: string;
}

export const speakers: Speaker[] = [
  {
    imageUrl: '/images/speakers/tomas-svoboda.png',
    name: 'Tomáš Svoboda',
    description: 'Tomáš je český podnikatel, investor a mentor. Je spoluzakladatelem globální platformy pro udržitelnost Sustainova a pomáhá firmám po celém světě vytvářet trvalý pozitivní dopad.'
  },
  {
    imageUrl: '/images/speakers/lukas-rolf.png',
    name: 'Lukáš Rolf',
    description: 'Lukáš jako ecosystem director působí v platformě „Změna k lepšímu“. Věnuje se budování udržitelných strategií a partnerství. Své zkušenosti z prostředí korporátu a ekologického aktivismu promítá do projektů propojující byznys a neziskový sektor.'
  },
  {
    imageUrl: '/images/speakers/alice-johnson.jpg',
    name: 'Alice Johnson',
    description: 'Experienced project manager with a focus on agile methodologies.'
  }
];
