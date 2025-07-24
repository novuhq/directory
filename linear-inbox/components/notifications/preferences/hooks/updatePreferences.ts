import { useState, useEffect } from "react";
import { updateNotificationPreference, getNotificationPreferences } from "../../hooks/novuHooks";

// Type definition for Novu preference
interface NovuPreference {
  type: string;
  channels: {
    email?: boolean;
    inApp?: boolean;
    push?: boolean;
    sms?: boolean;
    chat?: boolean;
    [key: string]: boolean | undefined;
  };
  [key: string]: unknown;
}

// Mock data for preferences (fallback)
const mockPreferences = [
  {
    workflow: { id: "linear-updates" },
    channels: { email: true, inApp: true, push: false },
  },
  {
    workflow: { id: "invite-notifications" },
    channels: { email: true, inApp: true, push: false },
  },
  {
    workflow: { id: "legal-updates" },
    channels: { email: true, inApp: false, push: false },
  },
];

type WorkflowPreference = {
  workflow: { id: string };
  channels: { [key: string]: boolean };
};

export function useWorkflowChannelPreferences() {
  const [preferences, setPreferences] = useState<WorkflowPreference[]>(mockPreferences);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Load preferences from Novu on component mount
  useEffect(() => {
    const loadPreferences = async () => {
      try {
        setIsLoading(true);
        const novuPreferences = await getNotificationPreferences();
        
        // Transform Novu preferences to our format
        const transformedPreferences = (novuPreferences as NovuPreference[]).map((pref) => ({
          workflow: { id: pref.type },
          channels: pref.channels as { [key: string]: boolean },
        }));
        
        setPreferences(transformedPreferences);
      } catch (err) {
        // Failed to load preferences from Novu, using mock data
        // Keep using mock preferences if Novu fails
        setPreferences(mockPreferences);
      } finally {
        setIsLoading(false);
      }
    };

    loadPreferences();
  }, []);

  // Get a workflow by ID
  const getWorkflowPreference = (workflowId: string) => {
    return preferences?.find((pref) => pref.workflow?.id === workflowId);
  };

  // Check if a channel is enabled for a workflow
  const isChannelEnabled = (workflowId: string, channelType: string) => {
    const pref = getWorkflowPreference(workflowId);
    return pref?.channels?.[channelType as keyof typeof pref.channels] ?? true; // Default to true if not found
  };

  // Update a channel for a workflow
  const updateChannelPreference = async (
    workflowId: string,
    channelType: string,
    enabled: boolean,
  ) => {
    try {
      setIsLoading(true);
      setError(null);

      // Update preference in Novu
      await updateNotificationPreference(workflowId, channelType, enabled);

      // Find the preference to update locally
      const preferenceIndex = preferences.findIndex(
        (pref) => pref.workflow?.id === workflowId,
      );

      if (preferenceIndex !== -1) {
        // Create a new preferences array with the updated channel
        const updatedPreferences = [...preferences];
        updatedPreferences[preferenceIndex] = {
          ...updatedPreferences[preferenceIndex],
          channels: {
            ...updatedPreferences[preferenceIndex].channels,
            [channelType]: enabled,
          },
        };

        // Update the state
        setPreferences(updatedPreferences);
      } else {
        // If workflow doesn't exist, create it
        const newPreference = {
          workflow: { id: workflowId },
          channels: { [channelType]: enabled },
        };
        setPreferences([...preferences, newPreference]);
      }

      return true;
    } catch (error) {
      console.error(`Failed to update ${channelType} preference:`, error);
      setError(error instanceof Error ? error : new Error(String(error)));
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Refetch preferences from Novu
  const refetch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const novuPreferences = await getNotificationPreferences();
      
      // Transform Novu preferences to our format
      const transformedPreferences = (novuPreferences as NovuPreference[]).map((pref) => ({
        workflow: { id: pref.type },
        channels: pref.channels as { [key: string]: boolean },
      }));
      
      setPreferences(transformedPreferences);
    } catch (error) {
      setError(error instanceof Error ? error : new Error(String(error)));
      // Keep current preferences if refetch fails
    } finally {
      setIsLoading(false);
    }
  };

  return {
    preferences,
    isLoading,
    error,
    refetch,
    getWorkflowPreference,
    isChannelEnabled,
    updateChannelPreference,
  };
}
