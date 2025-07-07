import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { useState, useCallback, useEffect } from "react";
import {
  readAllNotifications,
  archiveAllNotifications,
} from "./hooks/novuHooks";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface InboxHeaderProps {
  className?: string;
  onRefresh?: () => void;
  subscriberId?: string;
  showRead?: boolean;
  showUnread?: boolean;
  onFiltersChange?: (filters: {
    showRead: boolean;
    showUnread: boolean;
  }) => void;
}

// Local storage keys for filter persistence
const FILTER_STORAGE_KEYS = {
  SHOW_READ: "linear-inbox-show-read",
  SHOW_UNREAD: "linear-inbox-show-unread",
} as const;

// Custom hook for managing localStorage filter state
const useLocalStorageFilter = (
  propValue: boolean | undefined,
  localStorageKey: string,
  defaultValue: boolean
): [boolean, (value: boolean) => void] => {
  const [state, setState] = useState(propValue ?? defaultValue);

  // Load from localStorage on mount if prop is undefined
  useEffect(() => {
    if (propValue === undefined) {
      try {
        const stored = localStorage.getItem(localStorageKey);
        if (stored !== null) {
          setState(JSON.parse(stored));
        }
      } catch (error) {
        console.error(`Failed to load ${localStorageKey} from localStorage:`, error);
      }
    }
  }, [propValue, localStorageKey]);

  // Update local state when prop changes
  useEffect(() => {
    if (propValue !== undefined) {
      setState(propValue);
    }
  }, [propValue]);

  const setValue = useCallback((value: boolean) => {
    setState(value);
    try {
      localStorage.setItem(localStorageKey, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to save ${localStorageKey} to localStorage:`, error);
    }
  }, [localStorageKey]);

  return [state, setValue];
};

// Reusable Toggle Switch Component
interface ToggleSwitchProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
}

const ToggleSwitch = ({
  id,
  checked,
  onCheckedChange,
  label,
}: ToggleSwitchProps) => (
  <div className="flex items-center justify-between">
    <label className="text-sm font-medium text-foreground">{label}</label>
    <div className="relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="sr-only"
        id={id}
      />
      <label
        htmlFor={id}
        className={cn(
          "block w-9 h-5 rounded-full cursor-pointer transition-colors duration-200 ease-in-out relative",
          checked ? "bg-blue-600" : "bg-gray-200 hover:bg-gray-300"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-200 ease-in-out",
            checked ? "translate-x-5" : "translate-x-0.5"
          )}
        />
      </label>
    </div>
  </div>
);

// Icon components (keeping the same as original)
const MoreIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    role="img"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
  </svg>
);

const DisplayIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    role="img"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 10.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 14v-3a.5.5 0 0 1 .5-.5h1Zm-2.5 1V13H1.75a.75.75 0 0 1 0-1.5H7Zm7.25 0a.75.75 0 0 1 0 1.5H11v-1.5h3.25ZM5.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1ZM3 7.25v1.5H1.75a.75.75 0 0 1 0-1.5H3Zm11.25 0a.75.75 0 0 1 0 1.5H7v-1.5h7.25Zm-2.75-5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1ZM9 3v1.5H1.75a.75.75 0 0 1 0-1.5H9Zm5.25 0a.75.75 0 0 1 0 1.5H13V3h1.25Z"
    />
  </svg>
);

const MarkAllReadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.591 1a3 3 0 0 1 2.93 2.352l1.36 6.15c.08.355.119.717.119 1.08v1.936A2.482 2.482 0 0 1 12.518 15H3.482A2.482 2.482 0 0 1 1 12.518v-1.935a5 5 0 0 1 .118-1.08L2.48 3.351A3 3 0 0 1 5.41 1h5.182Zm0 1.5H5.41a1.5 1.5 0 0 0-1.465 1.176l-1.361 6.15-.035.184H5.01c.549 0 .993.445.993.993 0 .549.444.993.993.993h2.063a.993.993 0 0 0 .993-.993c0-.548.444-.992.993-.992h2.408a3.48 3.48 0 0 0-.036-.185l-1.361-6.15A1.5 1.5 0 0 0 10.591 2.5Zm-.64 1.988a.75.75 0 0 1 1.06-.036.736.736 0 0 1 .034 1.048L7.548 9.262a.75.75 0 0 1-1.116-.023l-1.5-1.741a.75.75 0 1 1 1.136-.979l.954 1.108 2.93-3.139Z"></path>
  </svg>
);

const DeleteIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.5914 1C11.9984 1 13.2164 1.97789 13.5205 3.35169L14.8819 9.50233C14.9604 9.85714 15 10.2195 15 10.5829V12.5181C15 13.8888 13.8888 15 12.5181 15H3.48193C2.1112 15 1 13.8888 1 12.5181V10.5829C1 10.2195 1.03962 9.85714 1.11815 9.50233L2.47949 3.35169C2.78356 1.97789 4.00156 1 5.4086 1H10.5914ZM10.5914 2.5H5.4086C4.70508 2.5 4.09608 2.98894 3.94405 3.67584L2.5827 9.82649L2.548 10.01L5.01028 10.0108C5.55851 10.0108 6.00293 10.4552 6.00293 11.0034C6.00293 11.5517 6.44735 11.9961 6.99557 11.9961H9.05948C9.6077 11.9961 10.0521 11.5517 10.0521 11.0034C10.0521 10.4552 10.4965 10.0108 11.0448 10.0108L13.4528 10.0102C13.4426 9.94867 13.4308 9.88742 13.4173 9.82649L12.056 3.67584C11.9039 2.98894 11.2949 2.5 10.5914 2.5ZM6.44621 3.89705L6.53033 3.96967L8 5.439L9.46967 3.96967C9.76256 3.67678 10.2374 3.67678 10.5303 3.96967C10.8232 4.26256 10.8232 4.73744 10.5303 5.03033L9.061 6.5L10.5303 7.96967C10.8232 8.26256 10.8232 8.73744 10.5303 9.03033C10.2641 9.2966 9.8474 9.3208 9.55379 9.10295L9.46967 9.03033L8 7.561L6.53033 9.03033C6.23744 9.32322 5.76256 9.32322 5.46967 9.03033C5.17678 8.73744 5.17678 8.26256 5.46967 7.96967L6.939 6.5L5.46967 5.03033C5.17678 4.73744 5.17678 4.26256 5.46967 3.96967C5.73594 3.7034 6.1526 3.6792 6.44621 3.89705Z"></path>
  </svg>
);



export function InboxHeader({
  className,
  onRefresh,
  showRead: propShowRead,
  showUnread: propShowUnread,
  onFiltersChange,
}: InboxHeaderProps) {
  const { toast } = useToast();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMarkingAllAsRead, setIsMarkingAllAsRead] = useState(false);
  const [isArchivingAll, setIsArchivingAll] = useState(false);
  const [showArchiveConfirm, setShowArchiveConfirm] = useState(false);

  // Filter states with localStorage persistence
  const [showRead, setShowRead] = useLocalStorageFilter(propShowRead, FILTER_STORAGE_KEYS.SHOW_READ, true);
  const [showUnread, setShowUnread] = useLocalStorageFilter(propShowUnread, FILTER_STORAGE_KEYS.SHOW_UNREAD, true);

  // Filter change handlers with onFiltersChange callback
  const handleShowReadChange = useCallback(
    (show: boolean) => {
      setShowRead(show);
      onFiltersChange?.({ showRead: show, showUnread });
    },
    [setShowRead, showUnread, onFiltersChange]
  );

  const handleShowUnreadChange = useCallback(
    (show: boolean) => {
      setShowUnread(show);
      onFiltersChange?.({ showRead, showUnread: show });
    },
    [setShowUnread, showRead, onFiltersChange]
  );

  const handleMarkAllAsRead = async () => {
    setIsMarkingAllAsRead(true);
    try {
      const result = await readAllNotifications();
      if (result.success) {
        toast({
          title: "Success",
          description: "All notifications have been marked as read.",
        });
        onRefresh?.();
      } else {
        throw result.error || new Error("Failed to mark all as read");
      }
    } catch (error) {
      console.error("Failed to mark all as read:", error);
      toast({
        title: "Error",
        description: "Failed to mark all notifications as read.",
        variant: "destructive",
      });
    } finally {
      setIsMarkingAllAsRead(false);
    }
  };

  const handleArchiveAllNotifications = async () => {
    setIsArchivingAll(true);
    try {
      const result = await archiveAllNotifications();
      if (result.success) {
        toast({
          title: "Success",
          description: "All notifications have been archived.",
        });
        onRefresh?.();
      } else {
        throw result.error || new Error("Failed to archive all notifications");
      }
    } catch (error) {
      console.error("Failed to archive all notifications:", error);
      toast({
        title: "Error",
        description: "Failed to archive all notifications.",
        variant: "destructive",
      });
    } finally {
      setIsArchivingAll(false);
      setShowArchiveConfirm(false);
    }
  };

  return (
    <>
      <AlertDialog
        open={showArchiveConfirm}
        onOpenChange={setShowArchiveConfirm}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Archive all notifications</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently archive all
              your notifications.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleArchiveAllNotifications}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Archive All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <header
        className={cn(
          "flex items-center justify-between px-4 py-4 border-b",
          className
        )}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <h2 className="text-md font-medium text-muted-foreground">Inbox</h2>
          </div>
          <div className="flex items-center">
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 hover:bg-transparent text-muted-foreground border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-0 active:border-0 active:ring-0 focus:outline-none focus-visible:outline-none focus-within:outline-none focus-within:ring-0 focus-within:border-0"
                  aria-label="Notification actions"
                >
                  <MoreIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="min-w-[302px] p-1.5"
              >
                <button
                  className="flex items-center w-full px-2 py-2 rounded-md hover:bg-accent focus:bg-accent group text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => {
                    setDropdownOpen(false);
                    handleMarkAllAsRead();
                  }}
                  disabled={isMarkingAllAsRead}
                >
                  <MarkAllReadIcon />
                  <span className="ml-3 flex-1 text-left">
                    {isMarkingAllAsRead
                      ? "Marking all as read..."
                      : "Mark all as read"}
                  </span>
                  <span className="flex gap-0.5 text-xs text-muted-foreground">
                    <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                      ⌥
                    </kbd>
                    <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                      U
                    </kbd>
                  </span>
                </button>
                <div className="my-1 h-px bg-border" />
                <button
                  className="flex items-center w-full px-2 py-2 rounded-md hover:bg-accent focus:bg-accent group text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => {
                    setDropdownOpen(false);
                    setShowArchiveConfirm(true);
                  }}
                  disabled={isArchivingAll}
                >
                  <DeleteIcon />
                  <span className="ml-3 flex-1 text-left">
                    {isArchivingAll
                      ? "Archiving all notifications..."
                      : "Archive all notifications"}
                  </span>
                </button>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 hover:bg-transparent text-muted-foreground border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-0 active:border-0 active:ring-0 focus:outline-none focus-visible:outline-none focus-within:outline-none focus-within:ring-0 focus-within:border-0"
                aria-label="Display options"
              >
                <DisplayIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-3">
              {/* Switch Toggles Section */}
              <div className="mb-4 space-y-3">
                <ToggleSwitch
                  id="showRead"
                  checked={showRead}
                  onCheckedChange={handleShowReadChange}
                  label="Show read"
                />
                <ToggleSwitch
                  id="showUnread"
                  checked={showUnread}
                  onCheckedChange={handleShowUnreadChange}
                  label="Show unread"
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
}
