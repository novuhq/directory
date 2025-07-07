"use client";

import { useState, useEffect } from 'react';

export function useNovuSubscriber() {
  const [subscriberId, setSubscriberId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get subscriber ID from localStorage
    const localStorageSubscriberId = typeof window !== 'undefined' 
      ? localStorage.getItem('healthcare-subscriber-id') 
      : null;
    
    if (localStorageSubscriberId) {
      setSubscriberId(localStorageSubscriberId);
    }
    
    setIsLoading(false);
  }, []);

  return {
    subscriberId,
    isLoading,
    hasSubscriber: !!subscriberId,
  };
} 