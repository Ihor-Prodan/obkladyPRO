export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // The name of Lucide icon to display
  detailedWorks: string[]; // List of specific tasks
}

export interface Project {
  id: string;
  title: string;
  category: 'all' | 'tiles' | 'drywall' | 'painting' | 'complex';
  categoryLabel: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  areaSqM: number;
  durationDays: number;
  materialsUsed: string[];
  stagesOfWork: string[];
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  viberLink: string;
  telegramLink: string;
  instagramDisplay: string;
  instagramLink: string;
  email: string;
  workingHours: string;
  coverageArea: string;
}

export interface ClientInquiry {
  id: string;
  name: string;
  phone: string;
  serviceCategory: string;
  message: string;
  createdAt: string;
  status: 'new' | 'viewed';
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}