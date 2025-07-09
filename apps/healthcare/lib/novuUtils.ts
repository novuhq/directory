// Utility functions for triggering Novu healthcare workflows

export type HealthcareWorkflow = 
  | 'healthcare-messages'
  | 'healthcare-lab-results'
  | 'healthcare-appointment-reminder'
  | 'healthcare-prescription-refill-reminder'
  | 'healthcare-outstanding-balance-reminder'
  | 'healthcare-rescheduled-by-clinic';

interface TriggerWorkflowParams {
  subscriberId: string;
  workflowId: HealthcareWorkflow;
  payload?: Record<string, any>;
}

interface TriggerAllWorkflowsParams {
  subscriberId: string;
  payload?: Record<string, any>;
}

/**
 * Trigger all healthcare workflows simultaneously
 */
export async function triggerAllHealthcareWorkflows({
  subscriberId,
  payload = {}
}: TriggerAllWorkflowsParams) {
  try {
    const response = await fetch('/api/novu/trigger', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subscriberId,
        payload,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to trigger workflows');
    }

    return await response.json();
  } catch (error) {
    console.error('Error triggering all healthcare workflows:', error);
    throw error;
  }
}

/**
 * Trigger a specific healthcare workflow notification
 */
export async function triggerHealthcareWorkflow({
  subscriberId,
  workflowId,
  payload = {}
}: TriggerWorkflowParams) {
  try {
    const response = await fetch('/api/novu/trigger', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subscriberId,
        workflowId,
        payload,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to trigger workflow');
    }

    return await response.json();
  } catch (error) {
    console.error('Error triggering healthcare workflow:', error);
    throw error;
  }
}

// Helper functions for common healthcare scenarios

export async function sendLabResultsNotification(
  subscriberId: string,
  labResults: {
    testName: string;
    result: string;
    date: string;
    isAbnormal?: boolean;
  }
) {
  return triggerHealthcareWorkflow({
    subscriberId,
    workflowId: 'healthcare-lab-results',
    payload: {
      testName: labResults.testName,
      result: labResults.result,
      date: labResults.date,
      isAbnormal: labResults.isAbnormal || false,
    },
  });
}

export async function sendAppointmentReminder(
  subscriberId: string,
  appointment: {
    date: string;
    time: string;
    doctorName: string;
    location: string;
    appointmentType: string;
  }
) {
  return triggerHealthcareWorkflow({
    subscriberId,
    workflowId: 'healthcare-appointment-reminder',
    payload: {
      appointmentDate: appointment.date,
      appointmentTime: appointment.time,
      doctorName: appointment.doctorName,
      location: appointment.location,
      appointmentType: appointment.appointmentType,
    },
  });
}

export async function sendPrescriptionRefillReminder(
  subscriberId: string,
  prescription: {
    medicationName: string;
    refillDate: string;
    pharmacyName?: string;
  }
) {
  return triggerHealthcareWorkflow({
    subscriberId,
    workflowId: 'healthcare-prescription-refill-reminder',
    payload: {
      medicationName: prescription.medicationName,
      refillDate: prescription.refillDate,
      pharmacyName: prescription.pharmacyName || 'Your preferred pharmacy',
    },
  });
}

export async function sendBalanceReminder(
  subscriberId: string,
  balance: {
    amount: number;
    dueDate: string;
    accountNumber?: string;
  }
) {
  return triggerHealthcareWorkflow({
    subscriberId,
    workflowId: 'healthcare-outstanding-balance-reminder',
    payload: {
      amount: balance.amount,
      dueDate: balance.dueDate,
      accountNumber: balance.accountNumber || 'N/A',
    },
  });
}

export async function sendRescheduledAppointmentNotification(
  subscriberId: string,
  appointment: {
    originalDate: string;
    originalTime: string;
    newDate: string;
    newTime: string;
    doctorName: string;
    reason?: string;
  }
) {
  return triggerHealthcareWorkflow({
    subscriberId,
    workflowId: 'healthcare-rescheduled-by-clinic',
    payload: {
      originalDate: appointment.originalDate,
      originalTime: appointment.originalTime,
      newDate: appointment.newDate,
      newTime: appointment.newTime,
      doctorName: appointment.doctorName,
      reason: appointment.reason || 'Scheduling conflict',
    },
  });
}

export async function sendMessageNotification(
  subscriberId: string,
  message: {
    from: string;
    subject: string;
    preview: string;
    priority?: 'low' | 'medium' | 'high';
  }
) {
  return triggerHealthcareWorkflow({
    subscriberId,
    workflowId: 'healthcare-messages',
    payload: {
      from: message.from,
      subject: message.subject,
      preview: message.preview,
      priority: message.priority || 'medium',
    },
  });
} 