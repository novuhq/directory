"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
  Menu,
  LogOut,
  ChevronRight,
  Heart,
  HelpCircle,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"

interface PatientDashboardLayoutProps {
  children: React.ReactNode
}

export function PatientDashboardLayout({ children }: PatientDashboardLayoutProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Appointments", href: "/dashboard/appointments", icon: Calendar },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare, badge: 3 },
    { name: "Medical Records", href: "/dashboard/medical-records", icon: FileText },
    { name: "Medications", href: "/dashboard/prescriptions", icon: Pill, badge: 1 },
    { name: "Find Care", href: "/dashboard/find-care", icon: MapPin },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Health Metrics", href: "/dashboard/health-metrics", icon: Heart },
    { name: "Notifications", href: "/dashboard/notifications", icon: Bell, badge: 3 },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        {/* Desktop Sidebar */}
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
                    asChild
                    isActive={pathname === item.href}
                    className={cn(
                      pathname === item.href
                        ? "bg-sky-50 text-sky-600"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                    )}
                    tooltip={item.name}
                  >
                    <Link href={item.href} className="relative">
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            <SidebarGroupLabel className="mt-6">Account</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard/profile"}
                  className={cn(
                    pathname === "/dashboard/profile"
                      ? "bg-sky-50 text-sky-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                  )}
                  tooltip="Profile"
                >
                  <Link href="/dashboard/profile">
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard/settings"}
                  className={cn(
                    pathname === "/dashboard/settings"
                      ? "bg-sky-50 text-sky-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                  )}
                  tooltip="Settings"
                >
                  <Link href="/dashboard/settings">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  tooltip="Help"
                >
                  <Link href="/help">
                    <HelpCircle className="h-5 w-5" />
                    <span>Help & Support</span>
                  </Link>
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
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
            <div className="flex flex-col h-full">
              <div className="border-b px-6 py-4">
                <Link href="/" className="flex items-center gap-2">
                  <div className="rounded-full bg-sky-500 p-1">
                    <div className="h-6 w-6 rounded-full bg-white"></div>
                  </div>
                  <span className="text-xl font-bold">OneHealth</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-6 px-4">
                <div className="mb-6">
                  <h3 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Main</h3>
                  <nav className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium relative",
                          pathname === item.href
                            ? "bg-sky-50 text-sky-600"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div>
                  <h3 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Account</h3>
                  <nav className="space-y-1">
                    <Link
                      href="/dashboard/profile"
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                        pathname === "/dashboard/profile"
                          ? "bg-sky-50 text-sky-600"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="h-5 w-5 flex-shrink-0" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                        pathname === "/dashboard/settings"
                          ? "bg-sky-50 text-sky-600"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Settings className="h-5 w-5 flex-shrink-0" />
                      <span>Settings</span>
                    </Link>
                    <Link
                      href="/help"
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <HelpCircle className="h-5 w-5 flex-shrink-0" />
                      <span>Help & Support</span>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="border-t p-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Sarah Johnson</span>
                    <span className="text-xs text-gray-500">sarah.j@example.com</span>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <LogOut className="h-4 w-4" />
                    <span className="sr-only">Log out</span>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Top Navigation - Mobile only */}
          {isMobile && (
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-4">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-sky-500 p-1">
                  <div className="h-5 w-5 rounded-full bg-white"></div>
                </div>
                <span className="text-lg font-bold">OneHealth</span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <Link href="/dashboard/notifications">
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                    <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-600"></span>
                  </Button>
                </Link>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              </div>
            </header>
          )}

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>

          {/* Mobile Bottom Navigation */}
          {isMobile && (
            <div className="sticky bottom-0 z-10 border-t bg-white">
              <nav className="flex justify-between">
                <Link href="/dashboard" className="flex flex-1 flex-col items-center py-3">
                  <Home className={cn("h-5 w-5", pathname === "/dashboard" ? "text-sky-600" : "text-gray-500")} />
                  <span className={cn("text-xs", pathname === "/dashboard" ? "text-sky-600" : "text-gray-500")}>
                    Home
                  </span>
                </Link>
                <Link href="/dashboard/appointments" className="flex flex-1 flex-col items-center py-3">
                  <Calendar
                    className={cn("h-5 w-5", pathname === "/dashboard/appointments" ? "text-sky-600" : "text-gray-500")}
                  />
                  <span
                    className={cn("text-xs", pathname === "/dashboard/appointments" ? "text-sky-600" : "text-gray-500")}
                  >
                    Appointments
                  </span>
                </Link>
                <Link href="/dashboard/messages" className="flex flex-1 flex-col items-center py-3 relative">
                  <MessageSquare
                    className={cn("h-5 w-5", pathname === "/dashboard/messages" ? "text-sky-600" : "text-gray-500")}
                  />
                  <span
                    className={cn("text-xs", pathname === "/dashboard/messages" ? "text-sky-600" : "text-gray-500")}
                  >
                    Messages
                  </span>
                  <span className="absolute top-2 right-6 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                    3
                  </span>
                </Link>
                <Link href="/dashboard/medical-records" className="flex flex-1 flex-col items-center py-3">
                  <FileText
                    className={cn(
                      "h-5 w-5",
                      pathname === "/dashboard/medical-records" ? "text-sky-600" : "text-gray-500",
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs",
                      pathname === "/dashboard/medical-records" ? "text-sky-600" : "text-gray-500",
                    )}
                  >
                    Records
                  </span>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </SidebarProvider>
  )
}
