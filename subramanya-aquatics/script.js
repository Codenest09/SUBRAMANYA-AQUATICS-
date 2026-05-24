// ========== CONFIGURATIONS & STATE ==========
let whatsAppNumber = '917995549922';
let deliveryCharge = 49;
let packingCharge = 10;
let merchantUpiId = '7995549922@ybl';
let appliedCoupon = null;
let cart = JSON.parse(localStorage.getItem('sa_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('sa_wishlist')) || [];
let paymentTimerInterval = null;

// Default catalog fallbacks
const defaultCategories = [
  { name: 'Guppys', count: 11, image: 'fishes/premium-mixed-guppys.jpeg', status: 'Active' },
  { name: 'Angels', count: 3, image: 'fishes/white-angel.jpg', status: 'Active' },
  { name: 'Mollies', count: 4, image: 'fishes/mollies.webp', status: 'Active' },
  { name: 'Oxy-less Fishes', count: 9, image: 'fishes/Gourami.jpg', status: 'Active' },
  { name: "Betta's", count: 17, image: 'fishes/beta-hmpk-male.webp', status: 'Active' },
  { name: 'Wild fishes', count: 5, image: 'fishes/red-oscar.jpg', status: 'Active' },
  { name: 'Flowerhorns', count: 10, image: 'fishes/srd-flowerhorn.jpg', status: 'Active' },
  { name: 'Arowana', count: 3, image: 'fishes/silver-arwana.webp', status: 'Active' },
  { name: 'Aquarium Items', count: 8, image: 'logo.jpeg', status: 'Active' },
  { name: 'Aquarium Decorative Items', count: 2, image: 'logo.jpeg', status: 'Active' },
  { name: 'Fish Food', count: 8, image: 'food/dry-worms-cubes.jpeg', status: 'Active' },
  { name: 'Cultures', count: 4, image: 'cultures/Moina culture.jpg', status: 'Active' }
];

const defaultProducts = [
  { id: 1, name: 'Moon Tail Guppys', category: 'Guppys', price: '₹99', image: 'fishes/mixed-guppys.jpg', tag: 'Best Seller' },
  { id: 2, name: 'Premium Mixed', category: 'Guppys', price: '₹99', image: 'fishes/premium-mixed-guppys.jpeg', tag: 'Premium' },
  { id: 3, name: 'Mixed Guppy', category: 'Guppys', price: '₹69', image: 'fishes/mixed-guppys.jpg', tag: 'Standard' },
  { id: 4, name: 'Golden Guppys (24K)', category: 'Guppys', price: '₹249', image: 'fishes/golden-guppy.jpg', tag: 'Exotic' },
  { id: 5, name: 'HB Blue', category: 'Guppys', price: '₹149', image: 'fishes/hb-blue-guppys.jpg', tag: 'Popular' },
  { id: 6, name: 'Koi Guppys', category: 'Guppys', price: '₹249', image: 'fishes/albino-red-eye-guppy.jpg', tag: 'Exotic' },
  { id: 7, name: 'Platinum Guppys', category: 'Guppys', price: '₹99', image: 'fishes/platinum-guppys.webp', tag: 'Regular' },
  { id: 8, name: 'Platinum (Dumbo)', category: 'Guppys', price: '₹149', image: 'fishes/platinum-dumbo-ear-guppys.jpeg', tag: 'Premium' },
  { id: 9, name: 'Dragon Tail', category: 'Guppys', price: '₹149', image: 'fishes/dragon-tail-guppys.jpg', tag: 'Premium' },
  { id: 10, name: 'Koi Texido', category: 'Guppys', price: '₹250', image: 'fishes/koi-texido.jpg', tag: 'Premium' },
  { id: 11, name: 'Dark Knight Dragon', category: 'Guppys', price: '₹250', image: 'fishes/dark-knight-dragon.jpg', tag: 'Premium' },
  { id: 12, name: 'White Angel', category: 'Angels', price: '₹150', image: 'fishes/white-angel.jpg', tag: 'Popular' },
  { id: 13, name: 'Marbel Angel', category: 'Angels', price: '₹199', image: 'fishes/marbel-angel.jpg', tag: 'Popular' },
  { id: 14, name: 'Angel', category: 'Angels', price: '₹100', image: 'fishes/Angel.jpg', tag: 'Standard' },
  { id: 15, name: 'Mollys', category: 'Mollies', price: '₹49', image: 'fishes/mollies.webp', tag: 'Popular' },
  { id: 16, name: 'Moontail Mollys', category: 'Mollies', price: '₹99', image: 'fishes/moon-tail-mollies.jpg', tag: 'Standard' },
  { id: 17, name: 'Balloon Mollys', category: 'Mollies', price: '₹79', image: 'fishes/ballon-mollies.jpeg', tag: 'Healthy' },
  { id: 18, name: "Molly Baby's", category: 'Mollies', price: '₹5', image: 'fishes/molly-babyes.jpeg', tag: 'Piece' },
  { id: 19, name: 'Gourami', category: 'Oxy-less Fishes', price: '₹79', image: 'fishes/Gourami.jpg', tag: 'Healthy' },
  { id: 20, name: 'Plattys', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/platy-fish.webp', tag: 'Standard' },
  { id: 21, name: 'Sword Tail Plattys', category: 'Oxy-less Fishes', price: '₹99', image: 'fishes/sward-tail-platy.jpeg', tag: 'Popular' },
  { id: 22, name: 'Zebra', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/zebra-fish.webp', tag: 'Active' },
  { id: 23, name: 'Sharks (Small)', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/shark-small.webp', tag: 'Active' },
  { id: 24, name: 'Sharks (Medium)', category: 'Oxy-less Fishes', price: '₹99', image: 'fishes/shark-medium.avif', tag: 'Active' },
  { id: 25, name: 'Ohm male', category: "Betta's", price: '₹160', image: 'fishes/beta-ohm-male.webp', tag: 'Exotic' },
  { id: 26, name: 'OHM females', category: "Betta's", price: '₹100', image: 'fishes/beta-ohm-females.jpg', tag: 'Standard' },
  { id: 27, name: 'HMPK male', category: "Betta's", price: '₹250', image: 'fishes/beta-hmpk-male.webp', tag: 'Popular' },
  { id: 28, name: 'Placarts', category: "Betta's", price: '₹499', image: 'fishes/beta-placarts-male.jpg', tag: 'Exotic' },
  { id: 29, name: 'Albino oscar', category: 'Wild fishes', price: '₹500', image: 'fishes/albino-oscar-fish.webp', tag: 'Giant' },
  { id: 30, name: 'Red tiger oscar', category: 'Wild fishes', price: '₹500', image: 'fishes/red-tiger-oscar.jpg', tag: 'Giant' },
  { id: 31, name: 'Red oscar', category: 'Wild fishes', price: '₹600', image: 'fishes/red-oscar.jpg', tag: 'Premium' },
  { id: 32, name: 'Lemon oscar', category: 'Wild fishes', price: '₹600', image: 'fishes/lemon-oscar.jpeg', tag: 'Premium' },
  { id: 33, name: 'Mango oscar', category: 'Wild fishes', price: '₹600', image: 'fishes/mango-oscar.jpg', tag: 'Premium' },
  { id: 34, name: 'SRD', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/srd-flowerhorn.jpg', tag: 'Show Grade' },
  { id: 35, name: 'KML', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/kml-flowerhorn.jpg', tag: 'Show Grade' },
  { id: 36, name: 'F2 kamfa', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/f2-kamfa.jpg', tag: 'Show Grade' },
  { id: 37, name: 'Silver arwana', category: 'Arowana', price: 'Contact Us', image: 'fishes/silver-arwana.webp', tag: 'Luxury' },
  { id: 38, name: 'Gold arwana', category: 'Arowana', price: 'Contact Us', image: 'fishes/gold-arwana.jpg', tag: 'Luxury' },
  { id: 39, name: 'Red Arwana', category: 'Arowana', price: 'Contact Us', image: 'fishes/red-arwana.jpeg', tag: 'Luxury' },
  { id: 58, name: 'OHM Breeding pair', category: "Betta's", price: '₹300', image: 'fishes/beta-ohm-male.webp', tag: 'Exotic' },
  { id: 59, name: 'HMPK Female', category: "Betta's", price: '₹150', image: 'fishes/beta-hmpk-female.jpeg', tag: 'Standard' },
  { id: 60, name: 'Hmpk breeding pair', category: "Betta's", price: '₹450', image: 'fishes/beta-hmpk-male.webp', tag: 'Popular' },
  { id: 61, name: 'candy male', category: "Betta's", price: '₹350', image: 'fishes/bata-candy-male.jpeg', tag: 'Exotic' },
  { id: 62, name: 'Candy female', category: "Betta's", price: '₹200', image: 'fishes/bata-candy-male.jpeg', tag: 'Standard' },
  { id: 63, name: 'Candy breeding pair', category: "Betta's", price: '₹500', image: 'fishes/bata-candy-male.jpeg', tag: 'Exotic' },
  { id: 64, name: 'Black sumarai pair', category: "Betta's", price: '₹700', image: 'logo.jpeg', tag: 'Exotic' },
  { id: 65, name: 'HMPK dumbo ear male', category: "Betta's", price: '₹350', image: 'fishes/platinum-dumbo-ear-guppys.jpeg', tag: 'Exotic' },
  { id: 66, name: 'HMPK DUMBO EAR female', category: "Betta's", price: '₹200', image: 'logo.jpeg', tag: 'Standard' },
  { id: 67, name: 'HMPK Dumbo Ear breeding pair', category: "Betta's", price: '₹600', image: 'logo.jpeg', tag: 'Exotic' },
  { id: 68, name: 'Solid colour HMPK Beta male', category: "Betta's", price: '₹350', image: 'logo.jpeg', tag: 'Exotic' },
  { id: 69, name: 'Solid colour HMPK female', category: "Betta's", price: '₹150', image: 'logo.jpeg', tag: 'Standard' },
  { id: 70, name: 'Solid colour HMPK breeding pair', category: "Betta's", price: '₹500', image: 'logo.jpeg', tag: 'Exotic' },
  { id: 71, name: 'Thai silk', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/thai-silk-flowerhorn.jpeg', tag: 'Show Grade' },
  { id: 72, name: 'Polar parrots breeding pair(zebra)', category: 'Flowerhorns', price: '₹550', image: 'fishes/polar-parrots(-zebra).jpg', tag: 'Breeding Pair' },
  { id: 73, name: 'Polar parrots pair(zebra)', category: 'Flowerhorns', price: '₹350', image: 'fishes/polar-parrots(-zebra).jpg', tag: 'Pair' },
  { id: 74, name: 'Polar parrot breeding pair ( white)', category: 'Flowerhorns', price: '₹550', image: 'fishes/polar-parrots-(-white).jpg', tag: 'Breeding Pair' },
  { id: 75, name: 'Polar parrots pair(white)', category: 'Flowerhorns', price: '₹350', image: 'fishes/polar-parrots-(-white).jpg', tag: 'Pair' },
  { id: 76, name: 'Red parrot', category: 'Flowerhorns', price: '₹700', image: 'fishes/parrot-(-red).jpg', tag: 'Popular' },
  { id: 77, name: 'Yellow parrot', category: 'Flowerhorns', price: '₹700', image: 'fishes/parrot-(-yellow).webp', tag: 'Popular' },
  { id: 78, name: 'Vail tail zebras', category: 'Oxy-less Fishes', price: '₹150', image: 'fishes/vail-tail-zebra-green.jpg', tag: 'Active' },
  { id: 79, name: 'Neon tetra', category: 'Oxy-less Fishes', price: '₹100', image: 'logo.jpeg', tag: 'Active' },
  { id: 80, name: 'Tetra', category: 'Oxy-less Fishes', price: '₹100', image: 'logo.jpeg', tag: 'Active' },
  { id: 81, name: 'Moina culture', category: 'Cultures', price: '₹150', image: 'cultures/Moina culture.jpg', tag: 'Live Food' },
  { id: 82, name: 'Daphnia culture', category: 'Cultures', price: '₹150', image: 'cultures/Daphnia culture.jpg', tag: 'Live Food' },
  { id: 83, name: 'Grindel worm', category: 'Cultures', price: '₹150', image: 'cultures/Grindel worm culture.jpg', tag: 'Live Food' },
  { id: 84, name: 'Micro worm', category: 'Cultures', price: '₹150', image: 'cultures/Micro warm culture.webp', tag: 'Live Food' }
];

const defaultFoods = [
  { id: 50, name: 'Dry Worms (10g)', category: 'Fish Food', price: '₹25', image: 'food/dry-worms-cubes.jpeg', tag: 'Food' },
  { id: 51, name: 'Farm Food (100g)', category: 'Fish Food', price: '₹200', image: 'food/farm-food.jpg', tag: 'Food' },
  { id: 52, name: 'Okiko Black Pearl Flowerhorn Food', category: 'Fish Food', price: '₹300', image: 'food/okiko-black-pearl-flowehorn-food.webp', tag: 'Food' },
  { id: 53, name: 'Okiko Head Power Flowerhorns Food', category: 'Fish Food', price: '₹300', image: 'food/okiko-head-power-flowerhorns-food.jpeg', tag: 'Food' },
  { id: 54, name: 'Okiko Red Diamond Flowerhorn Food', category: 'Fish Food', price: '₹300', image: 'food/okoko-red-diamond-fish-food.jpg', tag: 'Food' },
  { id: 55, name: 'Optimun 3 in 1 Fish Food', category: 'Fish Food', price: '₹160', image: 'food/optimun-3-in-1-fish-food.webp', tag: 'Food' },
  { id: 56, name: 'Tiyo Fish Food (Small)', category: 'Fish Food', price: '₹20', image: 'food/tiyo-fish-food-(small).jpeg', tag: 'Food' },
  { id: 57, name: 'Tiyo Fish Food', category: 'Fish Food', price: '₹30', image: 'food/tiyo-fish-food(large).jpg', tag: 'Food' }
];

const defaultItems = [
  { id: 40, name: 'Aquarium Heater (50W)', category: 'Aquarium Items', price: '₹300', image: 'items/50w-aquarium-heater.webp', tag: 'Heater' },
  { id: 41, name: 'Aquarium Heater (100W)', category: 'Aquarium Items', price: '₹350', image: 'items/100-w-aquarium-heater.webp', tag: 'Heater' },
  { id: 42, name: 'Aquarium Light Large', category: 'Aquarium Items', price: '₹400', image: 'items/aquarium-light-(large-).jpg', tag: 'Light' },
  { id: 43, name: 'Aquarium Light Small', category: 'Aquarium Items', price: '₹300', image: 'items/aquarium-light-(small).jpg', tag: 'Light' },
  { id: 44, name: 'Bubble Oxygen', category: 'Aquarium Items', price: '₹200', image: 'items/buble-oxygen.webp', tag: 'Oxygen' },
  { id: 45, name: 'Double Oxygen', category: 'Aquarium Items', price: '₹300', image: 'items/double-oxygen.webp', tag: 'Oxygen' },
  { id: 46, name: 'Internal Oxygen (Small)', category: 'Aquarium Items', price: '₹300', image: 'items/internal-oxgyen-(small).webp', tag: 'Oxygen' },
  { id: 47, name: 'Internal Oxygen (Large)', category: 'Aquarium Items', price: '₹400', image: 'items/internal-oxgyen-(big).jpg', tag: 'Oxygen' }
];

// ========== CLIENT-SIDE IMAGE RESOLUTION ==========
function getSpecificNameMatch(lowerName, category) {
  if (lowerName.includes('dark knight dragon')) return 'fishes/dark-knight-dragon.jpg';
  if (lowerName.includes('koi texido') || lowerName.includes('koi tuxedo')) return 'fishes/koi-texido.jpg';
  if (lowerName.includes('white angel')) return 'fishes/white-angel.jpg';
  if (lowerName.includes('marbel angel')) return 'fishes/marbel-angel.jpg';
  if (lowerName.includes('angel') && (category.includes('angel') || lowerName === 'angel')) return 'fishes/Angel.jpg';
  if (lowerName.includes('koi') && (category.includes('guppy') || lowerName.includes('guppy'))) {
    return 'fishes/albino-red-eye-guppy.jpg';
  }
  
  if (category.includes('betta') || category.includes('beta') || category.includes('bata') || lowerName.includes('betta') || lowerName.includes('beta')) {
    if (lowerName.includes('candy')) return 'fishes/bata-candy-male.jpeg';
    if (lowerName.includes('hmpk') && (lowerName.includes('female') || lowerName.includes('girl'))) return 'fishes/beta-hmpk-female.jpeg';
    if (lowerName.includes('hmpk')) return 'fishes/beta-hmpk-male.webp';
    if (lowerName.includes('ohm') && (lowerName.includes('female') || lowerName.includes('girl') || lowerName.includes('females'))) return 'fishes/beta-ohm-females.jpg';
    if (lowerName.includes('ohm')) return 'fishes/beta-ohm-male.webp';
    if (lowerName.includes('placart') || lowerName.includes('plakat')) return 'fishes/beta-placarts-male.jpg';
    return 'images/betta.png';
  }

  if (category.includes('oscar') || lowerName.includes('oscar')) {
    if (lowerName.includes('albino')) return 'fishes/albino-oscar-fish.webp';
    if (lowerName.includes('lemon')) return 'fishes/lemon-oscar.jpeg';
    if (lowerName.includes('mango')) return 'fishes/mango-oscar.jpg';
    if (lowerName.includes('red tiger') || lowerName.includes('tiger')) return 'fishes/red-tiger-oscar.jpg';
    if (lowerName.includes('red')) return 'fishes/red-oscar.jpg';
    return 'images/oscar.png';
  }

  if (category.includes('flowerhorn') || category.includes('parrot') || lowerName.includes('flowerhorn') || lowerName.includes('kamfa') || lowerName.includes('parrot')) {
    if (lowerName.includes('f2') || lowerName.includes('kamfa')) return 'fishes/f2-kamfa.jpg';
    if (lowerName.includes('kml')) return 'fishes/kml-flowerhorn.jpg';
    if (lowerName.includes('srd')) return 'fishes/srd-flowerhorn.jpg';
    if (lowerName.includes('thai silk')) return 'fishes/thai-silk-flowerhorn.jpeg';
    if (lowerName.includes('polar') && lowerName.includes('white')) return 'fishes/polar-parrots-(-white).jpg';
    if (lowerName.includes('polar') && (lowerName.includes('zebra') || lowerName.includes('parrots'))) return 'fishes/polar-parrots(-zebra).jpg';
    if (lowerName.includes('red parrot')) return 'fishes/parrot-(-red).jpg';
    if (lowerName.includes('yellow parrot')) return 'fishes/parrot-(-yellow).webp';
    return 'images/flowerhorn.png';
  }

  if (category.includes('arowana') || category.includes('arwana') || lowerName.includes('arowana') || lowerName.includes('arwana')) {
    if (lowerName.includes('gold')) return 'fishes/gold-arwana.jpg';
    if (lowerName.includes('red')) return 'fishes/red-arwana.jpeg';
    if (lowerName.includes('silver')) return 'fishes/silver-arwana.webp';
    return 'images/arowana.png';
  }

  if (lowerName.includes('gold fish') || lowerName.includes('goldfish')) {
    if (lowerName.includes('black more') || lowerName.includes('black moor')) {
      return 'fishes/black-more-gold-fish.jpg';
    }
    return 'fishes/gold-fish.jpeg';
  }

  if (lowerName.includes('koi')) {
    if (lowerName.includes('indian')) return 'fishes/indian-koi-fish.jpeg';
    if (lowerName.includes('japanese')) return 'fishes/japanese-koi-fish.jpg';
    return 'images/koi.png';
  }

  if (lowerName.includes('molly') || lowerName.includes('mollies') || lowerName.includes('mollie')) {
    if (lowerName.includes('baby') || lowerName.includes('babies')) return 'fishes/molly-babyes.jpeg';
    if (lowerName.includes('ballon') || lowerName.includes('balloon')) return 'fishes/ballon-mollies.jpeg';
    if (lowerName.includes('moon') || lowerName.includes('moontail')) return 'fishes/moon-tail-mollies.jpg';
    return 'fishes/mollies.webp';
  }

  if (lowerName.includes('platy') || lowerName.includes('platies') || lowerName.includes('platty') || lowerName.includes('platties')) {
    if (lowerName.includes('sword') || lowerName.includes('sward')) return 'fishes/sward-tail-platy.jpeg';
    return 'fishes/platy-fish.webp';
  }

  if (lowerName.includes('shark') || lowerName.includes('sharks')) {
    if (lowerName.includes('large')) return 'fishes/shark-large.jpeg';
    if (lowerName.includes('medium')) return 'fishes/shark-medium.avif';
    if (lowerName.includes('small')) return 'fishes/shark-small.webp';
    return 'fishes/shark-small.webp';
  }

  if (lowerName.includes('vail tail zebra') || lowerName.includes('veil tail zebra')) {
    return 'fishes/vail-tail-zebra-green.jpg';
  }
  if (lowerName.includes('zebra') && lowerName.includes('green')) {
    return 'fishes/vail-tail-zebra-green.jpg';
  }
  if (lowerName.includes('zebra') && (lowerName.includes('yellow') || lowerName.includes('gold'))) {
    return 'fishes/vail-tail-zebra-yellow.webp';
  }
  if (lowerName.includes('zebra')) {
    return 'fishes/zebra-fish.webp';
  }

  if (lowerName.includes('gourami') || lowerName.includes('gurami')) {
    if (lowerName.includes('giant') || lowerName.includes('baby')) {
      return 'fishes/giant-gourami-baby.jpg';
    }
    return 'fishes/Gourami.jpg';
  }

  if (lowerName.includes('gar') || lowerName.includes('aligator')) return 'fishes/aligator-gar.jpg';
  if (lowerName.includes('chichilid') || lowerName.includes('cichlid')) return 'fishes/Chichilids.jpg';
  if (lowerName.includes('mickey')) return 'fishes/mickey-fish.jpg';
  if (lowerName.includes('snake head') || lowerName.includes('snakehead')) return 'fishes/snake-head-fish.jpg';

  if (category.includes('food') || lowerName.includes('food') || lowerName.includes('worms')) {
    if (lowerName.includes('head power')) return 'food/okiko-head-power-flowerhorns-food.jpeg';
    if (lowerName.includes('red diamond')) return 'food/okoko-red-diamond-fish-food.jpg';
    if (lowerName.includes('black pearl')) return 'food/okiko-black-pearl-flowehorn-food.webp';
    if (lowerName.includes('optimun') || lowerName.includes('optimum')) return 'food/optimun-3-in-1-fish-food.webp';
    if (lowerName.includes('tiyo') && lowerName.includes('small')) return 'food/tiyo-fish-food-(small).jpeg';
    if (lowerName.includes('tiyo')) return 'food/tiyo-fish-food(large).jpg';
    if (lowerName.includes('worms')) return 'food/dry-worms-cubes.jpeg';
    if (lowerName.includes('farm')) return 'food/farm-food.jpg';
    return 'food/optimun-3-in-1-fish-food.webp';
  }

  if (category.includes('item') || lowerName.includes('heater') || lowerName.includes('light') || lowerName.includes('oxygen')) {
    if (lowerName.includes('100w') || lowerName.includes('100-w')) return 'items/100-w-aquarium-heater.webp';
    if (lowerName.includes('50w') || lowerName.includes('50-w')) return 'items/50w-aquarium-heater.webp';
    if (lowerName.includes('light') && lowerName.includes('small')) return 'items/aquarium-light-(small).jpg';
    if (lowerName.includes('light') && lowerName.includes('large')) return 'items/aquarium-light-(large-).jpg';
    if (lowerName.includes('bubble') || lowerName.includes('buble')) return 'items/buble-oxygen.webp';
    if (lowerName.includes('double')) return 'items/double-oxygen.webp';
    if (lowerName.includes('internal') && lowerName.includes('small')) return 'items/internal-oxgyen-(small).webp';
    if (lowerName.includes('internal') && (lowerName.includes('large') || lowerName.includes('big'))) return 'items/internal-oxgyen-(big).jpg';
    if (lowerName.includes('plants')) return 'items/plastic-plants-(small).jpg';
    if (lowerName.includes('stones')) return 'items/stones.jpg';
  }

  if (category.includes('culture') || lowerName.includes('culture') || lowerName.includes('worm')) {
    if (lowerName.includes('moina')) return 'cultures/Moina culture.jpg';
    if (lowerName.includes('daphnia')) return 'cultures/Daphnia culture.jpg';
    if (lowerName.includes('grindel')) return 'cultures/Grindel worm culture.jpg';
    if (lowerName.includes('micro')) return 'cultures/Micro warm culture.webp';
  }

  return null;
}

function resolveProductImage(p) {
  if (!p) return 'logo.jpeg';
  const name = (p.name || '').trim();
  const lowerName = name.toLowerCase();
  const category = (p.category || '').trim().toLowerCase();
  const img = p.image || p.img || '';

  if (img.startsWith('http') || img.startsWith('data:')) {
    return img;
  }

  const specificPath = getSpecificNameMatch(lowerName, category);
  if (specificPath) return specificPath;

  if (img) return img;

  return 'logo.jpeg';
}

// Loading Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 200);
});

// Custom Cursor Setup
const cursorGlow = document.querySelector('.cursor-glow');
const cursorRing = document.querySelector('.cursor-ring');
if (cursorGlow && cursorRing) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX - 10 + 'px';
    cursorGlow.style.top = e.clientY - 10 + 'px';
    cursorRing.style.left = e.clientX - 20 + 'px';
    cursorRing.style.top = e.clientY - 20 + 'px';
  });
  document.querySelectorAll('a, button, .fish-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.transform = 'scale(1.5)';
      cursorRing.style.borderColor = 'rgba(0,255,200,0.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.style.transform = 'scale(1)';
      cursorRing.style.borderColor = 'rgba(0,212,255,0.3)';
    });
  });
}

// Bubble Generator
function createBubbles() {
  const container = document.querySelector('.bubbles-container');
  if (!container) return;
  for (let i = 0; i < 25; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 20 + 5;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = (Math.random() * 10 + 8) + 's';
    bubble.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(bubble);
  }
}
createBubbles();

// Light Rays
function createRays() {
  const container = document.querySelector('.light-rays');
  if (!container) return;
  for (let i = 0; i < 8; i++) {
    const ray = document.createElement('div');
    ray.classList.add('ray');
    ray.style.left = (10 + i * 12) + '%';
    ray.style.width = (Math.random() * 100 + 30) + 'px';
    ray.style.animationDelay = (i * 0.8) + 's';
    ray.style.animationDuration = (6 + Math.random() * 6) + 's';
    container.appendChild(ray);
  }
}
createRays();

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll Reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Reviews Slider - Dynamic from Supabase Testimonials
let currentReview = 0;
let reviewInterval = null;
const track = document.querySelector('.reviews-track');
const dotsContainer = document.querySelector('.review-dots');

function renderReviews(reviews) {
  if (!track || !dotsContainer) return;
  
  if (!reviews || reviews.length === 0) {
    track.innerHTML = `
      <div class="review-card">
        <div class="review-avatar">🐠</div>
        <div class="review-stars">★★★★★</div>
        <p class="review-text">"Subramanya Aquatics provides premium quality exotic fishes. Visit our store to experience the best aquatic collection in Vizag!"</p>
        <div class="review-name">Subramanya Aquatics</div>
      </div>
    `;
    dotsContainer.innerHTML = '';
    return;
  }
  
  track.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-avatar">${r.name ? r.name.charAt(0) : '🐠'}</div>
      <div class="review-stars">${r.rating || '★★★★★'}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-name">${r.name}</div>
    </div>
  `).join('');
  
  dotsContainer.innerHTML = reviews.map((_, i) => `
    <button class="review-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Review ${i + 1}"></button>
  `).join('');
  
  currentReview = 0;
  if (reviewInterval) clearInterval(reviewInterval);
  
  document.querySelectorAll('.review-dot').forEach(dot => {
    dot.addEventListener('click', () => goToReview(parseInt(dot.getAttribute('data-index'))));
  });
  
  if (reviews.length > 1) {
    reviewInterval = setInterval(() => {
      goToReview((currentReview + 1) % reviews.length);
    }, 5000);
  }
}

function goToReview(index) {
  const allDots = document.querySelectorAll('.review-dot');
  if (track) track.style.transform = `translateX(-${index * 100}%)`;
  allDots.forEach((d, i) => d.classList.toggle('active', i === index));
  currentReview = index;
}

function fetchTestimonials() {
  if (window.supabaseClient) {
    window.supabaseClient
      .from('testimonials')
      .select('*')
      .eq('status', 'Approved')
      .then(({ data }) => {
        if (data && data.length > 0) {
          renderReviews(data);
          localStorage.setItem('sa_testimonials', JSON.stringify(data));
        } else {
          const local = JSON.parse(localStorage.getItem('sa_testimonials') || '[]');
          renderReviews(local.length > 0 ? local : null);
        }
      });
  } else {
    const local = JSON.parse(localStorage.getItem('sa_testimonials') || '[]');
    renderReviews(local.length > 0 ? local : null);
  }
}

// Parallax Fish Silhouettes
function createFishSilhouettes() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const fishEmojis = ['🐟', '🐠', '🐡', '🦈', '🐋'];
  for (let i = 0; i < 5; i++) {
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

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ========== TOASTS & POPUPS ==========
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

// Random Live Purchase Popup
const fakeNames = ["Rajesh", "Priya", "Vikram", "Anitha", "Suresh", "Kavya"];
const fakeFishes = ["Golden Arowana", "SRD Flowerhorn", "Polar Parrots", "Red Oscar", "Betta OHM", "Platinum Guppys"];
function triggerLivePurchase() {
  const popup = document.getElementById('livePurchasePopup');
  if (!popup) return;
  const randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
  const randomFish = fakeFishes[Math.floor(Math.random() * fakeFishes.length)];
  
  document.getElementById('livePopName').textContent = `${randomName} from Vizag`;
  document.getElementById('livePopItem').textContent = `purchased a ${randomFish}`;
  
  popup.classList.add('active');
  setTimeout(() => popup.classList.remove('active'), 5000);
}
setInterval(triggerLivePurchase, 45000);
setTimeout(triggerLivePurchase, 10000); // Initial trigger

// Flash Sale Countdown
function initFlashSale() {
  const timerEl = document.getElementById('flashTimer');
  if (!timerEl) return;
  let time = 3600 * 2 + 1800; // 2h 30m
  setInterval(() => {
    time--;
    if (time < 0) time = 0;
    const h = Math.floor(time / 3600).toString().padStart(2, '0');
    const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const s = (time % 60).toString().padStart(2, '0');
    timerEl.textContent = `${h}:${m}:${s}`;
  }, 1000);
}
initFlashSale();

// ========== CART STATE & ACTIONS ==========
function saveCart() {
  localStorage.setItem('sa_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartSheet();
}

function updateCartBadge() {
  const cartBadge = document.getElementById('cartBadge');
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) {
    cartBadge.setAttribute('data-count', totalItems);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

function addToCart(name, price, img) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }
  saveCart();
  showClientToast(`Added "${name}" to cart!`);
  openCartSheet();
}

function updateQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

function getCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percentage') {
      discount = Math.round(subtotal * (appliedCoupon.value / 100));
    } else {
      discount = appliedCoupon.value;
    }
  }
  const total = (subtotal - discount) + deliveryCharge + (subtotal > 0 ? packingCharge : 0);
  return { subtotal, discount, total };
}

function renderCartSheet() {
  const sheetItems = document.getElementById('cartSheetItems');
  const cartSummary = document.getElementById('cartSummary');
  const couponRow = document.getElementById('couponRow');
  if (!sheetItems) return;

  if (cart.length === 0) {
    sheetItems.innerHTML = '<div class="sheet-empty"><span class="empty-icon">🛒</span>Your cart is empty<br>Start adding some amazing fish!</div>';
    if (cartSummary) cartSummary.style.display = 'none';
    if (couponRow) couponRow.style.display = 'none';
    return;
  }

  sheetItems.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" onerror="this.onerror=null;this.src='logo.jpeg';">
      <div class="item-details">
        <h4>${item.name}</h4>
        <div class="price">₹${item.price}</div>
        <div class="item-controls">
          <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeItem(${index})">&times;</button>
    </div>
  `).join('');

  if (couponRow) couponRow.style.display = 'flex';
  if (cartSummary) {
    cartSummary.style.display = 'block';
    const totals = getCartTotals();
    document.getElementById('sumSubtotal').textContent = '₹' + totals.subtotal;
    document.getElementById('sumDelivery').textContent = '₹' + (deliveryCharge + packingCharge);
    
    const discountRow = document.getElementById('sumDiscountRow');
    if (totals.discount > 0) {
      discountRow.style.display = 'flex';
      document.getElementById('sumDiscount').textContent = '-₹' + totals.discount;
    } else {
      discountRow.style.display = 'none';
    }
    document.getElementById('sumTotal').textContent = '₹' + totals.total;
  }
}

