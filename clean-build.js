const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Cleaning Next.js build cache...');

// Remove .next directory
if (fs.existsSync('.next')) {
  console.log('Removing .next directory...');
  fs.rmSync('.next', { recursive: true, force: true });
  console.log('✅ .next directory removed');
} else {
  console.log('ℹ️  No .next directory found');
}

// Remove node_modules/.cache if it exists
const cachePath = path.join('node_modules', '.cache');
if (fs.existsSync(cachePath)) {
  console.log('Removing node_modules/.cache...');
  fs.rmSync(cachePath, { recursive: true, force: true });
  console.log('✅ node_modules/.cache removed');
}

console.log('\n📦 Running fresh build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('\n✅ Build completed successfully!');
  
  // Check build size
  if (fs.existsSync('.next')) {
    const stats = fs.statSync('.next');
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`📊 Build size: ${sizeInMB} MB`);
  }
} catch (error) {
  console.error('❌ Build failed:', error.message);
} 