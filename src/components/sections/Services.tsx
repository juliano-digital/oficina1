import { SERVICES } from '../../constants/site';
import { Reveal } from '../ui/Reveal';
import { SectionTitle } from '../ui/SectionTitle';

export function Services() {
  return (
    <section id="servicos" className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="NOSSOS SERVIÇOS" title="Do básico ao complexo, resolvemos" subtitle="Tecnologia de diagnóstico e mecânicos experientes cuidando do seu carro." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="group h-full rounded-xl border border-line bg-steel p-6 transition hover:-translate-y-1 hover:border-brand/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-ink">
                  <Icon aria-hidden />
                </div>
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
