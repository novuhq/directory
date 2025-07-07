"use client";

const SUBSCRIBER_ID_KEY = 'linear-inbox-subscriber-id';
const VISITED_KEY = 'linear-inbox-visited';
const DIRECTORY_PREFIX = 'linear-inbox';

/**
 * Generates a UUID v4 style ID for uniqueness with directory prefix
 */
const generateUUID = (): string => {
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  return `${DIRECTORY_PREFIX}-${uuid}`;
};

/**
 * Utility function that generates and retrieves a unique subscriber ID
 * - Creates a new ID on first visit
 * - Stores ID in localStorage for persistence
 * - Retrieves existing ID on subsequent visits
 */
export const getSubscriberId = (): string => {
  try {
    // Check if ID already exists in localStorage
    const existingId = localStorage.getItem(SUBSCRIBER_ID_KEY);
    if (existingId) {
      return existingId;
    }

    // Generate new ID and store it
    const newId = generateUUID();
    localStorage.setItem(SUBSCRIBER_ID_KEY, newId);
    return newId;
  } catch (error) {
    // Fallback for when localStorage is unavailable
    return (
      `${DIRECTORY_PREFIX}-temp-` +
      Date.now().toString(36) +
      Math.random().toString(36).substring(2)
    );
  }
};

/**
 * Checks if the user has visited the app before
 */
export const hasVisited = (): boolean => {
  try {
    return localStorage.getItem(VISITED_KEY) === 'true';
  } catch (error) {
    return false;
  }
};

/**
 * Marks the app as visited for the current user
 */
export const markAsVisited = (): void => {
  try {
    localStorage.setItem(VISITED_KEY, 'true');
  } catch (error) {
    // localStorage unavailable
  }
};

/**
 * Clears the visited flag (useful for testing or reset scenarios)
 */
export const clearVisitedFlag = (): void => {
  try {
    localStorage.removeItem(VISITED_KEY);
  } catch (error) {
    // localStorage unavailable
  }
}; 