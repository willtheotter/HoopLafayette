HOW TO GENERATE PNG ICONS:

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
    convert -size ${size}x${size} -background '#552583' -fill '#FDB927' -font Arial -pointsize ${size}/3 label:"🏀" icon-${size}x${size}.png
  done

Required sizes: 72, 96, 128, 144, 152, 192, 384, 512
