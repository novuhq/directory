import { useState, useCallback } from 'react';
import { 
  readNotification, 
  unreadNotifications, 
  archiveNotification 
} from "@/hooks/novuHooks";
import { useToast } from "@/hooks/use-toast";

export function useNotificationState() {
  const { toast } = useToast();
  // Track read/unread state of notifications
  const [notificationStates, setNotificationStates] = useState<Record<string, boolean>>({});
  // Track deleted/archived notifications
  const [deletedNotifications, setDeletedNotifications] = useState<Set<string>>(new Set());

  // Mark notification as read
  const markAsRead = useCallback(async (notificationId: string) => {
    try {
      await readNotification(notificationId);
      setNotificationStates(prev => ({
        ...prev,
        [notificationId]: true
      }));
      return true;
    } catch (error) {
      console.error('Error marking notification as read:', error);
      return false;
    }
  }, []);

  // Mark notification as unread
  const markAsUnread = useCallback(async (notificationId: string) => {
    try {
      await unreadNotifications(notificationId);
      setNotificationStates(prev => ({
        ...prev,
        [notificationId]: false
      }));
      return true;
    } catch (error) {
      console.error('Error marking notification as unread:', error);
      return false;
    }
  }, []);

  // Archive/delete notification
  const deleteNotification = useCallback(async (notificationId: string) => {
    try {
      await archiveNotification(notificationId);
      
      setDeletedNotifications(prev => {
        const newSet = new Set(prev);
        newSet.add(notificationId);
        return newSet;
      });
      
      toast({
        title: "Notification archived",
        description: "The notification has been successfully archived.",
      });
      
      return true;
    } catch (error) {
      console.error('Error archiving notification:', error);
      
      toast({
        title: "Error",
        description: "Failed to archive the notification.",
        variant: "destructive",
      });
      
      return false;
    }
  }, [toast]);

  // Helper to check if notification is deleted
  const isNotificationDeleted = useCallback((notificationId: string) => {
    return deletedNotifications.has(notificationId);
  }, [deletedNotifications]);

  // Get notification read state
  const getNotificationReadState = useCallback((notificationId: string, defaultIsRead: boolean) => {
    return notificationStates[notificationId] !== undefined 
      ? notificationStates[notificationId] 
      : defaultIsRead;
  }, [notificationStates]);

  return {
    markAsRead,
    markAsUnread,
    deleteNotification,
    isNotificationDeleted,
    getNotificationReadState
  };
}