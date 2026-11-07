import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized. Please log in.' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    admin: {
      id: session.id,
      email: session.email,
      name: session.name,
      role: session.role,
    },
  });
}
