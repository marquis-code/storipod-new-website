// Global types for the Storipod application

export interface FeedItem {
  id: number;
  title: string;
  description: string;
  author?: string;
  publishedAt?: string;
  readTime?: string;
  category?: string;
  imageUrl?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface CreatorTool {
  title: string;
  description: string;
  icon?: string;
}

export interface BusinessTool {
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface AppStore {
  name: string;
  url: string;
  icon: string;
  subtitle: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

// User types (for future features)
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'reader' | 'creator' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface Creator extends User {
  bio?: string;
  website?: string;
  socialLinks: SocialLink[];
  subscriberCount: number;
  verified: boolean;
}

export interface Story {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  author: Creator;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  premium: boolean;
  viewCount: number;
  likeCount: number;
  bookmarkCount: number;
  imageUrl?: string;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterSubscription {
  email: string;
  preferences?: string[];
}

// Theme types
export type ThemeMode = 'light' | 'dark' | 'system';

// Component prop types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
}

export interface CardProps {
  variant?: 'default' | 'gradient' | 'glass';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export interface ModalProps {
  show: boolean;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closable?: boolean;
}

// Utility types
export type Nullable<T> = T | null;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Event types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp: string;
}