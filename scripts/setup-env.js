#!/usr/bin/env node

/**
 * Environment Setup Script
 * 
 * This script helps set up environment variables across the monorepo
 * by copying example files to actual .env files.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Define the environment files to set up
const envFiles = [
  {
    source: 'env.example',
    target: '.env',
    description: 'Shared environment variables'
  },
  {
    source: 'apps/healthcare/env.example',
    target: 'apps/healthcare/.env.local',
    description: 'Healthcare app environment variables'
  },
  {
    source: 'apps/linear-inbox/env.example',
    target: 'apps/linear-inbox/.env.local',
    description: 'Linear Inbox app environment variables'
  },
  {
    source: 'apps/web/env.example',
    target: 'apps/web/.env.local',
    description: 'Web app environment variables'
  }
];

function copyEnvFile(source, target, description) {
  const sourcePath = path.join(rootDir, source);
  const targetPath = path.join(rootDir, target);
  
  // Check if source file exists
  if (!fs.existsSync(sourcePath)) {
    console.warn(`⚠️  Warning: Source file ${source} does not exist`);
    return false;
  }
  
  // Check if target file already exists
  if (fs.existsSync(targetPath)) {
    console.log(`⏭️  Skipping ${description} (already exists)`);
    return false;
  }
  
  try {
    // Create target directory if it doesn't exist
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Copy the file
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✅ Created ${description}`);
    return true;
  } catch (error) {
    console.error(`❌ Error creating ${description}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🚀 Setting up environment variables...\n');
  
  let createdCount = 0;
  
  for (const envFile of envFiles) {
    if (copyEnvFile(envFile.source, envFile.target, envFile.description)) {
      createdCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Created ${createdCount} environment file(s)`);
  console.log(`   Skipped ${envFiles.length - createdCount} existing file(s)`);
  
  if (createdCount > 0) {
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Edit the .env files with your actual values`);
    console.log(`   2. Add .env files to .gitignore if not already there`);
    console.log(`   3. Restart your development servers`);
  }
  
  console.log(`\n✨ Environment setup complete!`);
}

// Run the script
main(); 