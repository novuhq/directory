#!/bin/bash

# Exit on any error
set -e

echo "Starting demo project build process..."

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Create dist directory
echo "Creating dist directory..."
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

# Build the docs app
echo "Building docs app..."
pnpm build --filter=docs

# Copy docs app to dist
echo "Copying docs app to dist..."
cp -r apps/docs/out dist/docs

# Create a demo landing page
echo "Creating demo landing page..."
cat > dist/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Project - Multiple Apps</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .container {
            background: white;
            border-radius: 20px;
            padding: 3rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 600px;
            margin: 2rem;
        }
        
        h1 {
            color: #2d3748;
            margin-bottom: 1rem;
            font-size: 2.5rem;
            font-weight: 700;
        }
        
        p {
            color: #718096;
            margin-bottom: 2rem;
            font-size: 1.1rem;
        }
        
        .apps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }
        
        .app-card {
            background: #f7fafc;
            border-radius: 12px;
            padding: 1.5rem;
            text-decoration: none;
            color: inherit;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        
        .app-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            border-color: #667eea;
        }
        
        .app-card h3 {
            color: #2d3748;
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }
        
        .app-card p {
            color: #718096;
            font-size: 0.9rem;
            margin: 0;
        }
        
        .healthcare { border-left: 4px solid #48bb78; }
        .linear-inbox { border-left: 4px solid #4299e1; }
        .docs { border-left: 4px solid #ed8936; }
        
        .badge {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="badge">Demo Project</div>
        <h1>Welcome to the Demo</h1>
        <p>This is a showcase of multiple applications built with Next.js, featuring modern UI components and real-world use cases.</p>
        
        <div class="apps-grid">
            <a href="/healthcare" class="app-card healthcare">
                <h3>Healthcare Dashboard</h3>
                <p>A comprehensive healthcare management system with patient dashboards, appointments, and medical records.</p>
            </a>
            
            <a href="/linear-inbox" class="app-card linear-inbox">
                <h3>Linear Inbox</h3>
                <p>A project management inbox interface with notifications, issue tracking, and team collaboration features.</p>
            </a>
            
            <a href="/docs" class="app-card docs">
                <h3>Documentation</h3>
                <p>Technical documentation and guides for the project components and APIs.</p>
            </a>
        </div>
        
        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e2e8f0;">
            <p style="font-size: 0.9rem; color: #a0aec0;">
                Built with Next.js, TypeScript, and Tailwind CSS
            </p>
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
echo "  - Documentation: /docs" 