import Link from 'next/link';

export default function Logo({ className = '', light = false }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`} aria-label="CSA Technologies CO — Home">
      {/* Geometric Logo Mark */}
      <div className="relative flex-shrink-0 w-9 h-9">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
          <rect width="40" height="40" rx="8" fill="#0B84F3" />
          <path d="M12 14C12 12.8954 12.8954 12 14 12H18C19.1046 12 20 12.8954 20 14V18C19.1046 18 18 18.8954 18 20H14C12.8954 20 12 19.1046 12 18V14Z" fill="white" fillOpacity="0.95" />
          <path d="M20 20C20 18.8954 20.8954 18 22 18H26C27.1046 18 28 18.8954 28 20V24C28 25.1046 27.1046 26 26 26H22C20.8954 26 20 25.1046 20 24V20Z" fill="white" fillOpacity="0.7" />
          <path d="M20 12H24C25.1046 12 26 12.8954 26 14V16C26 17.1046 25.1046 18 24 18H20V12Z" fill="white" fillOpacity="0.5" />
          <path d="M14 22H20V26H16C14.8954 26 14 25.1046 14 24V22Z" fill="white" fillOpacity="0.5" />
        </svg>
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`text-[15px] font-heading font-extrabold tracking-tight ${light ? 'text-white' : 'text-brand-text-dark'}`}>
          <span className="text-brand-blue">CSA</span> Technologies CO
        </span>
      </div>
    </Link>
  );
}
