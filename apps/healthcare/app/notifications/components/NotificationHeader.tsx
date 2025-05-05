// components/notifications/notifications-header.jsx
import Link from 'next/link';
import { Settings, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';
import { markAllAsRead } from '../hooks/novuHooks';
type NotificationHeaderVariant = 'default' | 'preferences';

interface NotificationHeaderProps {
  variant?: NotificationHeaderVariant;
  onMarkAllAsRead?: () => void;
}

export function NotificationsHeader({ variant = 'default', onMarkAllAsRead }: NotificationHeaderProps) {
  const [isMarkingAsRead, setIsMarkingAsRead] = useState(false);

  const handleMarkAllAsRead = async () => {
    setIsMarkingAsRead(true);
    try {
      await markAllAsRead();
      // TODO: Implement the actual API call to mark notifications as read
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      onMarkAllAsRead?.();
    } finally {
      setIsMarkingAsRead(false);
    }
  };

  const getTitle = () => {
    switch (variant) {
      case 'preferences':
        return 'Notification Preferences';
      default:
        return 'Notifications';
    }
  };

  const getDescription = () => {
    switch (variant) {
      case 'preferences':
        return 'Customize how and when you receive notifications';
      default:
        return 'View your notifications';
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full min-w-[60vw] mx-auto">
      <div className="flex-1">
        <h1 className="text-3xl font-bold tracking-tight">{getTitle()}</h1>
        <p className="text-muted-foreground">{getDescription()}</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <TooltipProvider>
          <div className="flex gap-4">
            {variant === 'default' && (
              <>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="/notifications/preferences">
                      <Button
                        variant="outline"
                        aria-label="Notification preferences"
                        className="px-4"
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Preferences
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Manage your notification preferences</p>
                  </TooltipContent>
                </Tooltip>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      disabled={isMarkingAsRead}
                      aria-label="Mark all notifications as read"
                      className="px-4"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      {isMarkingAsRead ? 'Marking...' : 'Mark all as read'}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Mark all notifications as read?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will mark all your unread notifications as read. This action cannot be
                        undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleMarkAllAsRead}>Confirm</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            )}
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
}
