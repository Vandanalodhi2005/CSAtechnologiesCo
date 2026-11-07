import { NextResponse } from 'next/server';
import { getAdminByEmail } from '@/lib/db';
import { verifyPassword, signAdminToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Please provide both email and password.' },
        { status: 400 }
      );
    }

    const admin = await getAdminByEmail(email);
    if (!admin) {
      // Use generic error message to prevent enumeration
      return NextResponse.json(
        { success: false, error: 'Invalid administrator credentials.' },
        { status: 401 }
      );
    }

    const isValid = await verifyPassword(password, admin.password);
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid administrator credentials.' },
        { status: 401 }
      );
    }

    // Generate signed JWT token
    const token = await signAdminToken({
      id: admin.id,
      email: admin.email,
      name: admin.name || 'Administrator',
      role: admin.role || 'admin',
    });

    const response = NextResponse.json({
      success: true,
      message: 'Authentication successful.',
      admin: {
        email: admin.email,
        name: admin.name || 'Administrator',
        role: admin.role || 'admin',
      },
    });

    // Set secure HTTP-only cookie
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected authentication error occurred.' },
      { status: 500 }
    );
  }
}
