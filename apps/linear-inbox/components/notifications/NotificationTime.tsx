import React, { useMemo } from 'react';
import { TIME_CONSTANTS } from './constants';

interface NotificationTimeProps {
  timestamp: string | undefined;
}

export const NotificationTime: React.FC<NotificationTimeProps> = ({ timestamp }) => {
  const formattedTime = useMemo(() => {
    if (!timestamp) return null;
    
    try {
      const now = new Date();
      const date = new Date(timestamp);
      
      // Check for invalid date
      if (isNaN(date.getTime())) {
        return null;
      }
      
      const diffInMs = now.getTime() - date.getTime();
      
      // Format based on elapsed time
      if (diffInMs < TIME_CONSTANTS.HOUR) {
        const minutes = Math.floor(diffInMs / TIME_CONSTANTS.MINUTE);
        return `${Math.max(1, minutes)}m`;
      }
      
      if (diffInMs < TIME_CONSTANTS.DAY) {
        return `${Math.floor(diffInMs / TIME_CONSTANTS.HOUR)}h`;
      }
      
      if (diffInMs < TIME_CONSTANTS.WEEK) {
        return `${Math.floor(diffInMs / TIME_CONSTANTS.DAY)}d`;
      }
      
      if (diffInMs < 4 * TIME_CONSTANTS.WEEK) {
        return `${Math.floor(diffInMs / TIME_CONSTANTS.WEEK)}w`;
      }
      
      // Format as Month Day for older dates
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return null;
    }
  }, [timestamp]);
  
  if (!formattedTime) return null;
  
  return (
    <span className="text-xs text-zinc-500 dark:text-zinc-400" aria-label={`Sent ${formattedTime} ago`}>
      {formattedTime}
    </span>
  );
};