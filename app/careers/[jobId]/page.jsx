import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getJobById, getJobs } from '@/lib/db';
import {
  MapPin,
  Clock,
  Briefcase,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Share2,
  Building,
  Sparkles,
} from 'lucide-react';
import ApplicationForm from '@/components/careers/ApplicationForm';
import JsonLd from '@/components/shared/JsonLd';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const job = await getJobById(params.jobId);
  if (!job || job.status !== 'active') {
    return {
      title: 'Job Opening | CSA Technologies CO',
      description: 'Career opportunities at CSA Technologies CO.',
    };
  }

  const title = `${job.title} | Careers at CSA Technologies CO`;
  const description = `${job.title} in ${job.location} (${job.employmentType}). ${job.description.slice(
    0,
    150
  )}...`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://csatechnologiesco.com/careers/${job.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function JobDetailPage({ params }) {
  const { jobId } = params;
  const job = await getJobById(jobId);

  if (!job || job.status !== 'active') {
    notFound();
  }

  // Related jobs
  const allActive = await getJobs({ status: 'active' });
  const otherJobs = allActive.filter((j) => j.id !== job.id).slice(0, 3);

  // Schema.org JobPosting structured data
  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.createdAt,
    validThrough: job.applicationDeadline || '2026-12-31',
    employmentType:
      job.employmentType === 'Full-time'
        ? 'FULL_TIME'
        : job.employmentType === 'Part-time'
        ? 'PART_TIME'
        : job.employmentType === 'Internship'
        ? 'INTERN'
        : 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'CSA Technologies CO',
      sameAs: 'https://csatechnologiesco.com',
      logo: 'https://csatechnologiesco.com/logo/csa-logo.svg',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
    },
    experienceRequirements: job.experience,
    skills: job.skills?.join(', '),
  };

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* Schema.org JobPosting JSON-LD */}
      <JsonLd data={jobPostingSchema} />

      {/* ──────────────────────────────────────────────
          1. HEADER & BREADCRUMBS (Dark Navy)
          ────────────────────────────────────────────── */}
      <section className="bg-[#061426] text-white pt-28 pb-16 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-[#0066FF]/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="container-main max-w-5xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <span>/</span>
            <span className="text-[#60A5FA] font-medium truncate max-w-xs">{job.title}</span>
          </nav>

          {/* Department & Employment Type */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#60A5FA] text-xs font-bold">
              {job.department}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.08] text-white/80 text-xs font-semibold">
              {job.employmentType}
            </span>
            {job.salaryRange && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                {job.salaryRange}
              </span>
            )}
          </div>

          {/* Job Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            {job.title}
          </h1>

          {/* Meta Info */}
          <div className="mt-6 pt-6 border-t border-white/[0.1] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0066FF]" />
              <span>Location: <strong>{job.location}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0066FF]" />
              <span>Experience: <strong>{job.experience}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0066FF]" />
              <span>
                Posted:{' '}
                <strong>
                  {new Date(job.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </strong>
              </span>
            </div>
            {job.applicationDeadline && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>
                  Deadline: <strong>{job.applicationDeadline}</strong>
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. JOB DETAILS & APPLICATION FORM GRID
          ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container-main max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Job Specifications */}
            <div className="lg:col-span-7 space-y-10">
              {/* Overview */}
              <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
                <h2 className="text-lg font-heading font-extrabold text-[#0B1220] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                  <span>About The Role</span>
                </h2>
                <p className="text-sm text-[#475569] leading-relaxed whitespace-pre-wrap">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
                  <h2 className="text-lg font-heading font-extrabold text-[#0B1220] mb-5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                    <span>Key Responsibilities</span>
                  </h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Required Skills */}
              {job.skills && job.skills.length > 0 && (
                <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
                  <h2 className="text-lg font-heading font-extrabold text-[#0B1220] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                    <span>Technical Skills &amp; Stack</span>
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-bold text-[#0066FF]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Qualifications */}
              {job.qualifications && job.qualifications.length > 0 && (
                <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
                  <h2 className="text-lg font-heading font-extrabold text-[#0B1220] mb-5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                    <span>Qualifications &amp; Requirements</span>
                  </h2>
                  <ul className="space-y-3">
                    {job.qualifications.map((qual, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                        <span className="leading-relaxed">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right 5 Columns: Sticky Application Form (No Login Required) */}
            <div id="apply-now" className="lg:col-span-5 sticky top-28 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#CBD5E1] shadow-xl">
                <div className="mb-6 pb-4 border-b border-[#E2E8F0]">
                  <span className="text-[11px] font-bold text-[#0066FF] uppercase tracking-wider block mb-1">
                    APPLY DIRECTLY
                  </span>
                  <h2 className="text-xl font-heading font-extrabold text-[#0B1220]">
                    Submit Your Application
                  </h2>
                  <p className="text-xs text-[#64748B] mt-1">
                    No account or login required. Upload your resume to apply in under 60 seconds.
                  </p>
                </div>

                <ApplicationForm job={job} />
              </div>
            </div>
          </div>

          {/* ──────────────────────────────────────────────
              3. OTHER OPEN ROLES
              ────────────────────────────────────────────── */}
          {otherJobs.length > 0 && (
            <div className="mt-20 pt-16 border-t border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-heading font-extrabold text-[#0B1220]">
                    Other Open Opportunities
                  </h2>
                  <p className="text-xs text-[#64748B] mt-1">
                    Explore additional technical and creative roles at CSA Technologies.
                  </p>
                </div>

                <Link
                  href="/careers"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066FF] hover:underline"
                >
                  <span>View All Openings</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherJobs.map((other) => (
                  <Link
                    key={other.id}
                    href={`/careers/${other.id}`}
                    className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0066FF] hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#0066FF] text-[10px] font-bold">
                          {other.department}
                        </span>
                        <span className="text-[11px] text-[#64748B]">
                          {other.employmentType}
                        </span>
                      </div>
                      <h3 className="text-base font-heading font-bold text-[#0B1220] group-hover:text-[#0066FF] transition-colors mb-2">
                        {other.title}
                      </h3>
                      <p className="text-xs text-[#64748B] line-clamp-2">
                        {other.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#0066FF]">
                      <span>{other.location}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
