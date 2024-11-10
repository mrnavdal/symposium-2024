export interface Speaker {
  imageUrl: string; // URL of the speaker's image
  name: string; // Name of the speaker
  description: string; // Description of the speaker
}

export const speakers: Speaker[] = [
  {
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.praktickebydleni.cz%2Fwp-content%2Fuploads%2Fuspesny-clovek.png&f=1&nofb=1&ipt=cde9f2a8de8db5a1d8d3f8cc0803fdff2445b90e34b507b71d5e8f4e118dc298&ipo=images',
    name: 'John Doe',
    description: 'Expert in web development and design.'
  },
  {
    imageUrl: 'https://example.com/image2.jpg',
    name: 'Jane Smith',
    description: 'Specialist in AI and machine learning.'
  },
  {
    imageUrl: 'https://example.com/image3.jpg',
    name: 'Alice Johnson',
    description: 'Experienced project manager with a focus on agile methodologies.'
  }
];
