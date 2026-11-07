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

    let fileBuffer = null;

    // 1. First priority: Check if stored directly in MongoDB Atlas (Vercel / Cloud storage)
    if (application.resumeBase64) {
      fileBuffer = Buffer.from(application.resumeBase64, 'base64');
    } else if (application.resumeUrl) {
      // 2. Fallback to local disk storage
      const relativePath = application.resumeUrl.replace(/^\/+/, '');
      const absolutePath = path.join(process.cwd(), 'public', relativePath);
      if (fs.existsSync(absolutePath)) {
        fileBuffer = fs.readFileSync(absolutePath);
      }
    }

    if (!fileBuffer) {
      return NextResponse.json(
        { success: false, error: 'Resume file is missing from storage.' },
        { status: 404 }
      );
    }

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
