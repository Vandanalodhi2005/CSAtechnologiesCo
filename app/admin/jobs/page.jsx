'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  ExternalLink,
  AlertTriangle,
  X,
  Check,
  Building,
  MapPin,
  Calendar,
  Users,
} from 'lucide-react';

const DEPARTMENTS = [
  'All Departments',
  'Engineering',
  'Design & Engineering',
  'Infrastructure',
  'Product',
  'Marketing',
  'Sales',
  'Quality Assurance',
];

const EMPLOYMENT_TYPES = ['Full-time', 'Part-time', 'Internship', 'Remote', 'Contract'];

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [isDeletingJob, setIsDeletingJob] = useState(null); // job to delete
  const [saving, setSaving] = useState(false);

  // Form State
  const initialForm = {
    title: '',
    department: 'Engineering',
    location: 'Noida, India (Hybrid)',
    employmentType: 'Full-time',
    experience: '2-4 years',
    salaryRange: '',
    applicationDeadline: '',
    status: 'active',
    description: '',
    responsibilities: '',
    skills: '',
    qualifications: '',
  };
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    fetchJobs();
  }, [selectedDept, selectedStatus, searchQuery]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedStatus !== 'all') params.set('status', selectedStatus);
      if (selectedDept !== 'All Departments') params.set('department', selectedDept);
      if (searchQuery) params.set('search', searchQuery);

      const res = await fetch(`/api/admin/jobs?${params.toString()}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to fetch jobs');
      }
      setJobs(data.jobs || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setEditingJob(null);
    setFormData(initialForm);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title || '',
      department: job.department || 'Engineering',
      location: job.location || '',
      employmentType: job.employmentType || 'Full-time',
      experience: job.experience || '',
      salaryRange: job.salaryRange || '',
      applicationDeadline: job.applicationDeadline || '',
      status: job.status || 'active',
      description: job.description || '',
      responsibilities: Array.isArray(job.responsibilities)
        ? job.responsibilities.join('\n')
        : job.responsibilities || '',
      skills: Array.isArray(job.skills) ? job.skills.join(', ') : job.skills || '',
      qualifications: Array.isArray(job.qualifications)
        ? job.qualifications.join('\n')
        : job.qualifications || '',
    });
    setIsModalOpen(true);
  };

  const handleSaveJob = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const url = editingJob ? `/api/admin/jobs/${editingJob.id}` : '/api/admin/jobs';
      const method = editingJob ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to save job opening');
      }

      setIsModalOpen(false);
      fetchJobs();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleToggleStatus = async (job, newStatus) => {
    try {
      const res = await fetch(`/api/admin/jobs/${job.id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to update status');
      }
      setJobs((prev) =>
        prev.map((j) => (j.id === job.id ? { ...j, status: newStatus } : j))
      );
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDeleteJob = async () => {
    if (!isDeletingJob) return;
    try {
      const res = await fetch(`/api/admin/jobs/${isDeletingJob.id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to delete job');
      }
      setJobs((prev) => prev.filter((j) => j.id !== isDeletingJob.id));
      setIsDeletingJob(null);
    } catch (err) {
      alert(err.message);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'draft':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'closed':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-white/10 text-white/60 border-white/10';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* ──────────────────────────────────────────────
          1. HEADER & ACTION
          ────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
            Job Management
          </h1>
          <p className="text-xs sm:text-sm text-white/50 mt-1">
            Create, publish, edit, and organize all careers across CSA Technologies.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#009BFF] hover:brightness-110 text-white text-xs font-bold shadow-[0_4px_16px_rgba(0,102,255,0.4)] transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Post New Job</span>
        </button>
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
            placeholder="Search jobs by title, department, or keyword..."
            className="w-full pl-10 pr-4 py-2 bg-[#061426] border border-white/[0.08] rounded-xl text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#0066FF]"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs text-white/50 whitespace-nowrap">Status:</span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-[#061426] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#0066FF]"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active Only</option>
            <option value="draft">Draft Only</option>
            <option value="closed">Closed Only</option>
          </select>
        </div>

        {/* Department Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs text-white/50 whitespace-nowrap">Department:</span>
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="bg-[#061426] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#0066FF]"
          >
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ──────────────────────────────────────────────
          3. JOBS TABLE
          ────────────────────────────────────────────── */}
      <div className="bg-[#0B1E38] border border-white/[0.08] rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="py-20 text-center text-white/50 text-xs animate-pulse">
            Loading job listings...
          </div>
        ) : jobs.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <Briefcase className="w-10 h-10 text-white/20 mx-auto" />
            <h3 className="text-sm font-bold text-white">No jobs found matching your criteria</h3>
            <p className="text-xs text-white/50 max-w-sm mx-auto">
              Try adjusting your filters or create a new job opening using the button above.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#071527] text-white/50 font-bold uppercase tracking-wider border-b border-white/[0.06]">
                <tr>
                  <th className="py-3.5 px-6">Job Title &amp; Details</th>
                  <th className="py-3.5 px-6">Department</th>
                  <th className="py-3.5 px-6">Type &amp; Experience</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6 text-center">Applicants</th>
                  <th className="py-3.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {jobs.map((job) => (
                  <tr key={job.id} className="hover:bg-white/[0.02] transition-colors">
                    {/* Title & Details */}
                    <td className="py-4 px-6 max-w-xs">
                      <div className="font-bold text-white text-[13px] hover:text-[#60A5FA] transition-colors">
                        <Link href={`/careers/${job.id}`} target="_blank" className="inline-flex items-center gap-1.5">
                          <span>{job.title}</span>
                          <ExternalLink className="w-3 h-3 text-white/30" />
                        </Link>
                      </div>
                      <div className="flex items-center gap-2 text-white/50 text-[11px] mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-white/40" />
                          <span>{job.location}</span>
                        </span>
                        {job.salaryRange && (
                          <>
                            <span>•</span>
                            <span>{job.salaryRange}</span>
                          </>
                        )}
                      </div>
                    </td>

                    {/* Department */}
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-[11px] font-medium text-white/80">
                        {job.department}
                      </span>
                    </td>

                    {/* Type & Experience */}
                    <td className="py-4 px-6">
                      <div className="font-semibold text-white/80">{job.employmentType}</div>
                      <div className="text-[11px] text-white/40 mt-0.5">{job.experience}</div>
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-4 px-6">
                      <select
                        value={job.status}
                        onChange={(e) => handleToggleStatus(job, e.target.value)}
                        className={`text-[10px] font-bold rounded-full px-2.5 py-1 border bg-transparent cursor-pointer focus:outline-none ${getStatusBadge(
                          job.status
                        )}`}
                      >
                        <option value="active" className="bg-[#0B1E38] text-white">
                          ● Active (Published)
                        </option>
                        <option value="draft" className="bg-[#0B1E38] text-white">
                          ● Draft (Hidden)
                        </option>
                        <option value="closed" className="bg-[#0B1E38] text-white">
                          ● Closed
                        </option>
                      </select>
                    </td>

                    {/* Applicants Count */}
                    <td className="py-4 px-6 text-center">
                      <Link
                        href={`/admin/applications?jobId=${job.id}`}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-[#0066FF] hover:text-white border border-white/[0.08] text-[11px] font-bold text-white transition-all"
                      >
                        <Users className="w-3 h-3" />
                        <span>{job.applicationsCount ?? 0}</span>
                      </Link>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          onClick={() => handleOpenEdit(job)}
                          className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors"
                          title="Edit Job"
                        >
                          <Edit className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => setIsDeletingJob(job)}
                          className="p-1.5 rounded-lg text-rose-400 hover:text-rose-200 hover:bg-rose-500/10 transition-colors"
                          title="Delete Job"
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
          4. CREATE / EDIT JOB MODAL
          ────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-3xl bg-[#0B1E38] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-heading font-extrabold text-white">
                    {editingJob ? 'Edit Job Opening' : 'Create New Job Opening'}
                  </h2>
                  <p className="text-xs text-white/50 mt-0.5">
                    {editingJob
                      ? 'Update details, qualifications, or requirements for this role.'
                      : 'Fill in the information below to publish a new position.'}
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/[0.08]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSaveJob} className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1 text-xs">
                {/* Title */}
                <div>
                  <label className="block font-bold text-white/80 mb-1.5 uppercase tracking-wider text-[11px]">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Senior Full Stack Developer (Next.js / Node.js)"
                    className="w-full px-3.5 py-2.5 bg-[#061426] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Department */}
                  <div>
                    <label className="block font-bold text-white/80 mb-1.5 uppercase tracking-wider text-[11px]">
                      Department *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#061426] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                    >
                      {DEPARTMENTS.filter((d) => d !== 'All Departments').map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Employment Type */}
                  <div>
                    <label className="block font-bold text-white/80 mb-1.5 uppercase tracking-wider text-[11px]">
                      Employment Type *
                    </label>
                    <select
                      value={formData.employmentType}
                      onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#061426] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                    >
                      {EMPLOYMENT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block font-bold text-white/80 mb-1.5 uppercase tracking-wider text-[11px]">
                      Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Noida, India (Hybrid) or Remote"
                      className="w-full px-3.5 py-2.5 bg-[#061426] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block font-bold text-white/80 mb-1.5 uppercase tracking-wider text-[11px]">
                      Experience Required *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="e.g. 3-5 years or Freshers"
                      className="w-full px-3.5 py-2.5 bg-[#061426] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>

                  {/* Salary Range */}
                  <div>
                    <label className="block font-bold text-white/80 mb-1.5 uppercase tracking-wider text-[11px]">
                      Salary Range (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.salaryRange}
                      onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
                      placeholder="e.g. ₹10,00,000 - ₹16,00,000 / year"
                      className="w-full px-3.5 py-2.5 bg-[#061426] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block font-bold text-white/80 mb-1.5 uppercase tracking-wider text-[11px]">
                      Publishing Status *
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#061426] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                    >
                      <option value="active">Active (Visible Publicly)</option>
                      <option value="draft">Draft (Hidden)</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block font-bold text-white/80 mb-1.5 uppercase tracking-wider text-[11px]">
                    Short Job Overview / Description *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Briefly describe the mission, role, and why someone should join CSA Technologies..."
                    className="w-full px-3.5 py-2.5 bg-[#061426] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                {/* Responsibilities */}
                <div>
                  <label className="block font-bold text-white/80 mb-1.5 uppercase tracking-wider text-[11px]">
                    Responsibilities (One per line)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.responsibilities}
                    onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                    placeholder="Architect scalable microservices in Node.js&#10;Collaborate with UI/UX designers in Figma&#10;Conduct code reviews and optimize Core Web Vitals"
                    className="w-full px-3.5 py-2.5 bg-[#061426] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                {/* Required Skills */}
                <div>
                  <label className="block font-bold text-white/80 mb-1.5 uppercase tracking-wider text-[11px]">
                    Required Skills (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="Next.js, React, Node.js, TypeScript, PostgreSQL, Tailwind CSS"
                    className="w-full px-3.5 py-2.5 bg-[#061426] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                {/* Qualifications */}
                <div>
                  <label className="block font-bold text-white/80 mb-1.5 uppercase tracking-wider text-[11px]">
                    Qualifications &amp; Requirements (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.qualifications}
                    onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                    placeholder="B.Tech/B.E. in Computer Science or equivalent&#10;3+ years of production experience&#10;Strong communication and problem-solving skills"
                    className="w-full px-3.5 py-2.5 bg-[#061426] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#009BFF] hover:brightness-110 text-white font-bold shadow-[0_4px_16px_rgba(0,102,255,0.4)] disabled:opacity-60 transition-all"
                  >
                    {saving ? 'Saving...' : editingJob ? 'Update Job Opening' : 'Publish Job'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ──────────────────────────────────────────────
          5. DELETE CONFIRMATION DIALOG
          ────────────────────────────────────────────── */}
      <AnimatePresence>
        {isDeletingJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsDeletingJob(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[#0B1E38] border border-rose-500/30 rounded-2xl p-6 shadow-2xl z-10"
            >
              <div className="flex items-center gap-3 text-rose-400 mb-3">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="text-base font-bold text-white">Delete Job Opening?</h3>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-6">
                Are you sure you want to permanently delete{' '}
                <strong className="text-white">&ldquo;{isDeletingJob.title}&rdquo;</strong>? This
                action cannot be undone and will remove the job from the public careers page.
              </p>
              <div className="flex items-center justify-end gap-3 text-xs">
                <button
                  onClick={() => setIsDeletingJob(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteJob}
                  className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold transition-colors"
                >
                  Yes, Delete Job
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
