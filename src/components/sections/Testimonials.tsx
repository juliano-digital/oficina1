import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../constants/site';
import { Reveal } from '../ui/Reveal';
import { SectionTitle } from '../ui/SectionTitle';

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-steel py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="CLIENTES" title="Quem confia, volta" />
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="h-full rounded-xl border border-line bg-ink p-6">
                <div className="mb-3 flex gap-1 text-brand" role="img" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }, (_, n) => <Star key={n} size={18} fill="currentColor" />)}
                </div>
                <blockquote className="text-zinc-300">“{t.text}”</blockquote>
                <figcaption className="mt-4 text-sm"><strong className="text-white">{t.name}</strong> · {t.car}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
