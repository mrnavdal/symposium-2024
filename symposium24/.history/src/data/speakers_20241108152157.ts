export interface Speaker {
  imageUrl: string;
  name: string;
  description: string;
}

export const speakers: Speaker[] = [
  {
    imageUrl: '/images/speakers/john-doe.jpg',
    name: 'John Doe',
    description: 'Expert in web development and design.'
  },
  {
    imageUrl: '/images/speakers/jane-smith.jpg',
    name: 'Jane Smith',
    description: 'Specialist in AI and machine learning.'
  },
  {
    imageUrl: '/images/speakers/alice-johnson.jpg',
    name: 'Alice Johnson',
    description: 'Experienced project manager with a focus on agile methodologies.'
  }
];
