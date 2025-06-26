/**
 * Environment Configuration Utility
 * 
 * This utility provides a centralized way to access environment variables
 * across all applications in the monorepo. It loads both shared variables
 * from the root .env file and app-specific variables from each app's .env.local.
 */

// Shared environment variables (available across all apps)
export const sharedEnv = {
  // API Configuration
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  
  // Feature Flags
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  ENABLE_NOTIFICATIONS: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS === 'true',
  
  // Shared Services
  SHARED_SERVICE_URL: process.env.NEXT_PUBLIC_SHARED_SERVICE_URL || 'https://shared.example.com',
  
  // Development
  NODE_ENV: process.env.NODE_ENV || 'development',
} as const;

// Healthcare app specific environment variables
export const healthcareEnv = {
  // Healthcare-specific API endpoints
  HEALTHCARE_API_URL: process.env.NEXT_PUBLIC_HEALTHCARE_API_URL || 'https://healthcare-api.example.com',
  PATIENT_PORTAL_URL: process.env.NEXT_PUBLIC_PATIENT_PORTAL_URL || 'https://patient.example.com',
  
  // Healthcare features
  ENABLE_TELEMEDICINE: process.env.NEXT_PUBLIC_ENABLE_TELEMEDICINE === 'true',
  ENABLE_PRESCRIPTION_TRACKING: process.env.NEXT_PUBLIC_ENABLE_PRESCRIPTION_TRACKING === 'true',
  
  // Healthcare integrations
  EHR_SYSTEM: process.env.NEXT_PUBLIC_EHR_SYSTEM || 'epic',
  PHARMACY_INTEGRATION: process.env.NEXT_PUBLIC_PHARMACY_INTEGRATION || 'cvs',
  
  // App-specific branding
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Healthcare Portal',
  APP_THEME: process.env.NEXT_PUBLIC_APP_THEME || 'healthcare',
} as const;

// Linear Inbox app specific environment variables
export const linearInboxEnv = {
  // Linear-specific API endpoints
  LINEAR_API_URL: process.env.NEXT_PUBLIC_LINEAR_API_URL || 'https://api.linear.app',
  LINEAR_WEBHOOK_URL: process.env.NEXT_PUBLIC_LINEAR_WEBHOOK_URL || 'https://webhook.linear.app',
  
  // Linear features
  ENABLE_ISSUE_TRACKING: process.env.NEXT_PUBLIC_ENABLE_ISSUE_TRACKING === 'true',
  ENABLE_TEAM_COLLABORATION: process.env.NEXT_PUBLIC_ENABLE_TEAM_COLLABORATION === 'true',
  
  // Linear integrations
  SLACK_INTEGRATION: process.env.NEXT_PUBLIC_SLACK_INTEGRATION === 'true',
  GITHUB_INTEGRATION: process.env.NEXT_PUBLIC_GITHUB_INTEGRATION === 'true',
  
  // App-specific branding
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Linear Inbox',
  APP_THEME: process.env.NEXT_PUBLIC_APP_THEME || 'linear',
} as const;

// Web app specific environment variables
export const webEnv = {
  // Web-specific API endpoints
  WEB_API_URL: process.env.NEXT_PUBLIC_WEB_API_URL || 'https://web-api.example.com',
  DOCUMENTATION_URL: process.env.NEXT_PUBLIC_DOCUMENTATION_URL || 'https://docs.example.com',
  
  // Web features
  ENABLE_BLOG: process.env.NEXT_PUBLIC_ENABLE_BLOG === 'true',
  ENABLE_DOCUMENTATION: process.env.NEXT_PUBLIC_ENABLE_DOCUMENTATION === 'true',
  
  // Web integrations
  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
  SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  
  // App-specific branding
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Web Portal',
  APP_THEME: process.env.NEXT_PUBLIC_APP_THEME || 'web',
} as const;

// Helper function to get environment variables based on app name
export function getAppEnv(appName: string) {
  switch (appName) {
    case 'healthcare':
      return { ...sharedEnv, ...healthcareEnv };
    case 'linear-inbox':
      return { ...sharedEnv, ...linearInboxEnv };
    case 'web':
      return { ...sharedEnv, ...webEnv };
    default:
      return sharedEnv;
  }
}

// Type definitions for better TypeScript support
export type SharedEnv = typeof sharedEnv;
export type HealthcareEnv = typeof healthcareEnv;
export type LinearInboxEnv = typeof linearInboxEnv;
export type WebEnv = typeof webEnv; 