export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  results: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  minRead: number;
  date: string;
  summary: string;
  content: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  image: string;
  timeline: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  priceRange: string;
  deliveryTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  avatar: string;
}

export interface BookingSubmission {
  name: string;
  email: string;
  serviceId: string;
  budget: string;
  timeline: string;
  description: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}