function openCartSheet() {
  document.getElementById('cartSheet')?.classList.add('active');
  document.getElementById('cartSheetOverlay')?.classList.add('active');
  renderCartSheet();
}

function closeCartSheet() {
  document.getElementById('cartSheet')?.classList.remove('active');
  document.getElementById('cartSheetOverlay')?.classList.remove('active');
}

// ========== DYNAMIC CATALOG RENDERING ==========
function renderProductCard(p) {
  const name = p.name;
  const priceText = p.price || 'Contact Us';
  const img = resolveProductImage(p);
  const tag = p.tag || '';
  
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
        <button class="btn-enquire btn-add-cart-btn" data-name="${name}" data-price="${priceVal}" data-img="${img}" style="flex: 1; font-size: 0.78rem; padding: 8px 0;">🛒 Add</button>
        <button class="btn-enquire btn-buy-now-btn" data-name="${name}" data-price="${priceVal}" data-img="${img}" style="flex: 1; font-size: 0.78rem; padding: 8px 0; background: linear-gradient(135deg, #00d4ff, #00ffc8) !important; color: #020c1b !important;">⚡ Buy</button>
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
        <img src="${img}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" onerror="this.onerror=null;this.src='logo.jpeg';">
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-name="${name}" style="position: absolute; top: 12px; right: 12px; background: rgba(2, 12, 27, 0.6); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 50%; width: 32px; height: 32px; font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 3; transition: 0.3s; color: white;">
          ${isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="fish-info" style="padding: 1.5rem 1.2rem; text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; background: linear-gradient(180deg, transparent, rgba(2,12,27,0.8));">
        <div>
          <h4 style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.8rem; color: #ffffff;">${name}</h4>
          <div class="price ${priceVal === null ? 'inquire' : ''}">${priceText}</div>
          ${p.description ? `<p style="font-size: 0.75rem; color: rgba(224,247,255,0.4); margin-top: 5px; line-height: 1.3;">${p.description}</p>` : ''}
          ${p.suitable ? `<p style="font-size: 0.7rem; color: #00d4ff; margin-top: 3px;">Suitable: ${p.suitable}</p>` : ''}
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
  }
  
  if (config.address) {
    const locItem = document.querySelector('#location-item p');
    if (locItem) locItem.textContent = config.address;
  }
}

