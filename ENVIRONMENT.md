# Environment Variables Setup

This monorepo uses a shared environment variable system that allows you to have both shared variables across all applications and unique variables for each individual app.

## Overview

The environment system consists of:

- **Shared Variables**: Common variables used across all apps (stored in root `.env`)
- **App-Specific Variables**: Unique variables for each app (stored in `apps/[app-name]/.env.local`)
- **Type-Safe Access**: TypeScript utilities for accessing environment variables
- **Build Integration**: Proper integration with Next.js and Turbo builds

## Quick Setup

1. **Run the setup script** to create all environment files:
   ```bash
   pnpm setup-env
   ```

2. **Edit the environment files** with your actual values:
   - `/.env` - Shared variables
   - `/apps/healthcare/.env.local` - Healthcare app variables
   - `/apps/linear-inbox/.env.local` - Linear Inbox app variables
   - `/apps/web/.env.local` - Web app variables

3. **Restart your development servers**:
   ```bash
   pnpm dev
   ```

## File Structure

```
├── .env                    # Shared environment variables
├── env.example            # Example shared variables
├── apps/
│   ├── healthcare/
│   │   ├── .env.local     # Healthcare-specific variables
│   │   └── env.example    # Example healthcare variables
│   ├── linear-inbox/
│   │   ├── .env.local     # Linear Inbox-specific variables
│   │   └── env.example    # Example linear-inbox variables
│   └── web/
│       ├── .env.local     # Web-specific variables
│       └── env.example    # Example web variables
└── lib/
    └── env.ts             # Environment configuration utility
```

## Shared Environment Variables

These variables are available across all applications:

```bash
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
NEXT_PUBLIC_APP_VERSION=1.0.0

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_NOTIFICATIONS=true

# Shared Services
NEXT_PUBLIC_SHARED_SERVICE_URL=https://shared.example.com

# Development
NODE_ENV=development
```

## App-Specific Variables

### Healthcare App (`apps/healthcare/.env.local`)

```bash
# Healthcare-specific API endpoints
NEXT_PUBLIC_HEALTHCARE_API_URL=https://healthcare-api.example.com
NEXT_PUBLIC_PATIENT_PORTAL_URL=https://patient.example.com

# Healthcare features
NEXT_PUBLIC_ENABLE_TELEMEDICINE=true
NEXT_PUBLIC_ENABLE_PRESCRIPTION_TRACKING=true

# Healthcare integrations
NEXT_PUBLIC_EHR_SYSTEM=epic
NEXT_PUBLIC_PHARMACY_INTEGRATION=cvs

# App-specific branding
NEXT_PUBLIC_APP_NAME=Healthcare Portal
NEXT_PUBLIC_APP_THEME=healthcare
```

### Linear Inbox App (`apps/linear-inbox/.env.local`)

```bash
# Linear-specific API endpoints
NEXT_PUBLIC_LINEAR_API_URL=https://api.linear.app
NEXT_PUBLIC_LINEAR_WEBHOOK_URL=https://webhook.linear.app

# Linear features
NEXT_PUBLIC_ENABLE_ISSUE_TRACKING=true
NEXT_PUBLIC_ENABLE_TEAM_COLLABORATION=true

# Linear integrations
NEXT_PUBLIC_SLACK_INTEGRATION=true
NEXT_PUBLIC_GITHUB_INTEGRATION=true

# App-specific branding
NEXT_PUBLIC_APP_NAME=Linear Inbox
NEXT_PUBLIC_APP_THEME=linear
```

### Web App (`apps/web/.env.local`)

```bash
# Web-specific API endpoints
NEXT_PUBLIC_WEB_API_URL=https://web-api.example.com
NEXT_PUBLIC_DOCUMENTATION_URL=https://docs.example.com

# Web features
NEXT_PUBLIC_ENABLE_BLOG=true
NEXT_PUBLIC_ENABLE_DOCUMENTATION=true

# Web integrations
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_SENTRY_DSN=https://sentry.example.com

# App-specific branding
NEXT_PUBLIC_APP_NAME=Web Portal
NEXT_PUBLIC_APP_THEME=web
```

## Using Environment Variables in Code

### Import the Environment Configuration

```typescript
import { sharedEnv, healthcareEnv, getAppEnv } from '../../lib/env';

// Access shared variables
console.log(sharedEnv.API_BASE_URL);
console.log(sharedEnv.ENABLE_ANALYTICS);

// Access app-specific variables
console.log(healthcareEnv.HEALTHCARE_API_URL);
console.log(healthcareEnv.ENABLE_TELEMEDICINE);

// Get all variables for a specific app
const healthcareConfig = getAppEnv('healthcare');
console.log(healthcareConfig.API_BASE_URL); // Shared
console.log(healthcareConfig.HEALTHCARE_API_URL); // App-specific
```

### In React Components

```typescript
import { sharedEnv, healthcareEnv } from '../../lib/env';

export default function HealthcareComponent() {
  return (
    <div>
      <h1>{healthcareEnv.APP_NAME}</h1>
      <p>API: {healthcareEnv.HEALTHCARE_API_URL}</p>
      <p>Analytics: {sharedEnv.ENABLE_ANALYTICS ? 'Enabled' : 'Disabled'}</p>
    </div>
  );
}
```

## Environment Variable Loading Order

Next.js loads environment variables in this order (later files override earlier ones):

1. `.env` (root - shared variables)
2. `.env.local` (app-specific variables)
3. `.env.development` or `.env.production` (environment-specific)

## TypeScript Support

The environment configuration includes full TypeScript support:

```typescript
import type { SharedEnv, HealthcareEnv } from '../../lib/env';

// Type-safe access to environment variables
const config: SharedEnv & HealthcareEnv = getAppEnv('healthcare');
```

## Build Configuration

The build system is configured to:

- Include environment variables in build cache invalidation
- Pass environment variables to all build tasks
- Support static exports with proper environment variable handling

## Security Notes

- **Never commit `.env` files** to version control
- **Use `.env.example` files** to document required variables
- **Prefix client-side variables** with `NEXT_PUBLIC_`
- **Keep sensitive data** in server-side only variables

## Troubleshooting

### Environment Variables Not Loading

1. **Check file names**: Ensure files are named correctly (`.env`, `.env.local`)
2. **Restart servers**: Environment changes require server restart
3. **Check syntax**: Ensure no spaces around `=` in variable definitions
4. **Verify prefixes**: Client-side variables must start with `NEXT_PUBLIC_`

### Build Issues

1. **Clear cache**: Run `pnpm turbo clean` to clear build cache
2. **Check Turbo config**: Ensure environment variables are listed in `turbo.json`
3. **Verify Next.js config**: Check that `next.config.mjs` is properly configured

### TypeScript Errors

1. **Import correctly**: Use the proper import path for the env utility
2. **Check types**: Ensure you're using the correct type definitions
3. **Update types**: Run `pnpm check-types` to verify type checking

## Adding New Environment Variables

1. **Add to example files**: Update the appropriate `env.example` file
2. **Update TypeScript types**: Add the variable to the env configuration in `lib/env.ts`
3. **Update Turbo config**: Add the variable to the `env` array in `turbo.json`
4. **Document**: Update this README with the new variable

## Deployment

For deployment, ensure that:

- Environment variables are set in your deployment platform
- Build scripts have access to required environment variables
- Static builds include necessary client-side variables 