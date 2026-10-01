import { ArrowRight, MessageCircle } from 'lucide-react';
import { SITE, STATS } from '../../constants/site';
import { whatsappLink } from '../../utils';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-steel">
      <img src={SITE.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-28">
        <span className="inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1 text-sm font-medium text-brand">
          Orçamento grátis · Garantia por escrito
        </span>
        <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] md:text-7xl">
          Seu carro merece quem <span className="text-brand">entende de verdade.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-300">
          Diagnóstico preciso, peças de qualidade e transparência do início ao fim. Sem enrolação, sem surpresa na conta.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappLink()} target="_blank" rel="noreferrer">
            <MessageCircle size={20} aria-hidden /> Chamar no WhatsApp
          </Button>
          <Button href="#servicos" variant="outline">
            Ver serviços <ArrowRight size={20} aria-hidden />
          </Button>
        </div>

        <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold text-white md:text-4xl">{s.value}</dd>
              <p className="text-xs text-zinc-400 md:text-sm">{s.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
