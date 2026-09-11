import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Calendar,
  Clock,
  Building,
  Quote,
  Sparkles,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.name} Case Study | CSA Technologies CO`,
    description: project.shortDescription,
  };
}

export default function CaseStudyPage({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Next / Previous projects
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Case Study Header Banner */}
      <section className="relative bg-[#060e1a] text-white py-16 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-main relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-white/50 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-white">{project.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-brand-blue/20 text-brand-blue border border-brand-blue/30 text-xs">
              {project.category}
            </Badge>
            <span className="text-xs text-white/60">Completed in {project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-[1.15] text-white mb-4">
            {project.name}: {project.tagline}
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Metadata Chips */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <div className="text-white/40 mb-1 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-brand-blue" />
                Client
              </div>
              <div className="font-semibold text-white">{project.client}</div>
            </div>
            <div>
              <div className="text-white/40 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                Year
              </div>
              <div className="font-semibold text-white">{project.year}</div>
            </div>
            <div>
              <div className="text-white/40 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-blue" />
                Timeline
              </div>
              <div className="font-semibold text-white">{project.duration}</div>
            </div>
            <div>
              <div className="text-white/40 mb-1 flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5 text-brand-blue" />
                Live Product
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
              >
                Visit Site <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Showcase Image & Metrics Strip */}
      <section className="bg-brand-light-bg py-12 border-b border-brand-border">
        <div className="container-main max-w-5xl mx-auto">
          {/* Mockup Container */}
          <div className="rounded-2xl overflow-hidden border border-brand-border bg-[#0a1628] shadow-card-light mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`${project.name} visual interface`}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Quantifiable Results Grid */}
          {project.results && project.results.length > 0 && (
            <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-card-light grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {project.results.map((res, i) => (
                <div key={i} className="border-r border-brand-border/60 last:border-none px-2">
                  <div className="text-xs text-brand-text-muted font-medium mb-1 uppercase tracking-wider">
                    {res.metric}
                  </div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-blue">
                    {res.value}
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold mt-1">
                    {res.change}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Deep-Dive Narrative Section */}
      <section className="py-20 bg-white">
        <div className="container-main max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Challenge, Solution, Architecture & Features */}
            <div className="lg:col-span-8 space-y-12">
              {/* Challenge */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-2 block">
                  THE CHALLENGE
                </span>
                <h2 className="text-2xl font-heading font-bold text-brand-text-dark mb-4">
                  Identifying Bottlenecks &amp; Growth Impediments
                </h2>
                <p className="text-brand-text-muted leading-relaxed text-base">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-2 block">
                  THE SOLUTION
                </span>
                <h2 className="text-2xl font-heading font-bold text-brand-text-dark mb-4">
                  Engineering Architecture &amp; Execution
                </h2>
                <p className="text-brand-text-muted leading-relaxed text-base">
                  {project.solution}
                </p>
              </div>

              {/* Architecture Deep Dive */}
              {project.architecture && (
                <div className="bg-[#F8FAFC] rounded-xl border border-brand-border p-6">
                  <div className="flex items-center gap-2 text-brand-blue font-bold text-sm uppercase tracking-wider mb-2">
                    <Cpu className="w-4 h-4" />
                    Technical Architecture &amp; Infrastructure
                  </div>
                  <p className="text-brand-text-dark text-sm leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              )}

              {/* Core Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-2 block">
                    KEY CAPABILITIES
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-brand-text-dark mb-5">
                    Core Functionality Delivered
                  </h2>
                  <div className="space-y-3">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm text-brand-text-dark">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Sidebar with Tech Stack, Testimonial & Inquiry */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Tech Stack Box */}
              <div className="bg-brand-light-bg rounded-xl border border-brand-border p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text-muted mb-4">
                  Technologies Deployed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-semibold bg-white border border-brand-border rounded-lg text-brand-text-dark shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              {project.testimonial && (
                <div className="bg-[#060e1a] text-white rounded-xl p-6 border border-white/10 shadow-card-light">
                  <Quote className="w-8 h-8 text-brand-blue/40 mb-3" />
                  <p className="text-sm text-white/80 italic leading-relaxed mb-4">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {project.testimonial.author}
                    </div>
                    <div className="text-xs text-brand-blue font-medium">
                      {project.testimonial.role}, {project.testimonial.company}
                    </div>
                  </div>
                </div>
              )}

              {/* Need Similar Results? */}
              <div className="bg-gradient-to-br from-brand-blue to-blue-700 text-white rounded-xl p-6 text-center">
                <Sparkles className="w-6 h-6 mx-auto mb-2 text-white/80" />
                <h3 className="text-lg font-heading font-bold mb-2">
                  Need Similar Results?
                </h3>
                <p className="text-xs text-white/80 mb-5 leading-relaxed">
                  Let us engineer a custom high-performance solution tailored to your operational goals.
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-2.5 px-4 rounded-lg bg-white text-brand-blue text-xs font-bold hover:bg-white/90 shadow-md transition-colors"
                >
                  Request Project Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Previous / Next Case Study Navigation */}
          <div className="mt-20 pt-10 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/portfolio/${prevProject.slug}`}
              className="group flex items-center gap-3 text-left w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-lg border border-brand-border flex items-center justify-center text-brand-text-muted group-hover:border-brand-blue group-hover:text-brand-blue transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-brand-text-muted">Previous Case Study</div>
                <div className="text-sm font-heading font-bold text-brand-text-dark group-hover:text-brand-blue transition-colors">
                  {prevProject.name}
                </div>
              </div>
            </Link>

            <Link
              href="/portfolio"
              className="text-xs font-bold uppercase tracking-wider text-brand-text-muted hover:text-brand-blue transition-colors"
            >
              All Case Studies
            </Link>

            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group flex items-center gap-3 text-right w-full sm:w-auto justify-end"
            >
              <div>
                <div className="text-xs text-brand-text-muted">Next Case Study</div>
                <div className="text-sm font-heading font-bold text-brand-text-dark group-hover:text-brand-blue transition-colors">
                  {nextProject.name}
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg border border-brand-border flex items-center justify-center text-brand-text-muted group-hover:border-brand-blue group-hover:text-brand-blue transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
