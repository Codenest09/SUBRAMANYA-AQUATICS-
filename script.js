// ========== LOADING SCREEN ==========
function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(() => { loader.style.display = 'none'; }, 800);
  }
}

document.addEventListener('DOMContentLoaded', () => setTimeout(hideLoader, 500));
window.addEventListener('load', () => setTimeout(hideLoader, 200));
setTimeout(hideLoader, 2000);

// ========== CLIENT-SIDE IMAGE RESOLUTION ==========
function getSpecificNameMatch(lowerName, category) {
  // Specific Overrides for newly added fish types with custom images
  if (lowerName.includes('dark knight dragon')) {
    return 'fishes/Dark%20knight%20dragon.jpg';
  }
  if (lowerName.includes('koi texido') || lowerName.includes('koi tuxedo')) {
    return 'fishes/Koi%20texido.jpg';
  }
  if (lowerName.includes('white angel')) {
    return 'fishes/White%20angel.jpg';
  }
  if (lowerName.includes('marbel angel')) {
    return 'fishes/Marbel%20angel.jpg';
  }
  if (lowerName.includes('angel') && (category.includes('angel') || lowerName === 'angel')) {
    return 'fishes/Angel.jpg';
  }
  if (lowerName.includes('koi') && (category.includes('guppy') || lowerName.includes('guppy'))) {
    return 'fishes/Albino%20Red%20eye%20guppy.jpg';
  }

  // --- 1. FOOD MAPPING ---
  if (category.includes('food') || lowerName.includes('food') || lowerName.includes('worms')) {
    if (lowerName.includes('head power') || lowerName.includes('okiko head')) {
      return 'food/Okiko%20head%20power%20flowerhorns%20food.jpeg';
    }
    if (lowerName.includes('red diamond')) {
      return 'food/Okoko%20red%20diamond%20fish%20food.jpg';
    }
    if (lowerName.includes('black pearl')) {
      return 'food/okiko%20black%20pearl%20flowehorn%20food.webp';
    }
    if (lowerName.includes('optimun') || lowerName.includes('optimum') || lowerName.includes('3 in 1')) {
      return 'food/Optimun%203%20in%201%20fish%20food.webp';
    }
    if (lowerName.includes('tiyo') && lowerName.includes('small')) {
      return 'food/Tiyo%20fish%20food%20(small).jpeg';
    }
    if (lowerName.includes('tiyo') && (lowerName.includes('large') || lowerName.includes('big'))) {
      return 'food/Tiyo%20fish%20food(large).jpg';
    }
    if (lowerName.includes('tiyo')) {
      return 'food/Tiyo%20fish%20food(large).jpg';
    }
    if (lowerName.includes('worms') || lowerName.includes('dry worm')) {
      return 'food/dry%20worms%20cubes.jpeg';
    }
    if (lowerName.includes('farm')) {
      return 'food/farm%20food.jpg';
    }
    return 'food/Optimun%203%20in%201%20fish%20food.webp';
  }

  // --- 2. AQUARIUM ITEMS MAPPING ---
  if (category.includes('item') || category.includes('equipment') || category.includes('decor') || lowerName.includes('heater') || lowerName.includes('light') || lowerName.includes('oxygen') || lowerName.includes('plants') || lowerName.includes('stones') || lowerName.includes('filter')) {
    if (lowerName.includes('100w') || lowerName.includes('100 w') || lowerName.includes('100-w')) {
      return 'items/100%20w%20aquarium%20heater.webp';
    }
    if (lowerName.includes('50w') || lowerName.includes('50 w') || lowerName.includes('50-w')) {
      return 'items/50w%20aquarium%20heater.webp';
    }
    if (lowerName.includes('heater')) {
      return 'items/100%20w%20aquarium%20heater.webp';
    }
    if (lowerName.includes('light') && (lowerName.includes('small') || lowerName.includes('mini'))) {
      return 'items/Aquarium%20light%20(small).jpg';
    }
    if (lowerName.includes('light') && (lowerName.includes('large') || lowerName.includes('big'))) {
      return 'items/Aquarium%20light%20(large%20).jpg';
    }
    if (lowerName.includes('light')) {
      return 'items/Aquarium%20light%20(small).jpg';
    }
    if (lowerName.includes('buble') || lowerName.includes('bubble')) {
      return 'items/buble%20oxygen.webp';
    }
    if (lowerName.includes('double oxygen') || lowerName.includes('double oxgyen')) {
      return 'items/double%20oxygen.webp';
    }
    if (lowerName.includes('internal') && (lowerName.includes('big') || lowerName.includes('large'))) {
      return 'items/internal%20oxgyen%20(big).jpg';
    }
    if (lowerName.includes('internal') && (lowerName.includes('small') || lowerName.includes('mini'))) {
      return 'items/internal%20oxgyen%20(small).webp';
    }
    if (lowerName.includes('oxygen') || lowerName.includes('oxgyen')) {
      return 'items/double%20oxygen.webp';
    }
    if (lowerName.includes('plants') || lowerName.includes('plastic plant')) {
      return 'items/plastic%20plants%20(small).jpg';
    }
    if (lowerName.includes('stones') || lowerName.includes('stone') || lowerName.includes('sand') || lowerName.includes('gravel')) {
      return 'items/stones.jpg';
    }
    return 'items/100%20w%20aquarium%20heater.webp';
  }

  // --- 3. FISH MAPPING ---
  if (lowerName.includes('guppy') || lowerName.includes('guppies')) {
    if (lowerName.includes('albino red eye') || lowerName.includes('red eye')) {
      return 'fishes/Albino%20Red%20eye%20guppy.jpg';
    }
    if (lowerName.includes('albino black eye') || lowerName.includes('black eye')) {
      return 'fishes/Albino%20black%20eye%20guppys.jpeg';
    }
    if (lowerName.includes('dragon tail')) {
      return 'fishes/Dragon%20tail%20guppys.jpg';
    }
    if (lowerName.includes('golden')) {
      return 'fishes/Golden%20guppy.jpg';
    }
    if (lowerName.includes('baby') || lowerName.includes('babies') || lowerName.includes('babys')) {
      return 'fishes/Guppy%20babys.png';
    }
    if (lowerName.includes('semi adult')) {
      return 'fishes/Guppys%20semi%20adults.webp';
    }
    if (lowerName.includes('hb blue') || lowerName.includes('half black blue') || lowerName.includes('blue guppy')) {
      return 'fishes/Hb%20blue%20guppys.jpg';
    }
    if (lowerName.includes('platinum dumbo') || lowerName.includes('dumbo ear')) {
      return 'fishes/Platinum%20dumbo%20ear%20guppys.jpeg';
    }
    if (lowerName.includes('platinum')) {
      return 'fishes/Platinum%20guppys.webp';
    }
    if (lowerName.includes('premium mixed')) {
      return 'fishes/Premium%20mixed%20guppys.jpeg';
    }
    if (lowerName.includes('sward tail') || lowerName.includes('sword tail')) {
      return 'fishes/Sward%20tail%20guppy.jpeg';
    }
    return 'fishes/Mixed%20guppys.jpg';
  }

  if (lowerName.includes('betta') || lowerName.includes('bata') || lowerName.includes('beta')) {
    if (lowerName.includes('candy')) {
      return 'fishes/Bata%20candy%20male.jpeg';
    }
    if (lowerName.includes('hmpk') && (lowerName.includes('female') || lowerName.includes('girl'))) {
      return 'fishes/Beta%20hmpk%20female.jpeg';
    }
    if (lowerName.includes('hmpk')) {
      return 'fishes/Beta%20HMPK%20male.webp';
    }
    if (lowerName.includes('ohm') && (lowerName.includes('female') || lowerName.includes('girl') || lowerName.includes('females'))) {
      return 'fishes/Beta%20ohm%20females.jpg';
    }
    if (lowerName.includes('ohm')) {
      return 'fishes/Beta%20ohm%20male.webp';
    }
    if (lowerName.includes('placart') || lowerName.includes('plakat')) {
      return 'fishes/Beta%20placarts%20male.jpg';
    }
    return 'images/betta.png';
  }

  if (lowerName.includes('oscar')) {
    if (lowerName.includes('albino')) {
      return 'fishes/Albino%20oscar%20fish.webp';
    }
    if (lowerName.includes('lemon')) {
      return 'fishes/Lemon%20oscar.jpeg';
    }
    if (lowerName.includes('mango')) {
      return 'fishes/Mango%20oscar.jpg';
    }
    if (lowerName.includes('red tiger') || lowerName.includes('tiger oscar')) {
      return 'fishes/Red%20tiger%20oscar.jpg';
    }
    if (lowerName.includes('red')) {
      return 'fishes/Red%20oscar.jpg';
    }
    return 'images/oscar.png';
  }

  if (lowerName.includes('flowerhorn') || lowerName.includes('flower horn') || lowerName.includes('kamfa')) {
    if (lowerName.includes('f2') || lowerName.includes('kamfa')) {
      return 'fishes/F2%20kamfa.jpg';
    }
    if (lowerName.includes('kml')) {
      return 'fishes/Kml%20flowerhorn.jpg';
    }
    if (lowerName.includes('srd')) {
      return 'fishes/Srd%20flowerhorn.jpg';
    }
    if (lowerName.includes('thai silk') || lowerName.includes('thaisilk')) {
      return 'fishes/Thai%20silk%20flowerhorn.jpeg';
    }
    return 'images/flowerhorn.png';
  }

  if (lowerName.includes('arowana') || lowerName.includes('arwana')) {
    if (lowerName.includes('gold')) {
      return 'fishes/Gold%20arwana.jpg';
    }
    if (lowerName.includes('red')) {
      return 'fishes/Red%20Arwana.jpeg';
    }
    if (lowerName.includes('silver')) {
      return 'fishes/Silver%20arwana.webp';
    }
    return 'images/arowana.png';
  }

  if (lowerName.includes('gold fish') || lowerName.includes('goldfish')) {
    if (lowerName.includes('black more') || lowerName.includes('black moor')) {
      return 'fishes/Black%20more%20gold%20fish.jpg';
    }
    return 'fishes/Gold%20fish.jpeg';
  }

  if (lowerName.includes('koi')) {
    if (lowerName.includes('indian')) {
      return 'fishes/Indian%20koi%20fish.jpeg';
    }
    if (lowerName.includes('japanese')) {
      return 'fishes/Japanese%20koi%20fish.jpg';
    }
    return 'images/koi.png';
  }

  if (lowerName.includes('molly') || lowerName.includes('mollies') || lowerName.includes('mollie')) {
    if (lowerName.includes('baby') || lowerName.includes('babies')) {
      return 'fishes/Molly%20babyes.jpeg';
    }
    if (lowerName.includes('ballon') || lowerName.includes('balloon')) {
      return 'fishes/ballon%20mollies.jpeg';
    }
    if (lowerName.includes('moon tail') || lowerName.includes('moontail')) {
      return 'fishes/moon%20tail%20mollies.jpg';
    }
    return 'fishes/mollies.webp';
  }

  if (lowerName.includes('platy') || lowerName.includes('platies') || lowerName.includes('platty') || lowerName.includes('platties')) {
    if (lowerName.includes('sword tail') || lowerName.includes('sward tail')) {
      return 'fishes/Sward%20tail%20platy.jpeg';
    }
    return 'fishes/Platy%20fish.webp';
  }

  if (lowerName.includes('shark') || lowerName.includes('sharks')) {
    if (lowerName.includes('large')) {
      return 'fishes/Shark%20large.jpeg';
    }
    if (lowerName.includes('medium')) {
      return 'fishes/Shark%20medium.avif';
    }
    if (lowerName.includes('small')) {
      return 'fishes/Shark%20small.webp';
    }
    return 'fishes/Shark%20small.webp';
  }

  if (lowerName.includes('parrot') || lowerName.includes('parrots')) {
    if (lowerName.includes('polar') && lowerName.includes('white')) {
      return 'fishes/Polar%20parrots%20(%20white).jpg';
    }
    if (lowerName.includes('polar') && (lowerName.includes('zebra') || lowerName.includes('stripe'))) {
      return 'fishes/Polar%20parrots(%20zebra).jpg';
    }
    if (lowerName.includes('red')) {
      return 'fishes/Parrot%20(%20red).jpg';
    }
    if (lowerName.includes('yellow')) {
      return 'fishes/Parrot%20(%20yellow).webp';
    }
    return 'fishes/Parrot%20(%20red).jpg';
  }

  if (lowerName.includes('gourami') || lowerName.includes('gurami')) {
    if (lowerName.includes('giant') || lowerName.includes('baby')) {
      return 'fishes/Giant%20gourami%20baby.jpg';
    }
    return 'fishes/Gourami.jpg';
  }

  if (lowerName.includes('zebra') && lowerName.includes('green')) {
    return 'fishes/Vail%20tail%20zebra%20green.jpg';
  }
  if (lowerName.includes('zebra') && (lowerName.includes('yellow') || lowerName.includes('gold'))) {
    return 'fishes/Vail%20tail%20zebra%20yellow.webp';
  }
  if (lowerName.includes('zebra')) {
    return 'fishes/Zebra%20fish.webp';
  }

  if (lowerName.includes('gar') || lowerName.includes('aligator')) {
    return 'fishes/Aligator%20gar.jpg';
  }
  if (lowerName.includes('chichilid') || lowerName.includes('cichlid')) {
    return 'fishes/Chichilids.jpg';
  }
  if (lowerName.includes('mickey')) {
    return 'fishes/Mickey%20fish.jpg';
  }
  if (lowerName.includes('snake head') || lowerName.includes('snakehead')) {
    return 'fishes/Snake%20head%20fish.jpg';
  }
  
  if (lowerName.includes('angel') || lowerName.includes('angels')) {
    return 'images/discus.png';
  }

  return null;
}

