const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const foldersToDelete = ['.next', 'node_modules/.cache'];
const filesToDelete = ['package-lock.json'];

console.log('🧹 Cleaning Lafayette Hoop project...');

// Kill Node processes (Windows)
try {
  exec('taskkill /F /IM node.exe', () => {});
  console.log('✅ Node processes killed');
} catch (e) {
  console.log('⚠️ Could not kill Node processes');
}

// Delete folders
foldersToDelete.forEach(folder => {
  const folderPath = path.join(__dirname, folder);
  if (fs.existsSync(folderPath)) {
    try {
      fs.rmSync(folderPath, { recursive: true, force: true });
      console.log(`✅ Deleted ${folder}`);
    } catch (err) {
      console.log(`⚠️ Could not delete ${folder}: ${err.message}`);
    }
  } else {
    console.log(`⏭️ ${folder} not found`);
  }
});

// Delete files
filesToDelete.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Deleted ${file}`);
    } catch (err) {
      console.log(`⚠️ Could not delete ${file}: ${err.message}`);
    }
  } else {
    console.log(`⏭️ ${file} not found`);
  }
});

console.log('🎉 Cleanup complete! Run npm install then npm run dev');