// ========== SUPABASE SYNC LOGIC ==========
let catalogChannel = null;

function setupRealtimeSupabaseCatalogSync() {
  if (!window.supabaseClient) {
    console.warn('Supabase not initialized. Storefront running in local mode.');
    const localCategories = JSON.parse(localStorage.getItem('sa_categories') || '[]');
    const localProducts = JSON.parse(localStorage.getItem('sa_products') || '[]');
    const localFoods = JSON.parse(localStorage.getItem('sa_foods') || '[]');
    const localItems = JSON.parse(localStorage.getItem('sa_items') || '[]');
    renderCatalog(localCategories, localProducts, localFoods, localItems);
    return;
  }

  console.log('%c☁️ Client: Setting up real-time Supabase Catalog listeners...', 'color: #00d4ff;');

  let activeCategories = [];
  let activeProducts = [];
  let activeFoods = [];
  let activeItems = [];

  function triggerCatalogRender() {
    renderCatalog(activeCategories, activeProducts, activeFoods, activeItems);
  }

  function fetchAllCatalogData() {
    window.supabaseClient
      .from('categories')
      .select('*')
      .eq('status', 'Active')
      .then(({ data }) => {
        if (data) {
          activeCategories = data;
          localStorage.setItem('sa_categories', JSON.stringify(data));
          triggerCatalogRender();
        }
      });

    window.supabaseClient
      .from('products')
      .select('*')
      .order('id', { ascending: true })
      .then(({ data }) => {
        if (data) {
          activeProducts = data;
          localStorage.setItem('sa_products', JSON.stringify(data));
          triggerCatalogRender();
        }
      });

    window.supabaseClient
      .from('foods')
      .select('*')
      .neq('stock', 'Out of Stock')
      .order('id', { ascending: true })
      .then(({ data }) => {
        if (data) {
          activeFoods = data;
          localStorage.setItem('sa_foods', JSON.stringify(data));
          triggerCatalogRender();
        }
      });

    window.supabaseClient
      .from('items')
      .select('*')
      .neq('stock', 'Out of Stock')
      .order('id', { ascending: true })
      .then(({ data }) => {
        if (data) {
          activeItems = data;
          localStorage.setItem('sa_items', JSON.stringify(data));
          triggerCatalogRender();
        }
      });
  }

  function fetchSettings() {
    window.supabaseClient
      .from('settings')
      .select('*')
      .then(({ data }) => {
        if (data) {
          const banners = data.find(d => d.key === 'banners')?.value;
          const payments = data.find(d => d.key === 'payments')?.value;
          const config = data.find(d => d.key === 'config')?.value;
          if (banners) updateBannersUI(banners);
          if (payments) updatePaymentsUI(payments);
          if (config) updateConfigUI(config);
        }
      });
  }

  fetchAllCatalogData();
  fetchSettings();

  catalogChannel = window.supabaseClient
    .channel('public:catalog')
    .on('postgres_changes', { event: '*', schema: 'public' }, () => {
      console.log('%c🔄 Client: Catalog updated from Supabase Realtime!', 'color: #00ffc8;');
      fetchAllCatalogData();
      fetchSettings();
      fetchTestimonials();
    })
    .subscribe();
}

