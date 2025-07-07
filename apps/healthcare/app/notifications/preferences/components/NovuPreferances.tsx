'use client';

import { Inbox } from '@novu/nextjs';
import { useNovuSubscriber } from '../../hooks/useNovuSubscriber';

const applicationIdentifier = process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;

export function NovuPreferences() {
  const { subscriberId, isLoading, hasSubscriber } = useNovuSubscriber();

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
      </div>
    );
  }

  const inboxConfig = {
    applicationIdentifier,
    subscriberId: subscriberId!,
    appearance: {
      elements: {
        preferencesContainer: {
          backgroundColor: 'transparent',
          marginLeft: '0',
          paddingLeft: '0',
          borderRadius: '0.5rem',
        },
        preferencesHeader: {
          display: 'none',
        },
        workflowContainerRight__icon: {
          display: 'none',
        },
        workflowContainer: {
          paddingLeft: '0',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          display: 'block',
          backgroundColor: 'transparent',
          borderBottom: '1px solid hsl(var(--border))',
        },
        workflowLabelContainer: {
          height: 'auto',
          minHeight: '60px',
        },
        channelsContainer: {
          flexDirection: 'row',
          gap: '2rem',
          backgroundColor: 'transparent',
          border: 'none',
          padding: '0.5rem 0',
        },
        workflowLabel: {
          fontSize: '1.125rem',
          fontWeight: '600',
          color: 'hsl(var(--foreground))',
        },
        workflowDescription: {
          paddingTop: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: '400',
          color: 'hsl(var(--muted-foreground))',
        },
        channelIcon: {
          color: 'hsl(var(--primary))',
        },
        channelLabel: {
          color: 'hsl(var(--foreground))',
        },
        channelDescription: {
          color: 'hsl(var(--muted-foreground))',
        },
      },
    },
  };

  // Add a style tag to force elements to be visible
  const overrideStyles = `
    .nv-collapsible {
      height: auto !important;
      opacity: 1 !important;
      overflow: visible !important;
      display: block !important;
    }
  `;

  return (
    <>
      <style>{overrideStyles}</style>
      <Inbox {...inboxConfig}>
        <div className="p-4 text-center text-gray-500">
          <p>Preferences component not available</p>
          <p className="text-sm">Please use the Novu dashboard to manage preferences</p>
        </div>
      </Inbox>
    </>
  );
}
