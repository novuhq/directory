import type { Metadata } from 'next';
import React from 'react';
import { Search, Plus, Calendar } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PatientDashboardLayout } from '@/components/patient-dashboard-layout';
import Image from 'next/image';
// Utility function for merging class names
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Badge Component
const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  className?: string;
  children: React.ReactNode;
}

function Button({ variant = 'default', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variant === 'default'
          ? 'bg-sky-600 text-white hover:bg-sky-700'
          : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        'h-10 py-2 px-4',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

// Card Components
interface CardProps {
  className?: string;
  children: React.ReactNode;
}

function Card({ className, children }: CardProps) {
  return (
    <div className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={cn('flex flex-col space-y-1.5 p-6', className)}>{children}</div>;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

function CardContent({ className, children }: CardContentProps) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

function CardTitle({ className, children }: CardTitleProps) {
  return (
    <h3 className={cn('text-lg font-semibold leading-none tracking-tight', className)}>
      {children}
    </h3>
  );
}

// Appointment Preview Component
interface AppointmentPreviewProps {
  doctor: string;
  avatar: string;
  specialty: string;
  date: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  className?: string;
}

function AppointmentPreview({
  doctor,
  avatar,
  specialty,
  date,
  status,
  className,
}: AppointmentPreviewProps) {
  return (
    <div
      className={cn(
        'flex items-start gap-4 p-4 cursor-pointer hover:bg-gray-50 transition-colors',
        className
      )}
    >
      <div className="flex-shrink-0">
        <Image src={avatar} alt="" width={40} height={40} className="rounded-full" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-medium truncate">{doctor}</h4>
          {status === 'confirmed' && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Confirmed
            </Badge>
          )}
          {status === 'pending' && (
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Pending
            </Badge>
          )}
          {status === 'cancelled' && (
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
              Cancelled
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground truncate">{specialty}</p>
        <p className="text-sm mt-1 font-medium">{date}</p>
      </div>
    </div>
  );
}

// Main Appointments Page
export const metadata: Metadata = {
  title: 'Appointments | OneHealth',
  description: 'Manage your healthcare appointments',
};

export default function AppointmentsPage() {
  return (
    <PatientDashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
            <p className="text-muted-foreground">Manage your healthcare appointments</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Schedule appointment
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="px-4 py-3">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search appointments..."
                    className="w-full pl-8 focus-visible:ring-sky-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <AppointmentPreview
                    doctor="Dr. Emily Johnson"
                    avatar="/placeholder.svg?height=40&width=40"
                    specialty="Primary Care"
                    date="Tomorrow, 9:30 AM"
                    status="confirmed"
                  />
                  <AppointmentPreview
                    doctor="Dr. Michael Chen"
                    avatar="/placeholder.svg?height=40&width=40"
                    specialty="Dermatology"
                    date="May 15, 2:15 PM"
                    status="confirmed"
                  />
                  <AppointmentPreview
                    doctor="Dr. Sarah Williams"
                    avatar="/placeholder.svg?height=40&width=40"
                    specialty="Cardiology"
                    date="May 22, 11:15 AM"
                    status="pending"
                  />
                  <AppointmentPreview
                    doctor="Dr. Robert Garcia"
                    avatar="/placeholder.svg?height=40&width=40"
                    specialty="Physical Therapy"
                    date="June 3, 10:00 AM"
                    status="pending"
                  />
                  <AppointmentPreview
                    doctor="Dr. Lisa Patel"
                    avatar="/placeholder.svg?height=40&width=40"
                    specialty="Ophthalmology"
                    date="June 10, 3:45 PM"
                    status="confirmed"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card className="h-full flex flex-col">
              <CardHeader className="border-b px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <CardTitle>Dr. Emily Johnson</CardTitle>
                    <p className="text-sm text-muted-foreground">Primary Care Appointment</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6 overflow-auto">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">
                        Date & Time
                      </h3>
                      <p className="font-medium flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-sky-500" />
                        May 7, 2025 at 9:30 AM
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Location</h3>
                      <p className="font-medium">OneHealth Medical Center, Suite 302</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Appointment Type
                    </h3>
                    <p className="font-medium">Annual Physical Examination</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Preparation Instructions
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Please fast for 8 hours before your appointment</li>
                      <li>Bring a list of all current medications</li>
                      <li>Wear comfortable clothing</li>
                      <li>Arrive 15 minutes early to complete any necessary paperwork</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Insurance Information
                    </h3>
                    <p>Your estimated copay for this visit is $25.00</p>
                  </div>
                </div>
              </CardContent>
              <div className="border-t p-4 flex justify-end gap-3">
                <Button variant="outline">Reschedule</Button>
                <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                  Cancel
                </Button>
                <Button>Check In</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PatientDashboardLayout>
  );
}