function isGenericOrBroken(img) {
  if (!img) return true;
  const path = img.trim();
  const genericAndBroken = [
    'images/arowana.png', 'images/betta.png', 'images/discus.png', 'images/flowerhorn.png',
    'images/goldfish.png', 'images/guppies.png', 'images/koi.png', 'images/oscar.png',
    'fishes/Red cap oranda gold fish.jpeg', 'fishes/standard gold fish.webp',
    'fishes/Arowana silver .webp', 'fishes/Copper oscar.webp',
    'fishes/milky carp.webp', 'logo.jpeg'
  ];
  if (genericAndBroken.includes(path)) return true;
  
  try {
    const decoded = decodeURI(path);
    if (genericAndBroken.includes(decoded)) return true;
  } catch(e) {}
  
  return false;
}

function getCategoryDefault(category, lowerName) {
  const cat = (category || '').toLowerCase();
  const name = (lowerName || '').toLowerCase();
  
  if (cat.includes('food') || name.includes('food') || name.includes('worms')) {
    return 'food/Optimun%203%20in%201%20fish%20food.webp';
  }
  if (cat.includes('item') || cat.includes('equipment') || cat.includes('decor') || name.includes('heater') || name.includes('light') || name.includes('oxygen') || name.includes('plants') || name.includes('stones') || name.includes('filter')) {
    return 'items/100%20w%20aquarium%20heater.webp';
  }
  
  if (cat.includes('arowana') || cat.includes('arwana') || name.includes('arowana') || name.includes('arwana')) {
    return 'images/arowana.png';
  }
  if (cat.includes('betta') || name.includes('betta') || name.includes('bata') || name.includes('beta')) {
    return 'images/betta.png';
  }
  if (cat.includes('discus') || name.includes('discus')) {
    return 'images/discus.png';
  }
  if (cat.includes('flowerhorn') || name.includes('flowerhorn') || name.includes('flower horn') || name.includes('kamfa')) {
    return 'images/flowerhorn.png';
  }
  if (cat.includes('goldfish') || cat.includes('gold fish') || name.includes('gold fish') || name.includes('goldfish')) {
    return 'images/goldfish.png';
  }
  if (cat.includes('guppy') || cat.includes('guppies') || name.includes('guppy') || name.includes('guppies')) {
    return 'images/guppies.png';
  }
  if (cat.includes('koi') || name.includes('koi')) {
    return 'images/koi.png';
  }
  if (cat.includes('oscar') || name.includes('oscar')) {
    return 'images/oscar.png';
  }
  if (cat.includes('angel') || name.includes('angel')) {
    return 'images/discus.png';
  }
  
  return 'logo.jpeg';
}

function resolveProductImage(p) {
  if (!p) return 'logo.jpeg';
  const name = (p.name || '').trim();
  const lowerName = name.toLowerCase();
  const category = (p.category || '').trim().toLowerCase();
  const img = p.image || p.img || '';

  // Helper to format path based on workspace location (spaces vs hyphens)
  function formatPath(pathStr) {
    if (!pathStr || pathStr.startsWith('data:')) return pathStr;
    const isSub = window.location.pathname.toLowerCase().includes('/subramanya-aquatics/subramanya-aquatics') || 
                  window.location.pathname.toLowerCase().includes('/subramanya-aquatics');
    if (isSub) {
      const parts = pathStr.split('/');
      if (parts.length > 1) {
        const filename = parts.pop();
        const folder = parts.join('/');
        const cleanName = filename.toLowerCase().replace(/%20/g, '-').replace(/[\s_]+/g, '-');
        return folder + '/' + cleanName;
      }
    }
    return pathStr.includes('%20') ? pathStr : encodeURI(pathStr);
  }

  // 1. Specific Name-Based Matching (highest priority for local exotics)
  const specificPath = getSpecificNameMatch(lowerName, category);
  if (specificPath) {
    return formatPath(specificPath);
  }

  // 2. Fallback to original image if valid (not a generic category image or known broken path)
  if (img && !isGenericOrBroken(img)) {
    return formatPath(img);
  }

  // 3. Category-based default fallback
  const catDefault = getCategoryDefault(category, lowerName);
  if (catDefault === 'logo.jpeg') {
    return 'logo.jpeg';
  }
  return formatPath(catDefault);
}

