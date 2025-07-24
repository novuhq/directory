import { NextRequest, NextResponse } from 'next/server';
import { Novu } from '@novu/api';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { subscriberId } = body;

    if (!subscriberId) {
      return NextResponse.json({ error: 'Missing subscriberId' }, { status: 400 });
    }

    const secretKey = process.env.NOVU_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json({ error: 'Missing NOVU_SECRET_KEY' }, { status: 500 });
    }

    const novu = new Novu({ secretKey });

    // Trigger the workflow (subscriber will be created if not exists)
    const result = await novu.trigger({
      workflowId: 'inbox-directory-project-management', //workflow id
      to: { subscriberId },
      payload: {},
    });

    return NextResponse.json({ success: true, result });
  } catch (error: unknown) {
    console.error('Novu trigger error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 