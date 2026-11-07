import { NextResponse } from 'next/server';
import { getApplications, getJobs } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('jobId') || 'all';
    const status = searchParams.get('status') || 'all';
    const search = searchParams.get('search') || '';

    const [applications, jobs] = await Promise.all([
      getApplications({ jobId, status, search }),
      getJobs(),
    ]);

    // Enrich applications with fresh job title if needed
    const jobMap = new Map(jobs.map((j) => [j.id, j.title]));
    const enriched = applications.map((app) => ({
      ...app,
      jobTitle: app.jobTitle || jobMap.get(app.jobId) || 'Job Posting',
    }));

    return NextResponse.json({ success: true, applications: enriched });
  } catch (error) {
    console.error('Error fetching admin applications:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve applications.' },
      { status: 500 }
    );
  }
}
