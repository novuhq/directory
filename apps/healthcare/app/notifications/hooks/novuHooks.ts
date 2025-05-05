'use client';

import { Novu } from '@novu/js';
import React from 'react';

const applicationIdentifier = process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;
const subscriberId = process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID;

if (!applicationIdentifier || !subscriberId) {
  throw new Error('Novu environment variables are not properly configured');
}

export const novu = new Novu({
  applicationIdentifier,
  subscriberId,
});

export function useUnreadCount() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    async function fetchUnreadCount() {
      try {
        const result = await novu.notifications.count({
          filters: [{ read: false }],
        });
        // Sum up all counts from the filters
        const totalCount = result.data?.counts?.reduce((sum, item) => sum + item.count, 0) || 0;
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


export async function markAllAsRead() {
  await novu.notifications.readAll({
  });
}