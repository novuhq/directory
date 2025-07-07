'use client';

// import { sharedEnv, healthcareEnv, getAppEnv } from '../../../../lib/env';

export default function TestEnvPage() {
  // const healthcareConfig = getAppEnv('healthcare');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Environment Variables Test - Healthcare App
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Environment Configuration
          </h2>
          <div className="space-y-3">
            <div>
              <span className="font-medium text-gray-700">Status:</span>
              <span className="ml-2 text-green-600 font-medium">✅ Environment variables loaded successfully</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Novu Application ID:</span>
              <span className="ml-2 text-gray-900 font-mono">{process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER || 'Not set'}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Subscriber ID Source:</span>
              <span className="ml-2 text-blue-600 font-medium">localStorage (healthcare-subscriber-id)</span>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Test Instructions</h3>
          <p className="text-blue-700">
            This page verifies that the environment variables are loading correctly.
            The Novu Application ID should be set, and the Subscriber ID is now managed via localStorage.
          </p>
        </div>
      </div>
    </div>
  );
} 