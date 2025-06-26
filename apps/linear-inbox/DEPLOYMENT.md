# Linear Inbox Deployment Guide

## Environment Variables Required

For the Linear Inbox application to work properly, you need to configure the following environment variables in your Netlify deployment:

### Required Variables

1. **NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER**
   - This is your Novu application identifier
   - Get this from your Novu dashboard
   - Example: `my-app-identifier`

2. **NEXT_PUBLIC_NOVU_SUBSCRIBER_ID**
   - This is the subscriber ID for notifications
   - Get this from your Novu dashboard
   - Example: `user-123`

## How to Configure in Netlify

1. Go to your Netlify dashboard
2. Navigate to your site settings
3. Go to "Environment variables"
4. Add the two variables above with their respective values
5. Redeploy your site

## Troubleshooting

### If the app shows "Novu Configuration Required"
- Check that both environment variables are set correctly
- Ensure the values match what's in your Novu dashboard
- Redeploy after adding the variables

### If styles are not loading
- The app should automatically handle static asset paths
- Check that the Netlify redirects are properly configured
- Ensure the build process completes successfully

### If routing doesn't work
- The app uses client-side routing
- All routes should redirect to `index.html`
- Check the Netlify redirect configuration

## Local Development

For local development, create a `.env.local` file in the `apps/linear-inbox` directory with:

```
NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER=your-application-identifier
NEXT_PUBLIC_NOVU_SUBSCRIBER_ID=your-subscriber-id
```

## Build Process

The app is built as a static export and deployed to the `/linear-inbox` path on Netlify. The build process:

1. Builds the Next.js app with static export
2. Copies the output to `dist/linear-inbox`
3. Serves it from the `/linear-inbox` path 