// ========== FALLBACK DATA & FIREBASE SYNC SETTINGS ==========
const defaultProducts = [
  { id: 1, name: 'Moon Tail Guppys', category: 'Guppys', price: '₹99', image: 'fishes/Mixed guppys.jpg', tag: 'Best Seller' },
  { id: 2, name: 'Premium Mixed', category: 'Guppys', price: '₹99', image: 'fishes/Premium mixed guppys.jpeg', tag: 'Premium' },
  { id: 3, name: 'Mixed Guppy', category: 'Guppys', price: '₹69', image: 'fishes/Mixed guppys.jpg', tag: 'Standard' },
  { id: 4, name: 'Golden Guppys (24K)', category: 'Guppys', price: '₹249', image: 'fishes/Golden guppy.jpg', tag: 'Exotic' },
  { id: 5, name: 'HB Blue', category: 'Guppys', price: '₹149', image: 'fishes/Hb blue guppys.jpg', tag: 'Popular' },
  { id: 6, name: 'Koi Guppys', category: 'Guppys', price: '₹249', image: 'fishes/Albino Red eye guppy.jpg', tag: 'Exotic' },
  { id: 7, name: 'Platinum Guppys', category: 'Guppys', price: '₹99', image: 'fishes/Platinum guppys.webp', tag: 'Regular' },
  { id: 8, name: 'Platinum (Dumbo)', category: 'Guppys', price: '₹149', image: 'fishes/Platinum dumbo ear guppys.jpeg', tag: 'Premium' },
  { id: 9, name: 'Dragon Tail', category: 'Guppys', price: '₹149', image: 'fishes/Dragon tail guppys.jpg', tag: 'Premium' },
  { id: 10, name: 'Koi Texido', category: 'Guppys', price: '₹250', image: 'fishes/Koi texido.jpg', tag: 'Premium' },
  { id: 11, name: 'Dark Knight Dragon', category: 'Guppys', price: '₹250', image: 'fishes/Dark knight dragon.jpg', tag: 'Premium' },
  { id: 12, name: 'White Angel', category: 'Angels', price: '₹150', image: 'fishes/White angel.jpg', tag: 'Popular' },
  { id: 13, name: 'Marbel Angel', category: 'Angels', price: '₹199', image: 'fishes/Marbel angel.jpg', tag: 'Popular' },
  { id: 14, name: 'Angel', category: 'Angels', price: '₹100', image: 'fishes/Angel.jpg', tag: 'Standard' },
  { id: 15, name: 'Mollys', category: 'Mollies', price: '₹49', image: 'fishes/mollies.webp', tag: 'Popular' },
  { id: 16, name: 'Moontail Mollys', category: 'Mollies', price: '₹99', image: 'fishes/moon tail mollies.jpg', tag: 'Standard' },
  { id: 17, name: 'Balloon Mollys', category: 'Mollies', price: '₹79', image: 'fishes/ballon mollies.jpeg', tag: 'Healthy' },
  { id: 18, name: "Molly Baby's", category: 'Mollies', price: '₹5', image: 'fishes/Molly babyes.jpeg', tag: 'Piece' },
  { id: 19, name: 'Gourami', category: 'Oxy-less Fishes', price: '₹79', image: 'fishes/Gourami.jpg', tag: 'Healthy' },
  { id: 20, name: 'Plattys', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/Platy fish.webp', tag: 'Standard' },
  { id: 21, name: 'Sword Tail Plattys', category: 'Oxy-less Fishes', price: '₹99', image: 'fishes/Sward tail platy.jpeg', tag: 'Popular' },
  { id: 22, name: 'Zebra', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/Zebra fish.webp', tag: 'Active' },
  { id: 23, name: 'Sharks (Small)', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/Shark small.webp', tag: 'Active' },
  { id: 24, name: 'Sharks (Medium)', category: 'Oxy-less Fishes', price: '₹99', image: 'fishes/Shark medium.avif', tag: 'Active' },
  { id: 25, name: 'OHM (Males)', category: "Betta's", price: '₹149', image: 'fishes/Beta ohm male.webp', tag: 'Exotic' },
  { id: 26, name: 'OHM (Female)', category: "Betta's", price: '₹99', image: 'fishes/Beta ohm females.jpg', tag: 'Standard' },
  { id: 27, name: 'Hmpk Starting', category: "Betta's", price: '₹250', image: 'fishes/Beta HMPK male.webp', tag: 'Popular' },
  { id: 28, name: 'Placarts', category: "Betta's", price: '₹499', image: 'fishes/Beta placarts male.jpg', tag: 'Exotic' },
  { id: 29, name: 'Albino Oscar', category: 'Wild Oscars', price: '₹499', image: 'fishes/Albino oscar fish.webp', tag: 'Giant' },
  { id: 30, name: 'Tiger Red Oscar', category: 'Wild Oscars', price: '₹499', image: 'fishes/Red tiger oscar.jpg', tag: 'Giant' },
  { id: 31, name: 'Red Oscar', category: 'Wild Oscars', price: '₹599', image: 'fishes/Red oscar.jpg', tag: 'Premium' },
  { id: 32, name: 'Lemon Oscar', category: 'Wild Oscars', price: '₹599', image: 'fishes/Lemon oscar.jpeg', tag: 'Premium' },
  { id: 33, name: 'Mango Oscar', category: 'Wild Oscars', price: '₹599', image: 'fishes/Mango oscar.jpg', tag: 'Premium' },
  { id: 34, name: 'SRD', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/Srd flowerhorn.jpg', tag: 'Show Grade' },
  { id: 35, name: 'KML', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/Kml flowerhorn.jpg', tag: 'Show Grade' },
  { id: 36, name: 'F2 Kamfa', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/F2 kamfa.jpg', tag: 'Show Grade' },
  { id: 37, name: 'Silver Arowana', category: 'Arowana', price: 'Contact Us', image: 'fishes/Silver arowana.webp', tag: 'Luxury' },
  { id: 38, name: 'Golden Arowana', category: 'Arowana', price: 'Contact Us', image: 'fishes/Gold arwana.jpg', tag: 'Luxury' },
  { id: 39, name: 'Red Arowana', category: 'Arowana', price: 'Contact Us', image: 'fishes/Red Arwana.jpeg', tag: 'Luxury' }
];

const defaultCategories = [
  { name: 'Guppys', count: 11, image: 'fishes/Golden guppy.jpg', status: 'Active' },
  { name: 'Angels', count: 3, image: 'fishes/White angel.jpg', status: 'Active' },
  { name: 'Mollies', count: 4, image: 'fishes/moon tail mollies.jpg', status: 'Active' },
  { name: 'Oxy-less Fishes', count: 6, image: 'fishes/Gourami.jpg', status: 'Active' },
  { name: "Betta's", count: 4, image: 'fishes/Beta HMPK male.webp', status: 'Active' },
  { name: 'Wild Oscars', count: 5, image: 'fishes/Red oscar.jpg', status: 'Active' },
  { name: 'Flowerhorns', count: 3, image: 'fishes/Srd flowerhorn.jpg', status: 'Active' },
  { name: 'Arowana', count: 3, image: 'fishes/Silver arowana.webp', status: 'Active' }
];

const defaultFoods = [
  { id: 1, name: 'Dry Worms (10g)', type: 'Dry Food', suitable: 'All Fishes', price: '₹25', stock: 'In Stock', image: 'food/dry worms cubes.jpeg', desc: 'High protein treat for all fish' },
  { id: 2, name: 'Farm Food (100g)', type: 'Pellets', suitable: 'All Fishes', price: '₹200', stock: 'In Stock', image: 'food/farm food.jpg', desc: 'General farm food for fish' },
  { id: 3, name: 'Okiko Black Pearl Flowerhorn Food', type: 'Pellets', suitable: 'Flowerhorns', price: '₹300', stock: 'In Stock', image: 'food/okiko black pearl flowehorn food.webp', desc: 'Enhances color and growth' },
  { id: 4, name: 'Okiko Head Power Flowerhorns Food', type: 'Pellets', suitable: 'Flowerhorns', price: '₹300', stock: 'In Stock', image: 'food/Okiko head power flowerhorns food.jpeg', desc: 'Head booster for Flowerhorns' },
  { id: 5, name: 'Okiko Red Diamond Flowerhorn Food', type: 'Pellets', suitable: 'Flowerhorns', price: '₹300', stock: 'In Stock', image: 'food/Okoko red diamond fish food.jpg', desc: 'Premium color enhancer' },
  { id: 6, name: 'Optimun 3 in 1 Fish Food', type: 'Pellets', suitable: 'All Fishes', price: '₹160', stock: 'In Stock', image: 'food/Optimun 3 in 1 fish food.webp', desc: 'Balanced nutrition for tropical fish' },
  { id: 7, name: 'Tiyo Fish Food (Small)', type: 'Pellets', suitable: 'Small Fishes', price: '₹20', stock: 'In Stock', image: 'food/Tiyo fish food (small).jpeg', desc: 'Daily nutrition for small fish' },
  { id: 8, name: 'Tiyo Fish Food', type: 'Pellets', suitable: 'All Fishes', price: '₹30', stock: 'In Stock', image: 'food/Tiyo fish food(large).jpg', desc: 'Daily nutrition for all fish' }
];

const defaultItems = [
  { id: 1, name: 'Aquarium Heater (50W)', price: '₹300', stock: 'In Stock', image: 'items/50w aquarium heater.webp' },
  { id: 2, name: 'Aquarium Heater (100W)', price: '₹350', stock: 'In Stock', image: 'items/100 w aquarium heater.webp' },
  { id: 3, name: 'Aquarium Light Large', price: '₹400', stock: 'In Stock', image: 'items/Aquarium light (large ).jpg' },
  { id: 4, name: 'Aquarium Light Small', price: '₹300', stock: 'In Stock', image: 'items/Aquarium light (small).jpg' },
  { id: 5, name: 'Bubble Oxygen', price: '₹200', stock: 'In Stock', image: 'items/buble oxygen.webp' },
  { id: 6, name: 'Double Oxygen', price: '₹300', stock: 'In Stock', image: 'items/double oxygen.webp' },
  { id: 7, name: 'Internal Oxygen (Small)', price: '₹300', stock: 'In Stock', image: 'items/internal oxgyen (small).webp' },
  { id: 8, name: 'Internal Oxygen (Large)', price: '₹400', stock: 'In Stock', image: 'items/internal oxgyen (big).jpg' },
  { id: 9, name: 'Plastic Plants Piece', price: '₹25', stock: 'In Stock', image: 'items/plastic plants (small).jpg' },
  { id: 10, name: 'Stones (1kg)', price: '₹50', stock: 'In Stock', image: 'items/stones.jpg' }
];

let deliveryCharge = 49;
let packingCharge = 10;
let merchantUpiId = '7995549922@ybl';
let whatsAppNumber = '917995549922';

function toggleWishlist(name, btn) {
  let wishlist = JSON.parse(localStorage.getItem('sa_wishlist') || '[]');
  const idx = wishlist.indexOf(name);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    if (btn) {
      btn.classList.remove('active');
      btn.innerHTML = '🤍';
    }
    showClientToast(`${name} removed from Wishlist`);
  } else {
    wishlist.push(name);
    if (btn) {
      btn.classList.add('active');
      btn.innerHTML = '❤️';
    }
    showClientToast(`${name} added to Wishlist!`);
  }
  localStorage.setItem('sa_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function updateWishlistUI() {
  const wishlist = JSON.parse(localStorage.getItem('sa_wishlist') || '[]');
  const badges = document.querySelectorAll('#wishlistBadge');
  badges.forEach(b => {
    b.textContent = wishlist.length;
  });
  
  const content = document.getElementById('accContent');
  const activeTab = document.querySelector('.acc-tab.active');
  if (content && activeTab && activeTab.getAttribute('onclick')?.includes('wishlist')) {
    renderWishlistTabContent();
  }
  
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const pName = btn.getAttribute('data-name');
    if (wishlist.includes(pName)) {
      btn.classList.add('active');
      btn.innerHTML = '❤️';
    } else {
      btn.classList.remove('active');
      btn.innerHTML = '🤍';
    }
  });
}

function renderWishlistTabContent() {
  const content = document.getElementById('accContent');
  if (!content) return;
  
  const wishlist = JSON.parse(localStorage.getItem('sa_wishlist') || '[]');
  if (wishlist.length === 0) {
    content.innerHTML = '<div class="empty-cart-msg">Your saved items will appear here once liked! ❤️</div>';
    return;
  }
  
  const allProds = [
    ...JSON.parse(localStorage.getItem('sa_products') || '[]'),
    ...JSON.parse(localStorage.getItem('sa_foods') || '[]'),
    ...JSON.parse(localStorage.getItem('sa_items') || '[]')
  ];
  
  const wishItems = allProds.filter(p => wishlist.includes(p.name));
  
  if (wishItems.length === 0) {
    content.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${wishlist.map(name => `
          <div class="acc-item-card" style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.03); border:1px solid rgba(0,212,255,0.1); border-radius:12px;">
            <span style="font-weight:600; font-size:0.9rem;">🐟 ${name}</span>
            <button class="btn-secondary" style="font-size:0.75rem; padding:4px 8px; border-color:var(--coral-pink); color:var(--coral-pink);" onclick="toggleWishlistDirect('${name}')">Remove</button>
          </div>
        `).join('')}
      </div>
    `;
    return;
  }
  
  content.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:10px;">
      ${wishItems.map(item => {
        const priceText = item.price || 'Contact Us';
        const img = item.image || item.img || 'logo.jpeg';
        let priceVal = null;
        const priceMatch = priceText.match(/₹([\d,]+)/);
        if (priceMatch) priceVal = parseInt(priceMatch[1].replace(/,/g, ''));
        
        const actionBtn = priceVal 
          ? `<button class="btn-secondary" style="font-size:0.75rem; padding:4px 8px; border-color:var(--aqua-cyan); color:var(--aqua-cyan);" onclick="addToCart('${item.name}', ${priceVal}, '${img}')">🛒 Add</button>`
          : `<a href="https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${encodeURIComponent(`Hi, I'm interested in ${item.name}`)}" target="_blank" class="btn-secondary" style="font-size:0.75rem; padding:4px 8px; border-color:var(--neon-teal); color:var(--neon-teal); text-decoration:none; text-align:center;">💬 Enquire</a>`;
          
        return `
          <div class="acc-item-card" style="display:flex; gap:12px; align-items:center; padding:10px; background:rgba(255,255,255,0.03); border:1px solid rgba(0,212,255,0.1); border-radius:12px; position:relative;">
            <img src="${img}" style="width:50px; height:50px; object-fit:cover; border-radius:8px; border:1px solid rgba(0,212,255,0.2);">
            <div style="flex-grow:1;">
              <h4 style="font-size:0.85rem; font-weight:600; margin-bottom:2px; color:var(--white-glow);">${item.name}</h4>
              <span style="font-size:0.8rem; color:var(--neon-teal); font-weight:bold;">${priceText}</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:6px; align-items:flex-end;">
              ${actionBtn}
              <button style="background:none; border:none; color:var(--coral-pink); font-size:0.75rem; cursor:pointer;" onclick="toggleWishlistDirect('${item.name}')">Remove</button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

window.toggleWishlistDirect = function(name) {
  toggleWishlist(name, null);
};

// ========== CUSTOM CURSOR (desktop only) ==========
const cursorGlow = document.querySelector('.cursor-glow');
const cursorRing = document.querySelector('.cursor-ring');
if (cursorGlow && cursorRing) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX - 10 + 'px';
    cursorGlow.style.top = e.clientY - 10 + 'px';
    cursorRing.style.left = e.clientX - 20 + 'px';
    cursorRing.style.top = e.clientY - 20 + 'px';
  });
}

// ========== BUBBLES ==========
function createBubbles() {
  const container = document.querySelector('.bubbles-container');
  if (!container) return;
  const count = window.innerWidth < 768 ? 10 : 20;
  for (let i = 0; i < count; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 18 + 4;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = (Math.random() * 10 + 8) + 's';
    bubble.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(bubble);
  }
}
createBubbles();

// ========== LIGHT RAYS ==========
function createRays() {
  const container = document.querySelector('.light-rays');
  if (!container) return;
  const count = window.innerWidth < 768 ? 4 : 8;
  for (let i = 0; i < count; i++) {
    const ray = document.createElement('div');
    ray.classList.add('ray');
    ray.style.left = (10 + i * (80 / count)) + '%';
    ray.style.width = (Math.random() * 80 + 30) + 'px';
    ray.style.animationDelay = (i * 0.8) + 's';
    ray.style.animationDuration = (6 + Math.random() * 6) + 's';
    container.appendChild(ray);
  }
}
createRays();

// ========== NAVBAR SCROLL ==========
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 80);
});

