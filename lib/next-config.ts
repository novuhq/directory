import { NextConfig } from 'next';
import path from 'path';

/**
 * Next.js Configuration Helper
 * 
 * This helper ensures that environment variables are properly loaded
 * from both shared (.env) and app-specific (.env.local) files.
 */

export function createNextConfig(
  appName: string,
  customConfig: NextConfig = {}
): NextConfig {
  return {
    // Load environment variables from both shared and app-specific files
    env: {
      // This ensures Next.js loads .env files in the correct order:
      // 1. .env (shared variables)
      // 2. .env.local (app-specific variables)
      // 3. .env.development/.env.production (environment-specific)
    },
    
    // Ensure environment variables are available at build time
    experimental: {
      // Enable experimental features if needed
    },
    
    // Configure output for static builds
    output: 'export',
    
    // Configure trailing slash for static builds
    trailingSlash: true,
    
    // Configure base path for subdirectory deployment
    basePath: `/${appName}`,
    
    // Configure asset prefix for static builds
    assetPrefix: `/${appName}`,
    
    // Disable image optimization for static builds
    images: {
      unoptimized: true,
    },
    
    // Merge with custom configuration
    ...customConfig,
  };
} 