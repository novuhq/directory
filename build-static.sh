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
  <title>Inbox Demos</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      background: #000;
      color: #fff; 
      min-height: 100vh;
      padding: 2rem;
      line-height: 1.4;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .header {
      text-align: center;
      margin-bottom: 4rem;
      padding: 2rem 0;
      border-bottom: 1px solid #333;
    }
    
    .header h1 {
      font-size: 2.5rem;
      font-weight: 300;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    
    .header p {
      font-size: 0.9rem;
      color: #999;
      font-weight: 300;
      letter-spacing: 0.05em;
    }
    
    .app-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    
    .app-card { 
      display: block;
      padding: 2rem;
      border: 1px solid #333;
      text-decoration: none;
      color: #fff;
      transition: all 0.2s ease;
      position: relative;
      background: #111;
    }
    
    .app-card:hover { 
      border-color: #fff;
      background: #1a1a1a;
      transform: translateY(-2px);
    }
    
    .app-card h3 {
      font-size: 1.2rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      letter-spacing: 0.05em;
    }
    
    .app-card p {
      font-size: 0.8rem;
      color: #999;
      font-weight: 300;
      line-height: 1.4;
    }
    
    .app-number {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 0.7rem;
      color: #666;
      font-weight: 300;
      letter-spacing: 0.1em;
    }
    
    .app-icon {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      opacity: 0.8;
    }
    
    .stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;
      padding: 2rem 0;
      border-top: 1px solid #333;
      font-size: 0.8rem;
      color: #666;
      font-weight: 300;
      letter-spacing: 0.05em;
    }
    
    .stats-left {
      display: flex;
      gap: 2rem;
    }
    
    .stat-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    @media (max-width: 768px) {
      body { padding: 1rem; }
      .header h1 { font-size: 2rem; }
      .app-grid { grid-template-columns: 1fr; }
      .stats { flex-direction: column; gap: 1rem; align-items: flex-start; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Inbox Demos</h1>
      <p>Collection of notification implementations</p>
    </div>
    
    <div class="app-grid">
      <a href="/healthcare" class="app-card">
        <div class="app-number">01</div>
        <div class="app-icon">🏥</div>
        <h3>Healthcare</h3>
        <p>Patient dashboard with medical notifications and health tracking</p>
      </a>
      
      <a href="/linear-inbox" class="app-card">
        <div class="app-number">02</div>
        <div class="app-icon">📋</div>
        <h3>Linear Inbox</h3>
        <p>Project management with issue tracking and team notifications</p>
      </a>
    </div>
    
    <div class="stats">
      <div class="stat-item">
        <span>⚡</span>
        <span>Static Build</span>
      </div>
    </div>
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