// ========== SCROLL REVEAL ==========
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========== GALLERY DATA (localStorage-powered) ==========
const defaultGallery = [
  { src: 'images/gallery1.png', alt: 'Gallery Setup 1', caption: 'Premium Aquarium Layout' },
  { src: 'images/gallery2.png', alt: 'Gallery Setup 2', caption: 'Exotic Species Display' },
  { src: 'images/gallery3.png', alt: 'Gallery Setup 3', caption: 'Custom Planted Aquascape' },
  { src: 'images/gallery4.png', alt: 'Gallery Setup 4', caption: 'Marine Habitat Setup' },
  { src: 'images/gallery5.png', alt: 'Gallery Setup 5', caption: 'Bespoke Living Room Aquariums' },
  { src: 'images/gallery6.png', alt: 'Gallery Setup 6', caption: 'Imported Discus Breeding Care' }
];

function getGalleryData() {
  const stored = localStorage.getItem('sa_gallery');
  if (stored) {
    try { return JSON.parse(stored); } catch (e) {}
  }
  localStorage.setItem('sa_gallery', JSON.stringify(defaultGallery));
  return defaultGallery;
}

function initGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const items = getGalleryData();

  grid.innerHTML = items.map(item => `
    <div class="gallery-item">
      <img src="${item.src}" alt="${item.alt}" loading="lazy" onerror="this.onerror=null;this.src='logo.jpeg'">
      <div class="gallery-overlay"><span>${item.caption}</span></div>
    </div>
  `).join('');

  grid.querySelectorAll('.gallery-item').forEach(el => {
    el.addEventListener('click', () => openGalleryLightbox(el));
  });
}

// ========== GALLERY LIGHTBOX ==========
function openGalleryLightbox(item) {
  const img = item.querySelector('img');
  if (!img) return;
  const lb = document.getElementById('galleryLightbox');
  const lbImg = document.getElementById('galleryLightboxImg');
  if (!lb || !lbImg) return;
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeGalleryLightbox() {
  const lb = document.getElementById('galleryLightbox');
  if (lb) lb.classList.remove('active');
  document.body.style.overflow = '';
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeGalleryLightbox();
});

// ========== REVIEWS SLIDER ==========
let currentReview = 0;
const track = document.querySelector('.reviews-track');
const dots = document.querySelectorAll('.review-dot');
const totalReviews = document.querySelectorAll('.review-card').length;

function goToReview(index) {
  currentReview = index;
  if (track) track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

if (totalReviews > 0) {
  setInterval(() => goToReview((currentReview + 1) % totalReviews), 5000);
}

// ========== FISH SILHOUETTES ==========
function createFishSilhouettes() {
  const hero = document.querySelector('.hero');
  if (!hero || window.innerWidth < 768) return;
  const fishEmojis = ['🐟', '🐠', '🐡', '🦈', '🐋'];
  for (let i = 0; i < 4; i++) {
    const fish = document.createElement('div');
    fish.classList.add('fish-silhouette');
    fish.textContent = fishEmojis[i % fishEmojis.length];
    fish.style.top = (15 + Math.random() * 60) + '%';
    fish.style.fontSize = (3 + Math.random() * 4) + 'rem';
    fish.style.animationDuration = (12 + Math.random() * 15) + 's';
    fish.style.animationDelay = (i * 3) + 's';
    hero.appendChild(fish);
  }
}
createFishSilhouettes();

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if open
      const navLinks = document.getElementById('navLinks');
      if (navLinks) navLinks.classList.remove('open');
    }
  });
});

// ========== TOAST SYSTEM ==========
function showClientToast(msg) {
  const container = document.getElementById('clientToastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'client-toast';
  toast.innerHTML = `<span>✓</span> <div>${msg}</div>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.4s reverse forwards';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ========== LIVE PURCHASE POPUP ==========
const fakeNames = ["Rajesh", "Priya", "Vikram", "Anitha", "Suresh", "Kavya"];
const fakeFishes = ["Golden Arowana", "SRD Flowerhorn", "Polar Parrots", "Red Oscar", "Betta OHM", "Platinum Guppys"];

function triggerLivePurchase() {
  const popup = document.getElementById('livePurchasePopup');
  if (!popup) return;
  document.getElementById('livePopName').textContent = `${fakeNames[Math.floor(Math.random() * fakeNames.length)]} from Vizag`;
  document.getElementById('livePopItem').textContent = `inquired about a ${fakeFishes[Math.floor(Math.random() * fakeFishes.length)]}`;
  popup.classList.add('active');
  setTimeout(() => popup.classList.remove('active'), 5000);
}
setInterval(triggerLivePurchase, 45000);
setTimeout(triggerLivePurchase, 10000);

// ========== FLASH SALE COUNTDOWN ==========
function initFlashSale() {
  const timerEl = document.getElementById('flashTimer');
  if (!timerEl) return;
  let fallbackTime = 3600 * 2 + 1800;
  setInterval(() => {
    if (window.offerExpiryTime) {
      const now = Date.now();
      const diff = window.offerExpiryTime - now;
      if (diff <= 0) {
        timerEl.textContent = '00:00:00';
        return;
      }
      const time = Math.floor(diff / 1000);
      const h = Math.floor(time / 3600).toString().padStart(2, '0');
      const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
      const s = (time % 60).toString().padStart(2, '0');
      timerEl.textContent = `${h}:${m}:${s}`;
    } else {
      fallbackTime--;
      if (fallbackTime < 0) fallbackTime = 3600 * 2 + 1800;
      const h = Math.floor(fallbackTime / 3600).toString().padStart(2, '0');
      const m = Math.floor((fallbackTime % 3600) / 60).toString().padStart(2, '0');
      const s = (fallbackTime % 60).toString().padStart(2, '0');
      timerEl.textContent = `${h}:${m}:${s}`;
    }
  }, 1000);
}
initFlashSale();

// ========== SERVER BACKEND ==========
const SHEETS_URL = '/api/orders';

// ========== CART SYSTEM ==========
let cart = JSON.parse(localStorage.getItem('sa_cart') || '[]');
let appliedCoupon = null;

function saveCart() {
  localStorage.setItem('sa_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = count > 0 ? count : '';
    badge.setAttribute('data-count', count);
  }
}

function addToCart(name, price, img) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }
  saveCart();
  showClientToast(`${name} added to cart!`);
  renderCartSheet();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCartSheet();
}

function updateQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
  renderCartSheet();
}

function getCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = cart.length > 0 ? deliveryCharge : 0;
  const packing = cart.length > 0 ? packingCharge : 0;
  
  let discount = 0;
  if (appliedCoupon) {
    if (subtotal < appliedCoupon.minOrder) {
      appliedCoupon = null;
    } else {
      if (appliedCoupon.type === 'percentage') {
        discount = Math.round(subtotal * (appliedCoupon.value / 100));
      } else {
        discount = appliedCoupon.value;
      }
    }
  }
  
  const total = Math.max(0, subtotal + delivery + packing - discount);
  return { subtotal, delivery, packing, discount, total };
}

function renderCartSheet() {
  const container = document.getElementById('cartSheetItems');
  const summary = document.getElementById('cartSummary');
  const couponRow = document.getElementById('couponRow');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<div class="sheet-empty"><span class="empty-icon">🛒</span>Your cart is empty<br>Start adding some amazing fish!</div>';
    if (summary) summary.style.display = 'none';
    if (couponRow) couponRow.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map((item, i) => `
    <div class="sheet-item" data-index="${i}">
      <img src="${item.img}" alt="${item.name}">
      <div class="sheet-item-info">
        <h4>${item.name}</h4>
        <span class="si-price">₹${item.price}</span>
      </div>
      <div class="sheet-item-qty">
        <button class="qty-btn-s" data-action="qty-minus" data-index="${i}">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn-s" data-action="qty-plus" data-index="${i}">+</button>
      </div>
      <button class="remove-btn-s" data-action="remove" data-index="${i}">✕</button>
    </div>
  `).join('');

  if (couponRow) {
    couponRow.style.display = 'flex';
    const inputWrapper = document.getElementById('couponInput')?.parentElement;
    const info = document.getElementById('appliedCouponInfo');
    const codeSpan = document.getElementById('appliedCouponCode');
    
    if (appliedCoupon) {
      if(inputWrapper) inputWrapper.style.display = 'none';
      if(info) info.style.display = 'flex';
      if(codeSpan) codeSpan.textContent = appliedCoupon.code;
    } else {
      if(inputWrapper) inputWrapper.style.display = 'flex';
      if(info) info.style.display = 'none';
    }
  }

  if (summary) {
    summary.style.display = 'block';
    const t = getCartTotals();
    document.getElementById('sumSubtotal').textContent = `₹${t.subtotal}`;
    document.getElementById('sumDelivery').textContent = `₹${t.delivery}`;
    
    const discRow = document.getElementById('sumDiscountRow');
    if (t.discount > 0 && discRow) {
      discRow.style.display = 'flex';
      document.getElementById('sumDiscount').textContent = `-₹${t.discount}`;
    } else if (discRow) {
      discRow.style.display = 'none';
    }
    
    document.getElementById('sumTotal').textContent = `₹${t.total}`;
  }
}

// ========== CART SHEET OPEN/CLOSE ==========
function openCartSheet() {
  renderCartSheet();
  document.getElementById('cartSheetOverlay')?.classList.add('active');
  document.getElementById('cartSheet')?.classList.add('active');
}

function closeCartSheet() {
  document.getElementById('cartSheetOverlay')?.classList.remove('active');
  document.getElementById('cartSheet')?.classList.remove('active');
}

// ========== BUY NOW ==========
function buyNow(name, price, img) {
  cart = [{ name, price, img, qty: 1 }];
  saveCart();
  renderCartSheet();
  openCheckout();
}

// ========== CHECKOUT FLOW ==========
function renderCheckoutSummary() {
  const itemsDiv = document.getElementById('checkoutOrderItems');
  if (!itemsDiv) return;
  const t = getCartTotals();
  let billHtml = '<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(0,212,255,0.1);border-radius:12px;padding:14px;font-size:0.82rem;">';
  
  cart.forEach(item => {
    billHtml += `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
      <span style="flex:1;color:rgba(255,255,255,0.7);">${item.name} <span style="color:rgba(255,255,255,0.35);">×${item.qty}</span></span>
      <span style="color:var(--white-glow);font-weight:600;">₹${item.price * item.qty}</span>
    </div>`;
  });
  
  billHtml += `
    <div style="margin-top:10px;padding-top:10px;border-top:1px dashed rgba(0,212,255,0.15);">
      <div style="display:flex;justify-content:space-between;padding:4px 0;color:rgba(255,255,255,0.5);"><span>Subtotal</span><span>₹${t.subtotal}</span></div>
      <div style="display:flex;justify-content:space-between;padding:4px 0;color:rgba(255,255,255,0.5);"><span>Delivery Charge</span><span>₹${t.delivery}</span></div>
      <div style="display:flex;justify-content:space-between;padding:4px 0;color:rgba(255,255,255,0.5);"><span>Packing Charges</span><span>₹${t.packing}</span></div>
      ${t.discount > 0 ? `<div style="display:flex;justify-content:space-between;padding:4px 0;color:var(--color-secondary);"><span>Discount (${appliedCoupon?.code})</span><span>-₹${t.discount}</span></div>` : ''}
    </div>
    <div style="display:flex;justify-content:space-between;padding:10px 0 4px;margin-top:8px;border-top:2px solid rgba(0,212,255,0.2);font-size:1rem;font-weight:700;color:var(--neon-teal);">
      <span>Total Amount</span><span>₹${t.total}</span>
    </div>`;
  billHtml += '</div>';
  itemsDiv.innerHTML = billHtml;
}

function openCheckout() {
  closeCartSheet();
  renderCheckoutSummary();
  
  const savedPhone = localStorage.getItem('sa_user_phone');
  if (savedPhone) {
    const phoneInput = document.getElementById('coPhone');
    if (phoneInput && !phoneInput.value) phoneInput.value = savedPhone;
  }
  
  document.getElementById('checkoutOverlay')?.classList.add('active');
}

function closeCheckout() {
  document.getElementById('checkoutOverlay')?.classList.remove('active');
}

// ========== PAYMENT ==========
let selectedPayment = 'upi';
let paymentTimerInterval = null;

function spawnPaymentBubbles() {
  const container = document.getElementById('paymentBubblesContainer');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 15; i++) {
    const b = document.createElement('div');
    b.className = 'payment-bubble';
    const size = Math.random() * 18 + 6;
    b.style.width = size + 'px';
    b.style.height = size + 'px';
    b.style.left = Math.random() * 100 + '%';
    b.style.bottom = '-' + (Math.random() * 30 + 10) + 'px';
    b.style.animationDuration = (Math.random() * 8 + 6) + 's';
    b.style.animationDelay = (Math.random() * 5) + 's';
    container.appendChild(b);
  }
}

function startPaymentTimer() {
  if (paymentTimerInterval) clearInterval(paymentTimerInterval);
  let timeLeft = 300;
  const minutesEl = document.getElementById('timerMinutes');
  const secondsEl = document.getElementById('timerSeconds');
  
  function updateTimerText() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    if (minutesEl) minutesEl.textContent = mins.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = secs.toString().padStart(2, '0');
  }
  
  updateTimerText();
  paymentTimerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(paymentTimerInterval);
      showClientToast('Payment session expired. Please refresh checkout.');
      closeUpiModal();
    } else {
      updateTimerText();
    }
  }, 1000);
}

function validatePaymentForm() {
  const name = document.getElementById('payName')?.value.trim() || '';
  const phone = document.getElementById('payPhone')?.value.trim() || '';
  const utr = document.getElementById('payUtr')?.value.trim() || '';
  const btn = document.getElementById('submitUpiPaymentBtn');
  
  const isNameValid = name.length > 0;
  const isPhoneValid = /^\d{10}$/.test(phone);
  const isUtrValid = /^[a-zA-Z0-9]{12,16}$/.test(utr) || utr.length >= 12;
  
  if (btn) {
    if (isNameValid && isPhoneValid && isUtrValid) {
      btn.removeAttribute('disabled');
      btn.classList.add('glow-ready');
    } else {
      btn.setAttribute('disabled', 'true');
      btn.classList.remove('glow-ready');
    }
  }
}

function copyUpiId() {
  const upiId = '7995549922@ybl';
  navigator.clipboard.writeText(upiId).then(() => {
    const btn = document.getElementById('copyUpiIdBtn');
    if (btn) {
      const oldHtml = btn.innerHTML;
      btn.innerHTML = '✓ Copied!';
      setTimeout(() => { btn.innerHTML = oldHtml; }, 2000);
    }
    showClientToast('UPI ID copied to clipboard!');
  }).catch(() => {
    showClientToast('Failed to copy. Please manually copy UPI ID.');
  });
}

function playSuccessSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.12);
      
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime + i * 0.12);
      gainNode.gain.linearRampToValueAtTime(0.25, audioCtx.currentTime + i * 0.12 + 0.03);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + i * 0.12 + 0.4);
      
      osc.start(audioCtx.currentTime + i * 0.12);
      osc.stop(audioCtx.currentTime + i * 0.12 + 0.4);
    });
  } catch (e) {
    console.error("Audio Synthesis Error:", e);
  }
}

function placeOrder() {
  const name = document.getElementById('coName')?.value.trim();
  const address = document.getElementById('coAddress')?.value.trim();
  const city = document.getElementById('coCity')?.value.trim() || '';
  const pincode = document.getElementById('coPincode')?.value.trim() || '';
  const state = document.getElementById('coState')?.value.trim() || '';
  const phone = document.getElementById('coPhone')?.value.trim();

  if (!name || !address || !phone) {
    showClientToast('Please fill in all required fields');
    return;
  }
  if (phone.length < 10) {
    showClientToast('Enter a valid phone number');
    return;
  }
  if (cart.length === 0) {
    showClientToast('Your cart is empty');
    return;
  }

  const orderId = 'SA-' + Math.floor(10000 + Math.random() * 90000);
  const t = getCartTotals();

  const upiPaymentModal = document.getElementById('upiPaymentModal');
  if (upiPaymentModal) {
    const upiQrCode = document.getElementById('upiQrCode');
    if (upiQrCode) {
      const qrPaths = ['QR%20scan.jpeg', 'QR scan.jpeg', './QR%20scan.jpeg', './QR scan.jpeg'];
      let pathIndex = 0;
      upiQrCode.onerror = function() {
        pathIndex++;
        if (pathIndex < qrPaths.length) {
          upiQrCode.src = qrPaths[pathIndex];
        } else {
          upiQrCode.onerror = null;
        }
      };
      if (!upiQrCode.src) {
        upiQrCode.src = qrPaths[0];
      }
    }

    const payNameInput = document.getElementById('payName');
    const payPhoneInput = document.getElementById('payPhone');
    if (payNameInput) payNameInput.value = name;
    if (payPhoneInput) payPhoneInput.value = phone;

    const payUtrInput = document.getElementById('payUtr');
    if (payUtrInput) payUtrInput.value = '';

    const fileInput = document.getElementById('coScreenshotFile');
    if (fileInput) fileInput.value = '';
    const progressSpan = document.getElementById('coScreenshotProgress');
    if (progressSpan) progressSpan.style.display = 'none';

    const itemsContainer = document.getElementById('paymentSummaryItems');
    if (itemsContainer) {
      let itemsHtml = '';
      cart.forEach(item => {
        itemsHtml += `
          <div class="upi-summary-item">
            <span class="upi-item-name">🐟 ${item.name} <span class="upi-item-qty">×${item.qty}</span></span>
            <span class="upi-item-price">₹${item.price * item.qty}</span>
          </div>`;
      });
      itemsContainer.innerHTML = itemsHtml;
    }

    const paySubtotal = document.getElementById('paySubtotal');
    const payDelivery = document.getElementById('payDelivery');
    const payPacking = document.getElementById('payPacking');
    const payDiscountRow = document.getElementById('payDiscountRow');
    const payDiscount = document.getElementById('payDiscount');
    const payTotal = document.getElementById('payTotal');
    if (paySubtotal) paySubtotal.textContent = `₹${t.subtotal}`;
    if (payDelivery) payDelivery.textContent = `₹${t.delivery}`;
    if (payPacking) payPacking.textContent = `₹${t.packing}`;
    
    if (t.discount > 0 && payDiscountRow) {
      payDiscountRow.style.display = 'flex';
      if(payDiscount) payDiscount.textContent = `-₹${t.discount}`;
    } else if (payDiscountRow) {
      payDiscountRow.style.display = 'none';
    }
    
    if (payTotal) payTotal.textContent = `₹${t.total}`;

    upiPaymentModal.classList.add('active');
    spawnPaymentBubbles();
    startPaymentTimer();
    validatePaymentForm();

    const payNameEl = document.getElementById('payName');
    const payPhoneEl = document.getElementById('payPhone');
    const payUtrEl = document.getElementById('payUtr');
    if (payNameEl) { payNameEl.removeEventListener('input', validatePaymentForm); payNameEl.addEventListener('input', validatePaymentForm); }
    if (payPhoneEl) { payPhoneEl.removeEventListener('input', validatePaymentForm); payPhoneEl.addEventListener('input', validatePaymentForm); }
    if (payUtrEl) { payUtrEl.removeEventListener('input', validatePaymentForm); payUtrEl.addEventListener('input', validatePaymentForm); }

    window.pendingOrderData = { orderId, name, address, city, pincode, state, phone, t, selectedPayment, cartItems: [...cart] };
  } else {
    submitOrderData(orderId, name, address, city, pincode, state, phone, t, selectedPayment, [...cart]);
    cart = [];
    saveCart();
    closeCheckout();
    document.getElementById('successOrderId').textContent = `Order #${orderId}`;
    document.getElementById('orderSuccessOverlay')?.classList.add('active');
  }
}

