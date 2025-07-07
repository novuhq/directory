import { Novu, Notification } from "@novu/js";
import { getSubscriberId } from "@/lib/subscriberUtils";

// Validate required environment variable
const applicationIdentifier = process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;
if (!applicationIdentifier) {
  throw new Error(
    'NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER environment variable is required but not defined. ' +
    'Please ensure this variable is set in your environment configuration.'
  );
}

const novu = new Novu({
  subscriberId: getSubscriberId(),
  applicationIdentifier,
});

interface NovuResponse {
  success: boolean;
  error?: string;
  data?: any;
}

export const readNotification = async (notification: Notification): Promise<NovuResponse> => {
  try {
    await novu.notifications.read({ notificationId: notification.id });
    return { success: true };
  } catch (error) {
    console.error('Failed to read notification:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const unreadNotification = async (notification: Notification): Promise<NovuResponse> => {
  try {
    await novu.notifications.unread({ notificationId: notification.id });
    return { success: true };
  } catch (error) {
    console.error('Failed to unread notification:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const archiveNotification = async (notification: Notification): Promise<NovuResponse> => {
  try {
    await novu.notifications.archive({ notificationId: notification.id });
    return { success: true };
  } catch (error) {
    console.error('Failed to archive notification:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const readAllNotifications = async (): Promise<NovuResponse> => {
  try {
    await novu.notifications.readAll();
    return { success: true };
  } catch (error) {
    console.error('Failed to read all notifications:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const archiveAllNotifications = async (): Promise<NovuResponse> => {
  try {
    await novu.notifications.archiveAll();
    return { success: true };
  } catch (error) {
    console.error('Failed to archive all notifications:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const snoozeNotification = () => { 
  const now = new Date();
  
  const anHourFromNow = new Date(now);
  anHourFromNow.setHours(anHourFromNow.getHours() + 1);
  
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(9, 0, 0, 0); // Set to 9 AM tomorrow
  
  const nextWeek = new Date(now);
  nextWeek.setDate(nextWeek.getDate() + 7);
  nextWeek.setHours(9, 0, 0, 0); // Set to 9 AM next week
  
  return {
    anHourFromNow: anHourFromNow.toISOString(),
    tomorrow: tomorrow.toISOString(),
    nextWeek: nextWeek.toISOString(),
  };
};

export const snoozeNotificationWithOptions = async (notification: Notification, option: 'anHourFromNow' | 'tomorrow' | 'nextWeek'): Promise<NovuResponse> => {
  try {
    const snoozeOptions = snoozeNotification();
    const snoozeUntil = snoozeOptions[option as keyof typeof snoozeOptions];
    
    await novu.notifications.snooze({ notificationId: notification.id, snoozeUntil });
    
    return { success: true, data: snoozeUntil };
  } catch (error) {
    console.error('Failed to snooze notification:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const snoozeNotificationWithCustomDuration = async (notification: Notification, minutes: number): Promise<NovuResponse> => {
  try {
    const now = new Date();
    const snoozeUntil = new Date(now.getTime() + minutes * 60 * 1000);
    
    await novu.notifications.snooze({ notificationId: notification.id, snoozeUntil: snoozeUntil.toISOString() });
    
    return { success: true, data: snoozeUntil.toISOString() };
  } catch (error) {
    console.error('Failed to snooze notification:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const getNotificationPreferences = async (): Promise<NovuResponse> => {
  try {
    // For now, return mock data since the client-side Novu API doesn't have direct preference methods
    // In a real implementation, you would need to use the server-side API or implement this differently
    const mockPreferences = [
      {
        type: "linear-updates",
        channels: { email: true, inApp: true, push: false },
      },
      {
        type: "invite-notifications", 
        channels: { email: true, inApp: true, push: false },
      },
      {
        type: "legal-updates",
        channels: { email: true, inApp: false, push: false },
      },
    ];
    return { success: true, data: mockPreferences };
  } catch (error) {
    console.error('Failed to get notification preferences:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const updateNotificationPreference = async (
  workflowId: string, 
  channelType: string, 
  enabled: boolean
): Promise<NovuResponse> => {
  try {
    // For now, just return success since the client-side Novu API doesn't have direct preference methods
    // In a real implementation, you would need to use the server-side API or implement this differently
    console.log(`Would update preference: ${workflowId} - ${channelType}: ${enabled}`);
    return { success: true };
  } catch (error) {
    console.error('Failed to update notification preference:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};



