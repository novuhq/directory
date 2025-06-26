#!/bin/bash

# Exit on any error
set -e

echo "Starting demo project build process..."

# Clean dist directory
rm -rf dist
mkdir -p dist

# Build the healthcare app
echo "Building healthcare app..."
pnpm build --filter=healthcare-app

# Copy healthcare app to dist
echo "Copying healthcare app to dist..."
cp -r apps/healthcare/out dist/healthcare

# Build the linear-inbox app
echo "Building linear-inbox app..."
pnpm build --filter=linear-inbox-app

# Copy linear-inbox app to dist
echo "Copying linear-inbox app to dist..."
cp -r apps/linear-inbox/out dist/linear-inbox

# Create a simple index.html for the root
cat <<EOF > dist/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>App Directory</title>
  <style>
    body { font-family: sans-serif; background: #f9f9f9; color: #222; }
    .app-list { max-width: 600px; margin: 40px auto; padding: 2rem; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #0001; }
    .app-card { display: block; margin: 1rem 0; padding: 1rem; border-left: 4px solid #3182ce; background: #f1f5f9; border-radius: 4px; text-decoration: none; color: #222; font-size: 1.2rem; transition: background 0.2s; }
    .app-card:hover { background: #e2e8f0; }
    .healthcare { border-left: 4px solid #38a169; }
    .linear-inbox { border-left: 4px solid #805ad5; }
  </style>
</head>
<body>
  <div class="app-list">
    <h1>Available Apps</h1>
    <a href="/healthcare" class="app-card healthcare">Healthcare App</a>
    <a href="/linear-inbox" class="app-card linear-inbox">Linear Inbox App</a>
  </div>
</body>
</html>
EOF

# Verify the build output
echo "Verifying build output..."
if [ ! -d "dist" ]; then
    echo "Error: Build output directory 'dist' not found!"
    exit 1
fi

echo "Demo project build completed successfully!"
echo "Static files are in: dist"
echo "Apps available:"
echo "  - Healthcare: /healthcare"
echo "  - Linear Inbox: /linear-inbox" 