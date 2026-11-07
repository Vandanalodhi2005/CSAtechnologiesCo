import { NextResponse } from 'next/server';
import { getApplicationById, updateApplicationStatus, deleteApplication, getJobById } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const application = await getApplicationById(params.id);
    if (!application) {
      return NextResponse.json(
        { success: false, error: 'Application not found.' },
        { status: 404 }
      );
    }

    const job = await getJobById(application.jobId);

    return NextResponse.json({
      success: true,
      application: {
        ...application,
        jobDetails: job || null,
      },
    });
  } catch (error) {
    console.error('Error fetching application by id:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve application details.' },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { status } = await request.json();
    const validStatuses = [
      'Pending',
      'Reviewed',
      'Shortlisted',
      'Interview Scheduled',
      'Rejected',
      'Hired',
    ];

    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, error: `Invalid status. Valid values: ${validStatuses.join(', ')}` },
        { status: 400 }
      );
    }

    const updated = await updateApplicationStatus(params.id, status);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Application not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, application: updated });
  } catch (error) {
    console.error('Error updating application status:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update application status.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const success = await deleteApplication(params.id);
    return NextResponse.json({ success });
  } catch (error) {
    console.error('Error deleting application:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete application.' },
      { status: 500 }
    );
  }
}
