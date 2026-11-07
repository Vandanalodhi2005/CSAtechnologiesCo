'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  CheckCircle2,
  Clock,
  Archive,
  ArrowRight,
  TrendingUp,
  FileText,
  UserCheck,
  PlusCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/stats');
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to load dashboard metrics');
      }
      setStats(data.stats);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Reviewed':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Shortlisted':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Interview Scheduled':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Rejected':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'Hired':
        return 'bg-teal-500/10 text-teal-300 border-teal-500/20';
      default:
        return 'bg-white/10 text-white/60 border-white/10';
    }
  };

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-10 bg-white/[0.05] rounded-xl w-64" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-32 bg-white/[0.05] rounded-2xl" />
          ))}
        </div>
        <div className="h-80 bg-white/[0.05] rounded-2xl" />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* ──────────────────────────────────────────────
          1. WELCOME & ACTION BAR
          ────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#60A5FA] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE OVERVIEW</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
            Careers &amp; Talent Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-white/50 mt-1">
            Real-time management for open positions, incoming applications, and candidate evaluation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/jobs"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#009BFF] hover:brightness-110 text-white text-xs font-bold shadow-[0_4px_16px_rgba(0,102,255,0.4)] transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Manage Jobs</span>
          </Link>

          <Link
            href="/admin/applications"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white text-xs font-bold transition-all"
          >
            <Users className="w-4 h-4" />
            <span>All Applications</span>
          </Link>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center justify-between">
          <span>{error}</span>
          <button onClick={fetchStats} className="underline font-bold">
            Retry
          </button>
        </div>
      )}

      {/* ──────────────────────────────────────────────
          2. METRICS CARDS (6-Grid)
          ────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {/* Total Jobs */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1E38] border border-white/[0.08] relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
              Total Jobs
            </span>
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#60A5FA]">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            {stats?.totalJobs ?? 0}
          </div>
          <div className="text-[11px] text-white/40 mt-1">Created in database</div>
        </div>

        {/* Active Jobs */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1E38] border border-white/[0.08] relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              Active Openings
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400">
            {stats?.activeJobs ?? 0}
          </div>
          <div className="text-[11px] text-emerald-500/60 mt-1">Visible on website</div>
        </div>

        {/* Closed / Draft Jobs */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1E38] border border-white/[0.08] relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
              Closed / Draft
            </span>
            <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/60">
              <Archive className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white/80">
            {(stats?.closedJobs ?? 0) + (stats?.draftJobs ?? 0)}
          </div>
          <div className="text-[11px] text-white/40 mt-1">Archived or paused</div>
        </div>

        {/* Total Applications */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1E38] border border-white/[0.08] relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#60A5FA]">
              Total Apps
            </span>
            <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 border border-[#0066FF]/30 flex items-center justify-center text-[#60A5FA]">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            {stats?.totalApplications ?? 0}
          </div>
          <div className="text-[11px] text-white/40 mt-1">Candidate submissions</div>
        </div>

        {/* Pending Review */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1E38] border border-white/[0.08] relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Pending
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-heading font-extrabold text-amber-400">
            {stats?.pendingApplications ?? 0}
          </div>
          <div className="text-[11px] text-amber-500/60 mt-1">Awaiting review</div>
        </div>

        {/* Shortlisted */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1E38] border border-white/[0.08] relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
              Shortlisted
            </span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-heading font-extrabold text-purple-400">
            {stats?.shortlistedCandidates ?? 0}
          </div>
          <div className="text-[11px] text-purple-400/60 mt-1">Ready for interview</div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────
          3. RECENT APPLICATIONS TABLE
          ────────────────────────────────────────────── */}
      <div className="bg-[#0B1E38] border border-white/[0.08] rounded-2xl overflow-hidden shadow-xl">
        <div className="p-5 sm:p-6 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-lg font-heading font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-[#0066FF]" />
              <span>Recent Candidate Applications</span>
            </h2>
            <p className="text-xs text-white/50 mt-0.5">
              Latest talent submissions received through the public Careers portal.
            </p>
          </div>

          <Link
            href="/admin/applications"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] hover:text-white transition-colors"
          >
            <span>View All Applications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {(!stats?.recentApplications || stats.recentApplications.length === 0) ? (
          <div className="py-16 text-center text-white/40 text-xs">
            No applications received yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#071527] text-white/50 font-bold uppercase tracking-wider border-b border-white/[0.06]">
                <tr>
                  <th className="py-3.5 px-6">Candidate</th>
                  <th className="py-3.5 px-6">Applied Position</th>
                  <th className="py-3.5 px-6">Experience</th>
                  <th className="py-3.5 px-6">Applied Date</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {stats.recentApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-white text-[13px]">{app.fullName}</div>
                      <div className="text-white/50 text-[11px] mt-0.5">{app.email}</div>
                    </td>
                    <td className="py-4 px-6 font-medium text-white/80">
                      {app.jobTitle || 'General Position'}
                    </td>
                    <td className="py-4 px-6 text-white/60">
                      {app.experience}
                    </td>
                    <td className="py-4 px-6 text-white/50">
                      {new Date(app.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border ${getStatusBadge(
                          app.applicationStatus
                        )}`}
                      >
                        {app.applicationStatus}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/admin/applications?id=${app.id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-[#0066FF] hover:text-white text-white/70 text-[11px] font-semibold transition-all"
                      >
                        <span>Review</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ──────────────────────────────────────────────
          4. QUICK LINKS & SYSTEM HEALTH
          ────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[#0B1E38] border border-white/[0.08]">
          <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Database Storage Mode</span>
          </h3>
          <p className="text-xs text-white/60 leading-relaxed">
            {process.env.MONGODB_URI
              ? 'Connected to remote MongoDB Atlas cluster.'
              : 'Operating on zero-config local persistent file store (data/db/). Ready for MongoDB Atlas whenever MONGODB_URI is provided.'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0B1E38] border border-white/[0.08]">
          <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span>SEO &amp; Google Jobs</span>
          </h3>
          <p className="text-xs text-white/60 leading-relaxed">
            Active jobs are automatically exported with Schema.org <code className="text-[#60A5FA]">JobPosting</code> structured data and indexed in the dynamic XML sitemap.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0B1E38] border border-white/[0.08]">
          <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Candidate Privacy</span>
          </h3>
          <p className="text-xs text-white/60 leading-relaxed">
            All candidate resumes and submissions are isolated from public APIs and strictly accessible only to authenticated CSA administrators.
          </p>
        </div>
      </div>
    </div>
  );
}
