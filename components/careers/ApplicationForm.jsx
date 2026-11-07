'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  X,
  Send,
  Linkedin,
  Github,
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Briefcase,
} from 'lucide-react';

export default function ApplicationForm({ job, onSuccess }) {
  const fileInputRef = useRef(null);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resumeFile, setResumeFile] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
      setError('Please upload a valid PDF document (.pdf). Other formats are not accepted.');
      setResumeFile(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Resume file size exceeds the 5MB limit. Please upload a smaller file.');
      setResumeFile(null);
      return;
    }

    setError('');
    setResumeFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
      setError('Please upload a valid PDF document (.pdf). Other formats are not accepted.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Resume file size exceeds the 5MB limit. Please upload a smaller file.');
      return;
    }

    setError('');
    setResumeFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!resumeFile) {
      setError('Please upload your resume in PDF format.');
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('jobId', job.id);
      formData.append('jobTitle', job.title);
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('location', location);
      formData.append('experience', experience);
      formData.append('skills', skills);
      formData.append('linkedin', linkedin);
      formData.append('github', github);
      formData.append('coverLetter', coverLetter);
      formData.append('resume', resumeFile);

      const res = await fetch('/api/applications', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit application. Please try again.');
      }

      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.message || 'Submission failed. Please check your information and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-emerald-100 shadow-xl"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
          Application Received
        </span>
        <h3 className="text-2xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-4">
          Thank you for applying!
        </h3>
        <p className="text-sm text-[#475569] leading-relaxed max-w-lg mx-auto mb-8">
          Your application has been submitted successfully. Our team will contact you if your profile matches our requirements.
        </p>

        <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] max-w-md mx-auto text-xs text-left space-y-1.5 text-[#64748B]">
          <div>
            <strong className="text-[#0B1220]">Position:</strong> {job.title}
          </div>
          <div>
            <strong className="text-[#0B1220]">Candidate:</strong> {fullName} ({email})
          </div>
          <div>
            <strong className="text-[#0B1220]">Next Step:</strong> Technical screening by CSA engineering team within 2-3 business days.
          </div>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setResumeFile(null);
            setFullName('');
            setEmail('');
            setPhone('');
            setLocation('');
            setExperience('');
            setSkills('');
            setLinkedin('');
            setGithub('');
            setCoverLetter('');
          }}
          className="mt-8 text-xs font-bold text-[#0066FF] hover:underline"
        >
          Submit another application
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5"
        >
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
          <span>{error}</span>
        </motion.div>
      )}

      {/* Selected Job Position (Auto-selected & Readonly) */}
      <div className="p-3.5 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Briefcase className="w-4 h-4 text-[#0066FF]" />
          <div>
            <span className="text-[10px] font-bold text-[#0066FF] uppercase tracking-wider block">
              Applying For Position
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0B1220]">{job.title}</span>
          </div>
        </div>
        <span className="text-[11px] font-semibold text-[#0066FF] bg-white px-2.5 py-1 rounded-full shadow-sm">
          {job.employmentType}
        </span>
      </div>

      {/* Row 1: Full Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0B1220] mb-1.5 uppercase tracking-wider">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-xs sm:text-sm text-[#0B1220] placeholder-[#94A3B8] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0B1220] mb-1.5 uppercase tracking-wider">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="rahul@example.com"
              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-xs sm:text-sm text-[#0B1220] placeholder-[#94A3B8] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Phone & Current Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0B1220] mb-1.5 uppercase tracking-wider">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-xs sm:text-sm text-[#0B1220] placeholder-[#94A3B8] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0B1220] mb-1.5 uppercase tracking-wider">
            Current Location *
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Noida, Delhi NCR, or Bengaluru"
              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-xs sm:text-sm text-[#0B1220] placeholder-[#94A3B8] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
            />
          </div>
        </div>
      </div>

      {/* Row 3: Total Experience & Relevant Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0B1220] mb-1.5 uppercase tracking-wider">
            Total Experience *
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="e.g. 3 years or Fresh Graduate"
              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-xs sm:text-sm text-[#0B1220] placeholder-[#94A3B8] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0B1220] mb-1.5 uppercase tracking-wider">
            Relevant Skills *
          </label>
          <input
            type="text"
            required
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g. React, Next.js, Node.js, Tailwind, TypeScript"
            className="w-full px-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-xs sm:text-sm text-[#0B1220] placeholder-[#94A3B8] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
          />
        </div>
      </div>

      {/* Row 4: LinkedIn & GitHub (Optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0B1220] mb-1.5 uppercase tracking-wider">
            LinkedIn Profile URL (Optional)
          </label>
          <div className="relative">
            <Linkedin className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="url"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="https://linkedin.com/in/username"
              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-xs sm:text-sm text-[#0B1220] placeholder-[#94A3B8] focus:outline-none focus:border-[#0066FF]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0B1220] mb-1.5 uppercase tracking-wider">
            GitHub / Portfolio URL (Optional)
          </label>
          <div className="relative">
            <Github className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="url"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              placeholder="https://github.com/username"
              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-xs sm:text-sm text-[#0B1220] placeholder-[#94A3B8] focus:outline-none focus:border-[#0066FF]"
            />
          </div>
        </div>
      </div>

      {/* Resume Upload (PDF Only, Max 5MB) */}
      <div>
        <label className="block text-xs font-bold text-[#0B1220] mb-1.5 uppercase tracking-wider">
          Resume Document (PDF Only, Max 5MB) *
        </label>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
            resumeFile
              ? 'border-emerald-400 bg-emerald-50/40'
              : 'border-[#CBD5E1] hover:border-[#0066FF] bg-[#F8FAFD] hover:bg-[#EFF6FF]/30'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          {resumeFile ? (
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-emerald-200">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-600" />
                <div className="text-left">
                  <p className="text-xs font-bold text-[#0B1220]">{resumeFile.name}</p>
                  <p className="text-[11px] text-[#64748B]">
                    {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • PDF Document
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setResumeFile(null);
                }}
                className="p-1 rounded-lg hover:bg-slate-100 text-[#64748B] hover:text-rose-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div>
              <Upload className="w-8 h-8 text-[#0066FF] mx-auto mb-2" />
              <p className="text-xs font-bold text-[#0B1220]">
                Click to browse or drag &amp; drop your resume PDF
              </p>
              <p className="text-[11px] text-[#64748B] mt-1">
                Accepted format: PDF only (.pdf) • Maximum file size: 5MB
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Cover Letter (Optional) */}
      <div>
        <label className="block text-xs font-bold text-[#0B1220] mb-1.5 uppercase tracking-wider">
          Cover Letter / Notes (Optional)
        </label>
        <textarea
          rows={3}
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          placeholder="Tell us why you are interested in joining CSA Technologies and what unique perspectives you bring..."
          className="w-full px-3.5 py-2.5 bg-white border border-[#CBD5E1] rounded-xl text-xs sm:text-sm text-[#0B1220] placeholder-[#94A3B8] focus:outline-none focus:border-[#0066FF]"
        />
      </div>

      {/* Privacy Guarantee */}
      <p className="text-[11px] text-[#64748B] leading-relaxed">
        By submitting, you agree that CSA Technologies may review your resume for current and upcoming opportunities. Your personal information is encrypted and strictly accessible only to our hiring team. No public profile or account is created.
      </p>

      {/* Submit CTA */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#009BFF] hover:brightness-110 shadow-[0_4px_20px_rgba(0,102,255,0.35)] disabled:opacity-60 transition-all"
      >
        {submitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Submitting Application...</span>
          </span>
        ) : (
          <>
            <span>Submit Application Now</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