let ordersRealtimeChannel = null;

function setupOrdersRealtimeSync() {
  if (ordersRealtimeChannel) {
    ordersRealtimeChannel.unsubscribe();
    ordersRealtimeChannel = null;
  }

  const phone = localStorage.getItem('sa_user_phone');
  if (!phone || !window.supabaseClient) {
    renderOrdersPanelBody(JSON.parse(localStorage.getItem('sa_orders') || '[]'));
    return;
  }

  console.log(`%c☁️ Client: Setting up real-time listener for customer phone: ${phone}`, 'color: #00d4ff;');

  function fetchCustomerOrders() {
    window.supabaseClient
      .from('orders')
      .select('*')
      .eq('phone', phone)
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (error) {
          console.error('Error fetching customer orders:', error);
        } else if (data) {
          const formatted = data.map(d => ({
            id: d.id,
            date: d.date || '',
            total: d.total || 0,
            status: d.status || 'Pending Verification',
            product: Array.isArray(d.items) ? d.items.map(it => `${it.name} (${it.qty})`).join(', ') : '-'
          }));
          localStorage.setItem('sa_orders', JSON.stringify(formatted));
          renderOrdersPanelBody(formatted);
        }
      });
  }

  fetchCustomerOrders();

  ordersRealtimeChannel = window.supabaseClient
    .channel('public:orders:phone=' + phone)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, () => {
      fetchCustomerOrders();
    })
    .subscribe();
}

