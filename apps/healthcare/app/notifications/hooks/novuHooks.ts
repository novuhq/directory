'use client';

import { Novu } from '@novu/js';
import React from 'react';

// Function to get subscriber ID from localStorage
const getSubscriberIdFromStorage = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('healthcare-subscriber-id');
};

// Function to create Novu instance with subscriber ID from localStorage
const createNovuInstance = (subscriberId?: string) => {
  const applicationIdentifier = process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;
  const actualSubscriberId = subscriberId || getSubscriberIdFromStorage();
  
  if (!actualSubscriberId || !applicationIdentifier) {
    return null;
  }
  
  return new Novu({
    subscriberId: actualSubscriberId,
    applicationIdentifier: applicationIdentifier,
  });
};

export function useUnreadCount() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') {
      return;
    }

    const novuInstance = createNovuInstance();
    
    // Don't run if Novu is not initialized
    if (!novuInstance) {
      return;
    }

    async function fetchUnreadCount() {
      try {
        const result = await novuInstance.notifications.count({
          filters: [{ read: false }],
        });
        // Sum up all counts from the filters
        const totalCount = result?.data?.counts?.reduce((sum, item) => sum + item.count, 0) || 0;
        setCount(totalCount);
      } catch (error) {
        console.error('Failed to fetch unread count:', error);
        setCount(0);
      }
    }

    fetchUnreadCount();

    // Set up a polling mechanism to check for updates
    const intervalId = setInterval(fetchUnreadCount, 5000); // Check every 5 seconds

    // Cleanup interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return count;
}

export async function markAllAsRead(subscriberId?: string) {
  const novuInstance = createNovuInstance(subscriberId);
  
  if (!novuInstance) {
    return;
  }
  
  // Only run in browser environment
  if (typeof window === 'undefined') {
    return;
  }
  
  await novuInstance.notifications.readAll({});
}
