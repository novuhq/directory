'use client';

import { useEffect, useRef } from 'react';

function generateSubscriberId() {
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 8);
  return `healthcare-${timestamp}-${randomSuffix}`;
}

export function NovuInitializer() {
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    // Prevent multiple triggers
    if (hasTriggeredRef.current) return;

    let subscriberId = localStorage.getItem('healthcare-subscriber-id');
    const hasVisited = localStorage.getItem('healthcare-visited');

    if (!subscriberId) {
      subscriberId = generateSubscriberId();
      localStorage.setItem('healthcare-subscriber-id', subscriberId);
    }

    if (!hasVisited) {
      // Set the flag immediately to prevent race conditions
      hasTriggeredRef.current = true;
      localStorage.setItem('healthcare-visited', 'true');

      // Call the API route to trigger Novu workflow
      fetch('/api/novu/trigger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscriberId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.success) {
            console.error('Novu trigger failed:', data.error);
            // Reset the flag if the API call failed
            hasTriggeredRef.current = false;
            localStorage.removeItem('healthcare-visited');
          }
        })
        .catch((err) => {
          console.error('Novu trigger error:', err);
          // Reset the flag if the API call failed
          hasTriggeredRef.current = false;
          localStorage.removeItem('healthcare-visited');
        });
    }
  }, []);

  return null;
}
