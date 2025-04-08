'use client';

import { Inbox, Notification } from '@novu/react';
import { dark } from '@novu/react/themes';
import { useTheme } from 'next-themes';
import { 
  CheckCircle, 
  AtSign, 
  ArrowRight, 
  CornerUpLeft, 
  MessageSquare, 
  XCircle, 
  Circle,
  Clock,
  AlertCircle,
  CheckCircle2,
  User
} from 'lucide-react';

// More comprehensive type definition
interface NotificationData {
  flair?: 'danger' | 'warning' | 'success' | 'info';
  participant?: string;
  participantAvatar?: string;
  status?: 'completed' | 'in-progress' | 'canceled' | 'overdue' | 'pending';
  taskId?: string;
  projectId?: string;
}

// Props interface for the component
interface NovuInboxProps {
  applicationId?: string;
  subscriberId?: string;
  onNotificationClick?: (notification: Notification) => void;
  onPrimaryActionClick?: (notification: Notification) => void;
  onSecondaryActionClick?: (notification: Notification) => void;
}

// Constants for action types to avoid magic strings
const ACTION_TYPES = {
  COMPLETED: ['completed', 'marked as completed'],
  MENTIONED: ['mentioned'],
  ASSIGNED: ['assigned'],
  REPLIED: ['replied'],
  COMMENTED: ['commented'],
  CANCELED: ['canceled', 'marked as canceled'],
  OVERDUE: ['past due date']
};

