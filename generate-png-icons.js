const fs = require('fs');
const path = require('path');

// Note: This creates text files explaining how to get actual PNGs
// For real PNG conversion, you'd need a library like sharp or an online converter

const iconsDir = path.join(__dirname, 'public', 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Create a simple HTML page to generate icons
const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <title>Icon Generator</title>
    <style>
        body { font-family: Arial; padding: 20px; background: #f0f0f0; }
        .icon-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 20px; }
        .icon-item { text-align: center; }
        .icon { width: 100px; height: 100px; background: linear-gradient(135deg, #552583, #FDB927); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 40px; }
        button { margin-top: 10px; padding: 5px 10px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>🎨 Icon Generator</h1>
    <p>Click each button to download PNG icon</p>
    <div class="icon-grid" id="icons"></div>

    <script>
        const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
        const container = document.getElementById('icons');
        
        sizes.forEach(size => {
            const div = document.createElement('div');
            div.className = 'icon-item';
            div.innerHTML = \`
                <div class="icon" style="width:\${size}px; height:\${size}px; font-size:\${size/3}px;">🏀</div>
                <div>\${size}x\${size}</div>
                <button onclick="downloadIcon(\${size})">Download PNG</button>
            \`;
            container.appendChild(div);
        });

        function downloadIcon(size) {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            
            // Draw gradient background
            const gradient = ctx.createLinearGradient(0, 0, size, size);
            gradient.addColorStop(0, '#552583');
            gradient.addColorStop(1, '#FDB927');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, size, size);
            
            // Draw basketball
            ctx.fillStyle = 'white';
            ctx.font = \`bold \${size/2}px Arial\`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🏀', size/2, size/2);
            
            // Download
            const link = document.createElement('a');
            link.download = \`icon-\${size}x\${size}.png\`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(iconsDir, 'generator.html'), htmlContent);
console.log('✅ Created icon generator HTML');

// Also create a simple text file with instructions
const instructions = `HOW TO GENERATE PNG ICONS:

Option 1: Use the generator.html file
1. Open public/icons/generator.html in your browser
2. Click download for each icon size
3. Save the PNG files to the icons folder

Option 2: Use an online converter
1. Go to https://svgtopng.com
2. Upload the SVG files from /public/icons/
3. Convert to PNG at exact sizes
4. Save as icon-[size]x[size].png

Option 3: Use command line with ImageMagick
  for size in 72 96 128 144 152 192 384 512; do
    convert -size \${size}x\${size} -background '#552583' -fill '#FDB927' -font Arial -pointsize \${size}/3 label:"🏀" icon-\${size}x\${size}.png
  done

Required sizes: 72, 96, 128, 144, 152, 192, 384, 512
`;

fs.writeFileSync(path.join(iconsDir, 'README.txt'), instructions);
console.log('✅ Created instructions file');
console.log('\n📝 Next steps:');
console.log('1. Open http://localhost:3000/icons/generator.html');
console.log('2. Download all icon sizes');
console.log('3. Save PNG files to /public/icons/');