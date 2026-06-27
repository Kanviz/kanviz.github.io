// Navigation Types
export interface NavLink {
  name: string;
  href: string;
}

export interface Navigation {
  links: NavLink[];
}

// Hero Section Types
export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

// Feature/Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// Footer Link Types
export interface FooterLink {
  title: string;
  items: { label: string; href: string }[];
}

export interface FooterSocial {
  platform: string;
  url: string;
  icon: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  socials: { platform: string; url: string; icon: string }[];
}

// Site Metadata Types
export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  logo: string;
}
