"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Menu as MenuIcon } from "lucide-react";

interface NotificationDrawerProps {
  unreadCount?: number;
  children: React.ReactNode;
}

export function NotificationDrawer({
  unreadCount = 0,
  children,
}: NotificationDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="relative p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
          <MenuIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse" />
              <span className="relative text-[11px] font-medium text-white">
                {unreadCount > 99 ? "99+" : unreadCount}
              </span>
            </div>
          )}
          <span className="sr-only">
            {unreadCount === 0
              ? "No unread notifications"
              : `${unreadCount} unread notifications`}
          </span>
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-[95vh]">{children}</DrawerContent>
    </Drawer>
  );
}
