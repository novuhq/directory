"use client";

const SUBSCRIBER_ID_KEY = 'healthcare-subscriber-id';
const VISITED_KEY = 'healthcare-visited';
const DIRECTORY_PREFIX = 'healthcare';

/**
 * Generates a cryptographically secure UUID v4 style ID for uniqueness with directory prefix
 */
const generateUUID = (): string => {
  // Use Web Crypto API for cryptographically secure random values
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  
  // Set version (4) and variant bits according to UUID v4 specification
  array[6] = (array[6] & 0x0f) | 0x40; // Version 4
  array[8] = (array[8] & 0x3f) | 0x80; // Variant bits
  
  // Convert to hex string with proper UUID format
  const hex = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  const uuid = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
  
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