function submitOrderData(orderId, name, address, city, pincode, state, phone, t, paymentMethod, cartItems, utr = '', screenshotUrl = '') {
  const itemsToSave = cartItems || [...cart];
  const orders = JSON.parse(localStorage.getItem('sa_orders') || '[]');
  
  const newOrder = {
    id: orderId,
    customer: name,
    phone: phone,
    address: address,
    city: city,
    pincode: pincode,
    state: state,
    date: new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    items: itemsToSave,
    total: t.total,
    amount: '₹' + t.total,
    payment: paymentMethod,
    status: utr ? 'Pending Verification' : 'Confirmed',
    utr: utr,
    screenshot: screenshotUrl
  };

  orders.unshift(newOrder);
  localStorage.setItem('sa_orders', JSON.stringify(orders));

  if (appliedCoupon) {
    const coupons = JSON.parse(localStorage.getItem('sa_coupons') || '[]');
    const cIdx = coupons.findIndex(c => c.code === appliedCoupon.code);
    if (cIdx > -1) {
      coupons[cIdx].currentUsage = (coupons[cIdx].currentUsage || 0) + 1;
      localStorage.setItem('sa_coupons', JSON.stringify(coupons));
    }
  }

  localStorage.setItem('sa_user_phone', phone);
  setupOrdersRealtimeSync();

  const itemsSummary = itemsToSave.map(i => `${i.name} x${i.qty}`).join(', ');
  const orderPayload = {
    'Order ID': orderId,
    'Date': new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    'Customer Name': name,
    'Phone': phone,
    'Address': `${address}, ${city}, ${state} - ${pincode}`,
    'Items': itemsSummary,
    'Total': '₹' + t.total,
    'Payment': paymentMethod + (utr ? ` (UTR: ${utr})` : ''),
    'Status': utr ? 'Pending Verification' : 'Confirmed',
    
    id: orderId,
    customer: name,
    phone: phone,
    address: address,
    city: city,
    pincode: pincode,
    state: state,
    date: new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    items: itemsToSave,
    total: t.total,
    amount: '₹' + t.total,
    payment: paymentMethod,
    status: utr ? 'Pending Verification' : 'Confirmed',
    utr: utr,
    screenshot: screenshotUrl
  };

  fetch(SHEETS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderPayload)
  }).then(response => {
    if (response.ok) {
      console.log('Order sent to local server');
    } else {
      console.error('Failed to send order to local server:', response.status);
    }
  }).catch(error => {
    console.error('Error sending order to local server:', error);
  });

  if (window.db) {
    db.collection('orders').doc(orderId).set(orderPayload)
      .then(() => {
        console.log('Order successfully written to Firebase Firestore!');
      })
      .catch((error) => {
        console.error('Error writing order to Firebase Firestore:', error);
      });
  }
}

function closeUpiModal() {
  const upiPaymentModal = document.getElementById('upiPaymentModal');
  if (upiPaymentModal) upiPaymentModal.classList.remove('active');
  if (paymentTimerInterval) clearInterval(paymentTimerInterval);
  showClientToast('Payment cancelled.');
}

