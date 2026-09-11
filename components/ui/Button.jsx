import Link from 'next/link';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';

const variants = {
  primary:
    'bg-brand-blue text-white hover:bg-brand-blue-hover shadow-button-glow hover:shadow-lg transition-all duration-300',
  secondary:
    'bg-white text-brand-text-dark border border-brand-border hover:border-brand-blue hover:text-brand-blue transition-all duration-300',
  outline:
    'bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300',
  'outline-blue':
    'bg-transparent text-brand-blue border border-brand-blue/30 hover:bg-brand-blue/5 hover:border-brand-blue transition-all duration-300',
  ghost:
    'bg-transparent text-brand-blue hover:bg-brand-blue/5 transition-all duration-300',
  dark:
    'bg-brand-navy text-white hover:bg-brand-deep-blue transition-all duration-300',
};

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  arrow = false,
  className = '',
  ...props
}) {
  const classes = clsx(
    'inline-flex items-center justify-center font-semibold rounded-lg cursor-pointer whitespace-nowrap',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {arrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {arrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
}