function renderOrdersPanelBody(ordersList) {
  const body = document.getElementById('ordersPanelBody');
  if (!body) return;

  if (!ordersList || ordersList.length === 0) {
    body.innerHTML = '<div class="panel-empty"><span class="empty-icon">📦</span>No orders yet<br>Start shopping to see your orders here!</div>';
    return;
  }

  body.innerHTML = ordersList.map(o => {
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
        <div style="font-size:0.8rem; color:rgba(255,255,255,0.6); margin-top:5px; max-height:40px; overflow:hidden; text-overflow:ellipsis;">${o.product || ''}</div>
        <div class="ohc-total" style="margin-top:5px;">₹${o.total}</div>
        <span class="ohc-status" style="display:inline-block; padding:4px 10px; border-radius:20px; font-size:0.75rem; font-weight:600; text-transform:uppercase; background:${badgeColor}; color:${textColor}; border:1px solid ${borderColor}; margin-top:8px; box-shadow:0 0 10px ${badgeColor};">${o.status}</span>
      </div>
    `;
  }).join('');
}

// ========== CHECKOUT & UPI PAYMENTS ==========
function openCheckout() {
  if (cart.length === 0) return;
  closeCartSheet();
  
  // Set defaults in form if available
  const savedPhone = localStorage.getItem('sa_user_phone');
  if (savedPhone) {
    document.getElementById('coPhone').value = savedPhone;
  }

  const orderSummary = document.getElementById('checkoutOrderItems');
  if (orderSummary) {
    orderSummary.innerHTML = cart.map(item => `
      <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:6px;">
        <span>${item.name} x${item.qty}</span>
        <span>₹${item.price * item.qty}</span>
      </div>
    `).join('');
  }

  document.getElementById('checkoutOverlay')?.classList.add('active');
}

function closeCheckout() {
  document.getElementById('checkoutOverlay')?.classList.remove('active');
}

function placeOrder() {
  const name = document.getElementById('coName').value.trim();
  const address = document.getElementById('coAddress').value.trim();
  const city = document.getElementById('coCity').value.trim();
  const pincode = document.getElementById('coPincode').value.trim();
  const state = document.getElementById('coState').value.trim();
  const phone = document.getElementById('coPhone').value.trim();

  if (!name || !address || !city || !pincode || !state || !phone) {
    showClientToast('Please fill in all details.');
    return;
  }
  if (phone.length < 10) {
    showClientToast('Enter a valid 10-digit mobile number.');
    return;
  }

  const totals = getCartTotals();
  const orderId = 'SA-' + Math.floor(10000 + Math.random() * 90000);
  
  // Populate UPI Payment Modal
  document.getElementById('paySubtotal').textContent = '₹' + totals.subtotal;
  document.getElementById('payDelivery').textContent = '₹' + deliveryCharge;
  document.getElementById('payPacking').textContent = '₹' + packingCharge;
  document.getElementById('payTotal').textContent = '₹' + totals.total;

  const paymentItems = document.getElementById('paymentSummaryItems');
  if (paymentItems) {
    paymentItems.innerHTML = cart.map(it => `
      <div class="upi-sum-item">
        <span>${it.name} x${it.qty}</span>
        <span>₹${it.price * it.qty}</span>
      </div>
    `).join('');
  }

  // Pre-fill validation details
  document.getElementById('payName').value = name;
  document.getElementById('payPhone').value = phone;
  document.getElementById('payUtr').value = '';
  document.getElementById('coScreenshotFile').value = '';

  window.pendingOrderData = {
    orderId,
    name,
    address: `${address}, ${city}, ${state} - ${pincode}`,
    phone,
    totals,
    items: cart.map(it => ({ name: it.name, qty: it.qty, price: it.price, img: it.img }))
  };

  // Start payment timer
  startPaymentTimer();

  // Show Payment Modal
  document.getElementById('upiPaymentModal').classList.add('active');
  
  // Enable Place Order check
  document.getElementById('payUtr').addEventListener('input', checkVerificationForm);
}

function startPaymentTimer() {
  if (paymentTimerInterval) clearInterval(paymentTimerInterval);
  let timeLeft = 300; // 5 mins
  paymentTimerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(paymentTimerInterval);
      closeUpiModal();
      showClientToast('Payment session expired. Please try again.');
      return;
    }
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('timerMinutes').textContent = mins;
    document.getElementById('timerSeconds').textContent = secs;
  }, 1000);
}

function checkVerificationForm() {
  const utr = document.getElementById('payUtr').value.trim();
  const btn = document.getElementById('submitUpiPaymentBtn');
  if (btn) {
    btn.disabled = utr.length < 12;
  }
}

function closeUpiModal() {
  if (paymentTimerInterval) clearInterval(paymentTimerInterval);
  document.getElementById('upiPaymentModal')?.classList.remove('active');
}

function copyUpiId() {
  navigator.clipboard.writeText(merchantUpiId);
  showClientToast('UPI ID copied to clipboard!');
}

function confirmUpiPayment() {
  const utr = document.getElementById('payUtr').value.trim();
  const fileInput = document.getElementById('coScreenshotFile');
  const progressSpan = document.getElementById('coScreenshotProgress');
  
  if (utr.length < 12) {
    showClientToast('Enter 12-digit UTR/Transaction ID!');
    return;
  }

  const spinner = document.getElementById('submitSpinner');
  const btnText = document.getElementById('submitBtnText');
  const btn = document.getElementById('submitUpiPaymentBtn');
  
  if (spinner) spinner.style.display = 'inline-block';
  if (btnText) btnText.textContent = 'Verifying Transaction...';
  if (btn) btn.disabled = true;

  const orderData = window.pendingOrderData;
  if (!orderData) return;

  function finalizeOrder(screenshotUrl = '') {
    submitOrderToDatabase(orderData, utr, screenshotUrl);
    
    // Clear cart
    cart = [];
    saveCart();

    if (paymentTimerInterval) clearInterval(paymentTimerInterval);
    closeUpiModal();
    closeCheckout();

    if (spinner) spinner.style.display = 'none';
    if (btnText) btnText.textContent = 'Verify & Place Order';
    if (progressSpan) progressSpan.style.display = 'none';

    document.getElementById('successOrderId').textContent = `Order #${orderData.orderId}`;
    document.getElementById('orderSuccessOverlay')?.classList.add('active');
    showClientToast('Order verification submitted!');
    
    window.pendingOrderData = null;
  }

  // Upload screenshot to Supabase Storage if file is present
  if (fileInput && fileInput.files && fileInput.files[0] && window.supabaseClient) {
    const file = fileInput.files[0];
    const extension = file.name.split('.').pop();
    const fileName = `receipts/${orderData.orderId}_${Date.now()}.${extension}`;

    if (progressSpan) {
      progressSpan.style.display = 'block';
      progressSpan.textContent = 'Uploading screenshot...';
    }

    window.supabaseClient.storage
      .from('aquatics-assets')
      .upload(fileName, file, { cacheControl: '3600', upsert: false })
      .then(({ data, error }) => {
        if (error) {
          console.error('Storage upload failed:', error);
          showClientToast('Receipt upload failed, placing order without image...');
          finalizeOrder('');
        } else {
          const { data: { publicUrl } } = window.supabaseClient.storage
            .from('aquatics-assets')
            .getPublicUrl(fileName);
          finalizeOrder(publicUrl);
        }
      });
  } else {
    setTimeout(() => {
      finalizeOrder('');
    }, 1200);
  }
}

function submitOrderToDatabase(order, utr, screenshotUrl) {
  const orderRow = {
    id: order.orderId,
    customer: order.name,
    phone: order.phone,
    address: order.address,
    items: order.items,
    total: order.totals.total,
    payment: 'UPI / Scan QR',
    status: 'Pending Verification',
    date: new Date().toLocaleDateString('en-IN'),
    screenshot_url: screenshotUrl,
    utr: utr
  };

  // 1. Save to localStorage sa_orders for instant feedback
  const localOrders = JSON.parse(localStorage.getItem('sa_orders') || '[]');
  localOrders.unshift(orderRow);
  localStorage.setItem('sa_orders', JSON.stringify(localOrders));

  // 2. Submit to Supabase if client is initialized
  if (window.supabaseClient) {
    window.supabaseClient
      .from('orders')
      .insert([orderRow])
      .then(({ error }) => {
        if (error) {
          console.error('Error writing order to Supabase:', error);
        } else {
          console.log('Order successfully written to Supabase!');
        }
      });

    // Register or update customer purchases count
    window.supabaseClient
      .from('customers')
      .select('*')
      .eq('phone', order.phone)
      .then(({ data }) => {
        if (data && data.length > 0) {
          window.supabaseClient
            .from('customers')
            .update({ orders: (data[0].orders || 0) + 1 })
            .eq('phone', order.phone)
            .then(() => {});
        } else {
          const newCustId = 'CUST-' + Math.floor(1000 + Math.random() * 9000);
          window.supabaseClient
            .from('customers')
            .insert([{
              id: newCustId,
              name: order.name,
              email: order.phone + '@phone.com',
              orders: 1,
              status: 'Active'
            }])
            .then(() => {});
        }
      });

    // Increment coupon usage if a coupon was applied
    if (appliedCoupon && appliedCoupon.id) {
      window.supabaseClient
        .from('coupons')
        .update({ current_usage: (appliedCoupon.current_usage || 0) + 1 })
        .eq('id', appliedCoupon.id)
        .then(() => {});
      appliedCoupon = null;
    }
  }
}

function continueShopping() {
  document.getElementById('orderSuccessOverlay')?.classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== DASHBOARDS & ACCOUNT DRAWER ==========
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
    const ordersList = JSON.parse(localStorage.getItem('sa_orders') || '[]');
    content.innerHTML = `
      <div class="acc-item-card">
        <h4 style="margin-bottom:10px;">User Profile</h4>
        <p>Phone: ${phone}</p>
        <p style="margin-top:5px;">Orders Placed: ${ordersList.length}</p>
        <button class="btn-secondary" style="margin-top:15px; border-color:var(--coral-pink); color:var(--coral-pink);" onclick="logoutClient()">Logout</button>
      </div>
    `;
  }
}

