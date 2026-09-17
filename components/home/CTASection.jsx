'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    details: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim() || !form.details.trim()) return;
    setStatus('sending');
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus('success');
    setForm({ fullName: '', email: '', details: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden" id="contact-cta">
      {/* Subtle background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0066FF]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0066FF]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left Column: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-3 block">
              LET&apos;S TALK
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-extrabold leading-[1.15] tracking-tight text-[#0B1220] mb-4">
              Have a Project in Mind?
            </h2>

            <p className="text-[15px] text-[#64748B] leading-relaxed max-w-md mb-10">
              We&apos;d love to hear about your ideas. Get in touch with us and
              let&apos;s build something great together.
            </p>

            {/* Contact Details List */}
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0066FF]" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-0.5">Email</p>
                  <a
                    href="mailto:info@csatechnologiesco.com"
                    className="text-[15px] font-semibold text-[#0B1220] hover:text-[#0066FF] transition-colors"
                  >
                    info@csatechnologiesco.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0066FF]" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-0.5">Phone</p>
                  <a
                    href="tel:+919211293383"
                    className="text-[15px] font-semibold text-[#0B1220] hover:text-[#0066FF] transition-colors"
                  >
                    +91 92112 93383
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0066FF]" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-[15px] font-semibold text-[#0B1220]">E-22B, 4th Floor, Sector 8, Noida</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Clean White Card with Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl p-7 md:p-8 border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-14 h-14 text-emerald-500 mb-4" />
                <h3 className="text-xl font-heading font-bold text-[#0B1220] mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#64748B]">
                  We&apos;ll review your project and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Row: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cta-fullName"
                      className="block text-sm font-semibold text-[#0B1220] mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="cta-fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0B1220] placeholder:text-[#94A3B8] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cta-email"
                      className="block text-sm font-semibold text-[#0B1220] mb-1.5"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="cta-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0B1220] placeholder:text-[#94A3B8] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="cta-details"
                    className="block text-sm font-semibold text-[#0B1220] mb-1.5"
                  >
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="cta-details"
                    name="details"
                    rows={4}
                    required
                    value={form.details}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0B1220] placeholder:text-[#94A3B8] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066FF] text-white text-sm font-semibold hover:bg-[#0052CC] shadow-[0_4px_16px_rgba(0,102,255,0.25)] hover:shadow-[0_6px_22px_rgba(0,102,255,0.38)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
