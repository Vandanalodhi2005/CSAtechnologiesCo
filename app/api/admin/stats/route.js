import { NextResponse } from 'next/server';
import { getDashboardStats } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const stats = await getDashboardStats();
    return NextResponse.json({ success: true, stats });
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve dashboard statistics.' },
      { status: 500 }
    );
  }
}