function renderWishlistTabContent() {
  const content = document.getElementById('accContent');
  if (!content) return;

  if (wishlist.length === 0) {
    content.innerHTML = '<div class="empty-cart-msg">Your wishlist is empty! 🤍</div>';
    return;
  }

  content.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:10px;">
      ${wishlist.map(name => `
        <div class="acc-item-card" style="display:flex; justify-content:space-between; align-items:center;">
          <strong>${name}</strong>
          <button class="btn-secondary" style="padding:4px 8px; border-color:var(--coral-pink); color:var(--coral-pink);" onclick="toggleWishlist('${name}')">Remove</button>
        </div>
      `).join('')}
    </div>
  `;
}

function toggleWishlist(name) {
  const idx = wishlist.indexOf(name);
  if (idx !== -1) {
    wishlist.splice(idx, 1);
    showClientToast(`Removed "${name}" from wishlist.`);
  } else {
    wishlist.push(name);
    showClientToast(`Added "${name}" to wishlist.`);
  }
  localStorage.setItem('sa_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  
  if (document.getElementById('accountDrawer')?.classList.contains('active')) {
    renderWishlistTabContent();
  }
}

function updateWishlistUI() {
  const wishlistBadge = document.getElementById('wishlistBadge');
  if (wishlistBadge) {
    wishlistBadge.textContent = wishlist.length;
  }
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const name = btn.getAttribute('data-name');
    const isWish = wishlist.includes(name);
    btn.classList.toggle('active', isWish);
    btn.innerHTML = isWish ? '❤️' : '🤍';
  });
}

function logoutClient() {
  localStorage.removeItem('sa_user_logged_in');
  localStorage.removeItem('sa_user_phone');
  if (ordersRealtimeChannel) {
    ordersRealtimeChannel.unsubscribe();
    ordersRealtimeChannel = null;
  }
  document.getElementById('accountDrawer')?.classList.remove('active');
  showClientToast('Logged out successfully');
  updateWishlistUI();
}

// ========== LOGIN SYSTEM ==========
function sendOTP() {
  const phone = document.getElementById('authPhone').value;
  if (phone.length < 10) { 
    showClientToast('Enter valid 10-digit phone number!'); 
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

// ========== COUPONS SYSTEM ==========
function showCouponSuggestions() {
  const suggestionsBox = document.getElementById('couponSuggestions');
  const couponInput = document.getElementById('couponInput');
  if (!suggestionsBox || !couponInput) return;
  
  const coupons = JSON.parse(localStorage.getItem('sa_coupons') || '[]');
  const val = couponInput.value.trim().toUpperCase();
  
  const available = coupons.filter(c => {
    if (!c.active) return false;
    if (new Date(c.expiry) < new Date()) return false;
    if (c.max_usage && c.current_usage >= c.max_usage) return false;
    if (val && !c.code.includes(val)) return false;
    return true;
  });
  
  if (available.length === 0) {
    suggestionsBox.style.display = 'none';
    return;
  }
  
  suggestionsBox.innerHTML = available.map(c => `
    <div class="coupon-suggestion-item" data-code="${c.code}">
      <span class="coupon-suggestion-code">${c.code}</span>
      <span class="coupon-suggestion-desc">${c.type === 'percentage' ? c.value + '%' : '₹' + c.value} OFF (Min ₹${c.min_order})</span>
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
  if (c.max_usage && c.current_usage >= c.max_usage) {
    showClientToast('This coupon usage limit has been reached');
    return;
  }
  
  const rawTotals = getCartTotals();
  if (rawTotals.subtotal < c.min_order) {
    showClientToast(`Minimum order amount of ₹${c.min_order} required`);
    return;
  }
  
  appliedCoupon = c;
  if (couponInput) couponInput.value = '';
  
  document.getElementById('applyCouponBtn').style.display = 'none';
  const appliedInfo = document.getElementById('appliedCouponInfo');
  if (appliedInfo) {
    appliedInfo.style.display = 'flex';
    document.getElementById('appliedCouponCode').textContent = c.code;
  }

  renderCartSheet();
  showClientToast(`Coupon ${c.code} applied successfully!`);
}

