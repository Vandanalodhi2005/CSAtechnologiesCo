import { clsx } from 'clsx';

const variants = {
  default: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
  outline: 'bg-transparent text-brand-text-muted border border-brand-border',
  dark: 'bg-white/10 text-white/80 border border-white/10',
  success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
};

export default function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
