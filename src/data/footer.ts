import type { FooterLink, FooterSocial } from '../types';

export const footerLinks: FooterLink[] = [
  {
    title: 'Company',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

export const footerSocials: FooterSocial[] = [
  { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
  { platform: 'Twitter', url: '#', icon: 'twitter' },
  { platform: 'GitHub', url: '#', icon: 'github' },
  { platform: 'Facebook', url: '#', icon: 'facebook' },
];
