import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import { FOOTER_LINKS, COMPANY_INFO } from '@/data/navigation';
import { Linkedin, Github, Instagram, Facebook } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', href: COMPANY_INFO.social.linkedin, icon: Linkedin },
  { name: 'GitHub', href: COMPANY_INFO.social.github, icon: Github },
  { name: 'Instagram', href: COMPANY_INFO.social.instagram, icon: Instagram },
  { name: 'Facebook', href: COMPANY_INFO.social.facebook, icon: Facebook },
];

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm text-white/50 hover:text-brand-blue transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/5" role="contentinfo">
      <div className="container-main pt-16 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              We build modern websites, e-commerce platforms, and custom web applications for businesses ready to grow online.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow CSA Technologies CO on ${social.name}`}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-white/40 hover:bg-brand-blue/20 hover:text-brand-blue transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <FooterLinkGroup title="Company" links={FOOTER_LINKS.company} />
          </div>
          <div className="lg:col-span-3">
            <FooterLinkGroup title="Services" links={FOOTER_LINKS.services} />
          </div>
          <div className="lg:col-span-3">
            <FooterLinkGroup title="Resources" links={FOOTER_LINKS.resources} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} CSA Technologies CO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
