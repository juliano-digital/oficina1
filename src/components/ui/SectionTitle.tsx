interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="mx-auto mb-12 max-w-2xl text-center">
      <span className="font-display text-sm tracking-[0.3em] text-brand">{eyebrow}</span>
      <h2 className="mt-2 text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-zinc-400">{subtitle}</p>}
    </header>
  );
}
