'use client';

import { Inbox, InboxContent } from '@novu/nextjs';
import { useNovuSubscriber } from '../hooks/useNovuSubscriber';

const applicationIdentifier = process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;

interface NovuInboxProps {
  showTabs?: boolean;
  width?: string;
  height?: string;
}

export function NovuInbox({ showTabs = true, width = '100%', height = '100%' }: NovuInboxProps) {
  const { subscriberId, isLoading, hasSubscriber } = useNovuSubscriber();

  // Show loading state while subscriber ID is being determined
  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-500">
        <p>Loading notifications...</p>
      </div>
    );
  }

  // Show message if no subscriber ID is available
  if (!hasSubscriber) {
    return (
      <div className="p-4 text-center text-gray-500">
        <p>No subscriber ID available</p>
        <p className="text-sm">Please refresh the page to initialize notifications</p>
      </div>
    );
  }

  // Show message if no application identifier is available
  if (!applicationIdentifier) {
    return (
      <div className="p-4 text-center text-gray-500">
        <p>Novu application not configured</p>
        <p className="text-sm">Please check your environment variables</p>
      </div>
    );
  }

  const tabs = showTabs ? [
    {
      label: 'All',
      filter: {},
    },
    {
      label: 'Messages',
      filter: { tags: ['Messages'] },
    },
    {
      label: 'Appointments',
      filter: { tags: ['Appointments'] },
    },
    {
      label: 'Medications',
      filter: { tags: ['Medications'] },
    },
    {
      label: 'Billing',
      filter: { tags: ['Billing'] },
    },
  ] : undefined;

  const inboxConfig = {
    applicationIdentifier,
    subscriberId: subscriberId!,
    ...(tabs && { tabs }),
    appearance: {
      elements: {
        inboxContent: {
          width,
          height,
        },
        inboxHeader: {
          display: 'none',
        },
        notificationPrimaryAction__button: {
          backgroundColor: '#000000',
          color: '#ffffff',
          padding: '8px 16px',
          border: '1px solid #000000',
          borderRadius: '6px',
          fontWeight: '500',
        },
        notificationSecondaryAction__button: {
          backgroundColor: '#ffffff',
          color: '#000000',
          padding: '8px 16px',
          border: '1px solid #000000',
          borderRadius: '6px',
          fontWeight: '500',
        },
      },
    },
  };

  return (
    <Inbox {...inboxConfig}>
      <InboxContent />
    </Inbox>
  );
}
