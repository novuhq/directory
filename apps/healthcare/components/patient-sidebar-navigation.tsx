import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Calendar,
  MessageSquare,
  FileText,
  Pill,
  MapPin,
  CreditCard,
  User,
  Bell,
  Settings,
  Home,
  LogOut,
  ChevronRight,
  Heart,
  HelpCircle,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { useUnreadCount } from '@/app/notifications/hooks/unreadCount';

export function PatientSidebarNavigation() {
  const pathname = usePathname();
  const unreadCount = useUnreadCount();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home, clickable: true },
    { name: 'Appointments', href: '/appointments', icon: Calendar, clickable: false },
    {
      name: 'Messages',
      href: '/messages',
      icon: MessageSquare,
      clickable: false,
    },
    {
      name: 'Medical Records',
      href: '/medical-records',
      icon: FileText,
      clickable: false,
    },
    {
      name: 'Medications',
      href: '/prescriptions',
      icon: Pill,
      clickable: false,
    },
    { name: 'Find Care', href: '/find-care', icon: MapPin, clickable: false },
    { name: 'Billing', href: '/billing', icon: CreditCard, clickable: false },
    { name: 'Health Metrics', href: '/health-metrics', icon: Heart, clickable: false },
    {
      name: 'Notifications',
      href: '/notifications',
      icon: Bell,
      badge: unreadCount > 0 ? unreadCount : undefined,
      clickable: true,
    },
  ];

  return (
    <Sidebar className="hidden md:flex" variant="floating" collapsible="icon">
      <SidebarHeader className="border-b px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-full bg-sky-500 p-1">
            <div className="h-6 w-6 rounded-full bg-white"></div>
          </div>
          <span className="text-xl font-bold">OneHealth</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-3 py-6">
        <SidebarGroupLabel>Main</SidebarGroupLabel>
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild={item.clickable}
                isActive={pathname === item.href}
                className={cn(
                  pathname === item.href
                    ? 'bg-sky-50 text-sky-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                  !item.clickable && 'cursor-not-allowed opacity-50'
                )}
                tooltip={item.name}
              >
                {item.clickable ? (
                  <Link href={item.href} className="relative">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ) : (
                  <div className="relative flex items-center gap-2">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <SidebarGroupLabel className="mt-6">Account</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-gray-400 cursor-not-allowed" tooltip="Profile">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-gray-400 cursor-not-allowed" tooltip="Settings">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-gray-400 cursor-not-allowed" tooltip="Help">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                <span>Help & Support</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Johnson" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Sarah Johnson</span>
            <span className="text-xs text-gray-500">sarah.j@example.com</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Account menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-not-allowed opacity-50">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-not-allowed opacity-50">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-not-allowed opacity-50">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
