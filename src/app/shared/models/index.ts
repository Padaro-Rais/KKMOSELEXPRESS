export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Destination {
  id: string;
  country: string;
  flag: string;
  code: string;
  description: string;
  services: string[];
  averageTime: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface CounterItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface NavLink {
  label: string;
  route: string;
  exact?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}
