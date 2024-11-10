export interface Speaker {
  imageUrl: string; // URL of the speaker's image
  name: string; // Name of the speaker
  description: string; // Description of the speaker
}

export const speakers: Speaker[] = [
  {
    imageUrl: 'https://example.com/image1.jpg',
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
