import {
  BadgeCheck, Clock, Disc, Gauge, ShieldCheck, Thermometer, Wrench, Zap,
} from 'lucide-react';
import type { NavItem, Service, Step, Testimonial } from '../types';

// ✏️ PERSONALIZE: dados da sua oficina
export const SITE = {
  name: 'AutoForte',
  tagline: 'Mecânica & Diagnóstico',
  whatsapp: '5511999999999', // DDI + DDD + número, só dígitos
  phoneLabel: '(11) 99999-9999',
  address: 'Av. das Oficinas, 1234 – Centro, São Paulo/SP',
  hours: 'Seg a Sex: 8h às 18h · Sáb: 8h às 13h',
  instagram: '@autoforte.oficina',
  heroImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1800&q=70',
  aboutImage: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1000&q=70',
} as const;

export const NAV: NavItem[] = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Clientes', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export const SERVICES: Service[] = [
  { title: 'Revisão Completa', description: 'Óleo, filtros, fluidos e 30 itens checados para seu carro rodar sem susto.', icon: Wrench },
  { title: 'Freios', description: 'Pastilhas, discos e fluido com peças de linha e teste de frenagem.', icon: Disc },
  { title: 'Suspensão e Direção', description: 'Fim da vibração e do desgaste irregular dos pneus. Alinhamento e balanceamento.', icon: Gauge },
  { title: 'Injeção e Elétrica', description: 'Diagnóstico com scanner de última geração: achamos o defeito, não chutamos.', icon: Zap },
  { title: 'Ar-condicionado', description: 'Higienização, recarga de gás e reparo para o frescor que você merece.', icon: Thermometer },
  { title: 'Check-up de Viagem', description: 'Segurança para a estrada: pneus, freios, motor e iluminação revisados.', icon: ShieldCheck },
];

export const DIFFERENTIALS = [
  { title: 'Orçamento claro, sem surpresa', description: 'Você aprova cada serviço antes de começarmos.', icon: BadgeCheck },
  { title: 'Garantia por escrito', description: 'Serviço e peças com garantia documentada.', icon: ShieldCheck },
  { title: 'Entrega no prazo combinado', description: 'Respeitamos seu tempo. Avisamos cada etapa pelo WhatsApp.', icon: Clock },
] as const;

export const STEPS: Step[] = [
  { title: 'Fale com a gente', description: 'Chame no WhatsApp ou agende pelo site em 1 minuto.' },
  { title: 'Diagnóstico', description: 'Inspeção e scanner para encontrar a causa real do problema.' },
  { title: 'Você aprova', description: 'Orçamento detalhado, com fotos. Só fazemos o que você autorizar.' },
  { title: 'Carro pronto', description: 'Teste final, entrega e garantia. Rodou, confiou.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Carlos M.', car: 'Honda Civic', text: 'Me mostraram a peça velha e explicaram tudo. Transparência rara hoje em dia.' },
  { name: 'Fernanda L.', car: 'Jeep Renegade', text: 'Outras oficinas não acharam o defeito. Aqui resolveram no mesmo dia.' },
  { name: 'Roberto S.', car: 'VW Gol', text: 'Preço justo, prazo cumprido e o carro nunca andou tão bem. Já indiquei.' },
];

export const STATS = [
  { value: '15+', label: 'anos de experiência' },
  { value: '8 mil', label: 'carros atendidos' },
  { value: '4,9★', label: 'avaliação no Google' },
] as const;
