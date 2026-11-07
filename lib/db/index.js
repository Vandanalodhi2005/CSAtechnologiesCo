import mongoose from 'mongoose';
import { connectToDatabase } from './connect.js';
import { Job, Application, Admin } from './models.js';
import { readCollection, writeCollection } from './jsonStore.js';
import crypto from 'crypto';

function normalizeDoc(doc) {
  if (!doc) return null;
  const obj = doc.toObject ? doc.toObject() : { ...doc };
  if (obj.customId) {
    obj.id = obj.customId;
  } else if (obj._id && !obj.id) {
    obj.id = obj._id.toString();
  }
  return obj;
}

// ============================================================================
// JOB REPOSITORY
// ============================================================================

export async function getJobs(filter = {}) {
  const db = await connectToDatabase();
  if (db) {
    const query = {};
    if (filter.status && filter.status !== 'all') {
      query.status = filter.status;
    }
    if (filter.department && filter.department !== 'all') {
      query.department = filter.department;
    }
    if (filter.search) {
      const searchRegex = new RegExp(filter.search, 'i');
      query.$or = [
        { title: searchRegex },
        { department: searchRegex },
        { location: searchRegex },
        { description: searchRegex },
      ];
    }
    const docs = await Job.find(query).sort({ createdAt: -1 });
    return docs.map(normalizeDoc);
  }

  // Fallback to JSON Store
  let jobs = readCollection('jobs');
  if (filter.status && filter.status !== 'all') {
    jobs = jobs.filter((j) => j.status === filter.status);
  }
  if (filter.department && filter.department !== 'all') {
    jobs = jobs.filter((j) => j.department.toLowerCase() === filter.department.toLowerCase());
  }
  if (filter.search) {
    const q = filter.search.toLowerCase();
    jobs = jobs.filter(
      (j) =>
        j.title?.toLowerCase().includes(q) ||
        j.department?.toLowerCase().includes(q) ||
        j.location?.toLowerCase().includes(q) ||
        j.description?.toLowerCase().includes(q)
    );
  }
  return jobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export async function getJobById(id) {
  if (!id) return null;
  const db = await connectToDatabase();
  if (db) {
    try {
      let doc = null;
      if (mongoose.Types.ObjectId.isValid(id)) {
        doc = await Job.findById(id);
      }
      if (!doc) {
        doc = await Job.findOne({ customId: id });
      }
      return normalizeDoc(doc);
    } catch {
      return null;
    }
  }

  const jobs = readCollection('jobs');
  const job = jobs.find((j) => j.id === id || j._id === id || j.customId === id);
  return job ? normalizeDoc(job) : null;
}

export async function createJob(data) {
  const now = new Date().toISOString();
  const db = await connectToDatabase();

  const formattedData = {
    title: data.title || '',
    department: data.department || '',
    description: data.description || '',
    responsibilities: Array.isArray(data.responsibilities)
      ? data.responsibilities
      : typeof data.responsibilities === 'string'
      ? data.responsibilities.split('\n').map((s) => s.trim()).filter(Boolean)
      : [],
    skills: Array.isArray(data.skills)
      ? data.skills
      : typeof data.skills === 'string'
      ? data.skills.split(',').map((s) => s.trim()).filter(Boolean)
      : [],
    qualifications: Array.isArray(data.qualifications)
      ? data.qualifications
      : typeof data.qualifications === 'string'
      ? data.qualifications.split('\n').map((s) => s.trim()).filter(Boolean)
      : [],
    experience: data.experience || '',
    location: data.location || '',
    employmentType: data.employmentType || 'Full-time',
    salaryRange: data.salaryRange || '',
    applicationDeadline: data.applicationDeadline || '',
    status: data.status || 'active',
  };

  if (db) {
    const customId = data.id || crypto.randomUUID();
    const created = await Job.create({
      ...formattedData,
      customId,
    });
    return normalizeDoc(created);
  }

  const jobs = readCollection('jobs');
  const newJob = {
    id: data.id || crypto.randomUUID(),
    customId: data.id || crypto.randomUUID(),
    ...formattedData,
    createdAt: now,
    updatedAt: now,
  };
  jobs.unshift(newJob);
  writeCollection('jobs', jobs);
  return newJob;
}

export async function updateJob(id, data) {
  const db = await connectToDatabase();
  const now = new Date().toISOString();

  const updatePayload = { ...data };
  if (typeof updatePayload.responsibilities === 'string') {
    updatePayload.responsibilities = updatePayload.responsibilities
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (typeof updatePayload.skills === 'string') {
    updatePayload.skills = updatePayload.skills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (typeof updatePayload.qualifications === 'string') {
    updatePayload.qualifications = updatePayload.qualifications
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
  }

  if (db) {
    try {
      let query = { customId: id };
      if (mongoose.Types.ObjectId.isValid(id)) {
        query = { $or: [{ _id: id }, { customId: id }] };
      }
      const updated = await Job.findOneAndUpdate(query, updatePayload, { new: true });
      return normalizeDoc(updated);
    } catch {
      return null;
    }
  }

  const jobs = readCollection('jobs');
  const index = jobs.findIndex((j) => j.id === id || j._id === id || j.customId === id);
  if (index === -1) return null;

  jobs[index] = {
    ...jobs[index],
    ...updatePayload,
    updatedAt: now,
  };
  writeCollection('jobs', jobs);
  return jobs[index];
}

export async function deleteJob(id) {
  const db = await connectToDatabase();
  if (db) {
    try {
      let query = { customId: id };
      if (mongoose.Types.ObjectId.isValid(id)) {
        query = { $or: [{ _id: id }, { customId: id }] };
      }
      await Job.findOneAndDelete(query);
      return true;
    } catch {
      return false;
    }
  }

  const jobs = readCollection('jobs');
  const filtered = jobs.filter((j) => j.id !== id && j._id !== id && j.customId !== id);
  writeCollection('jobs', filtered);
  return true;
}

// ============================================================================
// APPLICATION REPOSITORY
// ============================================================================

export async function getApplications(filter = {}) {
  const db = await connectToDatabase();
  if (db) {
    const query = {};
    if (filter.jobId && filter.jobId !== 'all') {
      query.jobId = filter.jobId;
    }
    if (filter.status && filter.status !== 'all') {
      query.applicationStatus = filter.status;
    }
    if (filter.search) {
      const searchRegex = new RegExp(filter.search, 'i');
      query.$or = [
        { fullName: searchRegex },
        { email: searchRegex },
        { phone: searchRegex },
        { skills: searchRegex },
        { jobTitle: searchRegex },
      ];
    }
    const docs = await Application.find(query).sort({ createdAt: -1 });
    return docs.map(normalizeDoc);
  }

  let apps = readCollection('applications');
  if (filter.jobId && filter.jobId !== 'all') {
    apps = apps.filter((a) => a.jobId === filter.jobId);
  }
  if (filter.status && filter.status !== 'all') {
    apps = apps.filter((a) => a.applicationStatus === filter.status);
  }
  if (filter.search) {
    const q = filter.search.toLowerCase();
    apps = apps.filter(
      (a) =>
        a.fullName?.toLowerCase().includes(q) ||
        a.email?.toLowerCase().includes(q) ||
        a.phone?.toLowerCase().includes(q) ||
        a.skills?.toLowerCase().includes(q) ||
        a.jobTitle?.toLowerCase().includes(q)
    );
  }
  return apps.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export async function getApplicationById(id) {
  if (!id) return null;
  const db = await connectToDatabase();
  if (db) {
    try {
      let doc = null;
      if (mongoose.Types.ObjectId.isValid(id)) {
        doc = await Application.findById(id);
      }
      if (!doc) {
        doc = await Application.findOne({ customId: id });
      }
      return normalizeDoc(doc);
    } catch {
      return null;
    }
  }

  const apps = readCollection('applications');
  const app = apps.find((a) => a.id === id || a._id === id || a.customId === id);
  return app ? normalizeDoc(app) : null;
}

export async function createApplication(data) {
  const now = new Date().toISOString();
  const db = await connectToDatabase();

  const formattedData = {
    jobId: data.jobId,
    jobTitle: data.jobTitle || '',
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    location: data.location,
    experience: data.experience,
    skills: data.skills,
    linkedin: data.linkedin || '',
    github: data.github || '',
    resumeUrl: data.resumeUrl,
    resumeBase64: data.resumeBase64 || '',
    resumeFileName: data.resumeFileName || '',
    coverLetter: data.coverLetter || '',
    applicationStatus: data.applicationStatus || 'Pending',
  };

  if (db) {
    const customId = data.id || crypto.randomUUID();
    const created = await Application.create({
      ...formattedData,
      customId,
    });
    return normalizeDoc(created);
  }

  const apps = readCollection('applications');
  const newApp = {
    id: data.id || crypto.randomUUID(),
    customId: data.id || crypto.randomUUID(),
    ...formattedData,
    createdAt: now,
    updatedAt: now,
  };
  apps.unshift(newApp);
  writeCollection('applications', apps);
  return newApp;
}

export async function updateApplicationStatus(id, applicationStatus) {
  const db = await connectToDatabase();
  const now = new Date().toISOString();

  if (db) {
    try {
      let query = { customId: id };
      if (mongoose.Types.ObjectId.isValid(id)) {
        query = { $or: [{ _id: id }, { customId: id }] };
      }
      const updated = await Application.findOneAndUpdate(
        query,
        { applicationStatus, updatedAt: now },
        { new: true }
      );
      return normalizeDoc(updated);
    } catch {
      return null;
    }
  }

  const apps = readCollection('applications');
  const index = apps.findIndex((a) => a.id === id || a._id === id || a.customId === id);
  if (index === -1) return null;

  apps[index] = {
    ...apps[index],
    applicationStatus,
    updatedAt: now,
  };
  writeCollection('applications', apps);
  return apps[index];
}

export async function deleteApplication(id) {
  const db = await connectToDatabase();
  if (db) {
    try {
      let query = { customId: id };
      if (mongoose.Types.ObjectId.isValid(id)) {
        query = { $or: [{ _id: id }, { customId: id }] };
      }
      await Application.findOneAndDelete(query);
      return true;
    } catch {
      return false;
    }
  }

  const apps = readCollection('applications');
  const filtered = apps.filter((a) => a.id !== id && a._id !== id && a.customId !== id);
  writeCollection('applications', filtered);
  return true;
}

// ============================================================================
// ADMIN REPOSITORY
// ============================================================================

export async function getAdminByEmail(email) {
  if (!email) return null;
  const normalizedEmail = email.toLowerCase().trim();
  const db = await connectToDatabase();
  if (db) {
    const doc = await Admin.findOne({ email: normalizedEmail });
    return normalizeDoc(doc);
  }

  const admins = readCollection('admins');
  const admin = admins.find((a) => a.email.toLowerCase() === normalizedEmail);
  return admin ? normalizeDoc(admin) : null;
}

export async function createAdmin(data) {
  const now = new Date().toISOString();
  const normalizedEmail = data.email.toLowerCase().trim();
  const db = await connectToDatabase();

  const formattedData = {
    email: normalizedEmail,
    password: data.password,
    name: data.name || 'Administrator',
    role: data.role || 'admin',
  };

  if (db) {
    const created = await Admin.create(formattedData);
    return normalizeDoc(created);
  }

  const admins = readCollection('admins');
  const existing = admins.findIndex((a) => a.email.toLowerCase() === normalizedEmail);
  const newAdmin = {
    id: crypto.randomUUID(),
    ...formattedData,
    createdAt: now,
    updatedAt: now,
  };

  if (existing >= 0) {
    admins[existing] = newAdmin;
  } else {
    admins.push(newAdmin);
  }
  writeCollection('admins', admins);
  return newAdmin;
}

// ============================================================================
// DASHBOARD STATS
// ============================================================================

export async function getDashboardStats() {
  const [jobs, applications] = await Promise.all([getJobs(), getApplications()]);

  const totalJobs = jobs.length;
  const activeJobs = jobs.filter((j) => j.status === 'active').length;
  const closedJobs = jobs.filter((j) => j.status === 'closed').length;
  const draftJobs = jobs.filter((j) => j.status === 'draft').length;

  const totalApplications = applications.length;
  const pendingApplications = applications.filter((a) => a.applicationStatus === 'Pending').length;
  const shortlistedCandidates = applications.filter((a) => a.applicationStatus === 'Shortlisted').length;
  const interviewedCandidates = applications.filter((a) => a.applicationStatus === 'Interview Scheduled').length;
  const hiredCandidates = applications.filter((a) => a.applicationStatus === 'Hired').length;

  const recentApplications = applications.slice(0, 6);

  return {
    totalJobs,
    activeJobs,
    closedJobs,
    draftJobs,
    totalApplications,
    pendingApplications,
    shortlistedCandidates,
    interviewedCandidates,
    hiredCandidates,
    recentApplications,
  };
}
