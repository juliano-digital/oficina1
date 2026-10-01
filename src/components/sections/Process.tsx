import { STEPS } from '../../constants/site';
import { Reveal } from '../ui/Reveal';
import { SectionTitle } from '../ui/SectionTitle';

export function Process() {
  return (
    <section id="processo" className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="COMO FUNCIONA" title="Simples do início ao fim" />
        <ol className="grid gap-6 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 100} className="h-full">
                <div className="h-full rounded-xl border border-line p-6">
                  <span className="font-display text-6xl font-bold text-brand/25">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
