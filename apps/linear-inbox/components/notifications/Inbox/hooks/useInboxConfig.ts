import { useMemo } from "react";
import { dark } from "@novu/react/themes";
import { InboxConfigProps } from "../types";

export function useInboxConfig({
  applicationId,
  subscriberId,
  resolvedTheme,
  renderNotification,
  handleNotificationClick,
  handlePrimaryActionClick,
  handleSecondaryActionClick,
}: InboxConfigProps) {
  // Memoize the configuration to prevent unnecessary re-renders
  return useMemo(
    () => ({
      applicationIdentifier: applicationId,
      subscriberId: subscriberId,
      open: true,
      renderNotification,
      onNotificationClick: handleNotificationClick,
      onPrimaryActionClick: handlePrimaryActionClick,
      onSecondaryActionClick: handleSecondaryActionClick,
      appearance: {
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
        elements: {
          notificationListNewNotificationsNotice__button: {
            display: "none",
          },
          popoverTrigger: {
            display: "none",
          },
          inboxStatus__dropdownItemRight__icon: {
            display: "none",
          },
          preferences__button: {
            display: "none",
          },
          popoverContent: {
            marginLeft: "224px",
            marginTop: "-10px",
            width: "400px",
            height: "100vh",
            overflowY: "auto",
            borderRadius: "0px",
            boxShadow: "none",
            border: "none",
            backgroundColor: "transparent",
          },
          inboxHeader: {
            backgroundColor: "transparent",
            paddingBottom: "10px",
          },
          notification: {
            padding: "12px 16px",
            minHeight: "76px",
            display: "flex",
            alignItems: "center",
          },
        },
      },
    }),
    [
      applicationId,
      subscriberId,
      resolvedTheme,
      renderNotification,
      handleNotificationClick,
      handlePrimaryActionClick,
      handleSecondaryActionClick,
    ],
  );
}
