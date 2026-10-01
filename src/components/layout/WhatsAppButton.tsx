import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../../utils';

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
    >
      <MessageCircle size={28} aria-hidden />
    </a>
  );
}