function removeCoupon() {
  appliedCoupon = null;
  document.getElementById('applyCouponBtn').style.display = 'block';
  const appliedInfo = document.getElementById('appliedCouponInfo');
  if (appliedInfo) appliedInfo.style.display = 'none';
  renderCartSheet();
  showClientToast('Coupon removed');
}

// ========== INITIALIZATION & EVENTS ==========
document.addEventListener('DOMContentLoaded', () => {
  // Setup real-time Supabase sync
  setupRealtimeSupabaseCatalogSync();
  setupOrdersRealtimeSync();
  fetchTestimonials();
  updateWishlistUI();
  updateCartBadge();

  // Attach buttons inside dynamic catalog dynamically using delegation
  document.getElementById('dynamicCatalogContainer')?.addEventListener('click', (e) => {
    const btn = e.target.closest('button, a');
    if (!btn) return;

    const action = btn.getAttribute('data-action') || '';
    const name = btn.getAttribute('data-name') || '';

    if (action === 'wishlist') {
      e.preventDefault();
      e.stopPropagation();
      toggleWishlist(name);
    } else if (btn.classList.contains('btn-add-cart-btn')) {
      const price = parseFloat(btn.getAttribute('data-price'));
      const img = btn.getAttribute('data-img');
      addToCart(name, price, img);
    } else if (btn.classList.contains('btn-buy-now-btn')) {
      const price = parseFloat(btn.getAttribute('data-price'));
      const img = btn.getAttribute('data-img');
      addToCart(name, price, img);
      openCheckout();
    }
  });

  // Coupons realtime sync
  if (window.supabaseClient) {
    window.supabaseClient
      .from('coupons')
      .select('*')
      .then(({ data }) => {
        if (data) {
          localStorage.setItem('sa_coupons', JSON.stringify(data));
        }
      });
  }

  // Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Bottom Navigation Bar
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      document.querySelectorAll('.bottom-nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (tab === 'home') {
        const target = document.getElementById('home');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      } else if (tab === 'categories') {
        const target = document.getElementById('collection');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      } else if (tab === 'cart') {
        openCartSheet();
      } else if (tab === 'orders') {
        if (localStorage.getItem('sa_user_logged_in') === 'true') {
          setupOrdersRealtimeSync();
          document.getElementById('ordersPanel')?.classList.add('active');
        } else {
          document.getElementById('authModal')?.classList.add('active');
        }
      } else if (tab === 'profile') {
        if (localStorage.getItem('sa_user_logged_in') === 'true') {
          openProfilePanel();
        } else {
          document.getElementById('authModal')?.classList.add('active');
        }
      }
    });
  });

  // Floating Action Buttons (desktops)
  document.getElementById('floatingAuthBtn')?.addEventListener('click', () => {
    if (localStorage.getItem('sa_user_logged_in') === 'true') {
      document.getElementById('accountDrawer')?.classList.add('active');
      switchAccTab('wishlist');
    } else {
      document.getElementById('authModal')?.classList.add('active');
    }
  });

  document.getElementById('floatingWishlistBtn')?.addEventListener('click', () => {
    if (localStorage.getItem('sa_user_logged_in') === 'true') {
      document.getElementById('accountDrawer')?.classList.add('active');
      switchAccTab('wishlist');
    } else {
      document.getElementById('authModal')?.classList.add('active');
    }
  });

  document.getElementById('closeAuthBtn')?.addEventListener('click', () => {
    document.getElementById('authModal')?.classList.remove('active');
  });

  document.getElementById('closeAccountBtn')?.addEventListener('click', () => {
    document.getElementById('accountDrawer')?.classList.remove('active');
  });

  // Cart actions
  document.getElementById('closeCartSheet')?.addEventListener('click', closeCartSheet);
  document.getElementById('cartSheetOverlay')?.addEventListener('click', closeCartSheet);
  document.getElementById('proceedCheckoutBtn')?.addEventListener('click', openCheckout);
  
  // Coupon input hooks
  const couponInput = document.getElementById('couponInput');
  couponInput?.addEventListener('input', showCouponSuggestions);
  couponInput?.addEventListener('focus', showCouponSuggestions);
  document.getElementById('applyCouponBtn')?.addEventListener('click', applyCoupon);
  document.getElementById('removeCouponBtn')?.addEventListener('click', removeCoupon);
  
  document.getElementById('couponSuggestions')?.addEventListener('click', (e) => {
    const item = e.target.closest('.coupon-suggestion-item');
    if (item) {
      const code = item.getAttribute('data-code');
      if (couponInput) couponInput.value = code;
      document.getElementById('couponSuggestions').style.display = 'none';
      applyCoupon();
    }
  });

  // Close suggestions on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.coupon-row')) {
      const suggest = document.getElementById('couponSuggestions');
      if (suggest) suggest.style.display = 'none';
    }
  });

  // Inquiry form submission
  document.getElementById('inquiryForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('inqName').value.trim();
    const email = document.getElementById('inqEmail').value.trim();
    const phone = document.getElementById('inqPhone').value.trim();
    const msg = document.getElementById('inqMsg').value.trim();

    if (!name || !email || !msg) {
      showClientToast('Please fill in required fields.');
      return;
    }

    const inquiry = { name, email, msg, phone: phone || null };

    if (window.supabaseClient) {
      window.supabaseClient
        .from('inquiries')
        .insert([inquiry])
        .then(({ error }) => {
          if (error) {
            console.error('Inquiry submit error:', error);
            showClientToast('Failed to send message. Please try WhatsApp.');
          } else {
            showClientToast('Message sent successfully! We will get back to you soon.');
            this.reset();
          }
        });
    } else {
      const local = JSON.parse(localStorage.getItem('sa_inquiries') || '[]');
      local.push({ id: Date.now(), ...inquiry });
      localStorage.setItem('sa_inquiries', JSON.stringify(local));
      showClientToast('Message saved offline! We will respond shortly.');
      this.reset();
    }
  });
});

