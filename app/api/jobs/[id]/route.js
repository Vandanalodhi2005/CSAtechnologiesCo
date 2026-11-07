import { NextResponse } from 'next/server';
import { getJobById } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const job = await getJobById(id);

    if (!job || job.status !== 'active') {
      return NextResponse.json(
        { success: false, error: 'Job opening not found or is no longer active.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, job });
  } catch (error) {
    console.error(`Error fetching job ${params?.id}:`, error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve job details.' },
      { status: 500 }
    );
  }
}