export function NovuInbox({
  applicationId = "_EYlz4GL3-nL", // Default value, but allow override via props
  subscriberId = "123", // Default value, but allow override via props
  onNotificationClick,
  onPrimaryActionClick,
  onSecondaryActionClick
}: NovuInboxProps) {
  const { resolvedTheme } = useTheme();

  // Get action icon based on notification subject/body
  const getActionIcon = (notification: Notification) => {
    const subject = notification.subject?.toLowerCase() || '';
    const body = notification.body?.toLowerCase() || '';
    const content = `${subject} ${body}`;
    
    // Check for action types in a more maintainable way
    if (ACTION_TYPES.COMPLETED.some(term => content.includes(term))) {
      return <CheckCircle className="w-4 h-4 text-green-500" aria-label="Completed" />;
    }
    if (ACTION_TYPES.MENTIONED.some(term => content.includes(term))) {
      return <AtSign className="w-4 h-4 text-blue-500" aria-label="Mentioned" />;
    }
    if (ACTION_TYPES.ASSIGNED.some(term => content.includes(term))) {
      return <ArrowRight className="w-4 h-4 text-purple-500" aria-label="Assigned" />;
    }
    if (ACTION_TYPES.REPLIED.some(term => content.includes(term))) {
      return <CornerUpLeft className="w-4 h-4 text-cyan-500" aria-label="Replied" />;
    }
    if (ACTION_TYPES.COMMENTED.some(term => content.includes(term))) {
      return <MessageSquare className="w-4 h-4 text-blue-400" aria-label="Commented" />;
    }
    if (ACTION_TYPES.CANCELED.some(term => content.includes(term))) {
      return <XCircle className="w-4 h-4 text-red-500" aria-label="Canceled" />;
    }
    if (ACTION_TYPES.OVERDUE.some(term => content.includes(term))) {
      return <Clock className="w-4 h-4 text-red-500" aria-label="Overdue" />;
    }
    
    return <Circle className="w-4 h-4 text-gray-400" aria-label="Default" />;
  };
  
  // Get status icon based on notification data
  const getStatusIcon = (notification: Notification) => {
    const data = notification.data as NotificationData | undefined;
    
    // Default status from notification data if available
    const status = data?.status;
    
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" aria-label="Completed status" />;
      case 'canceled':
        return <XCircle className="w-5 h-5 text-red-500" aria-label="Canceled status" />;
      case 'overdue':
        return <AlertCircle className="w-5 h-5 text-red-500" aria-label="Overdue status" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" aria-label="In progress status" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" aria-label="Pending status" />;
    }
  };
  
  // Format time in a more readable way (e.g., "2h ago", "Yesterday", "Mar 15")
  const formatTimeAgo = (timestamp: string | undefined): string => {
    if (!timestamp) return '';
    
    try {
      const now = new Date();
      const date = new Date(timestamp);
      
      // Check for invalid date
      if (isNaN(date.getTime())) {
        return '';
      }
      
      const diffInMs = now.getTime() - date.getTime();
      const diffInHours = diffInMs / (1000 * 60 * 60);
      const diffInDays = diffInHours / 24;
      const diffInWeeks = diffInDays / 7;
      
      if (diffInHours < 1) {
        const minutes = Math.floor(diffInMs / (1000 * 60));
        return `${Math.max(1, minutes)}m`;
      }
      
      if (diffInHours < 24) {
        return `${Math.floor(diffInHours)}h`;
      }
      
      if (diffInDays < 7) {
        return `${Math.floor(diffInDays)}d`;
      }
      
      if (diffInWeeks < 4) {
        return `${Math.floor(diffInWeeks)}w`;
      }
      
      // Format as Month Day (e.g., "Mar 15")
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return '';
    }
  };

  // Custom notification renderer
  const renderNotification = (notification: Notification) => {
    const data = notification.data as NotificationData | undefined;
    
    // Get avatar with fallback
    const avatarSrc = data?.participantAvatar || '';
    const actorName = data?.participant || 'User';
    
    // Get first letter of name for avatar fallback
    const avatarInitial = actorName.charAt(0).toUpperCase();
    
    return (
      <div 
        className="py-3 px-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors border-b border-zinc-200 dark:border-zinc-800"
        role="button"
        aria-label={`Notification: ${notification.subject}`}
        tabIndex={0}
      >
        <div className="flex items-center gap-3">
          {/* Avatar with action icon badge */}
          <div className="relative flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden flex items-center justify-center">
              {avatarSrc ? (
                <img 
                  src={avatarSrc} 
                  alt={`${actorName}'s avatar`} 
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    // Fallback to initial on image load error
                    (e.target as HTMLImageElement).style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = avatarInitial;
                  }}
                />
              ) : (
                <span className="text-sm font-medium">{avatarInitial}</span>
              )}
            </div>
            
            {/* Action icon badge */}
            <div className="absolute -bottom-1 -right-1 rounded-full bg-white dark:bg-zinc-900 p-0.5 border border-zinc-200 dark:border-zinc-700">
              {getActionIcon(notification)}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center w-full">
              <div className="flex-1 min-w-0 overflow-hidden pr-3">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                  {notification.subject || 'Notification'}
                </h3>
                
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">
                  {notification.body || 'No description available'}
                </p>
              </div>
              
              {/* Status and time */}
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="flex-shrink-0">
                  {getStatusIcon(notification)}
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {formatTimeAgo(notification.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleNotificationClick = (notification: Notification) => {
    console.log('Notification clicked:', notification);
    if (onNotificationClick) {
      onNotificationClick(notification);
    }
  };

  const handlePrimaryActionClick = (notification: Notification) => {
    console.log('Primary action clicked:', notification);
    if (onPrimaryActionClick) {
      onPrimaryActionClick(notification);
    }
  };

  const handleSecondaryActionClick = (notification: Notification) => {
    console.log('Secondary action clicked:', notification);
    if (onSecondaryActionClick) {
      onSecondaryActionClick(notification);
    }
  };

  const inboxConfig = {
    applicationIdentifier: applicationId,
    subscriberId: subscriberId,
    open: true,
    renderNotification,
    onNotificationClick: handleNotificationClick,
    onPrimaryActionClick: handlePrimaryActionClick,
    onSecondaryActionClick: handleSecondaryActionClick,
    appearance: {
      baseTheme: resolvedTheme === 'dark' ? dark : undefined,
      elements: {
        popoverTrigger: {
          display: 'none'
        },
        inboxStatus__dropdownItemRight__icon: {
          display: 'none'
        },
        preferences__button: {
          display: 'none'
        },
        popoverContent: {
          marginLeft: '224px',
          marginTop: '-10px',
          width: '400px',
          height: '100vh',
          overflowY: 'auto',
          borderRadius: '0px',
          boxShadow: 'none',
          border: 'none',
          backgroundColor: 'transparent'
        },
        inboxHeader: {
          backgroundColor: 'transparent',
          paddingBottom: '10px'
        },
        notification: {
          padding: '12px 16px',
          minHeight: '76px',
          display: 'flex',
          alignItems: 'center'
        }
      },
    },
  };

  return (
    <div className="novu-inbox-wrapper" role="region" aria-label="Notifications">
      <Inbox {...inboxConfig} />
    </div>
  );
}