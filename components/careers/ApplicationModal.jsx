'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase } from 'lucide-react';
import ApplicationForm from './ApplicationForm';

export default function ApplicationModal({ job, isOpen, onClose }) {
  if (!isOpen || !job) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col border border-slate-200"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-[#061426] text-white flex items-center justify-between border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#60A5FA] flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-heading font-extrabold text-white">
                  Apply for Position
                </h3>
                <p className="text-xs text-white/60 truncate max-w-sm">
                  {job.title} • {job.location}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-white">
            <ApplicationForm job={job} onSuccess={() => {}} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
