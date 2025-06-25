'use client';

import { Inbox, InboxContent } from '@novu/nextjs';

const applicationIdentifier = process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;
const subscriberId = process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID;

export function NovuInbox() {
  // Don't render if environment variables are missing
  if (!applicationIdentifier || !subscriberId) {
    return (
      <div className="p-4 text-center text-gray-500">
        <p>Notifications not configured</p>
        <p className="text-sm">Please set up Novu environment variables</p>
      </div>
    );
  }

  const inboxConfig = {
    applicationIdentifier,
    subscriberId,
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
