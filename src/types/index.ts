import type { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  car: string;
  text: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
