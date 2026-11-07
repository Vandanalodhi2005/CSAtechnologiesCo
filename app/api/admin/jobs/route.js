import { NextResponse } from 'next/server';
import { getJobs, createJob, getApplications } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'all';
    const department = searchParams.get('department') || 'all';
    const search = searchParams.get('search') || '';

    const [jobs, applications] = await Promise.all([
      getJobs({ status, department, search }),
      getApplications(),
    ]);

    // Attach application count to each job
    const jobsWithCounts = jobs.map((job) => {
      const count = applications.filter((app) => app.jobId === job.id).length;
      return {
        ...job,
        applicationsCount: count,
      };
    });

    return NextResponse.json({ success: true, jobs: jobsWithCounts });
  } catch (error) {
    console.error('Error fetching admin jobs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve jobs.' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();

    if (!data.title || !data.department || !data.description || !data.location || !data.experience) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please fill in all required fields: Title, Department, Description, Location, and Experience.',
        },
        { status: 400 }
      );
    }

    const newJob = await createJob({
      title: data.title,
      department: data.department,
      description: data.description,
      responsibilities: data.responsibilities,
      skills: data.skills,
      qualifications: data.qualifications,
      experience: data.experience,
      location: data.location,
      employmentType: data.employmentType || 'Full-time',
      salaryRange: data.salaryRange || '',
      applicationDeadline: data.applicationDeadline || '',
      status: data.status || 'active',
    });

    return NextResponse.json({ success: true, job: newJob }, { status: 201 });
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create job opening.' },
      { status: 500 }
    );
  }
}
