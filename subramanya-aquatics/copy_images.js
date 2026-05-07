const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\siris\\.gemini\\antigravity\\brain\\0fab624b-c31e-4b50-bcf7-1b6d5370541c';
const destDir = path.join(__dirname, 'images');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const files = {
  'arowana_fish_1778055591173.png': 'arowana.png',
  'flowerhorn_fish_1778055607274.png': 'flowerhorn.png',
  'betta_fish_1778055621736.png': 'betta.png',
  'goldfish_1778055649109.png': 'goldfish.png',
  'koi_fish_1778055667259.png': 'koi.png',
  'discus_fish_1778055682847.png': 'discus.png',
  'guppies_fish_1778055706144.png': 'guppies.png',
  'oscar_fish_1778055722886.png': 'oscar.png',
  'aquarium_gallery_1_1778055739822.png': 'gallery1.png',
  'aquarium_gallery_2_1778055768209.png': 'gallery2.png',
  'aquarium_gallery_3_1778055788695.png': 'gallery3.png',
  'aquarium_gallery_4_1778055803243.png': 'gallery4.png',
  'aquarium_gallery_5_1778055826084.png': 'gallery5.png',
  'aquarium_gallery_6_1778055843138.png': 'gallery6.png',
  'molly_fish_1778058872109.png': 'molly.png',
  'oxyless_fish_1778058891454.png': 'oxyless.png',
  'pet_accessories_1778058915105.png': 'accessories.png',
};

for (const [src, dest] of Object.entries(files)) {
  const srcPath = path.join(srcDir, src);
  const destPath = path.join(destDir, dest);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${dest}`);
  } catch (e) {
    console.error(`Failed: ${dest} - ${e.message}`);
  }
}
console.log('Done!');
