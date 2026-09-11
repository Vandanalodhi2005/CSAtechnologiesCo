import Link from 'next/link';

export default function Logo({ className = '', size = 'md' }) {
  const heightClasses = {
    sm: 'h-6',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-11',
  };

  const imgHeightClasses = {
    sm: 'h-20 -my-8',
    md: 'h-28 -my-10 sm:h-32 sm:-my-12',
    lg: 'h-32 -my-12 sm:h-40 sm:-my-14',
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center group transition-all duration-200 hover:opacity-95 ${className}`}
      aria-label="CSA Technologies CO — Home"
    >
      <div className={`relative ${heightClasses[size] || heightClasses.md} flex items-center overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-csa.png"
          alt="CSA Technologies CO"
          className={`${imgHeightClasses[size] || imgHeightClasses.md} w-auto max-w-none object-contain filter drop-shadow-[0_2px_10px_rgba(0,102,255,0.3)] transition-transform duration-200 group-hover:scale-[1.02]`}
          loading="eager"
        />
      </div>
    </Link>
  );
}
