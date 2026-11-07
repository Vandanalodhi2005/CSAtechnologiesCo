'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Search,
  Filter,
  Download,
  Eye,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  ExternalLink,
  Calendar,
  FileText,
  X,
  CheckCircle2,
  Clock,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';

const STATUS_OPTIONS = [
  'All Statuses',
  'Pending',
  'Reviewed',
  'Shortlisted',
  'Interview Scheduled',
  'Rejected',
  'Hired',
];

function ApplicationsContent() {
  const searchParams = useSearchParams();
  const initialJobId = searchParams.get('jobId') || 'all';
  const initialAppId = searchParams.get('id') || null;

  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(initialJobId);
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');

  // Candidate detail drawer
  const [selectedApp, setSelectedApp] = useState(null);
  const [isDeletingApp, setIsDeletingApp] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    fetchApplications();
  }, [selectedJob, selectedStatus, searchQuery]);

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/admin/jobs');
      const data = await res.json();
      if (data.success) {
        setJobs(data.jobs || []);
      }
    } catch {}
  };

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedJob !== 'all') params.set('jobId', selectedJob);
      if (selectedStatus !== 'All Statuses') params.set('status', selectedStatus);
      if (searchQuery) params.set('search', searchQuery);

      const res = await fetch(`/api/admin/applications?${params.toString()}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to fetch applications');
      }
      setApplications(data.applications || []);

      // If URL had ?id=..., open that candidate drawer
      if (initialAppId && !selectedApp) {
        const found = data.applications?.find((a) => a.id === initialAppId);
        if (found) setSelectedApp(found);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (appId, newStatus) => {
    try {
      const res = await fetch(`/api/admin/applications/${appId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to update status');
      }
      setApplications((prev) =>
        prev.map((a) => (a.id === appId ? { ...a, applicationStatus: newStatus } : a))
      );
      if (selectedApp && selectedApp.id === appId) {
        setSelectedApp({ ...selectedApp, applicationStatus: newStatus });
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDeleteApplication = async () => {
    if (!isDeletingApp) return;
    try {
      const res = await fetch(`/api/admin/applications/${isDeletingApp.id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to delete application');
      }
      setApplications((prev) => prev.filter((a) => a.id !== isDeletingApp.id));
      if (selectedApp && selectedApp.id === isDeletingApp.id) {
        setSelectedApp(null);
      }
      setIsDeletingApp(null);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleExportCSV = () => {
    if (applications.length === 0) return;
    const headers = [
      'ID',
      'Candidate Name',
      'Email',
      'Phone',
      'Location',
      'Applied Position',
      'Experience',
      'Skills',
      'Status',
      'Applied Date',
    ];

    const rows = applications.map((a) => [
      `"${a.id}"`,
      `"${(a.fullName || '').replace(/"/g, '""')}"`,
      `"${a.email}"`,
      `"${a.phone}"`,
      `"${(a.location || '').replace(/"/g, '""')}"`,
      `"${(a.jobTitle || '').replace(/"/g, '""')}"`,
      `"${a.experience}"`,
      `"${(a.skills || '').replace(/"/g, '""')}"`,
      `"${a.applicationStatus}"`,
      `"${new Date(a.createdAt).toISOString()}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `csa_applications_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  return (
    <div className="space-y-6 pb-12">
      {/* ──────────────────────────────────────────────
          1. HEADER & ACTIONS
          ────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
            Application Management
          </h1>
          <p className="text-xs sm:text-sm text-white/50 mt-1">
            Review candidate qualifications, inspect submitted PDF resumes, and track recruitment progress.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            disabled={applications.length === 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white text-xs font-bold disabled:opacity-50 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Export to CSV</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError('')} className="text-white/60 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ──────────────────────────────────────────────
          2. FILTERS & SEARCH BAR
          ────────────────────────────────────────────── */}
      <div className="p-4 rounded-2xl bg-[#0B1E38] border border-white/[0.08] flex flex-col md:flex-row items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search candidates by name, email, or skills..."
            className="w-full pl-10 pr-4 py-2 bg-[#061426] border border-white/[0.08] rounded-xl text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#0066FF]"
          />
        </div>

        {/* Job Position Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs text-white/50 whitespace-nowrap">Position:</span>
          <select
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
            className="bg-[#061426] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#0066FF] max-w-[200px] truncate"
          >
            <option value="all">All Job Positions</option>
            {jobs.map((j) => (
              <option key={j.id} value={j.id}>
                {j.title}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs text-white/50 whitespace-nowrap">Status:</span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-[#061426] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#0066FF]"
          >
            {STATUS_OPTIONS.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ──────────────────────────────────────────────
          3. APPLICATIONS TABLE
          ────────────────────────────────────────────── */}
      <div className="bg-[#0B1E38] border border-white/[0.08] rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="py-20 text-center text-white/50 text-xs animate-pulse">
            Loading candidate submissions...
          </div>
        ) : applications.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <Users className="w-10 h-10 text-white/20 mx-auto" />
            <h3 className="text-sm font-bold text-white">No applications match your criteria</h3>
            <p className="text-xs text-white/50 max-w-sm mx-auto">
              Submitted candidate applications will appear here in real-time as users apply through the careers portal.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#071527] text-white/50 font-bold uppercase tracking-wider border-b border-white/[0.06]">
                <tr>
                  <th className="py-3.5 px-6">Candidate Details</th>
                  <th className="py-3.5 px-6">Applied Position</th>
                  <th className="py-3.5 px-6">Experience &amp; Location</th>
                  <th className="py-3.5 px-6">Submitted</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6">Resume</th>
                  <th className="py-3.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {applications.map((app) => (
                  <tr
                    key={app.id}
                    className={`hover:bg-white/[0.02] transition-colors ${
                      selectedApp?.id === app.id ? 'bg-white/[0.03]' : ''
                    }`}
                  >
                    {/* Candidate Details */}
                    <td className="py-4 px-6">
                      <div className="font-bold text-white text-[13px]">{app.fullName}</div>
                      <div className="text-white/50 text-[11px] mt-0.5">{app.email}</div>
                      <div className="text-white/40 text-[10px] mt-0.5">{app.phone}</div>
                    </td>

                    {/* Applied Position */}
                    <td className="py-4 px-6 max-w-xs">
                      <div className="font-semibold text-white/90 truncate">{app.jobTitle}</div>
                      <div className="text-[11px] text-white/40 truncate mt-0.5">
                        Skills: {app.skills}
                      </div>
                    </td>

                    {/* Experience & Location */}
                    <td className="py-4 px-6">
                      <div className="font-medium text-white/80">{app.experience}</div>
                      <div className="text-[11px] text-white/40 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{app.location}</span>
                      </div>
                    </td>

                    {/* Submitted Date */}
                    <td className="py-4 px-6 text-white/50">
                      {new Date(app.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-4 px-6">
                      <select
                        value={app.applicationStatus}
                        onChange={(e) => handleStatusChange(app.id, e.target.value)}
                        className={`text-[10px] font-bold rounded-full px-2.5 py-1 border bg-transparent cursor-pointer focus:outline-none ${getStatusBadge(
                          app.applicationStatus
                        )}`}
                      >
                        <option value="Pending" className="bg-[#0B1E38] text-white">Pending</option>
                        <option value="Reviewed" className="bg-[#0B1E38] text-white">Reviewed</option>
                        <option value="Shortlisted" className="bg-[#0B1E38] text-white">Shortlisted</option>
                        <option value="Interview Scheduled" className="bg-[#0B1E38] text-white">Interview Scheduled</option>
                        <option value="Rejected" className="bg-[#0B1E38] text-white">Rejected</option>
                        <option value="Hired" className="bg-[#0B1E38] text-white">Hired</option>
                      </select>
                    </td>

                    {/* Resume Download / View */}
                    <td className="py-4 px-6">
                      <a
                        href={`/api/admin/applications/${app.id}/resume`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0066FF]/15 hover:bg-[#0066FF] border border-[#0066FF]/30 text-[#60A5FA] hover:text-white text-[11px] font-semibold transition-all"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View PDF</span>
                      </a>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          onClick={() => setSelectedApp(app)}
                          className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors"
                          title="View Full Profile"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setIsDeletingApp(app)}
                          className="p-1.5 rounded-lg text-rose-400 hover:text-rose-200 hover:bg-rose-500/10 transition-colors"
                          title="Delete Application"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ──────────────────────────────────────────────
          4. CANDIDATE PROFILE DRAWER / MODAL
          ────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedApp && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedApp(null)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative w-full max-w-xl h-full bg-[#0B1E38] border-l border-white/[0.1] shadow-2xl flex flex-col z-10 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-white/[0.08] flex items-center justify-between sticky top-0 bg-[#0B1E38] z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0066FF] to-[#38BDF8] flex items-center justify-center font-bold text-white text-base">
                    {selectedApp.fullName[0]}
                  </div>
                  <div>
                    <h2 className="text-base font-heading font-extrabold text-white">
                      {selectedApp.fullName}
                    </h2>
                    <p className="text-xs text-[#60A5FA]">
                      Applied for: {selectedApp.jobTitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/[0.08]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 space-y-6 text-xs flex-1">
                {/* Status Update Bar */}
                <div className="p-4 rounded-xl bg-[#061426] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/50 block">
                      Recruitment Stage
                    </span>
                    <span className="text-sm font-bold text-white mt-0.5">
                      {selectedApp.applicationStatus}
                    </span>
                  </div>

                  <select
                    value={selectedApp.applicationStatus}
                    onChange={(e) => handleStatusChange(selectedApp.id, e.target.value)}
                    className="bg-[#0B1E38] border border-white/[0.1] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Interview Scheduled">Interview Scheduled</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Hired">Hired</option>
                  </select>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                    Contact &amp; Personal Info
                  </h3>
                  <div className="space-y-2.5 bg-[#061426] p-4 rounded-xl border border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#60A5FA]" />
                      <a
                        href={`mailto:${selectedApp.email}`}
                        className="text-white hover:underline"
                      >
                        {selectedApp.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#60A5FA]" />
                      <a href={`tel:${selectedApp.phone}`} className="text-white hover:underline">
                        {selectedApp.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#60A5FA]" />
                      <span className="text-white">{selectedApp.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#60A5FA]" />
                      <span className="text-white">
                        Experience: <strong>{selectedApp.experience}</strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Links */}
                {(selectedApp.linkedin || selectedApp.github) && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                      External Profiles
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedApp.linkedin && (
                        <a
                          href={selectedApp.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-[#0066FF] text-white transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>LinkedIn Profile</span>
                        </a>
                      )}
                      {selectedApp.github && (
                        <a
                          href={selectedApp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-[#0066FF] text-white transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>GitHub / Portfolio</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Skills */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                    Candidate Skills
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedApp.skills.split(',').map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-white/90 text-[11px]"
                      >
                        {s.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cover Letter */}
                {selectedApp.coverLetter && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                      Cover Letter / Note
                    </h3>
                    <div className="p-4 rounded-xl bg-[#061426] border border-white/[0.06] text-white/80 leading-relaxed whitespace-pre-wrap">
                      {selectedApp.coverLetter}
                    </div>
                  </div>
                )}

                {/* Resume Access */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#0B1E38] border border-[#0066FF]/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#60A5FA]" />
                      <span className="font-bold text-white text-sm">Resume Document</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      PDF Document
                    </span>
                  </div>
                  <p className="text-white/60 text-xs mb-4">
                    Stored securely. Accessible only by authorized administrators.
                  </p>
                  <a
                    href={`/api/admin/applications/${selectedApp.id}/resume`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Candidate Resume</span>
                  </a>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-white/[0.08] flex items-center justify-between bg-[#071527] sticky bottom-0">
                <button
                  onClick={() => setIsDeletingApp(selectedApp)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-rose-400 hover:text-rose-200 hover:bg-rose-500/10 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete Application</span>
                </button>

                <button
                  onClick={() => setSelectedApp(null)}
                  className="px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ──────────────────────────────────────────────
          5. DELETE CONFIRMATION DIALOG
          ────────────────────────────────────────────── */}
      <AnimatePresence>
        {isDeletingApp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsDeletingApp(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[#0B1E38] border border-rose-500/30 rounded-2xl p-6 shadow-2xl z-10"
            >
              <div className="flex items-center gap-3 text-rose-400 mb-3">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="text-base font-bold text-white">Delete Candidate Application?</h3>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-6">
                Are you sure you want to permanently delete the application from{' '}
                <strong className="text-white">&ldquo;{isDeletingApp.fullName}&rdquo;</strong>?
                This action cannot be undone.
              </p>
              <div className="flex items-center justify-end gap-3 text-xs">
                <button
                  onClick={() => setIsDeletingApp(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteApplication}
                  className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold transition-colors"
                >
                  Yes, Delete Application
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AdminApplicationsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-white/50 text-xs">Loading...</div>}>
      <ApplicationsContent />
    </Suspense>
  );
}
