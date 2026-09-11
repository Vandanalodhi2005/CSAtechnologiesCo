import Link from 'next/link';
import {
  Search,
  FileText,
  Code,
  Rocket,
  Headphones,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { PROCESS_STEPS } from '@/data/process';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Our Engineering Process | CSA Technologies CO',
  description:
    'Discover how CSA Technologies CO plans, architects, tests, and deploys high-performance web platforms through our 5-phase agile methodology.',
};

const iconMap = {
  Search,
  FileText,
  Code,
  Rocket,
  Headphones,
};

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#060e1a] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-blue/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-main relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-brand-blue border border-white/10 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            HOW WE WORK • 5-PHASE METHODOLOGY
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.12]">
            Our Engineering <span className="text-gradient-blue">Methodology</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            From initial discovery to zero-downtime production deployment and continuous maintenance, our battle-tested process guarantees on-time delivery with zero surprises.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* 5 Process Steps Detailed Breakdown */}
      <section className="py-20 bg-brand-light-bg">
        <div className="container-main max-w-4xl space-y-12">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon] || Code;
            return (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-brand-border p-8 sm:p-10 shadow-card-light hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xl">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                        PHASE {step.step} • {step.duration}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-text-dark">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-light-bg text-brand-text-muted border border-brand-border self-start sm:self-auto">
                    {step.duration}
                  </div>
                </div>

                <p className="text-base text-brand-text-dark leading-relaxed mb-6 font-medium">
                  {step.fullDesc}
                </p>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text-muted mb-3">
                    Deliverables for this Phase:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-brand-text-dark">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="bg-[#060e1a] py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="container-main text-center relative z-10 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-3 block">
            READY FOR SEAMLESS EXECUTION?
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
            Let&apos;s Architect Your Vision
          </h2>
          <p className="text-white/70 text-base mt-4 mb-8">
            Reach out today to discuss your project requirements and receive a detailed sprint roadmap within 24 hours.
          </p>
          <Button href="/contact" size="lg">
            Request a Project Quote
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>
    </div>
  );
}
