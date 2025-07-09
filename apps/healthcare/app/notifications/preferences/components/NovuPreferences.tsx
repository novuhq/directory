'use client';

import { Inbox } from '@novu/nextjs';
import { useNovuSubscriber } from '../../hooks/useNovuSubscriber';

const applicationIdentifier = process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;

export function NovuPreferences() {
  const { subscriberId, isLoading, hasSubscriber } = useNovuSubscriber();

  // Debug information
  console.log('NovuPreferences Debug:', {
    applicationIdentifier,
    subscriberId,
    isLoading,
    hasSubscriber,
    localStorage: typeof window !== 'undefined' ? localStorage.getItem('healthcare-subscriber-id') : 'server'
  });

  // Show loading state while subscriber ID is being determined
  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-500">
        <p>Loading preferences...</p>
      </div>
    );
  }

  // Show message if no subscriber ID is available
  if (!hasSubscriber) {
    return (
      <div className="p-4 text-center text-gray-500">
        <p>No subscriber ID available</p>
        <p className="text-sm">Please refresh the page to initialize preferences</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  // Show message if no application identifier is available
  if (!applicationIdentifier) {
    return (
      <div className="p-4 text-center text-gray-500">
        <p>Novu Application Identifier not configured</p>
        <p className="text-sm">Please check your environment variables</p>
        <p className="text-xs mt-2">Missing: NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER</p>
        <p className="text-xs mt-1">Current value: {JSON.stringify(applicationIdentifier)}</p>
      </div>
    );
  }

  // For now, let's show a simple preferences interface instead of the Novu Inbox
  return (
    <div className="w-full p-6 bg-white rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded">
          <div>
            <h3 className="font-medium">Appointment Reminders</h3>
            <p className="text-sm text-gray-600">Get notified about upcoming appointments</p>
          </div>
          <input type="checkbox" defaultChecked className="w-4 h-4" />
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded">
          <div>
            <h3 className="font-medium">Lab Results</h3>
            <p className="text-sm text-gray-600">Receive notifications when lab results are ready</p>
          </div>
          <input type="checkbox" defaultChecked className="w-4 h-4" />
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded">
          <div>
            <h3 className="font-medium">Prescription Refills</h3>
            <p className="text-sm text-gray-600">Get reminders for prescription refills</p>
          </div>
          <input type="checkbox" defaultChecked className="w-4 h-4" />
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded">
          <div>
            <h3 className="font-medium">Billing Notifications</h3>
            <p className="text-sm text-gray-600">Receive billing and payment reminders</p>
          </div>
          <input type="checkbox" defaultChecked className="w-4 h-4" />
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded">
        <p className="text-sm text-blue-800">
          <strong>Debug Info:</strong> Subscriber ID: {subscriberId}, App ID: {applicationIdentifier}
        </p>
      </div>
    </div>
  );
}
