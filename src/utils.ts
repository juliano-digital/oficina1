import { SITE } from './constants/site';

export const whatsappLink = (message = 'Olá! Gostaria de um orçamento.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
