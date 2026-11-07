import { NextResponse } from 'next/server';
import { getJobById, updateJob, deleteJob, getApplications } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const job = await getJobById(params.id);
    if (!job) {
      return NextResponse.json({ success: false, error: 'Job not found.' }, { status: 404 });
    }
    return NextResponse.json({ success: true, job });
  } catch (error) {
    console.error('Error fetching admin job by id:', error);
    return NextResponse.json({ success: false, error: 'Failed to retrieve job.' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const updated = await updateJob(params.id, data);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Job not found.' }, { status: 404 });
    }
    return NextResponse.json({ success: true, job: updated });
  } catch (error) {
    console.error('Error updating job:', error);
    return NextResponse.json({ success: false, error: 'Failed to update job.' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const success = await deleteJob(params.id);
    return NextResponse.json({ success });
  } catch (error) {
    console.error('Error deleting job:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete job.' }, { status: 500 });
  }
}
