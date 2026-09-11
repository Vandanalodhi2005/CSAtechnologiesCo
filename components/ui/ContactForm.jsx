'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const SERVICE_OPTIONS = [
  'Business Website',
  'E-Commerce',
  'Custom Web Application',
  'Mobile App',
  'Maintenance & Support',
  'Other',
];

const BUDGET_OPTIONS = [
  '₹25K - ₹50K',
  '₹50K - ₹1L',
  '₹1L - ₹3L',
  '₹3L+',
  'Not Sure',
];

const initialState = {
  fullName: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  budget: '',
  details: '',
};

export default function ContactForm({ dark = false }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!form.service) errs.service = 'Select a service';
    if (!form.details.trim()) errs.details = 'Please describe your project';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('sending');
    // Simulate API call — replace with real endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setForm(initialState);
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputBase = dark
    ? 'bg-brand-navy-card border-brand-border-dark text-white placeholder:text-brand-text-light-muted focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50'
    : 'bg-white border-brand-border text-brand-text-dark placeholder:text-brand-text-muted focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50';

  const labelClass = dark ? 'text-white/80' : 'text-brand-text-dark';
  const errorClass = 'text-red-500 text-xs mt-1';

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center py-16 px-6 rounded-xl text-center ${dark ? 'bg-brand-navy-card' : 'bg-brand-light-bg'}`}>
        <CheckCircle className="w-14 h-14 text-emerald-500 mb-4" />
        <h3 className={`text-xl font-heading font-bold mb-2 ${dark ? 'text-white' : 'text-brand-text-dark'}`}>
          Inquiry Sent Successfully!
        </h3>
        <p className={`text-sm ${dark ? 'text-brand-text-light-muted' : 'text-brand-text-muted'}`}>
          We&apos;ll review your project details and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className={`block text-sm font-medium mb-1.5 ${labelClass}`}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            placeholder="John Smith"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors outline-none ${inputBase} ${errors.fullName ? '!border-red-500' : ''}`}
          />
          {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="email" className={`block text-sm font-medium mb-1.5 ${labelClass}`}>
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors outline-none ${inputBase} ${errors.email ? '!border-red-500' : ''}`}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      {/* Row: Company + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className={`block text-sm font-medium mb-1.5 ${labelClass}`}>
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors outline-none ${inputBase}`}
          />
        </div>
        <div>
          <label htmlFor="phone" className={`block text-sm font-medium mb-1.5 ${labelClass}`}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors outline-none ${inputBase}`}
          />
        </div>
      </div>

      {/* Row: Service + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className={`block text-sm font-medium mb-1.5 ${labelClass}`}>
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors outline-none appearance-none ${inputBase} ${errors.service ? '!border-red-500' : ''}`}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && <p className={errorClass}>{errors.service}</p>}
        </div>
        <div>
          <label htmlFor="budget" className={`block text-sm font-medium mb-1.5 ${labelClass}`}>
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors outline-none appearance-none ${inputBase}`}
          >
            <option value="">Select budget range</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="details" className={`block text-sm font-medium mb-1.5 ${labelClass}`}>
          Project Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          value={form.details}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your project, goals, and timeline..."
          className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors outline-none resize-none ${inputBase} ${errors.details ? '!border-red-500' : ''}`}
        />
        {errors.details && <p className={errorClass}>{errors.details}</p>}
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full group" disabled={status === 'sending'}>
        {status === 'sending' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Project Inquiry
          </>
        )}
      </Button>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4" />
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
