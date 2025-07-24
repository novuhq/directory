'use client';

import { Novu } from '@novu/js';
import React from 'react';

const getSubscriberIdFromStorage = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('healthcare-subscriber-id');
};

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
    if (typeof window === 'undefined') {
      return;
    }

    const novuInstance = createNovuInstance();

    if (!novuInstance) {
      return;
    }

    async function fetchUnreadCount() {
      try {
        if (!novuInstance) return;
        const result = await novuInstance.notifications.count({
          filters: [{ read: false }],
        });
        const totalCount = result?.data?.counts?.reduce((sum: number, item: { count: number }) => sum + item.count, 0) || 0;
        setCount(totalCount);
      } catch (error) {
        console.error('Failed to fetch unread count:', error);
        setCount(0);
      }
    }

    fetchUnreadCount();

    const intervalId = setInterval(fetchUnreadCount, 5000);

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

  if (typeof window === 'undefined') {
    return;
  }

  await novuInstance.notifications.readAll({});
}
