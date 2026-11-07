const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const uri = process.env.MONGODB_URI;
if (!uri) {
  require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });
}
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('Error: MONGODB_URI is not set in environment or .env.local');
  process.exit(1);
}
const DB_DIR = path.join(__dirname, '..', 'data', 'db');

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

const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);
const Application = mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

async function migrate() {
  console.log('--- Connecting to MongoDB Atlas ---');
  await mongoose.connect(mongoUri);
  console.log('✓ Connected successfully!');

  // 1. Migrate Admin
  const adminFile = path.join(DB_DIR, 'admins.json');
  if (fs.existsSync(adminFile)) {
    const admins = JSON.parse(fs.readFileSync(adminFile, 'utf8'));
    for (const a of admins) {
      await Admin.findOneAndUpdate(
        { email: a.email.toLowerCase() },
        {
          email: a.email.toLowerCase(),
          password: a.password,
          name: a.name || 'Administrator',
          role: a.role || 'admin',
        },
        { upsert: true, new: true }
      );
      console.log(`✓ Admin synced to MongoDB Atlas: ${a.email}`);
    }
  }

  // 2. Migrate Jobs
  const jobsFile = path.join(DB_DIR, 'jobs.json');
  if (fs.existsSync(jobsFile)) {
    const jobs = JSON.parse(fs.readFileSync(jobsFile, 'utf8'));
    let jobCount = 0;
    for (const j of jobs) {
      const customId = j.id || j.customId;
      await Job.findOneAndUpdate(
        { customId: customId },
        {
          customId: customId,
          title: j.title,
          department: j.department,
          description: j.description,
          responsibilities: j.responsibilities || [],
          skills: j.skills || [],
          qualifications: j.qualifications || [],
          experience: j.experience,
          location: j.location,
          employmentType: j.employmentType || 'Full-time',
          salaryRange: j.salaryRange || '',
          applicationDeadline: j.applicationDeadline || '',
          status: j.status || 'active',
          createdAt: j.createdAt ? new Date(j.createdAt) : new Date(),
          updatedAt: j.updatedAt ? new Date(j.updatedAt) : new Date(),
        },
        { upsert: true, new: true }
      );
      jobCount++;
    }
    console.log(`✓ Synced ${jobCount} jobs to MongoDB Atlas.`);
  }

  // 3. Migrate Applications
  const appsFile = path.join(DB_DIR, 'applications.json');
  if (fs.existsSync(appsFile)) {
    const apps = JSON.parse(fs.readFileSync(appsFile, 'utf8'));
    let appCount = 0;
    for (const a of apps) {
      const customId = a.id || a.customId;
      await Application.findOneAndUpdate(
        { customId: customId },
        {
          customId: customId,
          jobId: a.jobId,
          jobTitle: a.jobTitle,
          fullName: a.fullName,
          email: a.email,
          phone: a.phone,
          location: a.location,
          experience: a.experience,
          skills: a.skills,
          linkedin: a.linkedin || '',
          github: a.github || '',
          resumeUrl: a.resumeUrl,
          coverLetter: a.coverLetter || '',
          applicationStatus: a.applicationStatus || 'Pending',
          createdAt: a.createdAt ? new Date(a.createdAt) : new Date(),
          updatedAt: a.updatedAt ? new Date(a.updatedAt) : new Date(),
        },
        { upsert: true, new: true }
      );
      appCount++;
    }
    console.log(`✓ Synced ${appCount} applications to MongoDB Atlas (including Akash's application).`);
  }

  console.log('--- Migration to MongoDB Atlas Completed Successfully! ---');
  await mongoose.disconnect();
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
