'use client';

import { Inbox, Preferences } from '@novu/react';

export function NovuPreferences() {
  const applicationIdentifier = process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER;
  const subscriberId = process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID;

  const inboxConfig = {
    applicationIdentifier,
    subscriberId,
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

  // Don't render if environment variables are not available
  if (!applicationIdentifier || !subscriberId) {
    console.warn('Novu not initialized - missing environment variables');
    return null;
  }

  return (
    <>
      <style>{overrideStyles}</style>
      <Inbox {...inboxConfig}>
        <Preferences />
      </Inbox>
    </>
  );
}
