// Constants for action types to avoid magic strings
export const ACTION_TYPES = {
    COMPLETED: ['completed', 'marked as completed'],
    MENTIONED: ['mentioned'],
    ASSIGNED: ['assigned'],
    REPLIED: ['replied'],
    COMMENTED: ['commented'],
    CANCELED: ['canceled', 'marked as canceled'],
    OVERDUE: ['past due date']
  };
  
  // Default application ID and subscriber ID
  export const DEFAULT_APPLICATION_ID = "_EYlz4GL3-nL";
  export const DEFAULT_SUBSCRIBER_ID = "625f3fe55a55980017dd63fd";
  
  // Default avatar URL
  export const DEFAULT_AVATAR = 'https://dashboard.novu.co/images/avatar.svg';
  
  // Time constants in milliseconds
  export const TIME_CONSTANTS = {
    MINUTE: 60 * 1000,
    HOUR: 60 * 60 * 1000,
    DAY: 24 * 60 * 60 * 1000,
    WEEK: 7 * 24 * 60 * 60 * 1000
  };