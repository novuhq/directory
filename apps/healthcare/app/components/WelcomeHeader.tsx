'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';

export function WelcomeHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-4 bg-white p-6 rounded-xl shadow-sm border">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-sky-100">
          <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Sarah Johnson" />
          <AvatarFallback className="text-lg">SJ</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome, Sarah</h1>
          <p className="text-muted-foreground">Tuesday, April 24, 2025</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
        <div className="relative flex-1 sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-8 focus-visible:ring-sky-500"
          />
        </div>
        <Button className="whitespace-nowrap">
          <Plus className="mr-2 h-4 w-4" />
          Book appointment
        </Button>
      </div>
    </div>
  );
}
