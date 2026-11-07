import { NextResponse } from 'next/server';
import { getJobs } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const department = searchParams.get('department') || 'all';
    const search = searchParams.get('search') || '';

    // Public endpoint ONLY returns active jobs
    const jobs = await getJobs({
      status: 'active',
      department,
      search,
    });

    return NextResponse.json({ success: true, jobs });
  } catch (error) {
    console.error('Error fetching public jobs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve active job openings.' },
      { status: 500 }
    );
  }
}
