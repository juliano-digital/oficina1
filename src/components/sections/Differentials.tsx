import { DIFFERENTIALS, SITE } from '../../constants/site';
import { Reveal } from '../ui/Reveal';

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-steel py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <img src={SITE.aboutImage} alt="Mecânico da AutoForte trabalhando em um veículo" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
        </Reveal>
        <Reveal delay={150}>
          <span className="font-display text-sm tracking-[0.3em] text-brand">POR QUE A AUTOFORTE</span>
          <h2 className="mt-2 text-4xl md:text-5xl">Confiança se constrói com transparência</h2>
          <ul className="mt-8 space-y-6">
            {DIFFERENTIALS.map(({ title, description, icon: Icon }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand text-ink"><Icon aria-hidden /></span>
                <div>
                  <h3 className="text-lg">{title}</h3>
                  <p className="text-sm text-zinc-400">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
