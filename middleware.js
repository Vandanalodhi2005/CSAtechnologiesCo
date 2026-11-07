import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose/jwt/verify';

const JWT_SECRET =
  process.env.JWT_SECRET || 'csa-technologies-secret-key-production-2026-safe-guard';
const secretKey = new TextEncoder().encode(JWT_SECRET);

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('admin_token')?.value;

    let isAuthenticated = false;
    if (token) {
      try {
        await jwtVerify(token, secretKey);
        isAuthenticated = true;
      } catch {
        isAuthenticated = false;
      }
    }

    // If user is at /admin/login
    if (pathname === '/admin/login') {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
      return NextResponse.next();
    }

    // For all other /admin routes, require authentication
    if (!isAuthenticated) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      const response = NextResponse.redirect(loginUrl);
      // Clean up stale token cookie if invalid
      if (token) {
        response.cookies.delete('admin_token');
      }
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
