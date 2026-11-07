import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    customId: { type: String, index: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
    description: { type: String, required: true },
    responsibilities: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    qualifications: { type: [String], default: [] },
    experience: { type: String, required: true },
    location: { type: String, required: true },
    employmentType: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Internship', 'Remote', 'Contract'],
      default: 'Full-time',
    },
    salaryRange: { type: String, default: '' },
    applicationDeadline: { type: String, default: '' },
    status: {
      type: String,
      enum: ['active', 'draft', 'closed'],
      default: 'active',
    },
  },
  { timestamps: true }
);

const ApplicationSchema = new mongoose.Schema(
  {
    customId: { type: String, index: true },
    jobId: { type: String, required: true },
    jobTitle: { type: String, default: '' },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    experience: { type: String, required: true },
    skills: { type: String, required: true },
    linkedin: { type: String, default: '' },
    github: { type: String, default: '' },
    resumeUrl: { type: String, required: true },
    resumeBase64: { type: String, default: '' },
    resumeFileName: { type: String, default: '' },
    coverLetter: { type: String, default: '' },
    applicationStatus: {
      type: String,
      enum: [
        'Pending',
        'Reviewed',
        'Shortlisted',
        'Interview Scheduled',
        'Rejected',
        'Hired',
      ],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

const AdminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, default: 'Administrator' },
    role: { type: String, default: 'admin' },
  },
  { timestamps: true }
);

export const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);
export const Application =
  mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
export const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