function confirmUpiPayment() {
  if (window.pendingOrderData) {
    const { orderId, address, city, pincode, state, selectedPayment, cartItems, t } = window.pendingOrderData;
    
    const name = document.getElementById('payName')?.value.trim() || '';
    const phone = document.getElementById('payPhone')?.value.trim() || '';
    const utr = document.getElementById('payUtr')?.value.trim() || '';
    const fileInput = document.getElementById('coScreenshotFile');
    const progressSpan = document.getElementById('coScreenshotProgress');
    
    if (!name || phone.length < 10 || utr.length < 12) {
      showClientToast('Please fill all required fields correctly');
      return;
    }

    const orders = JSON.parse(localStorage.getItem('sa_orders') || '[]');
    const isDuplicate = orders.some(o => o.utr && o.utr.trim().toLowerCase() === utr.trim().toLowerCase());
    if (isDuplicate) {
      showClientToast('Duplicate Transaction ID / UTR detected! Use a unique UTR.');
      return;
    }

    const spinner = document.getElementById('submitSpinner');
    const btnText = document.getElementById('submitBtnText');
    const btn = document.getElementById('submitUpiPaymentBtn');
    if (spinner) spinner.style.display = 'inline-block';
    if (btnText) btnText.textContent = 'Verifying Transaction...';
    if (btn) btn.disabled = true;

    function finalizeOrder(screenshotUrl = '') {
      submitOrderData(orderId, name, address, city, pincode, state, phone, t, selectedPayment, cartItems, utr, screenshotUrl);

      playSuccessSound();

      cart = [];
      saveCart();

      if (paymentTimerInterval) clearInterval(paymentTimerInterval);

      const upiPaymentModal = document.getElementById('upiPaymentModal');
      if (upiPaymentModal) upiPaymentModal.classList.remove('active');
      closeCheckout();

      if (spinner) spinner.style.display = 'none';
      if (btnText) btnText.textContent = 'Verify & Place Order';
      if (progressSpan) progressSpan.style.display = 'none';

      document.getElementById('successOrderId').textContent = `Order #${orderId}`;
      document.getElementById('orderSuccessOverlay')?.classList.add('active');
      showClientToast('Order placed successfully!');

      window.pendingOrderData = null;
    }

    if (fileInput && fileInput.files && fileInput.files[0] && window.storage) {
      const file = fileInput.files[0];
      const extension = file.name.split('.').pop();
      const fileName = `receipts/${orderId}_${Date.now()}.${extension}`;
      const storageRef = window.storage.ref().child(fileName);
      const uploadTask = storageRef.put(file);

      if (progressSpan) {
        progressSpan.style.display = 'block';
        progressSpan.textContent = 'Uploading receipt: 0%';
      }

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          if (progressSpan) {
            progressSpan.textContent = `Uploading receipt: ${progress}%`;
          }
        }, 
        (error) => {
          console.error('Storage upload failed:', error);
          showClientToast('Receipt upload failed, placing order without receipt...');
          finalizeOrder('');
        }, 
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at:', downloadURL);
            finalizeOrder(downloadURL);
          }).catch((err) => {
            console.error('Failed to get download URL:', err);
            finalizeOrder('');
          });
        }
      );
    } else {
      setTimeout(() => {
        finalizeOrder('');
      }, 1200);
    }
  }
}

function continueShopping() {
  document.getElementById('orderSuccessOverlay')?.classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setActiveNavItem('home');
}

// ========== PANELS ==========
function closePanel(id) {
  document.getElementById(id)?.classList.remove('active');
}

let ordersListenerUnsubscribe = null;

function setupOrdersRealtimeSync() {
  if (ordersListenerUnsubscribe) {
    ordersListenerUnsubscribe();
    ordersListenerUnsubscribe = null;
  }

  const phone = localStorage.getItem('sa_user_phone');
  if (!phone || !window.db) {
    renderOrdersPanelBody(JSON.parse(localStorage.getItem('sa_orders') || '[]'));
    return;
  }

  console.log(`%c☁️ Client: Setting up real-time listener for customer phone: ${phone}`, 'color: #00d4ff;');

  ordersListenerUnsubscribe = db.collection('orders')
    .onSnapshot((snapshot) => {
      const fbOrders = [];
      snapshot.forEach((doc) => {
        const d = doc.data();
        if (d.phone === phone || d['Phone'] === phone) {
          fbOrders.push({
            id: doc.id,
            date: d.date || d['Date'] || '',
            total: d.total || (d['Total'] ? parseFloat(d['Total'].replace('₹', '').replace(/,/g, '')) : 0),
            status: d.status || d['Status'] || 'Pending Verification'
          });
        }
      });
      
      console.log(`%c🔄 Client: Customer orders synced! Found ${fbOrders.length} orders.`, 'color: #00ffc8;');
      localStorage.setItem('sa_orders', JSON.stringify(fbOrders));
      renderOrdersPanelBody(fbOrders);
    }, (error) => {
      console.warn('Client: Failed to sync customer orders from Firebase:', error);
      renderOrdersPanelBody(JSON.parse(localStorage.getItem('sa_orders') || '[]'));
    });
}

function renderOrdersPanelBody(ordersList) {
  const body = document.getElementById('ordersPanelBody');
  if (!body) return;

  if (!ordersList || ordersList.length === 0) {
    body.innerHTML = '<div class="panel-empty"><span class="empty-icon">📦</span>No orders yet<br>Start shopping to see your orders here!</div>';
    return;
  }

  const sortedOrders = [...ordersList].sort((a, b) => b.id.localeCompare(a.id));

  body.innerHTML = sortedOrders.map(o => {
    let badgeColor = 'rgba(255, 255, 255, 0.1)';
    let textColor = '#ffffff';
    let borderColor = 'rgba(255, 255, 255, 0.2)';
    
    const statusLower = (o.status || '').toLowerCase();
    if (statusLower.includes('pending verification') || statusLower === 'pending') {
      badgeColor = 'rgba(255, 170, 0, 0.1)';
      textColor = '#ffaa00';
      borderColor = 'rgba(255, 170, 0, 0.25)';
    } else if (statusLower.includes('confirm') || statusLower.includes('paid')) {
      badgeColor = 'rgba(0, 255, 200, 0.1)';
      textColor = '#00ffc8';
      borderColor = 'rgba(0, 255, 200, 0.25)';
    } else if (statusLower.includes('ship')) {
      badgeColor = 'rgba(0, 212, 255, 0.1)';
      textColor = '#00d4ff';
      borderColor = 'rgba(0, 212, 255, 0.25)';
    } else if (statusLower.includes('deliv')) {
      badgeColor = 'rgba(40, 167, 69, 0.1)';
      textColor = '#28a745';
      borderColor = 'rgba(40, 167, 69, 0.25)';
    } else if (statusLower.includes('cancel')) {
      badgeColor = 'rgba(220, 53, 69, 0.1)';
      textColor = '#dc3545';
      borderColor = 'rgba(220, 53, 69, 0.25)';
    }
    
    return `
      <div class="order-history-card">
        <div class="ohc-top">
          <span class="ohc-id">${o.id}</span>
          <span class="ohc-date">${o.date}</span>
        </div>
        <div class="ohc-total">₹${o.total}</div>
        <span class="ohc-status" style="display:inline-block; padding:4px 10px; border-radius:20px; font-size:0.75rem; font-weight:600; text-transform:uppercase; background:${badgeColor}; color:${textColor}; border:1px solid ${borderColor}; margin-top:8px; box-shadow:0 0 10px ${badgeColor};">${o.status}</span>
      </div>
    `;
  }).join('');
}

function openOrdersPanel() {
  setupOrdersRealtimeSync();
  document.getElementById('ordersPanel')?.classList.add('active');
}

function openProfilePanel() {
  const body = document.getElementById('profilePanelBody');
  if (!body) return;
  const phone = localStorage.getItem('sa_user_phone') || 'Not set';
  const ordersList = JSON.parse(localStorage.getItem('sa_orders') || '[]');
  body.innerHTML = `
    <div class="order-history-card" style="text-align:center;">
      <div style="font-size:3rem;margin-bottom:12px;">👤</div>
      <h4 style="margin-bottom:8px;color:var(--aqua-cyan);">My Account</h4>
      <p style="font-size:0.85rem;color:rgba(255,255,255,0.5);margin-bottom:4px;">Phone: ${phone}</p>
      <p style="font-size:0.85rem;color:rgba(255,255,255,0.5);">Orders: ${ordersList.length}</p>
    </div>
    <div class="order-history-card">
      <h4 style="margin-bottom:10px;font-size:0.85rem;">Contact Subramanya Aquatics</h4>
      <a href="https://api.whatsapp.com/send?phone=${whatsAppNumber}" target="_blank" style="color:var(--neon-teal);font-size:0.85rem;">💬 WhatsApp: +91 79955 49922</a>
    </div>
  `;
  document.getElementById('profilePanel')?.classList.add('active');
}

// ========== CATALOG COMPILATION & REAL-TIME SYNC ==========
function renderProductCard(p) {
  const name = p.name;
  const priceText = p.price || 'Contact Us';
  const img = resolveProductImage(p);
  const tag = p.tag || '';
  
  const wishlist = JSON.parse(localStorage.getItem('sa_wishlist') || '[]');
  const isWishlisted = wishlist.includes(name);

  let priceVal = null;
  const priceMatch = priceText.match(/₹([\d,]+)/);
  if (priceMatch) {
    priceVal = parseInt(priceMatch[1].replace(/,/g, ''));
  }

  let actionsHtml = '';
  if (priceVal !== null) {
    actionsHtml = `
      <div class="card-actions" style="display: flex; gap: 8px; margin-top: 10px;">
        <button class="btn-enquire btn-add-cart-btn" data-name="${name}" data-price="${priceVal}" data-img="${img}" data-action="add-cart" style="flex: 1; font-size: 0.78rem; padding: 8px 0;">🛒 Add</button>
        <button class="btn-enquire btn-buy-now-btn" data-name="${name}" data-price="${priceVal}" data-img="${img}" data-action="buy-now" style="flex: 1; font-size: 0.78rem; padding: 8px 0; background: linear-gradient(135deg, #00d4ff, #00ffc8) !important; color: #020c1b !important;">⚡ Buy</button>
      </div>
    `;
  } else {
    const textMsg = encodeURIComponent(`Hello! I'm interested in "${name}". Is it available? 🐠`);
    const waUrl = `https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${textMsg}`;
    actionsHtml = `
      <div class="card-actions" style="display: flex; gap: 8px; margin-top: 10px;">
        <a href="${waUrl}" target="_blank" class="btn-enquire" style="flex: 1; font-size: 0.78rem; padding: 8px 0; text-align: center; text-decoration: none; display: flex; align-items: center; justify-content: center;">💬 Enquire</a>
      </div>
    `;
  }

  let badgeHtml = '';
  if (tag) {
    badgeHtml = `<span class="card-badge" style="position: absolute; top: 12px; left: 12px; background: rgba(0, 212, 255, 0.25); border: 1px solid var(--aqua-cyan); color: white; padding: 4px 8px; border-radius: 8px; font-size: 0.65rem; font-weight: bold; text-transform: uppercase; z-index: 2; backdrop-filter: blur(5px);">${tag}</span>`;
  }

  return `
    <div class="fish-card" data-name="${name}">
      <div class="fish-img-container" style="position: relative; height: 200px; overflow: hidden;">
        ${badgeHtml}
        <img src="${img}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;">
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-action="wishlist" data-name="${name}" style="position: absolute; top: 12px; right: 12px; background: rgba(2, 12, 27, 0.6); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 50%; width: 32px; height: 32px; font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 3; transition: 0.3s; color: white;">
          ${isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="fish-info" style="padding: 1.5rem 1.2rem; text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; background: linear-gradient(180deg, transparent, rgba(2,12,27,0.8));">
        <div>
          <h4 style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.8rem; color: var(--white-glow);">${name}</h4>
          <div class="price ${priceVal === null ? 'inquire' : ''}">${priceText}</div>
          ${p.desc ? `<p style="font-size: 0.75rem; color: rgba(224,247,255,0.4); margin-top: 5px; line-height: 1.3;">${p.desc}</p>` : ''}
          ${p.suitable ? `<p style="font-size: 0.7rem; color: var(--aqua-cyan); margin-top: 3px;">Suitable: ${p.suitable}</p>` : ''}
        </div>
        ${actionsHtml}
      </div>
    </div>
  `;
}

