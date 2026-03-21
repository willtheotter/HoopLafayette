const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create placeholder pattern files
const patterns = ['wave-pattern', 'snake-texture', 'fire-pattern'];

patterns.forEach(pattern => {
  const patternPath = path.join(imagesDir, `${pattern}.png`);
  if (!fs.existsSync(patternPath)) {
    // Create a simple 1x1 transparent PNG
    const placeholder = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
    fs.writeFileSync(patternPath, placeholder);
    console.log(`✅ Created ${pattern}.png`);
  }
});

console.log('🎉 Pattern images created!');