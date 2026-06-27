import type { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Data Visualization',
    description: 'Transform your raw data into beautiful, interactive dashboards that make insights pop and decisions clear.',
    icon: 'chart-bar',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: '2',
    title: 'Business Intelligence',
    description: 'Gain a competitive edge with comprehensive BI solutions that connect all your data sources seamlessly.',
    icon: 'trending-up',
    color: 'from-purple-500 to-pink-400',
  },
  {
    id: '3',
    title: 'Custom Analytics',
    description: 'Tailored analytics solutions designed specifically for your business needs and industry challenges.',
    icon: 'target',
    color: 'from-orange-500 to-red-400',
  },
  {
    id: '4',
    title: 'Strategic Consulting',
    description: 'Expert guidance to help you leverage data-driven decision making across your entire organization.',
    icon: 'lightbulb',
    color: 'from-emerald-500 to-teal-400',
  },
];
