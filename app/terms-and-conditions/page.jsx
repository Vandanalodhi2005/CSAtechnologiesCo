import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | CSA Technologies CO',
  description: 'Terms and Conditions for software engineering services provided by CSA Technologies CO.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="container-main max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-text-dark mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-brand-text-muted mb-8">
          Last Updated: February 2026 • CSA Technologies CO
        </p>

        <div className="space-y-6 text-sm text-brand-text-dark leading-relaxed">
          <p>
            Welcome to <strong>CSA Technologies CO</strong>. By accessing our website or contracting our software development services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-text-dark pt-4">
            1. Services &amp; Scope of Work
          </h2>
          <p>
            CSA Technologies CO provides custom software development, web engineering, e-commerce solutions, mobile application development, and DevOps cloud services. Specific project deliverables, timelines, and milestones are defined in individualized project agreements and Statements of Work (SOW).
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-text-dark pt-4">
            2. Intellectual Property &amp; Code Ownership
          </h2>
          <p>
            Upon full receipt of agreed milestone payments, 100% ownership of all custom-developed source code, graphic assets, database schemas, and documentation is completely transferred to the client. CSA Technologies CO retains no proprietary claim over your custom business IP.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-text-dark pt-4">
            3. Milestone Billing &amp; Payment
          </h2>
          <p>
            Projects follow structured milestone schedules. Work commences upon payment of the initial kickoff deposit. Subsequent milestone invoices are due upon delivery and client review of corresponding deliverables.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-text-dark pt-4">
            4. Post-Launch Warranty
          </h2>
          <p>
            All custom projects include a 30-day warranty starting on the production deployment date to resolve any bugs or defects that deviate from the agreed specifications. Ongoing maintenance is available under separate Service Level Agreements (SLAs).
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-text-dark pt-4">
            5. Inquiries
          </h2>
          <p>
            For any legal or contractual inquiries, please contact our legal counsel at{' '}
            <a href="mailto:info@csatechnologiesco.com" className="text-brand-blue font-semibold hover:underline">
              info@csatechnologiesco.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
