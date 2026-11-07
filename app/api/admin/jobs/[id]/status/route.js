import { NextResponse } from 'next/server';
import { updateJob } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function PATCH(request, { params }) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { status } = await request.json();
    if (!['active', 'draft', 'closed'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Status must be one of: active, draft, closed' },
        { status: 400 }
      );
    }

    const updated = await updateJob(params.id, { status });
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Job not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, job: updated });
  } catch (error) {
    console.error('Error updating job status:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update job status.' },
      { status: 500 }
    );
  }
}
