#!/bin/bash

# Exit on any error
set -e

echo "Starting static build process..."

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Build the healthcare app
echo "Building healthcare app..."
pnpm build --filter=healthcare-app

# Verify the build output
echo "Verifying build output..."
if [ ! -d "apps/healthcare/out" ]; then
    echo "Error: Build output directory 'apps/healthcare/out' not found!"
    exit 1
fi

echo "Static build completed successfully!"
echo "Static files are in: apps/healthcare/out" 