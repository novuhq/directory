// components/notifications/NotificationChannelLink.tsx
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface NotificationChannelLinkProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

export function NotificationChannelLink({
  href,
  icon: Icon,
  title,
  description,
  isLast = false,
}: NotificationChannelLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between p-4 hover:bg-zinc-50 ${!isLast ? "border-b border-zinc-200" : ""}`}
    >
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-md bg-zinc-100 flex items-center justify-center">
          <Icon className="h-4 w-4 text-zinc-500" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
      </div>
      <ChevronRight className="h-4 w-4 text-zinc-400" />
    </Link>
  );
}
