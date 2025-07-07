'use client';

import { Inbox, InboxContent } from '@novu/nextjs';
import { useNovuSubscriber } from '../notifications/hooks/useNovuSubscriber';

const applicationIdentifier = process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;

export function NovuInbox() {
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

  const inboxConfig = {
    applicationIdentifier,
    subscriberId: subscriberId!,
    appearance: {
      elements: {
        inboxContent: {
          width: '100%',
          height: '430px',
          borderRadius: 'rounded-lg border',
        },
        inboxHeader: {
          display: 'none',
        },
        inbox__popoverTrigger: {
          display: 'none',
        },
      },
    },
  };

  return (
    <>
      <style jsx global>{`
        .nv-notification:has(.nv-notificationDot) {
          background-color: rgb(240 249 255 / var(--tw-bg-opacity, 1)) !important;
        }
      `}</style>
      <Inbox {...inboxConfig}>
        <InboxContent />
      </Inbox>
    </>
  );
}
