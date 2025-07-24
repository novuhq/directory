import { NextRequest, NextResponse } from 'next/server';
import { Novu } from '@novu/api';

// Define all healthcare workflows
const HEALTHCARE_WORKFLOWS = [
  'healthcare-messages',
  'healthcare-lab-results',
  'healthcare-appointment-reminder',
  'healthcare-prescription-refill-reminder',
  'healthcare-outstanding-balance-reminder',
  'healthcare-rescheduled-by-clinic',
] as const;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { subscriberId, payload = {} } = body;

    if (!subscriberId) {
      return NextResponse.json({ error: 'Missing subscriberId' }, { status: 400 });
    }

    const secretKey = process.env.NOVU_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json({ error: 'Missing NOVU_SECRET_KEY' }, { status: 500 });
    }

    const novu = new Novu({ secretKey });

    // Trigger all healthcare workflows simultaneously
    const triggerPromises = HEALTHCARE_WORKFLOWS.map(async (workflowId) => {
      try {
        const result = await novu.trigger({
          workflowId,
          to: { subscriberId },
          payload,
        });
        return { workflowId, success: true, result };
      } catch (error) {
        console.error(`Error triggering ${workflowId}:`, error);
        return {
          workflowId,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        };
      }
    });

    // Wait for all workflows to complete
    const results = await Promise.all(triggerPromises);

    // Count successes and failures
    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    return NextResponse.json({
      success: true,
      summary: {
        total: HEALTHCARE_WORKFLOWS.length,
        successful: successful.length,
        failed: failed.length,
      },
      results,
      triggeredWorkflows: HEALTHCARE_WORKFLOWS,
    });
  } catch (error: unknown) {
    console.error('Novu trigger error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
