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
      workflowId: 'healthcare-patient-notifications',
      to: { subscriberId },
      payload: {
        message: 'Welcome to Healthcare Portal!',
        features: [
          'Appointment notifications',
          'Medication reminders',
          'Test results',
          'Billing updates',
        ],
        setupComplete: true,
      },
    });

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error('Novu trigger error:', error);
    return NextResponse.json({ error: error?.message || 'Unknown error' }, { status: 500 });
  }
} 