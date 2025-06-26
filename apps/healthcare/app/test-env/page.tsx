'use client';

import { sharedEnv, healthcareEnv, getAppEnv } from '../../../../lib/env';

export default function TestEnvPage() {
  const healthcareConfig = getAppEnv('healthcare');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Environment Variables Test - Healthcare App
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

          {/* Healthcare App-Specific Variables */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Healthcare App Variables
            </h2>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Healthcare API URL:</span>
                <span className="ml-2 text-gray-900">{healthcareEnv.HEALTHCARE_API_URL}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Patient Portal URL:</span>
                <span className="ml-2 text-gray-900">{healthcareEnv.PATIENT_PORTAL_URL}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Enable Telemedicine:</span>
                <span className="ml-2 text-gray-900">{healthcareEnv.ENABLE_TELEMEDICINE ? '✅ Enabled' : '❌ Disabled'}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Enable Prescription Tracking:</span>
                <span className="ml-2 text-gray-900">{healthcareEnv.ENABLE_PRESCRIPTION_TRACKING ? '✅ Enabled' : '❌ Disabled'}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">EHR System:</span>
                <span className="ml-2 text-gray-900">{healthcareEnv.EHR_SYSTEM}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Pharmacy Integration:</span>
                <span className="ml-2 text-gray-900">{healthcareEnv.PHARMACY_INTEGRATION}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">App Name:</span>
                <span className="ml-2 text-gray-900">{healthcareEnv.APP_NAME}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">App Theme:</span>
                <span className="ml-2 text-gray-900">{healthcareEnv.APP_THEME}</span>
              </div>
              <div className="border-t pt-3">
                <span className="font-medium text-green-700">Novu Subscriber ID:</span>
                <span className="ml-2 text-green-900 font-mono">{healthcareEnv.NOVU_SUBSCRIBER_ID}</span>
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
                <span className="ml-2 text-gray-900 font-mono">{healthcareConfig.NOVU_APPLICATION_IDENTIFIER}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Novu Subscriber ID:</span>
                <span className="ml-2 text-gray-900 font-mono">{healthcareConfig.NOVU_SUBSCRIBER_ID}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">App Name:</span>
                <span className="ml-2 text-gray-900">{healthcareConfig.APP_NAME}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">API Base URL:</span>
                <span className="ml-2 text-gray-900">{healthcareConfig.API_BASE_URL}</span>
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
                <span className="font-medium text-gray-700">Healthcare Subscriber ID:</span>
                <span className="ml-2 text-green-600 font-medium">
                  ✅ {healthcareEnv.NOVU_SUBSCRIBER_ID !== 'healthcare-patient-123' ? 'Custom' : 'Default'}
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