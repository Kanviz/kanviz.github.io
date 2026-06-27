import type { FooterLink, FooterSocial } from '../types';

export const footerLinks: FooterLink[] = [
  {
    title: 'Company',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const footerSocials: FooterSocial[] = [
  { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
  { platform: 'Twitter', url: '#', icon: 'twitter' },
  { platform: 'GitHub', url: '#', icon: 'github' },
  { platform: 'Facebook', url: '#', icon: 'facebook' },
];
