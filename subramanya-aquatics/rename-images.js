const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

function slugify(name) {
  const parsed = path.parse(name);
  return parsed.name.toLowerCase().replace(/\s+/g, '-') + parsed.ext.toLowerCase();
}

const dirs = ['fishes', 'food', 'items'];
let renamed = 0;

console.log('=== Renaming files to lowercase-hyphenated ===\n');

for (const dir of dirs) {
  const fullPath = path.join(ROOT, dir);
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${dir}/ (not found)`);
    continue;
  }
  const files = fs.readdirSync(fullPath);
  for (const file of files) {
    const newName = slugify(file);
    if (file !== newName) {
      const oldFull = path.join(fullPath, file);
      const newFull = path.join(fullPath, newName);
      if (!fs.existsSync(newFull)) {
        fs.renameSync(oldFull, newFull);
        console.log(`  ${dir}/${file}`);
        console.log(`    -> ${dir}/${newName}`);
        renamed++;
      } else {
        console.log(`  SKIP ${dir}/${file} (target already exists)`);
      }
    }
  }
}

// Rename QR scan.* to qr-code.png in images/ and root
for (const dir of [ROOT, path.join(ROOT, 'images')]) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.toLowerCase().startsWith('qr scan') || file.toLowerCase().startsWith('qr_scan')) {
      const oldFull = path.join(dir, file);
      const newFull = path.join(dir, 'qr-code.png');
      if (!fs.existsSync(newFull)) {
        fs.renameSync(oldFull, newFull);
        console.log(`\n  ${path.basename(dir)}/${file}`);
        console.log(`    -> ${path.basename(dir)}/qr-code.png`);
        renamed++;
      } else {
        console.log(`\n  SKIP ${path.basename(dir)}/${file} (qr-code.png exists)`);
      }
    }
  }
}

console.log(`\n=== Done! Renamed ${renamed} files. ===`);
console.log('\nNext steps:');
console.log('1. If you use individual fish photos, update any hardcoded paths');
console.log('2. Clear your browser localStorage (or it will auto-clear on next load)');
console.log('3. Deploy to GitHub Pages and test');
