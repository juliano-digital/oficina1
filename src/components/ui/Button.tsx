import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline';
  children: ReactNode;
}

const styles = {
  primary: 'bg-brand text-ink hover:bg-brand-dark shadow-lg shadow-brand/20',
  outline: 'border border-white/30 text-white hover:border-brand hover:text-brand',
};

export function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 font-display text-base font-semibold uppercase tracking-wider transition active:scale-95 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
