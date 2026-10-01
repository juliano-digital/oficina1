import { useState } from 'react';
import { Menu, Wrench, X } from 'lucide-react';
import { NAV, SITE } from '../../constants/site';
import { useScrolled } from '../../hooks/useScrolled';
import { whatsappLink } from '../../utils';
import { Button } from '../ui/Button';

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'bg-ink/95 shadow-lg backdrop-blur' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="flex items-center gap-2 font-display text-2xl font-bold uppercase text-white">
          <Wrench className="text-brand" aria-hidden /> {SITE.name}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-zinc-300 transition hover:text-brand">
              {item.label}
            </a>
          ))}
          <Button href={whatsappLink()} target="_blank" rel="noreferrer" className="!px-4 !py-2 !text-sm">
            Orçamento grátis
          </Button>
        </nav>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 pb-5 md:hidden">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded py-3 text-lg text-zinc-200 hover:text-brand">
              {item.label}
            </a>
          ))}
          <Button href={whatsappLink()} target="_blank" rel="noreferrer">Orçamento grátis</Button>
        </nav>
      )}
    </header>
  );
}