function openProfilePanel() {
  const body = document.getElementById('profilePanelBody');
  if (!body) return;
  const phone = localStorage.getItem('sa_user_phone') || 'Not set';
  const ordersList = JSON.parse(localStorage.getItem('sa_orders') || '[]');
  body.innerHTML = `
    <div class="order-history-card" style="text-align:center;">
      <div style="font-size:3rem;margin-bottom:12px;">👤</div>
      <h4 style="margin-bottom:8px;color:#00d4ff;">My Account</h4>
      <p style="font-size:0.85rem;color:rgba(255,255,255,0.5);margin-bottom:4px;">Phone: ${phone}</p>
      <p style="font-size:0.85rem;color:rgba(255,255,255,0.5);">Orders: ${ordersList.length}</p>
    </div>
    <div class="order-history-card">
      <h4 style="margin-bottom:10px;font-size:0.85rem;">Contact Subramanya Aquatics</h4>
      <a href="https://api.whatsapp.com/send?phone=${whatsAppNumber}" target="_blank" style="color:#00ffc8;font-size:0.85rem;text-decoration:none;">💬 WhatsApp: +91 79955 49922</a>
    </div>
  `;
  document.getElementById('profilePanel')?.classList.add('active');
}

function closePanel(id) {
  document.getElementById(id)?.classList.remove('active');
}

// ========== GALLERY LIGHTBOX ==========
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  
  const galleryItems = [
    { src: 'images/gallery1.png', caption: 'Premium Planted Aquarium setup' },
    { src: 'images/gallery2.png', caption: 'Stunning Dragon Tail Guppies' },
    { src: 'images/gallery3.png', caption: 'Exotic Show Grade Flowerhorn' },
    { src: 'images/gallery4.png', caption: 'Arowana Majesty Tank' },
    { src: 'images/gallery5.png', caption: 'Quarantined imported Goldfishes' },
    { src: 'images/gallery6.png', caption: 'Aquascape Custom Layout design' }
  ];
  
  grid.innerHTML = galleryItems.map(item => `
    <div class="gallery-item reveal" onclick="openGalleryLightbox('${item.src}')">
      <img src="${item.src}" alt="${item.caption}" loading="lazy">
      <div class="gallery-overlay">
        <span class="zoom-icon">🔍</span>
      </div>
    </div>
  `).join('');
  revealOnScroll();
}

function openGalleryLightbox(src) {
  const lightbox = document.getElementById('galleryLightbox');
  const img = document.getElementById('galleryLightboxImg');
  if (lightbox && img) {
    img.src = src;
    lightbox.classList.add('active');
  }
}

function closeGalleryLightbox() {
  document.getElementById('galleryLightbox')?.classList.remove('active');
}
