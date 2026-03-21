const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'public', 'icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
  console.log('✅ Created icons directory');
}

// Create a simple SVG icon as fallback
const createSvgIcon = (size) => {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" fill="#FDB927"/>
    <circle cx="${size/2}" cy="${size/2}" r="${size/4}" fill="#552583"/>
    <text x="${size/2}" y="${size/2+5}" font-family="Arial" font-size="${size/3}" fill="white" text-anchor="middle">🏀</text>
  </svg>`;
};

// Create placeholder icon files
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

iconSizes.forEach(size => {
  const iconPath = path.join(iconsDir, `icon-${size}x${size}.png`);
  const svgPath = path.join(iconsDir, `icon-${size}x${size}.svg`);
  
  if (!fs.existsSync(iconPath)) {
    // Create SVG version first (browsers can use SVG)
    fs.writeFileSync(svgPath, createSvgIcon(size));
    console.log(`✅ Created icon-${size}x${size}.svg`);
    
    // Note: In a real project, you'd convert SVG to PNG
    // For now, we'll create a text file explaining this
    const noticePath = path.join(iconsDir, 'README.txt');
    fs.writeFileSync(noticePath, 
      'PNG icons need to be generated from SVG files.\n' +
      'Use a tool like https://svgtopng.com/ to convert the SVG files to PNG.\n' +
      'Or replace with your actual logo PNG files.');
  }
});

console.log('🎉 Icon SVG placeholders created!');
console.log('📝 Note: Convert SVG files to PNG for full PWA support');