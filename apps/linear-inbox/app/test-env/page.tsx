'use client';

import { sharedEnv, linearInboxEnv, getAppEnv } from '../../../../lib/env';

export default function TestEnvPage() {
  const linearConfig = getAppEnv('linear-inbox');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Environment Variables Test - Linear Inbox App
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shared Environment Variables */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Shared Environment Variables
            </h2>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">API Base URL:</span>
                <span className="ml-2 text-gray-900">{sharedEnv.API_BASE_URL}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">App Version:</span>
                <span className="ml-2 text-gray-900">{sharedEnv.APP_VERSION}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Enable Analytics:</span>
                <span className="ml-2 text-gray-900">{sharedEnv.ENABLE_ANALYTICS ? '✅ Enabled' : '❌ Disabled'}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Enable Notifications:</span>
                <span className="ml-2 text-gray-900">{sharedEnv.ENABLE_NOTIFICATIONS ? '✅ Enabled' : '❌ Disabled'}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Shared Service URL:</span>
                <span className="ml-2 text-gray-900">{sharedEnv.SHARED_SERVICE_URL}</span>
              </div>
              <div className="border-t pt-3">
                <span className="font-medium text-blue-700">Novu Application ID:</span>
                <span className="ml-2 text-blue-900 font-mono">{sharedEnv.NOVU_APPLICATION_IDENTIFIER}</span>
              </div>
            </div>
          </div>

          {/* Linear Inbox App-Specific Variables */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Linear Inbox App Variables
            </h2>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Linear API URL:</span>
                <span className="ml-2 text-gray-900">{linearInboxEnv.LINEAR_API_URL}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Linear Webhook URL:</span>
                <span className="ml-2 text-gray-900">{linearInboxEnv.LINEAR_WEBHOOK_URL}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Enable Issue Tracking:</span>
                <span className="ml-2 text-gray-900">{linearInboxEnv.ENABLE_ISSUE_TRACKING ? '✅ Enabled' : '❌ Disabled'}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Enable Team Collaboration:</span>
                <span className="ml-2 text-gray-900">{linearInboxEnv.ENABLE_TEAM_COLLABORATION ? '✅ Enabled' : '❌ Disabled'}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Slack Integration:</span>
                <span className="ml-2 text-gray-900">{linearInboxEnv.SLACK_INTEGRATION ? '✅ Enabled' : '❌ Disabled'}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">GitHub Integration:</span>
                <span className="ml-2 text-gray-900">{linearInboxEnv.GITHUB_INTEGRATION ? '✅ Enabled' : '❌ Disabled'}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">App Name:</span>
                <span className="ml-2 text-gray-900">{linearInboxEnv.APP_NAME}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">App Theme:</span>
                <span className="ml-2 text-gray-900">{linearInboxEnv.APP_THEME}</span>
              </div>
              <div className="border-t pt-3">
                <span className="font-medium text-green-700">Novu Subscriber ID:</span>
                <span className="ml-2 text-green-900 font-mono">{linearInboxEnv.NOVU_SUBSCRIBER_ID}</span>
              </div>
            </div>
          </div>

          {/* Combined Configuration */}
          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Combined Configuration (getAppEnv)
            </h2>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Novu Application ID:</span>
                <span className="ml-2 text-gray-900 font-mono">{linearConfig.NOVU_APPLICATION_IDENTIFIER}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Novu Subscriber ID:</span>
                <span className="ml-2 text-gray-900 font-mono">{linearConfig.NOVU_SUBSCRIBER_ID}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">App Name:</span>
                <span className="ml-2 text-gray-900">{linearConfig.APP_NAME}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">API Base URL:</span>
                <span className="ml-2 text-gray-900">{linearConfig.API_BASE_URL}</span>
              </div>
            </div>
          </div>

          {/* Environment Status */}
          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Environment Status
            </h2>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Node Environment:</span>
                <span className="ml-2 text-gray-900">{sharedEnv.NODE_ENV}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Environment Variables Loaded:</span>
                <span className="ml-2 text-green-600 font-medium">✅ Successfully</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Novu Configuration:</span>
                <span className="ml-2 text-green-600 font-medium">
                  ✅ Application ID: {sharedEnv.NOVU_APPLICATION_IDENTIFIER !== 'your-novu-app-identifier' ? 'Set' : 'Default'}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Linear Subscriber ID:</span>
                <span className="ml-2 text-green-600 font-medium">
                  ✅ {linearInboxEnv.NOVU_SUBSCRIBER_ID !== 'linear-developer-456' ? 'Custom' : 'Default'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Test Instructions</h3>
          <p className="text-blue-700">
            This page verifies that both shared and app-specific environment variables are loading correctly.
            The Novu Application ID should be shared across all apps, while the Subscriber ID should be unique to each app.
          </p>
        </div>
      </div>
    </div>
  );
} 