function renderCatalog(cats, prods, foodsList, itemsList) {
  const container = document.getElementById('dynamicCatalogContainer');
  if (!container) return;

  const categoriesList = cats && cats.length > 0 ? cats : defaultCategories;
  const productsList = prods && prods.length > 0 ? prods : defaultProducts;
  const foodsToRender = foodsList && foodsList.length > 0 ? foodsList : defaultFoods;
  const itemsToRender = itemsList && itemsList.length > 0 ? itemsList : defaultItems;

  let html = '';

  // 1. Render fish categories
  categoriesList.forEach((cat) => {
    const catProds = productsList.filter(p => p.category === cat.name);
    if (catProds.length === 0) return;

    html += `
      <div class="category-section reveal active">
        <h3 class="category-title">🐠 ${cat.name}</h3>
        <div class="fish-slider">
          ${catProds.map(p => renderProductCard(p)).join('')}
        </div>
      </div>
    `;
  });

  // 2. Render Fish Foods slider
  if (foodsToRender.length > 0) {
    html += `
      <div class="category-section reveal active">
        <h3 class="category-title">🍪 Fish Food</h3>
        <div class="fish-slider">
          ${foodsToRender.map(f => renderProductCard(f)).join('')}
        </div>
      </div>
    `;
  }

  // 3. Render Aquarium Items/Accessories slider
  if (itemsToRender.length > 0) {
    html += `
      <div class="category-section reveal active">
        <h3 class="category-title">🛠️ Aquarium Items</h3>
        <div class="fish-slider">
          ${itemsToRender.map(i => renderProductCard(i)).join('')}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
  revealOnScroll();
  updateWishlistUI();
}

function updateBannersUI(banners) {
  if (!banners) return;
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroSec = document.getElementById('home');
  const flashTitle = document.getElementById('flashTitle');
  const flashCode = document.getElementById('flashCode');

  if (heroTitle && banners.heroTitle) heroTitle.textContent = banners.heroTitle;
  if (heroSubtitle && banners.heroSubtitle) heroSubtitle.textContent = banners.heroSubtitle;
  if (heroSec && banners.heroBg) {
    heroSec.style.backgroundImage = `linear-gradient(rgba(10, 25, 47, 0.6), rgba(10, 25, 47, 0.85)), url('${banners.heroBg}')`;
    heroSec.style.backgroundSize = 'cover';
    heroSec.style.backgroundPosition = 'center';
  }
  if (flashTitle && banners.offerTitle) flashTitle.textContent = banners.offerTitle;
  if (flashCode && banners.offerCode) flashCode.textContent = banners.offerCode;
  
  if (banners.offerTimer) {
    window.offerExpiryTime = new Date(banners.offerTimer).getTime();
  }
}

function updatePaymentsUI(paySettings) {
  if (!paySettings) return;
  if (paySettings.deliveryCharge !== undefined) deliveryCharge = parseFloat(paySettings.deliveryCharge);
  if (paySettings.packingCharge !== undefined) packingCharge = parseFloat(paySettings.packingCharge);
  
  if (paySettings.upiId) {
    merchantUpiId = paySettings.upiId.trim();
    const upiIdLabel = document.querySelector('.upi-id-text strong');
    if (upiIdLabel) upiIdLabel.textContent = merchantUpiId;
  }
  
  if (paySettings.qrImage) {
    const upiQrCode = document.getElementById('upiQrCode');
    if (upiQrCode) upiQrCode.src = paySettings.qrImage;
  }
}

function updateConfigUI(config) {
  if (!config) return;
  if (config.whatsApp) {
    whatsAppNumber = config.whatsApp.replace(/\D/g, '');
    if (!whatsAppNumber.startsWith('91') && whatsAppNumber.length === 10) {
      whatsAppNumber = '91' + whatsAppNumber;
    }
    
    const waLink = document.getElementById('whatsapp-link');
    if (waLink) waLink.href = `https://api.whatsapp.com/send?phone=${whatsAppNumber}`;
    
    const upiWaSupport = document.querySelector('.btn-whatsapp-support');
    if (upiWaSupport) {
      upiWaSupport.href = `https://wa.me/${whatsAppNumber}?text=Hi%20Subramanya%20Aquatics,%20I%20have%20completed%20the%20UPI%20payment%20and%20need%20help%20with%20order%20verification.`;
    }

    document.querySelectorAll('a[href*="whatsapp.com/send"], a[href*="wa.me"]').forEach(el => {
      try {
        const url = new URL(el.href);
        const textParam = url.searchParams.get('text') || '';
        el.href = `https://api.whatsapp.com/send?phone=${whatsAppNumber}${textParam ? '&text=' + encodeURIComponent(textParam) : ''}`;
      } catch (err) {
        el.href = `https://api.whatsapp.com/send?phone=${whatsAppNumber}`;
      }
    });
  }
  
  if (config.address) {
    const locItem = document.querySelector('#location-item p');
    if (locItem) locItem.textContent = config.address;
  }
}

function setupRealtimeFirebaseCatalogSync() {
  if (!window.db) {
    console.warn('Firebase Firestore not initialized. Storefront running in local mode.');
    const localCategories = JSON.parse(localStorage.getItem('sa_categories') || '[]');
    const localProducts = JSON.parse(localStorage.getItem('sa_products') || '[]');
    const localFoods = JSON.parse(localStorage.getItem('sa_foods') || '[]');
    const localItems = JSON.parse(localStorage.getItem('sa_items') || '[]');
    renderCatalog(localCategories, localProducts, localFoods, localItems);
    return;
  }

  console.log('%c☁️ Client: Setting up real-time Firebase Catalog listeners...', 'color: #00d4ff;');

  let activeCategories = [];
  let activeProducts = [];
  let activeFoods = [];
  let activeItems = [];

  function triggerCatalogRender() {
    renderCatalog(activeCategories, activeProducts, activeFoods, activeItems);
  }

  db.collection('categories').onSnapshot((snapshot) => {
    const list = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.status === 'Active') {
        list.push(data);
      }
    });
    activeCategories = list;
    localStorage.setItem('sa_categories', JSON.stringify(list));
    triggerCatalogRender();
  }, (err) => console.error('Error fetching categories:', err));

  db.collection('products').onSnapshot((snapshot) => {
    const list = [];
    snapshot.forEach(doc => {
      list.push(doc.data());
    });
    activeProducts = list;
    localStorage.setItem('sa_products', JSON.stringify(list));
    triggerCatalogRender();
  }, (err) => console.error('Error fetching products:', err));

  db.collection('foods').onSnapshot((snapshot) => {
    const list = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.stock !== 'Out of Stock') {
        list.push(data);
      }
    });
    activeFoods = list;
    localStorage.setItem('sa_foods', JSON.stringify(list));
    triggerCatalogRender();
  }, (err) => console.error('Error fetching foods:', err));

  db.collection('items').onSnapshot((snapshot) => {
    const list = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.stock !== 'Out of Stock') {
        list.push(data);
      }
    });
    activeItems = list;
    localStorage.setItem('sa_items', JSON.stringify(list));
    triggerCatalogRender();
  }, (err) => console.error('Error fetching items:', err));

  db.collection('settings').doc('banners').onSnapshot((doc) => {
    if (doc.exists) {
      updateBannersUI(doc.data());
    }
  });

  db.collection('settings').doc('payments').onSnapshot((doc) => {
    if (doc.exists) {
      updatePaymentsUI(doc.data());
    }
  });

  db.collection('settings').doc('config').onSnapshot((doc) => {
    if (doc.exists) {
      updateConfigUI(doc.data());
    }
  });
}

// ========== BOTTOM NAVIGATION ==========
function setActiveNavItem(tab) {
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
  });
}

// ========== PRODUCT CARD ENHANCEMENT ==========
function injectProductButtons() {
  const cards = document.querySelectorAll('.fish-card');
  cards.forEach(card => {
    const nameEl = card.querySelector('h4');
    const priceEl = card.querySelector('.price');
    const imgEl = card.querySelector('img');
    if (!nameEl || !priceEl) return;

    const name = nameEl.textContent.trim();
    const priceText = priceEl.textContent.trim();
    const imgSrc = imgEl ? imgEl.getAttribute('src') : 'logo.jpeg';

    const info = card.querySelector('.fish-info');
    if (!info || info.querySelector('.card-actions')) return;

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const priceMatch = priceText.match(/₹([\d,]+)/);
    if (priceMatch) {
      const price = parseInt(priceMatch[1].replace(/,/g, ''));
      actions.innerHTML = `
        <button class="btn-enquire btn-add-cart-btn" data-name="${name}" data-price="${price}" data-img="${imgSrc}" data-action="add-cart">🛒 Add</button>
        <button class="btn-enquire btn-buy-now-btn" data-name="${name}" data-price="${price}" data-img="${imgSrc}" data-action="buy-now" style="background:linear-gradient(135deg,#00d4ff,#00ffc8)!important;">⚡ Buy</button>
      `;
    } else {
      const textMsg = encodeURIComponent(`Hello! I'm interested in "${name}". Is it available? 🐠`);
      actions.innerHTML = `
        <a href="https://api.whatsapp.com/send?phone=917995549922&text=${textMsg}" target="_blank" class="btn-enquire" style="flex:1;font-size:0.78rem;padding:8px 0;">💬 Enquire</a>
      `;
    }
    info.appendChild(actions);

    const imgCont = card.querySelector('.fish-img-container');
    if (imgCont && !imgCont.querySelector('.wishlist-btn')) {
      const btn = document.createElement('button');
      btn.className = 'wishlist-btn';
      btn.innerHTML = '🤍';
      btn.setAttribute('data-action', 'wishlist');
      imgCont.appendChild(btn);
    }
  });
}

// ========== COUPON SYSTEM ==========
function showCouponSuggestions() {
  const suggestionsBox = document.getElementById('couponSuggestions');
  const couponInput = document.getElementById('couponInput');
  if(!suggestionsBox || !couponInput) return;
  
  const coupons = JSON.parse(localStorage.getItem('sa_coupons') || '[]');
  const val = couponInput.value.trim().toUpperCase();
  
  const available = coupons.filter(c => {
    if(!c.active) return false;
    if(new Date(c.expiry) < new Date()) return false;
    if(c.maxUsage && c.currentUsage >= c.maxUsage) return false;
    if(val && !c.code.includes(val)) return false;
    return true;
  });
  
  if(available.length === 0) {
    suggestionsBox.style.display = 'none';
    return;
  }
  
  suggestionsBox.innerHTML = available.map(c => `
    <div class="coupon-suggestion-item" data-code="${c.code}">
      <span class="coupon-suggestion-code">${c.code}</span>
      <span class="coupon-suggestion-desc">${c.type === 'percentage' ? c.value + '%' : '₹' + c.value} OFF (Min ₹${c.minOrder})</span>
    </div>
  `).join('');
  suggestionsBox.style.display = 'flex';
}

