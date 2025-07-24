import { Inbox, InboxContent } from '@novu/nextjs';

const inboxConfig = {
  applicationIdentifier: '_EYlz4GL3-nL',
  subscriberId: '625f3fe55a55980017dd63fd',

  appearance: {
    elements: {
      inboxHeader: {
        display: 'none',
      },
      notification: {
        backgroundColor: 'transparent',
      },
      inbox__popoverTrigger: {
        display: 'none',
      },
      inboxContent: {
        maxWidth: '100%',
        height: '400px',
      },
    },
  },
};

export function DashboardInbox() {
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
