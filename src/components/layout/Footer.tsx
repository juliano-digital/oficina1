import { SITE } from '../../constants/site';

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-8 text-center text-sm text-zinc-500">
      <p className="font-display text-lg uppercase text-white">{SITE.name} <span className="text-brand">{SITE.tagline}</span></p>
      <p className="mt-2">{SITE.address}</p>
      <p className="mt-4">© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
    </footer>
  );
}
