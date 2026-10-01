import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Clock, MapPin, Phone, Send } from 'lucide-react';
import { SERVICES, SITE } from '../../constants/site';
import { whatsappLink } from '../../utils';

interface FormState { name: string; phone: string; service: string; message: string }
const initial: FormState = { name: '', phone: '', service: SERVICES[0].title, message: '' };
const field = 'w-full rounded-md border border-line bg-steel px-4 py-3 text-white placeholder:text-zinc-500 focus:border-brand focus:outline-none';

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [error, setError] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || form.phone.replace(/\D/g, '').length < 10) {
      setError('Informe seu nome e um telefone válido com DDD.');
      return;
    }
    setError('');
    const msg = `Olá! Sou ${form.name} (${form.phone}). Preciso de: ${form.service}. ${form.message}`.trim();
    window.open(whatsappLink(msg), '_blank', 'noopener');
    setForm(initial);
  };

  return (
    <section id="contato" className="bg-ink py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <span className="font-display text-sm tracking-[0.3em] text-brand">ORÇAMENTO GRÁTIS</span>
          <h2 className="mt-2 text-4xl md:text-5xl">Seu carro não pode esperar</h2>
          <p className="mt-4 text-zinc-400">Conte o que está acontecendo e respondemos rapidinho pelo WhatsApp.</p>
          <ul className="mt-8 space-y-4 text-zinc-300">
            <li className="flex items-center gap-3"><Phone className="text-brand" aria-hidden /> {SITE.phoneLabel}</li>
            <li className="flex items-center gap-3"><MapPin className="text-brand" aria-hidden /> {SITE.address}</li>
            <li className="flex items-center gap-3"><Clock className="text-brand" aria-hidden /> {SITE.hours}</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-xl border border-line bg-steel/50 p-6">
          <label className="block"><span className="sr-only">Nome</span>
            <input className={field} name="name" value={form.name} onChange={onChange} placeholder="Seu nome" autoComplete="name" />
          </label>
          <label className="block"><span className="sr-only">Telefone</span>
            <input className={field} name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="Telefone com DDD" autoComplete="tel" />
          </label>
          <label className="block"><span className="sr-only">Serviço</span>
            <select className={field} name="service" value={form.service} onChange={onChange}>
              {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
          </label>
          <label className="block"><span className="sr-only">Mensagem</span>
            <textarea className={field} name="message" rows={3} value={form.message} onChange={onChange} placeholder="Modelo do carro e o que está acontecendo" />
          </label>
          {error && <p role="alert" className="text-sm text-red-400">{error}</p>}
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-md bg-brand py-3.5 font-display text-base font-semibold uppercase tracking-wider text-ink transition hover:bg-brand-dark active:scale-95">
            <Send size={18} aria-hidden /> Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
