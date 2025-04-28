// hooks/useWorkflowChannelPreferences.js
import { useState, useEffect } from "react";

// Mock data for preferences
const mockPreferences = [
  {
    workflow: { id: "workflow1" },
    channels: { email: true, inApp: true, push: false },
  },
  {
    workflow: { id: "workflow2" },
    channels: { email: true, inApp: false, push: true },
  },
];

export function useWorkflowChannelPreferences() {
  const [preferences, setPreferences] = useState(mockPreferences);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

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

      // Find the preference to update
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

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return true;
      } else {
        console.error(`Workflow with ID ${workflowId} not found`);
        return false;
      }
    } catch (error) {
      console.error(`Failed to update ${channelType} preference:`, error);
      setError(error instanceof Error ? error : new Error(String(error)));
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Refetch preferences (simulated)
  const refetch = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      // In a real implementation, you would fetch from an API
      setPreferences(mockPreferences);
    } catch (error) {
      setError(error instanceof Error ? error : new Error(String(error)));
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
