import { NextResponse } from 'next/server';
import { getJobById, createApplication, getApplications } from '@/lib/db';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5 MB
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'resumes');

function ensureUploadDir() {
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    const jobId = formData.get('jobId')?.toString().trim();
    const fullName = formData.get('fullName')?.toString().trim();
    const email = formData.get('email')?.toString().trim().toLowerCase();
    const phone = formData.get('phone')?.toString().trim();
    const location = formData.get('location')?.toString().trim();
    const experience = formData.get('experience')?.toString().trim();
    const skills = formData.get('skills')?.toString().trim();
    const linkedin = formData.get('linkedin')?.toString().trim() || '';
    const github = formData.get('github')?.toString().trim() || '';
    const coverLetter = formData.get('coverLetter')?.toString().trim() || '';
    const resumeFile = formData.get('resume');

    // 1. Validate required fields
    if (!jobId || !fullName || !email || !phone || !location || !experience || !skills) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Please complete all required fields (Full Name, Email, Phone, Location, Experience, and Skills).',
        },
        { status: 400 }
      );
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // 3. Validate phone format
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (cleanPhone.length < 8 || cleanPhone.length > 16) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please enter a valid phone number with country/area code.',
        },
        { status: 400 }
      );
    }

    // 4. Verify job existence and active status
    const targetJob = await getJobById(jobId);
    if (!targetJob) {
      return NextResponse.json(
        {
          success: false,
          error: 'The selected job position does not exist or has been removed.',
        },
        { status: 404 }
      );
    }
    if (targetJob.status !== 'active') {
      return NextResponse.json(
        {
          success: false,
          error: 'This job position is no longer accepting new applications.',
        },
        { status: 400 }
      );
    }

    // 5. Duplicate submission check
    const existingApps = await getApplications({ jobId });
    const isDuplicate = existingApps.some(
      (app) => app.email?.toLowerCase() === email
    );
    if (isDuplicate) {
      return NextResponse.json(
        {
          success: false,
          error:
            'You have already submitted an application for this position. Our hiring team will review your profile shortly.',
        },
        { status: 409 }
      );
    }

    // 6. Resume file validation
    if (!resumeFile || typeof resumeFile === 'string' || !resumeFile.size) {
      return NextResponse.json(
        { success: false, error: 'Please upload your resume in PDF format.' },
        { status: 400 }
      );
    }

    if (resumeFile.size > MAX_RESUME_SIZE) {
      return NextResponse.json(
        {
          success: false,
          error: 'Resume file size exceeds the 5MB limit. Please upload a smaller PDF.',
        },
        { status: 400 }
      );
    }

    const originalName = resumeFile.name || 'resume.pdf';
    const isPdf =
      resumeFile.type === 'application/pdf' ||
      originalName.toLowerCase().endsWith('.pdf');

    if (!isPdf) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid file format. Only PDF documents (.pdf) are accepted.',
        },
        { status: 400 }
      );
    }

    // 7. Store Resume securely (Serverless-safe for Vercel & local disk)
    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    const resumeBase64 = buffer.toString('base64');

    const sanitizedCandidateName = fullName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .substring(0, 30);
    const uniqueSuffix = `${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
    const filename = `resume-${sanitizedCandidateName}-${uniqueSuffix}.pdf`;

    // Attempt local disk save if filesystem allows, but never crash on Vercel read-only filesystem
    try {
      ensureUploadDir();
      const targetFilePath = path.join(UPLOAD_DIR, filename);
      fs.writeFileSync(targetFilePath, buffer);
    } catch (fsError) {
      // Gracefully continue; resume is securely persisted in MongoDB Atlas as resumeBase64
      console.warn('Vercel serverless environment detected (read-only filesystem). Storing resume in cloud DB.');
    }

    const resumeUrl = `/uploads/resumes/${filename}`;

    // 8. Save Application Record in Database
    const newApplication = await createApplication({
      jobId,
      jobTitle: targetJob.title,
      fullName,
      email,
      phone,
      location,
      experience,
      skills,
      linkedin,
      github,
      resumeUrl,
      resumeBase64,
      resumeFileName: originalName || filename,
      coverLetter,
      applicationStatus: 'Pending',
    });

    return NextResponse.json(
      {
        success: true,
        message:
          'Your application has been submitted successfully. Our team will contact you if your profile matches our requirements.',
        applicationId: newApplication.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          'An unexpected error occurred while processing your application. Please try again.',
      },
      { status: 500 }
    );
  }
}
