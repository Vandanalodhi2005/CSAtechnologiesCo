import { NextResponse } from 'next/server';
import { getApplicationById } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const session = await getAdminSession(request);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const application = await getApplicationById(params.id);
    if (!application || !application.resumeUrl) {
      return NextResponse.json(
        { success: false, error: 'Application or resume not found.' },
        { status: 404 }
      );
    }

    // Sanitize path to prevent path traversal
    const relativePath = application.resumeUrl.replace(/^\/+/, '');
    const absolutePath = path.join(process.cwd(), 'public', relativePath);

    if (!fs.existsSync(absolutePath)) {
      return NextResponse.json(
        { success: false, error: 'Resume file is missing from storage.' },
        { status: 404 }
      );
    }

    const fileBuffer = fs.readFileSync(absolutePath);
    const downloadName = `${application.fullName.replace(/[^a-zA-Z0-9]/g, '_')}_Resume.pdf`;

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${downloadName}"`,
        'Cache-Control': 'private, no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error streaming resume PDF:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to access resume file.' },
      { status: 500 }
    );
  }
}
