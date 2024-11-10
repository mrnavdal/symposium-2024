export interface Speaker {
  imageUrl: string; // URL of the speaker's image
  name: string; // Name of the speaker
  description: string; // Description of the speaker
}

export const speakers: Speaker[] = [
  {
    imageUrl: 'https://www.praktickebydleni.cz/wp-content/uploads/uspesny-clovek.png',
    name: 'John Doe',
    description: 'Expert in web development and design.'
  },
  {
    imageUrl: 'https://www.praktickebydleni.cz/wp-content/uploads/uspesny-clovek.png',
    name: 'Jane Smith',
    description: 'Specialist in AI and machine learning.'
  },
  {
    imageUrl: 'https://www.praktickebydleni.cz/wp-content/uploads/uspesny-clovek.png',
    name: 'Alice Johnson',
    description: 'Experienced project manager with a focus on agile methodologies.'
  }
];
