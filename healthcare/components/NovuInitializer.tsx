'use client';

import { useEffect, useRef } from 'react';
import {
  getSubscriberId,
  hasVisited,
  markAsVisited,
  clearVisitedFlag,
} from '@/lib/subscriberUtils';

export function NovuInitializer() {
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') {
      return;
    }

    // Prevent multiple triggers
    if (hasTriggeredRef.current) {
      return;
    }

    const initializeNovu = async () => {
      try {
        // Get subscriber ID (will generate if it doesn't exist)
        const subscriberId = getSubscriberId();

        if (!hasVisited()) {
          // Set the flag immediately to prevent race conditions
          hasTriggeredRef.current = true;
          markAsVisited();

          // Call the API route to trigger Novu workflow
          const response = await fetch('/api/novu/trigger', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ subscriberId }),
          });

          const data = await response.json();

          if (!data.success) {
            console.error('Novu trigger failed:', data.error);
            // Reset the flag if the API call failed
            hasTriggeredRef.current = false;
            clearVisitedFlag();
          }
        }
      } catch (error) {
        console.error('Error initializing Novu:', error);
      }
    };

    // Run immediately without delay
    initializeNovu();
  }, []);

  return null;
}
