# Netlify Deployment Guide

## Required Environment Variables

Before deploying to Netlify, make sure to set these environment variables in your Netlify dashboard:

### Required Variables
- `NOVU_SECRET_KEY` - Your Novu secret key (server-side)
- `NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER` - Your Novu application identifier (client-side)

### Optional Variables
- `NEXT_PUBLIC_HEALTHCARE_API_URL`
- `NEXT_PUBLIC_PATIENT_PORTAL_URL`
- `NEXT_PUBLIC_ENABLE_TELEMEDICINE`
- `NEXT_PUBLIC_ENABLE_PRESCRIPTION_TRACKING`
- `NEXT_PUBLIC_EHR_SYSTEM`
- `NEXT_PUBLIC_PHARMACY_INTEGRATION`
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_THEME`

## Netlify Configuration

The `netlify.toml` file is configured for:
- Next.js SSR deployment (not static export)
- API routes support
- Proper base directory (`healthcare`)
- Node.js 18 runtime

## Troubleshooting

### "Publish directory not found" Error
This error occurs when Netlify expects a static export but the app is configured for SSR. The current configuration should resolve this by:
- Using the correct Next.js plugin
- Not specifying a publish directory (handled automatically)
- Setting the proper base directory

### Build Failures
1. Check that all required environment variables are set
2. Ensure Node.js version is compatible (18 or higher)
3. Verify pnpm is being used correctly

### API Route Issues
- Ensure `NOVU_SECRET_KEY` is set as a non-public environment variable
- Check that the Novu workflows exist in your Novu dashboard 