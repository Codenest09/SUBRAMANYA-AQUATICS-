const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

// Directories to process
const dirs = ['fishes', 'food', 'items'];
const renameMap = {};

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

// Phase 1: Rename all files to lowercase-hyphenated
for (const dir of dirs) {
  const fullPath = path.join(ROOT, dir);
  if (!fs.existsSync(fullPath)) continue;
  const files = fs.readdirSync(fullPath);
  for (const file of files) {
    const newName = slugify(file);
    if (file !== newName) {
      const oldFull = path.join(fullPath, file);
      const newFull = path.join(fullPath, newName);
      fs.renameSync(oldFull, newFull);
      renameMap[file] = newName;
      console.log(`Renamed: ${dir}/${file} -> ${dir}/${newName}`);
    }
  }
}

// Phase 2: Rename QR scan.jpeg in images/ and root
const qrFiles = [
  { dir: ROOT, file: 'QR scan.jpeg' },
  { dir: path.join(ROOT, 'images'), file: 'QR scan.jpeg' }
];
for (const { dir, file } of qrFiles) {
  const oldPath = path.join(dir, file);
  if (fs.existsSync(oldPath)) {
    const newName = slugify(file);
    const newPath = path.join(dir, newName);
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${dir}/${file} -> ${dir}/${newName}`);
  }
}

// Phase 3: Generate path mapping for admin.js updates
console.log('\n--- File rename mapping ---');
const allFiles = {};
for (const dir of dirs) {
  const fullPath = path.join(ROOT, dir);
  if (!fs.existsSync(fullPath)) continue;
  const files = fs.readdirSync(fullPath);
  allFiles[dir] = files;
}

console.log('\nAll images renamed successfully!');
console.log('Now update admin.js paths to use lowercase-hyphenated names.');
