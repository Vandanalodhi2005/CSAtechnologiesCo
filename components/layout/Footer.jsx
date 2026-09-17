import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import {
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

const COMPANY_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Portfolio & Case Studies', href: '/portfolio' },
  { name: 'Insights & Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

const SERVICE_LINKS = [
  { name: 'Business Websites', href: '/services#business-websites' },
  { name: 'E-Commerce Platforms', href: '/services#ecommerce' },
  { name: 'Custom Web Applications', href: '/services#custom-apps' },
  { name: 'Mobile App Development', href: '/services#mobile-apps' },
  { name: 'Cloud & DevOps Infrastructure', href: '/services#cloud-devops' },
  { name: 'Maintenance & 24/7 SLAs', href: '/services#maintenance' },
];

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] text-white border-t border-white/[0.08] relative overflow-hidden" role="contentinfo">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-[#0066FF]/[0.06] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-[#00D8FF]/[0.04] blur-[130px] pointer-events-none rounded-full" />

      <div className="container-main pt-16 md:pt-20 pb-10 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/[0.08]">

          {/* ── Brand Column (5 cols on lg) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo — Prominent & Visible */}
              <div className="mb-5">
                <Logo size="lg" />
              </div>

              <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-6">
                CSA Technologies CO is a full-stack digital engineering agency. We design, architect, and deploy high-performing websites, e-commerce systems, and custom web applications for growing enterprises.
              </p>

              {/* Direct Contact Details */}
              <div className="space-y-3 mb-8 text-xs text-white/70">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#60A5FA]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <a href="mailto:info@csatechnologiesco.com" className="hover:text-white transition-colors">
                    info@csatechnologiesco.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#60A5FA]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <a href="tel:+919211293383" className="hover:text-white transition-colors">
                    +91 92112 93383
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#60A5FA]">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>E-22B, 4th Floor, Sector 8, Noida</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow CSA Technologies CO on ${social.name}`}
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/60 hover:text-white hover:bg-[#0066FF] hover:border-[#0066FF] hover:shadow-[0_0_15px_rgba(0,102,255,0.5)] flex items-center justify-center transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2: Navigation Links ── */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span>Company</span>
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-white/55 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Services ── */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span>Core Services</span>
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-white/55 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} CSA Technologies CO. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-[#60A5FA] font-medium hidden sm:inline">
              Smart Solutions. Lasting Impact.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