function applyCoupon() {
  const couponInput = document.getElementById('couponInput');
  const code = couponInput?.value.trim().toUpperCase();
  if (!code) return;
  
  const coupons = JSON.parse(localStorage.getItem('sa_coupons') || '[]');
  const c = coupons.find(x => x.code === code);
  
  if (!c) {
    showClientToast('Invalid coupon code');
    return;
  }
  if (!c.active) {
    showClientToast('This coupon is currently inactive');
    return;
  }
  if (new Date(c.expiry) < new Date()) {
    showClientToast('This coupon has expired');
    return;
  }
  if (c.maxUsage && c.currentUsage >= c.maxUsage) {
    showClientToast('This coupon usage limit has been reached');
    return;
  }
  
  const prevCoupon = appliedCoupon;
  appliedCoupon = null;
  const rawTotals = getCartTotals();
  
  if (rawTotals.subtotal < c.minOrder) {
    appliedCoupon = prevCoupon;
    showClientToast(`Minimum order amount of ₹${c.minOrder} required`);
    return;
  }
  
  appliedCoupon = c;
  if (couponInput) couponInput.value = '';
  renderCartSheet();
  showClientToast(`Coupon ${c.code} applied successfully!`);
}

function removeCoupon() {
  appliedCoupon = null;
  renderCartSheet();
  showClientToast('Coupon removed');
}

// ========== AUTH SYSTEM ==========
function sendOTP() {
  const phone = document.getElementById('authPhone').value;
  if (phone.length < 10) { 
    showClientToast('Enter valid phone number!'); 
    return; 
  }
  document.getElementById('authPhoneStep').classList.remove('active');
  document.getElementById('authOtpStep').classList.add('active');
  showClientToast('OTP sent to ' + phone);
}

function verifyOTP() {
  const otp = document.getElementById('authOTP').value;
  if (otp.length < 4) { 
    showClientToast('Enter 4 digit OTP!'); 
    return; 
  }
  localStorage.setItem('sa_user_logged_in', 'true');
  localStorage.setItem('sa_user_phone', document.getElementById('authPhone').value);
  document.getElementById('authModal').classList.remove('active');
  showClientToast('Logged in successfully!');
  setupOrdersRealtimeSync();
  document.getElementById('accountDrawer')?.classList.add('active');
  switchAccTab('wishlist');
}

function switchAccTab(tab) {
  document.querySelectorAll('.acc-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.acc-tab[onclick="switchAccTab('${tab}')"]`);
  if (activeTab) activeTab.classList.add('active');
  const content = document.getElementById('accContent');
  if (!content) return;
  if (tab === 'wishlist') {
    renderWishlistTabContent();
  } else if (tab === 'profile') {
    const phone = localStorage.getItem('sa_user_phone') || 'Unknown';
    content.innerHTML = `<div class="acc-item-card"><h4 style="margin-bottom:10px;">User Profile</h4><p>Phone: ${phone}</p><button class="btn-secondary" style="margin-top:15px;border-color:var(--coral-pink);color:var(--coral-pink);" onclick="logoutClient()">Logout</button></div>`;
  }
}

function logoutClient() {
  localStorage.removeItem('sa_user_logged_in');
  localStorage.removeItem('sa_user_phone');
  if (ordersListenerUnsubscribe) {
    ordersListenerUnsubscribe();
    ordersListenerUnsubscribe = null;
  }
  document.getElementById('accountDrawer')?.classList.remove('active');
  showClientToast('Logged out successfully');
  updateWishlistUI();
}

// ========== MAIN INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  // Setup real-time Firebase sync for coupons if db is initialized
  if (window.db) {
    console.log('%c☁️ Client: Setting up real-time Firebase Coupons listener...', 'color: #00d4ff;');
    window.db.collection('coupons').onSnapshot((snapshot) => {
      const fbCoupons = [];
      snapshot.forEach((doc) => {
        fbCoupons.push(doc.data());
      });
      if (fbCoupons.length > 0) {
        localStorage.setItem('sa_coupons', JSON.stringify(fbCoupons));
        console.log('%c🔄 Client: Coupons synced from Firebase!', 'color: #00ffc8;');
      }
    }, (error) => {
      console.warn('Client: Failed to sync coupons from Firebase:', error);
    });
  }

  // Set up dynamic firebase sync
  setupRealtimeFirebaseCatalogSync();
  setupOrdersRealtimeSync();
  updateWishlistUI();

  // Initialize product buttons
  injectProductButtons();
  updateCartBadge();
  renderCartSheet();

  initGallery();

  // ========== HAMBURGER MENU ==========
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // ========== REVIEW DOTS ==========
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToReview(i));
  });

  // ========== CART SHEET CONTROLS ==========
  const closeCartSheetBtn = document.getElementById('closeCartSheet');
  const cartSheetOverlay = document.getElementById('cartSheetOverlay');
  const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
  
  if (closeCartSheetBtn) {
    closeCartSheetBtn.addEventListener('click', closeCartSheet);
  }
  
  if (cartSheetOverlay) {
    cartSheetOverlay.addEventListener('click', closeCartSheet);
  }
  
  if (proceedCheckoutBtn) {
    proceedCheckoutBtn.addEventListener('click', openCheckout);
  }

  // ========== CHECKOUT CONTROLS ==========
  const checkoutBackBtn = document.getElementById('checkoutBackBtn');
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  
  if (checkoutBackBtn) {
    checkoutBackBtn.addEventListener('click', closeCheckout);
  }
  
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', placeOrder);
  }

  // ========== UPI PAYMENT MODAL CONTROLS ==========
  const upiModalClose = document.querySelector('.upi-modal-close');
  const copyUpiIdBtn = document.getElementById('copyUpiIdBtn');
  const submitUpiPaymentBtn = document.getElementById('submitUpiPaymentBtn');
  
  if (upiModalClose) {
    upiModalClose.addEventListener('click', closeUpiModal);
  }
  
  if (copyUpiIdBtn) {
    copyUpiIdBtn.addEventListener('click', copyUpiId);
  }
  
  if (submitUpiPaymentBtn) {
    submitUpiPaymentBtn.addEventListener('click', confirmUpiPayment);
  }

  // ========== AUTH MODAL CONTROLS ==========
  const floatingAuthBtn = document.getElementById('floatingAuthBtn');
  const floatingWishlistBtn = document.getElementById('floatingWishlistBtn');
  const authModal = document.getElementById('authModal');
  const closeAuthBtn = document.getElementById('closeAuthBtn');
  const accountDrawer = document.getElementById('accountDrawer');
  const closeAccountBtn = document.getElementById('closeAccountBtn');
  const sendOtpBtn = document.querySelector('#authPhoneStep .btn-checkout');
  const verifyOtpBtn = document.querySelector('#authOtpStep .btn-checkout');

  if (floatingAuthBtn) {
    floatingAuthBtn.addEventListener('click', () => {
      if (localStorage.getItem('sa_user_logged_in') === 'true') {
        accountDrawer?.classList.add('active');
        switchAccTab('wishlist');
      } else {
        authModal?.classList.add('active');
      }
    });
  }

  if (floatingWishlistBtn) {
    floatingWishlistBtn.addEventListener('click', () => {
      if (localStorage.getItem('sa_user_logged_in') === 'true') {
        accountDrawer?.classList.add('active');
        switchAccTab('wishlist');
      } else {
        authModal?.classList.add('active');
      }
    });
  }
  
  if (closeAuthBtn) {
    closeAuthBtn.addEventListener('click', () => authModal?.classList.remove('active'));
  }
  
  if (closeAccountBtn) {
    closeAccountBtn.addEventListener('click', () => accountDrawer?.classList.remove('active'));
  }
  
  if (sendOtpBtn) {
    sendOtpBtn.addEventListener('click', sendOTP);
  }
  
  if (verifyOtpBtn) {
    verifyOtpBtn.addEventListener('click', verifyOTP);
  }

  // ========== BOTTOM NAVIGATION ==========
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      setActiveNavItem(tab);

      switch (tab) {
        case 'home':
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'categories':
          document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'cart':
          openCartSheet();
          break;
        case 'orders':
          openOrdersPanel();
          break;
        case 'profile':
          openProfilePanel();
          break;
      }
    });
  });

  // ========== PANEL CONTROLS ==========
  document.querySelectorAll('.panel-back').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.panel-overlay');
      if (panel) {
        panel.classList.remove('active');
      }
    });
  });

  // ========== ORDER SUCCESS ==========
  const continueShopBtn = document.querySelector('.btn-continue-shop');
  if (continueShopBtn) {
    continueShopBtn.addEventListener('click', continueShopping);
  }

  // ========== COUPON CONTROLS ==========
  const couponInput = document.getElementById('couponInput');
  const applyCouponBtn = document.getElementById('applyCouponBtn');
  const removeCouponBtn = document.getElementById('removeCouponBtn');
  
  if (couponInput) {
    couponInput.addEventListener('focus', showCouponSuggestions);
    couponInput.addEventListener('input', showCouponSuggestions);
  }
  
  if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', applyCoupon);
  }
  
  if (removeCouponBtn) {
    removeCouponBtn.addEventListener('click', removeCoupon);
  }

  // Hide coupon suggestions when clicking outside
  document.addEventListener('click', (e) => {
    const suggestionsBox = document.getElementById('couponSuggestions');
    if (e.target.closest('#couponRow') === null && suggestionsBox) {
      suggestionsBox.style.display = 'none';
    }
  });

  // ========== EVENT DELEGATION FOR DYNAMIC ELEMENTS ==========
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.getAttribute('data-action');
    const index = parseInt(target.getAttribute('data-index'));

    switch (action) {
      case 'add-cart':
        const name = target.getAttribute('data-name');
        const price = parseInt(target.getAttribute('data-price'));
        const img = target.getAttribute('data-img');
        addToCart(name, price, img);
        break;

      case 'buy-now':
        const buyName = target.getAttribute('data-name');
        const buyPrice = parseInt(target.getAttribute('data-price'));
        const buyImg = target.getAttribute('data-img');
        buyNow(buyName, buyPrice, buyImg);
        break;

      case 'wishlist':
        const wName = target.getAttribute('data-name');
        toggleWishlist(wName, target);
        break;

      case 'qty-minus':
        if (!isNaN(index)) updateQty(index, -1);
        break;

      case 'qty-plus':
        if (!isNaN(index)) updateQty(index, 1);
        break;

      case 'remove':
        if (!isNaN(index)) removeFromCart(index);
        break;
    }
  });

  // ========== COUPON SUGGESTION CLICKS ==========
  document.addEventListener('click', (e) => {
    const suggestionItem = e.target.closest('.coupon-suggestion-item');
    if (suggestionItem) {
      const code = suggestionItem.getAttribute('data-code');
      const couponInput = document.getElementById('couponInput');
      const suggestionsBox = document.getElementById('couponSuggestions');
      if (couponInput) couponInput.value = code;
      if (suggestionsBox) suggestionsBox.style.display = 'none';
    }
  });

  // ========== CLOSE OVERLAYS ON OUTSIDE CLICK ==========
  document.addEventListener('click', (e) => {
    // Close auth modal when clicking outside
    if (e.target === document.getElementById('authModal')) {
      document.getElementById('authModal').classList.remove('active');
    }
    
    // Close checkout overlay when clicking outside
    if (e.target === document.getElementById('checkoutOverlay')) {
      closeCheckout();
    }
    
    // Close UPI modal when clicking outside
    if (e.target === document.getElementById('upiPaymentModal')) {
      closeUpiModal();
    }
    
    // Close order success overlay when clicking outside
    if (e.target === document.getElementById('orderSuccessOverlay')) {
      continueShopping();
    }
    
    // Close panels when clicking outside
    document.querySelectorAll('.panel-overlay.active').forEach(panel => {
      if (e.target === panel) {
        panel.classList.remove('active');
      }
    });
  });

  // ========== KEYBOARD SUPPORT ==========
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartSheet();
      closeCheckout();
      closeUpiModal();
      document.getElementById('authModal')?.classList.remove('active');
      document.getElementById('orderSuccessOverlay')?.classList.remove('active');
      document.querySelectorAll('.panel-overlay.active').forEach(panel => {
        panel.classList.remove('active');
      });
    }
  });
});
