const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

// Build file lists for each directory
function listFiles(dir) {
  const fullPath = path.join(ROOT, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath).sort();
}

const fishFiles = listFiles('fishes');
const foodFiles = listFiles('food');
const itemFiles = listFiles('items');

console.log('=== fishes/ ===');
fishFiles.forEach(f => console.log(f));
console.log('=== food/ ===');
foodFiles.forEach(f => console.log(f));
console.log('=== items/ ===');
itemFiles.forEach(f => console.log(f));

// Now read and update admin.js
const adminJsPath = path.join(ROOT, 'admin.js');
let adminJs = fs.readFileSync(adminJsPath, 'utf8');

const pathMappings = {};

// Map old names to new names in the admin.js defaultProducts
// For each entry, we need to figure out the correct new path

const renames = {
  // fishes/ old -> new
  'fishes/White angel.jpg': 'fishes/white-angel.jpg',
  'fishes/Marbel angel.jpg': 'fishes/marbel-angel.jpg',
  'fishes/Angel.jpg': 'fishes/angel.jpg',
  'fishes/mollies.webp': 'fishes/mollies.webp',
  'fishes/moon tail mollies.jpg': 'fishes/moon-tail-mollies.jpg',
  'fishes/ballon mollies.jpeg': 'fishes/ballon-mollies.jpeg',
  'fishes/Molly babyes.jpeg': 'fishes/molly-babyes.jpeg',
  'fishes/Gourami.jpg': 'fishes/gourami.jpg',
  'fishes/Platy fish.webp': 'fishes/platy-fish.webp',
  'fishes/Sward tail platy.jpeg': 'fishes/sward-tail-platy.jpeg',
  'fishes/Zebra fish.webp': 'fishes/zebra-fish.webp',
  'fishes/Shark small.webp': 'fishes/shark-small.webp',
  'fishes/Shark medium.avif': 'fishes/shark-medium.avif',
  'fishes/Shark large.jpeg': 'fishes/shark-large.jpeg',
  'fishes/Vail tail zebra green.jpg': 'fishes/vail-tail-zebra-green.jpg',
  'fishes/Aligator gar.jpg': 'fishes/aligator-gar.jpg',
  'fishes/Chichilids.jpg': 'fishes/chichilids.jpg',
  'fishes/Snake head fish.jpg': 'fishes/snake-head-fish.jpg',
  'fishes/Giant gourami baby.jpg': 'fishes/giant-gourami-baby.jpg',
  'fishes/Silver arwana.webp': 'fishes/silver-arwana.webp',
  'fishes/Gold arwana.jpg': 'fishes/gold-arwana.jpg',
  'fishes/Red Arwana.jpeg': 'fishes/red-arwana.jpeg',
  'fishes/White angel.jpg': 'fishes/white-angel.jpg',
  'fishes/Marbel angel.jpg': 'fishes/marbel-angel.jpg',
  'fishes/Beta ohm males.jpg': 'fishes/beta-ohm-males.jpg',
  'fishes/Beta ohm male.webp': 'fishes/beta-ohm-male.webp',
  'fishes/Beta ohm females.jpg': 'fishes/beta-ohm-females.jpg',
  'fishes/Beta HMPK male.webp': 'fishes/beta-hmpk-male.webp',
  'fishes/Beta hmpk female.jpeg': 'fishes/beta-hmpk-female.jpeg',
  'fishes/Beta placarts male.jpg': 'fishes/beta-placarts-male.jpg',
  'fishes/Bata candy male.jpeg': 'fishes/bata-candy-male.jpeg',
  'fishes/Albino oscar fish.webp': 'fishes/albino-oscar-fish.webp',
  'fishes/Red tiger oscar.jpg': 'fishes/red-tiger-oscar.jpg',
  'fishes/Red oscar.jpg': 'fishes/red-oscar.jpg',
  'fishes/Lemon oscar.jpeg': 'fishes/lemon-oscar.jpeg',
  'fishes/Mango oscar.jpg': 'fishes/mango-oscar.jpg',
  'fishes/Srd flowerhorn.jpg': 'fishes/srd-flowerhorn.jpg',
  'fishes/Kml flowerhorn.jpg': 'fishes/kml-flowerhorn.jpg',
  'fishes/F2 kamfa.jpg': 'fishes/f2-kamfa.jpg',
  'fishes/Polar parrots ( white).jpg': 'fishes/polar-parrots-white.jpg',
  'fishes/Polar parrots( zebra).jpg': 'fishes/polar-parrots-zebra.jpg',
  'fishes/Parrot ( red).jpg': 'fishes/parrot-red.jpg',
  'fishes/Parrot ( yellow).webp': 'fishes/parrot-yellow.webp',
  'fishes/Thai silk flowerhorn.jpeg': 'fishes/thai-silk-flowerhorn.jpeg',
  'fishes/Gold fish.jpeg': 'fishes/gold-fish.jpeg',
  'fishes/Black more gold fish.jpg': 'fishes/black-more-gold-fish.jpg',
  'fishes/Japanese koi fish.jpg': 'fishes/japanese-koi-fish.jpg',
  'fishes/Indian koi fish.jpeg': 'fishes/indian-koi-fish.jpeg',
  'fishes/Guppy babys.png': 'fishes/guppy-babys.png',
  'fishes/Guppys semi adults.webp': 'fishes/guppys-semi-adults.webp',
  'fishes/Mixed guppys.jpg': 'fishes/mixed-guppys.jpg',
  'fishes/Golden guppy.jpg': 'fishes/golden-guppy.jpg',
  'fishes/Platinum guppys.webp': 'fishes/platinum-guppys.webp',
  'fishes/Platinum dumbo ear guppys.jpeg': 'fishes/platinum-dumbo-ear-guppys.jpeg',
  'fishes/Hb blue guppys.jpg': 'fishes/hb-blue-guppys.jpg',
  'fishes/Koi guppy.jpg': 'fishes/koi-guppy.jpg',
  'fishes/Dragon tail guppys.jpg': 'fishes/dragon-tail-guppys.jpg',
  'fishes/Koi texido.jpg': 'fishes/koi-texido.jpg',
  'fishes/Dark knight dragon.jpg': 'fishes/dark-knight-dragon.jpg',
  'fishes/Sward tail guppy.jpeg': 'fishes/sward-tail-guppy.jpeg',
  'fishes/Albino Red eye guppy.jpg': 'fishes/albino-red-eye-guppy.jpg',
  'fishes/Albino black eye guppys.jpeg': 'fishes/albino-black-eye-guppys.jpeg',
  'fishes/Vail tail zebra yellow.webp': 'fishes/vail-tail-zebra-yellow.webp',
  'fishes/Mickey fish.jpg': 'fishes/mickey-fish.jpg',

  // items/ old -> new
  'items/50w aquarium heater.webp': 'items/50w-aquarium-heater.webp',
  'items/100 w aquarium heater.webp': 'items/100-w-aquarium-heater.webp',
  'items/Aquarium light (large ).jpg': 'items/aquarium-light-large.jpg',
  'items/Aquarium light (small).jpg': 'items/aquarium-light-small.jpg',
  'items/buble oxygen.webp': 'items/buble-oxygen.webp',
  'items/double oxygen.webp': 'items/double-oxygen.webp',
  'items/internal oxgyen (small).webp': 'items/internal-oxgyen-small.webp',
  'items/internal oxgyen (big).jpg': 'items/internal-oxgyen-big.jpg',
  'items/plastic plants (small).jpg': 'items/plastic-plants-small.jpg',
  'items/stones.jpg': 'items/stones.jpg',
  'items/Tiyo fish food.jpg': 'items/tiyo-fish-food.jpg',

  // food/ old -> new
  'food/dry worms cubes.jpeg': 'food/dry-worms-cubes.jpeg',
  'food/farm food.jpg': 'food/farm-food.jpg',
  'food/okiko black pearl flowehorn food.webp': 'food/okiko-black-pearl-flowehorn-food.webp',
  'food/Okiko head power flowerhorns food.jpeg': 'food/okiko-head-power-flowerhorns-food.jpeg',
  'food/Okoko red diamond fish food.jpg': 'food/okoko-red-diamond-fish-food.jpg',
  'food/Optimun 3 in 1 fish food.webp': 'food/optimun-3-in-1-fish-food.webp',
  'food/Tiyo fish food (small).jpeg': 'food/tiyo-fish-food-small.jpeg',
  'food/Tiyo fish food(large).jpg': 'food/tiyo-fish-food-large.jpg'
};

let replacements = 0;
for (const [oldPath, newPath] of Object.entries(renames)) {
  const oldEscaped = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (adminJs.includes(oldPath)) {
    adminJs = adminJs.split(oldPath).join(newPath);
    console.log(`Replaced in admin.js: ${oldPath} -> ${newPath}`);
    replacements++;
  }
}

fs.writeFileSync(adminJsPath, adminJs, 'utf8');
console.log(`\nUpdated ${replacements} paths in admin.js`);

// Also update products.json if it contains wrong paths
const productsJsonPath = path.join(ROOT, 'products.json');
if (fs.existsSync(productsJsonPath)) {
  const productsJson = fs.readFileSync(productsJsonPath, 'utf8');
  let modified = false;
  for (const [oldPath, newPath] of Object.entries(renames)) {
    if (productsJson.includes(oldPath)) {
      fs.writeFileSync(productsJsonPath, productsJson.split(oldPath).join(newPath), 'utf8');
      console.log(`Fixed path in products.json: ${oldPath}`);
      modified = true;
    }
  }
  if (modified) console.log('Updated products.json');
}

console.log('\nPath updates complete!');
