// components/layout/PreferencesLayout.tsx
"use client";

import { Sidebar } from "@/components/sidebar";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PreferencesLayoutProps {
  children: React.ReactNode;
  title: string;
  backLink?: string;
}

export function PreferencesLayout({
  children,
  title,
  backLink = "/preferences",
}: PreferencesLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex justify-center overflow-auto">
        <div className="w-full max-w-4xl px-6 py-8">
          <div className="flex items-center gap-2 mb-6">
            {backLink && (
              <Link
                href={backLink}
                className="text-zinc-500 hover:text-zinc-900"
              >
                <ChevronLeft className="h-4 w-4" />
              </Link>
            )}
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>

          <div className="space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
