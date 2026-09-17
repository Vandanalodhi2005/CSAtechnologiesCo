import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | CSA Technologies CO',
  description: 'Privacy Policy for CSA Technologies CO. Explaining our data protection standards and client information handling.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F8FAFD] min-h-screen pb-20">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden border-b border-[#E2E8F0] bg-[#EAF2F8] py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{ backgroundImage: "url('/images/hero/hero-laptop.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/45" />
        <div className="container-main relative z-10 max-w-5xl">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#0066FF] uppercase mb-5">
            <ShieldCheck className="w-4 h-4" />
            Trust &amp; Data Protection
          </div>
          <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B1220] tracking-tight leading-[1.05]">
            Privacy built into every client relationship.
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-[#475569] leading-relaxed">
            How CSA Technologies CO collects, uses, and protects the information you share with us.
          </p>
        </div>
      </section>

      <div className="container-main max-w-3xl pt-12 md:pt-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-text-dark mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-brand-text-muted mb-8">
          Last Updated: February 2026 • CSA Technologies CO
        </p>

        <div className="space-y-6 text-sm text-brand-text-dark leading-relaxed">
          <p>
            At <strong>CSA Technologies CO</strong>, we respect your privacy and are committed to protecting any personal and business data you share with us. This Privacy Policy outlines how we collect, use, and safeguard your information.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-text-dark pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you submit an inquiry through our website, contact forms, or direct email, we may collect your name, business email address, phone number, company name, project requirements, and estimated budget.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-text-dark pt-4">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is strictly used to evaluate your software development requirements, prepare technical architecture proposals, provide fixed-price quotes, and communicate regarding project milestones. We do not sell, rent, or trade your data to any third parties.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-text-dark pt-4">
            3. Client Confidentiality &amp; NDAs
          </h2>
          <p>
            We adhere to strict confidentiality protocols. All client proprietary concepts, source code, designs, and business models are protected. We readily execute mutual Non-Disclosure Agreements (NDAs) prior to detailed discovery.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-text-dark pt-4">
            4. Security Measures
          </h2>
          <p>
            We implement industry-standard SSL encryption and access controls to prevent unauthorized access, disclosure, or misuse of your project inquiries and business communications.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-text-dark pt-4">
            5. Contact Us
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact our privacy officer at{' '}
            <a href="mailto:info@csatechnologiesco.com" className="text-brand-blue font-semibold hover:underline">
              info@csatechnologiesco.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
