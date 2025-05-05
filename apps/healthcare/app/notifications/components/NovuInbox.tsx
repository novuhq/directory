'use client';

import { Inbox, InboxContent } from '@novu/nextjs';

const applicationIdentifier = process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;
const subscriberId = process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID;

if (!applicationIdentifier || !subscriberId) {
  throw new Error('Novu environment variables are not properly configured');
}

const tabs = [
  {
    label: 'All',
    filter: { tags: [] },
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
];

const inboxConfig = {
  applicationIdentifier,
  subscriberId,
  tabs,

  appearance: {
    elements: {
      inboxHeader: {
        display: 'none',
      },
      inbox__popoverTrigger: {
        display: 'none',
      },
    },
  },
};

export function NovuInbox() {
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
