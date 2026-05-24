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

function getDynamicSVGPlaceholder(category) {
  const emojis = {
    'Guppys': '🐠',
    'Angels': '👼',
    'Mollies': '🐟',
    'Oxy-less Fishes': '💧',
    "Betta's": '🔥',
    'Wild fishes': '🦁',
    'Discus': '🐠',
    'Flowerhorns': '🌺',
    'Arowana': '🐉',
    'Gold Fish': '🪙',
    'Exotics & Giants': '🦖',
    'Aquarium Items': '🛠️',
    'Aquarium Decorative Items': '🪸',
    'Fish Food': '🍽️',
    'Cultures': '🧫'
  };
  const emoji = emojis[category] || '🐠';

  let hash = 0;
  for (let i = 0; i < category.length; i++) {
    hash = category.charCodeAt(i) + ((hash << 5) - hash);
  }

  const colors = [
    ['#00c6ff', '#0072ff'],
    ['#f857a6', '#ff5858'],
    ['#11998e', '#38ef7d'],
    ['#FF8008', '#FFC837'],
    ['#8A2387', '#E94057'],
    ['#1AD6FD', '#1D62F0'],
    ['#8e2de2', '#4a00e0']
  ];

  const colorIndex = Math.abs(hash) % colors.length;
  const gradient = colors[colorIndex];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
    <defs>
      <linearGradient id="grad-${colorIndex}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${gradient[0]};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${gradient[1]};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" rx="20" fill="url(#grad-${colorIndex})" />
    <circle cx="100" cy="100" r="55" fill="rgba(255, 255, 255, 0.15)" />
    <text x="100" y="105" font-size="80" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
  </svg>`;

  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function resolveProductImage(p) {
  if (!p) return 'logo.jpeg';
  const name = (p.name || '').trim();
  const lowerName = name.toLowerCase();
  const category = (p.category || '').trim().toLowerCase();
  const img = p.image || p.img || '';

  // Helper to format path: always normalize spaces/hyphens/case
  function formatPath(pathStr) {
    if (!pathStr || pathStr.startsWith('data:')) return pathStr;
    const parts = pathStr.split('/');
    if (parts.length > 1) {
      const filename = parts.pop();
      const folder = parts.join('/');
      const cleanName = filename.toLowerCase().replace(/%20/g, '-').replace(/[\s_]+/g, '-');
      return folder + '/' + cleanName;
    }
    return pathStr.toLowerCase().replace(/%20/g, '-').replace(/[\s_]+/g, '-');
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
    return getDynamicSVGPlaceholder(p.category || 'Aquarium Items');
  }
  return formatPath(catDefault);
}

// Subramanya Aquatics Admin Portal State Logic
document.addEventListener('DOMContentLoaded', () => {
  initBubbleGenerator();
  initAuthSession();
  initNavigation();
  initPortalState();
  initFormSubmitHandlers();
  drawAnalyticsCharts();
});

// 1. Particle Generator for bubbles
function initBubbleGenerator() {
  const container = document.getElementById('bubblesContainer');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    const b = document.createElement('div');
    b.classList.add('bubble');
    const size = Math.random() * 25 + 8;
    b.style.width = size + 'px';
    b.style.height = size + 'px';
    b.style.left = Math.random() * 100 + '%';
    b.style.bottom = '-' + (Math.random() * 30 + 10) + 'px';
    b.style.animationDuration = (Math.random() * 12 + 8) + 's';
    b.style.animationDelay = (Math.random() * 8) + 's';
    container.appendChild(b);
  }
}

// 2. Auth Session Guard
function initAuthSession() {
  const loginSec = document.getElementById('loginSection');
  const appSec = document.getElementById('appSection');
  const loginForm = document.getElementById('loginForm');
  const btnLogout = document.getElementById('btnLogout');

  // Check existing session
  if (localStorage.getItem('adminToken') === 'true') {
    loginSec.style.display = 'none';
    appSec.style.display = 'flex';
  }

  // Handle Login
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const pass = document.getElementById('loginPassword').value;

      if (email === 'admin@subramanya.com' && pass === 'password') {
        localStorage.setItem('adminToken', 'true');
        showToast('success', 'Access granted! Welcome back Admin.');
        setTimeout(() => {
          loginSec.style.display = 'none';
          appSec.style.display = 'flex';
          initPortalState();
          drawAnalyticsCharts();
        }, 1200);
      } else {
        showToast('error', 'Access denied! Invalid credentials.');
      }
    });
  }

  // Handle Logout
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('adminToken');
      showToast('info', 'Logged out of portal securely.');
      setTimeout(() => {
        appSec.style.display = 'none';
        loginSec.style.display = 'flex';
      }, 800);
    });
  }
}

// 3. SPA Navigation Routing
function initNavigation() {
  const navLinks = document.querySelectorAll('.sidebar-link, .mobile-nav-item');
  const sections = document.querySelectorAll('.app-section');
  const titleEl = document.getElementById('sectionHeaderTitle');
  const subEl = document.getElementById('sectionHeaderSubtitle');

  const headersMap = {
    overview: { title: 'Dashboard Overview', desc: 'Real-time business performance analytics' },
    products: { title: 'Fish & Products', desc: 'Manage aquatic catalog items, rates, and badges' },
    foods: { title: 'Foods & Nutrition', desc: 'Manage fish food packages and brands' },
    items: { title: 'Aquatic Items', desc: 'Manage filters, heaters, pumps, and decor' },
    categories: { title: 'Store Categories', desc: 'Manage freshwater, saltwater, and gear catalog classes' },
    coupons: { title: 'Promotional Coupons', desc: 'Manage discount codes and active coupons' },
    orders: { title: 'Orders Management', desc: 'Process customer purchase requests, track deliveries and invoices' },
    customers: { title: 'Customers List', desc: 'View, search, filter, or ban registered customers' },
    messages: { title: 'Customer Inquiries', desc: 'Review and reply to customer contact form messages' },
    testimonials: { title: 'Review Testimonials', desc: 'Approve or reject customer ratings' },
    media: { title: 'Media Library', desc: 'Upload, optimize and search fish images or videos' },
    seo: { title: 'SEO Configurations', desc: 'Configure search engine indexing meta tags and sitemaps' },
    settings: { title: 'Portal Settings', desc: 'Change general portal settings, contacts and maintenance modes' },
    banners: { title: 'Homepage Banners', desc: 'Configure homepage sliders and active promotions' },
    payments: { title: 'Payment & QR Control', desc: 'Set UPI configurations, packing boxes, and QR codes' }
  };

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      if (!target) return;

      // Deactivate all links and sections
      navLinks.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      // Activate clicked
      document.querySelectorAll(`[data-target="${target}"]`).forEach(l => l.classList.add('active'));
      const activeSection = document.getElementById(`sec-${target}`);
      if (activeSection) activeSection.classList.add('active');

      // Update titles
      if (headersMap[target]) {
        titleEl.textContent = headersMap[target].title;
        subEl.textContent = headersMap[target].desc;
      }
    });
  });
}

// 4. Portal State and Tables Renderer
let products = [];
let orders = [];
let customers = [];
let categories = [];
let testimonials = [];
let inquiries = [];
let foods = [];
let items = [];
let coupons = [];

async function initPortalState() {
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

  const defaultFoods = [
    { id: 50, name: 'Dry Worms (10g)', type: 'Live Food', suitable: 'All Fishes', price: '₹25', stock: 'In Stock', image: 'food/dry-worms-cubes.jpeg', description: 'Dry worms cubes' },
    { id: 51, name: 'Farm Food (100g)', type: 'Pellets', suitable: 'Guppys, Bettas', price: '₹200', stock: 'In Stock', image: 'food/farm-food.jpg', description: 'Farm food' },
    { id: 52, name: 'Okiko Black Pearl Flowerhorn Food', type: 'Pellets', suitable: 'Flowerhorns', price: '₹300', stock: 'In Stock', image: 'food/okiko-black-pearl-flowehorn-food.webp', description: 'Flowerhorn food' },
    { id: 53, name: 'Okiko Head Power Flowerhorns Food', type: 'Pellets', suitable: 'Flowerhorns', price: '₹300', stock: 'In Stock', image: 'food/okiko-head-power-flowerhorns-food.jpeg', description: 'Flowerhorn food' },
    { id: 54, name: 'Okiko Red Diamond Flowerhorn Food', type: 'Pellets', suitable: 'Flowerhorns', price: '₹300', stock: 'In Stock', image: 'food/okoko-red-diamond-fish-food.jpg', description: 'Flowerhorn food' },
    { id: 55, name: 'Optimun 3 in 1 Fish Food', type: 'Pellets', suitable: 'All Fishes', price: '₹160', stock: 'In Stock', image: 'food/optimun-3-in-1-fish-food.webp', description: 'Optimum fish food' },
    { id: 56, name: 'Tiyo Fish Food (Small)', type: 'Pellets', suitable: 'Gold Fish', price: '₹20', stock: 'In Stock', image: 'food/tiyo-fish-food-(small).jpeg', description: 'Tiyo small pellets' },
    { id: 57, name: 'Tiyo Fish Food', type: 'Pellets', suitable: 'Gold Fish', price: '₹30', stock: 'In Stock', image: 'food/tiyo-fish-food(large).jpg', description: 'Tiyo large pellets' }
  ];

  const defaultItems = [
    { id: 40, name: 'Aquarium Heater (50W)', price: '₹300', stock: 'In Stock', image: 'items/50w-aquarium-heater.webp' },
    { id: 41, name: 'Aquarium Heater (100W)', price: '₹350', stock: 'In Stock', image: 'items/100-w-aquarium-heater.webp' },
    { id: 42, name: 'Aquarium Light Large', price: '₹400', stock: 'In Stock', image: 'items/aquarium-light-(large-).jpg' },
    { id: 43, name: 'Aquarium Light Small', price: '₹300', stock: 'In Stock', image: 'items/aquarium-light-(small).jpg' },
    { id: 44, name: 'Bubble Oxygen', price: '₹200', stock: 'In Stock', image: 'items/buble-oxygen.webp' },
    { id: 45, name: 'Double Oxygen', price: '₹300', stock: 'In Stock', image: 'items/double-oxygen.webp' },
    { id: 46, name: 'Internal Oxygen (Small)', price: '₹300', stock: 'In Stock', image: 'items/internal-oxgyen-(small).webp' },
    { id: 47, name: 'Internal Oxygen (Large)', price: '₹400', stock: 'In Stock', image: 'items/internal-oxgyen-(big).jpg' },
    { id: 48, name: 'Plastic Plants Piece', price: '₹25', stock: 'In Stock', image: 'items/plastic-plants-(small).jpg' },
    { id: 49, name: 'Stones (1kg)', price: '₹50', stock: 'In Stock', image: 'items/stones.jpg' }
  ];

  const defaultCoupons = [
    { id: 1, code: 'AQUA10', type: 'percentage', value: 10, min_order: 500, expiry: '2026-12-31', max_usage: 100, current_usage: 0, active: true },
    { id: 2, code: 'WELCOME50', type: 'fixed', value: 50, min_order: 300, expiry: '2026-12-31', max_usage: 200, current_usage: 0, active: true }
  ];

  const defaultOrders = [
    { id: 'SA-8932', customer: 'Rajesh Kumar', phone: '+917995549922', product: 'Silver Arowana (1 Pair)', amount: '₹1200', status: 'confirmed', date: '06/05/2026', address: 'Vizag Complex', utr: '123456789012', screenshot_url: '' },
    { id: 'SA-8933', customer: 'Priya Sharma', phone: '+919999999999', product: 'Golden Guppys 24K (5 pairs)', amount: '₹1245', status: 'delivered', date: '05/05/2026', address: 'Vuda Park Road, Vizag', utr: '987654321098', screenshot_url: '' },
    { id: 'SA-8934', customer: 'Vikram Patel', phone: '+918888888888', product: 'Black Moor Gold Fish (2 pairs)', amount: '₹198', status: 'pending', date: '04/05/2026', address: 'Madhurawada, Vizag', utr: '888877776666', screenshot_url: '' }
  ];

  const defaultCustomers = [
    { id: 'CUST-001', name: 'Rajesh Kumar', email: 'rajesh@gmail.com', orders: 4, status: 'Active' },
    { id: 'CUST-002', name: 'Priya Sharma', email: 'priya@gmail.com', orders: 2, status: 'Active' },
    { id: 'CUST-003', name: 'Vikram Patel', email: 'vikram@gmail.com', orders: 1, status: 'Active' }
  ];

  const defaultTestimonials = [
    { id: 1, name: 'Rajesh Kumar', text: 'Absolutely amazing collection of exotic fishes! The Arowana I purchased is healthy and stunning.', rating: '⭐⭐⭐⭐⭐', status: 'Approved' },
    { id: 2, name: 'Priya Sharma', text: 'Got my entire aquarium setup done by Subramanya Aquatics. The planted tank looks like an underwater paradise.', rating: '⭐⭐⭐⭐⭐', status: 'Approved' }
  ];

  const defaultInquiries = [
    { id: 1, name: 'Sanjay Kumar', email: 'sanjay@gmail.com', msg: 'Do you ship live fishes to Hyderabad safely? Looking for some SRD Flowerhorn.', phone: '+91 98765 43210' },
    { id: 2, name: 'Megha Sen', email: 'megha@yahoo.com', msg: 'Interested in getting a custom 3ft glass aquarium setup for my living room.', phone: '+91 87654 32109' }
  ];

  // Retrieve cached / storage data
  products = JSON.parse(localStorage.getItem('sa_products')) || defaultProducts;
  categories = JSON.parse(localStorage.getItem('sa_categories')) || defaultCategories;
  orders = JSON.parse(localStorage.getItem('sa_orders')) || defaultOrders;
  customers = JSON.parse(localStorage.getItem('sa_customers')) || defaultCustomers;
  testimonials = JSON.parse(localStorage.getItem('sa_testimonials')) || defaultTestimonials;
  inquiries = JSON.parse(localStorage.getItem('sa_inquiries')) || defaultInquiries;
  foods = JSON.parse(localStorage.getItem('sa_foods')) || defaultFoods;
  items = JSON.parse(localStorage.getItem('sa_items')) || defaultItems;
  coupons = JSON.parse(localStorage.getItem('sa_coupons')) || defaultCoupons;

  // Local render for fast access
  renderAllTables();

  // Supabase dynamic sync
  if (window.supabaseClient) {
    console.log('%c☁️ Syncing admin data from Supabase DB...', 'color: #00d4ff; font-weight: bold;');
    const seedBtn = document.getElementById('btnAutoSeed');
    if (seedBtn) seedBtn.style.display = 'inline-block';

    try {
      const fetchPromises = [
        window.supabaseClient.from('categories').select('*').then(({ data }) => {
          if (data && data.length > 0) { categories = data; localStorage.setItem('sa_categories', JSON.stringify(categories)); }
        }),
        window.supabaseClient.from('products').select('*').order('id').then(({ data }) => {
          if (data && data.length > 0) { products = data; localStorage.setItem('sa_products', JSON.stringify(products)); }
        }),
        window.supabaseClient.from('foods').select('*').order('id').then(({ data }) => {
          if (data && data.length > 0) { foods = data; localStorage.setItem('sa_foods', JSON.stringify(foods)); }
        }),
        window.supabaseClient.from('items').select('*').order('id').then(({ data }) => {
          if (data && data.length > 0) { items = data; localStorage.setItem('sa_items', JSON.stringify(items)); }
        }),
        window.supabaseClient.from('coupons').select('*').order('id').then(({ data }) => {
          if (data && data.length > 0) { coupons = data; localStorage.setItem('sa_coupons', JSON.stringify(coupons)); }
        }),
        window.supabaseClient.from('orders').select('*').order('created_at', { ascending: false }).then(({ data }) => {
          if (data) {
            orders = data.map(d => ({
              id: d.id,
              customer: d.customer,
              phone: d.phone,
              product: Array.isArray(d.items) ? d.items.map(it => `${it.name} (${it.qty})`).join(', ') : d.items,
              amount: '₹' + d.total,
              status: d.status,
              date: d.date,
              address: d.address,
              utr: d.utr,
              screenshot_url: d.screenshot_url
            }));
            localStorage.setItem('sa_orders', JSON.stringify(orders));
          }
        }),
        window.supabaseClient.from('customers').select('*').order('created_at', { ascending: false }).then(({ data }) => {
          if (data) { customers = data; localStorage.setItem('sa_customers', JSON.stringify(customers)); }
        }),
        window.supabaseClient.from('inquiries').select('*').order('id', { ascending: false }).then(({ data }) => {
          if (data) { inquiries = data; localStorage.setItem('sa_inquiries', JSON.stringify(inquiries)); }
        }),
        window.supabaseClient.from('testimonials').select('*').order('id', { ascending: false }).then(({ data }) => {
          if (data) { testimonials = data; localStorage.setItem('sa_testimonials', JSON.stringify(testimonials)); }
        }),
        window.supabaseClient.from('settings').select('*').then(({ data }) => {
          if (data) {
            const configVal = data.find(s => s.key === 'config')?.value;
            const bannersVal = data.find(s => s.key === 'banners')?.value;
            const paymentsVal = data.find(s => s.key === 'payments')?.value;
            const seoVal = data.find(s => s.key === 'seo')?.value;

            if (configVal) {
              document.getElementById('cfgWhatsApp').value = configVal.whatsApp || '';
              document.getElementById('cfgEmail').value = configVal.email || '';
              document.getElementById('cfgAddress').value = configVal.address || '';
              document.getElementById('cfgMaintenance').value = configVal.maintenance || 'no';
              document.getElementById('cfgSoundPitch').value = configVal.soundPitch || 400;
            }
            if (bannersVal) {
              document.getElementById('cfgHeroTitle').value = bannersVal.heroTitle || '';
              document.getElementById('cfgHeroSubtitle').value = bannersVal.heroSubtitle || '';
              document.getElementById('cfgHeroBg').value = bannersVal.heroBg || '';
              document.getElementById('cfgOfferTitle').value = bannersVal.offerTitle || '';
              document.getElementById('cfgOfferCode').value = bannersVal.offerCode || '';
              document.getElementById('cfgOfferTimer').value = bannersVal.offerTimer || '';
            }
            if (paymentsVal) {
              document.getElementById('cfgUpiId').value = paymentsVal.upiId || '';
              document.getElementById('cfgQrImage').value = paymentsVal.qrImage || '';
              document.getElementById('cfgDeliveryCharge').value = paymentsVal.deliveryCharge || 49;
              document.getElementById('cfgPackingCharge').value = paymentsVal.packingCharge || 10;
            }
            if (seoVal) {
              const seoTitleInput = document.querySelector('#sec-seo input.form-input');
              if (seoTitleInput) seoTitleInput.value = seoVal.title || '';
              const seoDescInput = document.querySelector('#sec-seo textarea.form-input');
              if (seoDescInput) seoDescInput.value = seoVal.description || '';
              const seoKeywordsInput = document.querySelectorAll('#sec-seo input.form-input')[1];
              if (seoKeywordsInput) seoKeywordsInput.value = seoVal.keywords || '';
              const seoAnalyticsInput = document.querySelectorAll('#sec-seo input.form-input')[2];
              if (seoAnalyticsInput) seoAnalyticsInput.value = seoVal.analyticsId || '';
            }
          }
        })
      ];

      await Promise.all(fetchPromises);
      renderAllTables();
    } catch (err) {
      console.error('Failed to sync tables from Supabase:', err);
    }
  }
}

function renderAllTables() {
  renderProducts();
  renderCategories();
  renderOrders();
  renderCustomers();
  renderInquiries();
  renderTestimonials();
  renderMediaLibrary();
  renderFoods();
  renderItems();
  renderCoupons();
  updateOverviewCards();
}

function saveAllState() {
  try {
    localStorage.setItem('sa_products', JSON.stringify(products));
    localStorage.setItem('sa_categories', JSON.stringify(categories));
    localStorage.setItem('sa_orders', JSON.stringify(orders));
    localStorage.setItem('sa_customers', JSON.stringify(customers));
    localStorage.setItem('sa_testimonials', JSON.stringify(testimonials));
    localStorage.setItem('sa_inquiries', JSON.stringify(inquiries));
    localStorage.setItem('sa_foods', JSON.stringify(foods));
    localStorage.setItem('sa_items', JSON.stringify(items));
    localStorage.setItem('sa_coupons', JSON.stringify(coupons));
  } catch (e) {
    console.error('localStorage save failed:', e.message);
  }
}

// Render Products Table
function renderProducts() {
  const tbody = document.getElementById('productsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const searchVal = document.getElementById('searchProducts')?.value.toLowerCase() || '';
  const catFilter = document.getElementById('filterCategory')?.value || 'all';

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal);
    const matchesCategory = catFilter === 'all' || p.category === catFilter;
    return matchesSearch && matchesCategory;
  });

  filtered.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${resolveProductImage(p)}" alt="${p.name}" style="width: 44px; height: 44px; border-radius: 8px; border: 1.5px solid var(--color-primary); object-fit: cover;"></td>
      <td><strong>${p.name}</strong></td>
      <td><span class="badge badge-confirmed">${p.category}</span></td>
      <td><strong style="color: var(--color-secondary);">${p.price}</strong></td>
      <td><span class="badge badge-pending">${p.tag || 'Regular'}</span></td>
      <td><span class="badge badge-delivered">Available</span></td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px; margin-right: 6px;" onclick="openEditProduct(${p.id})">✏️ Edit</button>
        <button class="btn-secondary" style="padding: 4px 10px; border-color: var(--color-accent); color: var(--color-accent);" onclick="deleteProduct(${p.id})">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Categories Table
function renderCategories() {
  const tbody = document.getElementById('categoriesTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  categories.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>🐠 ${c.name}</strong></td>
      <td>${c.count || 0} items</td>
      <td><span style="font-size: 0.8rem; color: var(--color-text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 150px; display: inline-block;" title="${c.image || 'None'}">${c.image || 'None'}</span></td>
      <td><span class="badge badge-delivered">${c.status || 'Active'}</span></td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px; margin-right: 6px;" onclick="openEditCategory('${c.name}')">✏️ Edit</button>
        <button class="btn-secondary" style="padding: 4px 10px; border-color: var(--color-accent); color: var(--color-accent);" onclick="deleteCategory('${c.name}')">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Orders Table
function renderOrders() {
  const tbody = document.getElementById('ordersTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  orders.forEach(o => {
    const tr = document.createElement('tr');
    const screenshotTd = o.screenshot_url ? 
      `<td><button class="btn-secondary" style="padding: 4px 8px; font-size: 0.8rem;" onclick="viewScreenshot('${o.screenshot_url}')">👁️ View</button></td>` : 
      `<td>-</td>`;

    tr.innerHTML = `
      <td><strong>${o.id}</strong></td>
      <td>${o.customer}</td>
      <td>${o.phone || '-'}</td>
      <td>${o.product}</td>
      <td><strong style="color: var(--color-secondary);">${o.amount}</strong></td>
      <td><code>${o.utr || '-'}</code></td>
      ${screenshotTd}
      <td><span class="badge badge-${o.status === 'Pending Verification' || o.status === 'pending' ? 'pending' : o.status === 'confirmed' ? 'confirmed' : o.status === 'shipped' ? 'shipped' : o.status === 'delivered' ? 'delivered' : 'cancelled'}">${(o.status || 'Pending Verification').toUpperCase()}</span></td>
      <td>${o.date}</td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px; margin-right: 6px;" onclick="openInvoice('${o.id}')">🖨️ Invoice</button>
        <select class="select-filter" style="padding: 4px 8px; font-size: 0.8rem; height: auto;" onchange="changeOrderStatus('${o.id}', this.value)">
          <option value="Pending Verification" ${o.status === 'Pending Verification' || o.status === 'pending' ? 'selected' : ''}>Pending</option>
          <option value="confirmed" ${o.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
          <option value="shipped" ${o.status === 'shipped' ? 'selected' : ''}>Shipped</option>
          <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Delivered</option>
          <option value="cancelled" ${o.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
        </select>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Change Order Status
window.changeOrderStatus = async function(id, val) {
  const o = orders.find(ord => ord.id === id);
  if (o) {
    o.status = val;
    saveAllState();
    
    if (window.supabaseClient) {
      try {
        const { error } = await window.supabaseClient
          .from('orders')
          .update({ status: val })
          .eq('id', id);
        if (error) throw error;
        showToast('success', `Order ${id} updated to ${val.toUpperCase()} in Supabase!`);
      } catch (err) {
        console.error(err);
        showToast('error', 'Supabase status sync failed: ' + err.message);
      }
    } else {
      showToast('success', `Order ${id} status updated to ${val.toUpperCase()} locally!`);
    }
    renderAllTables();
  }
};

// Render Customers List Table
function renderCustomers() {
  const tbody = document.getElementById('customersTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  customers.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${c.id}</td>
      <td><div class="user-avatar" style="width: 30px; height: 30px; font-size: 0.8rem;">${c.name.charAt(0)}</div></td>
      <td><strong>${c.name}</strong></td>
      <td>${c.email}</td>
      <td>${c.orders} purchases</td>
      <td><span class="badge badge-${c.status === 'Active' ? 'delivered' : 'cancelled'}">${c.status}</span></td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px; border-color: ${c.status === 'Active' ? 'var(--color-accent)' : 'var(--color-secondary)'}; color: ${c.status === 'Active' ? 'var(--color-accent)' : 'var(--color-secondary)'};" onclick="toggleCustomerStatus('${c.id}')">
          ${c.status === 'Active' ? '⛔ Ban' : '✓ Unban'}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.toggleCustomerStatus = async function(id) {
  const c = customers.find(cust => cust.id === id);
  if (c) {
    c.status = c.status === 'Active' ? 'Banned' : 'Active';
    saveAllState();

    if (window.supabaseClient) {
      try {
        const { error } = await window.supabaseClient
          .from('customers')
          .update({ status: c.status })
          .eq('id', id);
        if (error) throw error;
        showToast('success', `Customer status sync to Supabase!`);
      } catch (err) {
        console.error(err);
      }
    }
    renderCustomers();
    showToast('info', `Customer ${c.name} is now ${c.status.toUpperCase()}`);
  }
};

// Render Customer Inquiries Inbox Cards
function renderInquiries() {
  const container = document.getElementById('messagesContainer');
  if (!container) return;
  container.innerHTML = '';
  inquiries.forEach(i => {
    const div = document.createElement('div');
    div.className = 'stat-card';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'flex-start';
    div.style.gap = '10px';
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; width: 100%;">
        <strong>💬 Inquiry from ${i.name} (${i.email})</strong>
        <span style="color: var(--color-text-muted); font-size: 0.8rem;">${i.phone || ''}</span>
      </div>
      <p style="color: var(--color-text-main); font-size: 0.9rem; line-height: 1.4; border-left: 2px solid var(--color-primary); padding-left: 10px;">"${i.msg}"</p>
      <div style="display: flex; gap: 10px; margin-top: 5px;">
        <button class="btn-primary" style="width: auto; padding: 6px 14px; font-size: 0.8rem;" onclick="replyToInquiry('${i.email}')">✉️ Send Reply</button>
        <button class="btn-secondary" style="padding: 6px 14px; font-size: 0.8rem; border-color: var(--color-accent); color: var(--color-accent);" onclick="deleteInquiry(${i.id})">🗑️ Delete</button>
      </div>
    `;
    container.appendChild(div);
  });
}

window.replyToInquiry = function(email) {
  showToast('success', `Simulating email reply composer to ${email}...`);
};

window.deleteInquiry = async function(id) {
  inquiries = inquiries.filter(i => i.id !== id);
  saveAllState();

  if (window.supabaseClient) {
    try {
      const { error } = await window.supabaseClient.from('inquiries').delete().eq('id', id);
      if (error) throw error;
    } catch (err) {
      console.error(err);
    }
  }
  renderInquiries();
  showToast('info', 'Inquiry message deleted.');
};

// Render Testimonials Table
function renderTestimonials() {
  const tbody = document.getElementById('testimonialsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  testimonials.forEach(t => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${t.name}</strong></td>
      <td>"${t.text}"</td>
      <td><span style="color: gold;">${t.rating}</span></td>
      <td><span class="badge badge-delivered">${t.status}</span></td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px; border-color: var(--color-accent); color: var(--color-accent);" onclick="deleteTestimonial(${t.id})">🗑️ Remove</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.deleteProduct = async function(id) {
  if (!confirm('Delete this product permanently?')) return;
  products = products.filter(p => p.id != id);
  saveAllState();
  if (window.supabaseClient) {
    try {
      const { error } = await window.supabaseClient.from('products').delete().eq('id', id);
      if (error) throw error;
    } catch (err) { console.error(err); }
  }
  renderAllTables();
  showToast('info', 'Product deleted.');
};

window.deleteFood = async function(id) {
  if (!confirm('Delete this food item permanently?')) return;
  foods = foods.filter(f => f.id != id);
  saveAllState();
  if (window.supabaseClient) {
    try {
      const { error } = await window.supabaseClient.from('foods').delete().eq('id', id);
      if (error) throw error;
    } catch (err) { console.error(err); }
  }
  renderAllTables();
  showToast('info', 'Food item deleted.');
};

window.deleteItem = async function(id) {
  if (!confirm('Delete this item permanently?')) return;
  items = items.filter(it => it.id != id);
  saveAllState();
  if (window.supabaseClient) {
    try {
      const { error } = await window.supabaseClient.from('items').delete().eq('id', id);
      if (error) throw error;
    } catch (err) { console.error(err); }
  }
  renderAllTables();
  showToast('info', 'Item deleted.');
};

window.deleteCategory = async function(name) {
  if (!confirm(`Delete category "${name}" permanently? Products in this category will remain.`)) return;
  categories = categories.filter(c => c.name !== name);
  saveAllState();
  if (window.supabaseClient) {
    try {
      const { error } = await window.supabaseClient.from('categories').delete().eq('name', name);
      if (error) throw error;
    } catch (err) { console.error(err); }
  }
  renderAllTables();
  showToast('info', `Category "${name}" deleted.`);
};

window.deleteCoupon = async function(id) {
  if (!confirm('Delete this coupon permanently?')) return;
  coupons = coupons.filter(c => c.id != id);
  saveAllState();
  if (window.supabaseClient) {
    try {
      const { error } = await window.supabaseClient.from('coupons').delete().eq('id', id);
      if (error) throw error;
    } catch (err) { console.error(err); }
  }
  renderAllTables();
  showToast('info', 'Coupon deleted.');
};

window.deleteTestimonial = async function(id) {
  testimonials = testimonials.filter(t => t.id !== id);
  saveAllState();

  if (window.supabaseClient) {
    try {
      const { error } = await window.supabaseClient.from('testimonials').delete().eq('id', id);
      if (error) throw error;
    } catch (err) {
      console.error(err);
    }
  }
  renderTestimonials();
  showToast('info', 'Testimonial review removed.');
};

// Render Foods Table
function renderFoods() {
  const tbody = document.getElementById('foodsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const searchVal = document.getElementById('searchFoods')?.value.toLowerCase() || '';
  const typeFilter = document.getElementById('filterFoodType')?.value || 'all';

  const filtered = foods.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchVal) || (f.description && f.description.toLowerCase().includes(searchVal));
    const matchesType = typeFilter === 'all' || f.type === typeFilter;
    return matchesSearch && matchesType;
  });

  filtered.forEach(f => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${resolveProductImage(f)}" alt="${f.name}" style="width: 44px; height: 44px; border-radius: 8px; border: 1.5px solid var(--color-primary); object-fit: cover;"></td>
      <td><strong>${f.name}</strong></td>
      <td><span class="badge badge-confirmed">${f.type || 'Pellets'}</span></td>
      <td>${f.suitable || 'All Fishes'}</td>
      <td><strong style="color: var(--color-secondary);">${f.price}</strong></td>
      <td><span class="badge badge-${f.stock === 'In Stock' ? 'delivered' : f.stock === 'Low Stock' ? 'pending' : 'cancelled'}">${f.stock}</span></td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px; margin-right: 6px;" onclick="openEditFood(${f.id})">✏️ Edit</button>
        <button class="btn-secondary" style="padding: 4px 10px; border-color: var(--color-accent); color: var(--color-accent);" onclick="deleteFood(${f.id})">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Aquatic Accessories Table
function renderItems() {
  const tbody = document.getElementById('itemsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const searchVal = document.getElementById('searchItems')?.value.toLowerCase() || '';

  const filtered = items.filter(it => {
    return it.name.toLowerCase().includes(searchVal);
  });

  filtered.forEach(it => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${resolveProductImage(it)}" alt="${it.name}" style="width: 44px; height: 44px; border-radius: 8px; border: 1.5px solid var(--color-primary); object-fit: cover;"></td>
      <td><strong>${it.name}</strong></td>
      <td><strong style="color: var(--color-secondary);">${it.price}</strong></td>
      <td><span class="badge badge-${it.stock === 'In Stock' ? 'delivered' : it.stock === 'Low Stock' ? 'pending' : 'cancelled'}">${it.stock || 'In Stock'}</span></td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px; margin-right: 6px;" onclick="openEditItem(${it.id})">✏️ Edit</button>
        <button class="btn-secondary" style="padding: 4px 10px; border-color: var(--color-accent); color: var(--color-accent);" onclick="deleteItem(${it.id})">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Coupons Table
function renderCoupons() {
  const tbody = document.getElementById('couponsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const searchVal = document.getElementById('searchCoupons')?.value.toLowerCase() || '';

  const filtered = coupons.filter(c => {
    return c.code.toLowerCase().includes(searchVal);
  });

  filtered.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>🎟️ ${c.code}</strong></td>
      <td>${c.type === 'percentage' ? c.value + '%' : '₹' + c.value} OFF</td>
      <td>₹${c.min_order}</td>
      <td>${c.expiry}</td>
      <td>${c.current_usage} / ${c.max_usage || '∞'}</td>
      <td><span class="badge badge-${c.active ? 'delivered' : 'cancelled'}">${c.active ? 'Active' : 'Inactive'}</span></td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px; margin-right: 6px;" onclick="openEditCoupon(${c.id})">✏️ Edit</button>
        <button class="btn-secondary" style="padding: 4px 10px; border-color: var(--color-accent); color: var(--color-accent);" onclick="deleteCoupon(${c.id})">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Media Library visual grid
function renderMediaLibrary() {
  const grid = document.getElementById('mediaLibraryGrid');
  if (!grid) return;
  grid.innerHTML = '';

  // Show Product Images
  products.forEach(p => {
    const div = document.createElement('div');
    div.style.background = 'var(--glass-bg)';
    div.style.border = '1px solid var(--glass-border)';
    div.style.borderRadius = '12px';
    div.style.padding = '8px';
    div.style.textAlign = 'center';
    div.style.position = 'relative';

    const resolvedImg = resolveProductImage(p);
    let displayName = resolvedImg;
    if (displayName.startsWith('data:')) {
      displayName = p.name + ' (Data URL)';
    } else {
      displayName = displayName.replace('fishes/', '').replace('items/', '').replace('food/', '').replace('images/', '');
    }

    div.innerHTML = `
      <img src="${resolvedImg}" style="width: 100%; height: 80px; object-fit: cover; border-radius: 8px; cursor: pointer;" alt="${p.name}" title="Click to copy path / autofill" onclick="copyToClipboard('${resolvedImg}', 'Product image source copied to clipboard!')">
      <div style="font-size: 0.72rem; color: var(--color-text-muted); margin-top: 6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${displayName}">${displayName}</div>
      <div style="font-size: 0.65rem; color: var(--color-primary); margin-top: 2px;">Product Source</div>
    `;
    grid.appendChild(div);
  });

  // Show Custom Media Images
  const mediaList = JSON.parse(localStorage.getItem('sa_media')) || [];
  mediaList.forEach(m => {
    const div = document.createElement('div');
    div.style.background = 'var(--glass-bg)';
    div.style.border = '1px solid var(--glass-border)';
    div.style.borderRadius = '12px';
    div.style.padding = '8px';
    div.style.textAlign = 'center';
    div.style.position = 'relative';

    div.innerHTML = `
      <img src="${m.image}" style="width: 100%; height: 80px; object-fit: cover; border-radius: 8px; cursor: pointer;" alt="${m.name}" title="Click to copy Data URL / autofill" onclick="copyToClipboard('${m.image}', 'Custom media Data URL copied to clipboard!')">
      <div style="font-size: 0.72rem; color: var(--color-text-muted); margin-top: 6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${m.name}">${m.name}</div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px; padding: 0 4px;">
        <span style="font-size: 0.65rem; color: var(--color-secondary);">Uploaded</span>
        <button onclick="deleteMediaItem('${m.id}')" style="background: none; border: none; color: var(--color-accent); cursor: pointer; font-size: 0.8rem; padding: 0; line-height: 1;" title="Delete Image">🗑️</button>
      </div>
    `;
    grid.appendChild(div);
  });
}

function updateOverviewCards() {
  if (document.getElementById('cardTotalProducts')) document.getElementById('cardTotalProducts').textContent = products.length;
  if (document.getElementById('cardActiveOrders')) document.getElementById('cardActiveOrders').textContent = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length;
  if (document.getElementById('ordersCounter')) document.getElementById('ordersCounter').textContent = orders.filter(o => o.status === 'Pending Verification' || o.status === 'pending').length;
  if (document.getElementById('cardTotalCoupons')) document.getElementById('cardTotalCoupons').textContent = coupons.length;
  if (document.getElementById('cardActiveCoupons')) document.getElementById('cardActiveCoupons').textContent = coupons.filter(c => c.active).length;
  if (document.getElementById('cardTotalCustomers')) document.getElementById('cardTotalCustomers').textContent = customers.length;
  
  // Calculate total revenue from orders
  let revenue = 0;
  orders.forEach(o => {
    if (o.status === 'confirmed' || o.status === 'delivered' || o.status === 'shipped') {
      const match = o.amount.match(/₹([\d,]+)/);
      if (match) {
        revenue += parseInt(match[1].replace(/,/g, ''));
      }
    }
  });
  if (document.getElementById('cardTotalRevenue')) document.getElementById('cardTotalRevenue').textContent = '₹' + revenue.toLocaleString('en-IN');
}

// Clipboard copying functionality
window.copyToClipboard = function(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('success', successMsg);
  }).catch(err => {
    showToast('error', 'Failed to copy to clipboard.');
  });
};

// Delete custom media item
window.deleteMediaItem = function(id) {
  if (confirm('Are you sure you want to delete this custom image from Media Library?')) {
    let mediaList = JSON.parse(localStorage.getItem('sa_media')) || [];
    mediaList = mediaList.filter(m => m.id !== id);
    localStorage.setItem('sa_media', JSON.stringify(mediaList));
    renderMediaLibrary();
    showToast('info', 'Image removed from Media Library.');
  }
};

window.viewScreenshot = function(url) {
  const modal = document.getElementById('screenshotModal');
  const img = document.getElementById('screenshotViewerImg');
  if (modal && img) {
    img.src = url;
    modal.classList.add('active');
  }
};

// Open Edit Product Modal
window.openEditProduct = function(id) {
  const p = products.find(prod => prod.id == id);
  if (p) {
    document.getElementById('editProductId').value = p.id;
    document.getElementById('prodName').value = p.name;
    document.getElementById('prodCategory').value = p.category;
    document.getElementById('prodPrice').value = p.price.replace('₹', '');
    document.getElementById('prodImage').value = p.image || '';
    document.getElementById('prodDesc').value = p.description || p.tag || '';

    // Reset file input
    const fileInput = document.getElementById('prodImageFile');
    if (fileInput) fileInput.value = '';

    const imgPreview = document.getElementById('prodImagePreview');
    const imgPlaceholder = document.getElementById('prodImagePlaceholder');

    const resolvedImg = resolveProductImage(p);
    if (imgPreview) {
      imgPreview.src = resolvedImg;
      imgPreview.style.display = 'block';
    }
    if (imgPlaceholder) imgPlaceholder.style.display = 'none';

    document.getElementById('productModalTitle').textContent = 'Edit ' + p.name;
    document.getElementById('productModal').classList.add('active');
  }
};

window.openEditCategory = function(name) {
  const c = categories.find(cat => cat.name === name);
  if (c) {
    document.getElementById('editCategoryName').value = c.name;
    document.getElementById('catName').value = c.name;
    document.getElementById('catImage').value = c.image || '';
    document.getElementById('catStatus').value = c.status || 'Active';

    // Reset file input
    const fileInput = document.getElementById('catImageFile');
    if (fileInput) fileInput.value = '';

    document.getElementById('categoryModalTitle').textContent = 'Edit Category: ' + c.name;
    document.getElementById('categoryModal').classList.add('active');
  }
};

window.openEditFood = function(id) {
  const f = foods.find(food => food.id == id);
  if (f) {
    document.getElementById('editFoodId').value = f.id;
    document.getElementById('foodName').value = f.name;
    document.getElementById('foodType').value = f.type || 'Pellets';
    document.getElementById('foodSuitable').value = f.suitable || 'All Fishes';
    document.getElementById('foodPrice').value = f.price.replace('₹', '');
    document.getElementById('foodStock').value = f.stock || 'In Stock';
    document.getElementById('foodImage').value = f.image || '';
    document.getElementById('foodDesc').value = f.description || '';

    const fileInput = document.getElementById('foodImageFile');
    if (fileInput) fileInput.value = '';

    document.getElementById('foodModalTitle').textContent = 'Edit Food: ' + f.name;
    document.getElementById('foodModal').classList.add('active');
  }
};

window.openEditItem = function(id) {
  const it = items.find(item => item.id == id);
  if (it) {
    document.getElementById('editItemId').value = it.id;
    document.getElementById('itemName').value = it.name;
    document.getElementById('itemPrice').value = it.price.replace('₹', '');
    document.getElementById('itemStock').value = it.stock || 'In Stock';
    document.getElementById('itemImage').value = it.image || '';

    const fileInput = document.getElementById('itemImageFile');
    if (fileInput) fileInput.value = '';

    document.getElementById('itemModalTitle').textContent = 'Edit Item: ' + it.name;
    document.getElementById('itemModal').classList.add('active');
  }
};

window.openEditCoupon = function(id) {
  const c = coupons.find(coup => coup.id == id);
  if (c) {
    document.getElementById('editCouponId').value = c.id;
    document.getElementById('couponCode').value = c.code;
    document.getElementById('couponType').value = c.type;
    document.getElementById('couponValue').value = c.value;
    document.getElementById('couponMinOrder').value = c.min_order;
    document.getElementById('couponExpiry').value = c.expiry;
    document.getElementById('couponMaxUsage').value = c.max_usage || '';
    document.getElementById('couponActiveToggle').checked = c.active;

    document.getElementById('couponModalTitle').textContent = 'Edit Coupon: ' + c.code;
    document.getElementById('couponModal').classList.add('active');
  }
};

// Invoice Modal Open/Close
window.openInvoice = function(id) {
  const o = orders.find(ord => ord.id === id);
  if (o) {
    const area = document.getElementById('invoicePrintArea');
    area.innerHTML = `
=============================================
         SUBRAMANYA AQUATICS INVOICE         
=============================================
Order ID : ${o.id}
Date     : ${o.date}
Status   : ${o.status.toUpperCase()}
---------------------------------------------
CUSTOMER DETAILS:
Name     : ${o.customer}
Delivery : ${o.address || 'Visakhapatnam, Andhra Pradesh'}
Phone    : ${o.phone || '-'}
---------------------------------------------
ITEMS PURCHASED:
${o.product}
---------------------------------------------
Total Amount Due: ${o.amount}
=============================================
      Thank you for your premium purchase!     
=============================================
    `;
    document.getElementById('invoiceModal').classList.add('active');
  }
};

window.closeModal = function(id) {
  document.getElementById(id).classList.remove('active');
};

// 5. Form Submissions Handlers & Modal Controllers
function initFormSubmitHandlers() {
  const modals = [
    { btnId: 'btnAddNewProduct', closeId: 'btnCloseProductModal', modalId: 'productModal', formId: 'productForm', hiddenId: 'editProductId' },
    { btnId: 'btnAddFood', closeId: 'btnCloseFoodModal', modalId: 'foodModal', formId: 'foodForm', hiddenId: 'editFoodId' },
    { btnId: 'btnAddItem', closeId: 'btnCloseItemModal', modalId: 'itemModal', formId: 'itemForm', hiddenId: 'editItemId' },
    { btnId: 'btnAddCategory', closeId: 'btnCloseCategoryModal', modalId: 'categoryModal', formId: 'categoryForm', hiddenId: 'editCategoryName' },
    { btnId: 'btnAddNewCoupon', closeId: 'btnCloseCouponModal', modalId: 'couponModal', formId: 'couponForm', hiddenId: 'editCouponId' }
  ];

  modals.forEach(({ btnId, closeId, modalId, formId, hiddenId }) => {
    const btn = document.getElementById(btnId);
    const closeBtn = document.getElementById(closeId);
    const modal = document.getElementById(modalId);
    const form = document.getElementById(formId);

    if (btn && modal) {
      btn.addEventListener('click', () => {
        form.reset();
        const hiddenInput = document.getElementById(hiddenId);
        if (hiddenInput) hiddenInput.value = '';
        
        if (modalId === 'productModal') {
          document.getElementById('productModalTitle').textContent = 'Add New Fish Item';
          const imgPreview = document.getElementById('prodImagePreview');
          const imgPlaceholder = document.getElementById('prodImagePlaceholder');
          if (imgPreview) imgPreview.style.display = 'none';
          if (imgPlaceholder) imgPlaceholder.style.display = 'block';
        } else if (modalId === 'foodModal') {
          document.getElementById('foodModalTitle').textContent = 'Add Food Item';
        } else if (modalId === 'itemModal') {
          document.getElementById('itemModalTitle').textContent = 'Add Aquatic Item';
        } else if (modalId === 'categoryModal') {
          document.getElementById('categoryModalTitle').textContent = 'Create New Category';
        } else if (modalId === 'couponModal') {
          document.getElementById('couponModalTitle').textContent = 'Create New Coupon';
        }
        modal.classList.add('active');
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }
  });

  const fileHooks = [
    { fileId: 'prodImageFile', textId: 'prodImage', progressId: 'prodImageUploadProgress', folder: 'fishes', previewId: 'prodImagePreview' },
    { fileId: 'foodImageFile', textId: 'foodImage', progressId: 'foodImageUploadProgress', folder: 'food', previewId: null },
    { fileId: 'itemImageFile', textId: 'itemImage', progressId: 'itemImageUploadProgress', folder: 'items', previewId: null },
    { fileId: 'catImageFile', textId: 'catImage', progressId: 'catImageUploadProgress', folder: 'categories', previewId: null },
    { fileId: 'cfgHeroBgFile', textId: 'cfgHeroBg', progressId: 'cfgHeroBgProgress', folder: 'banners', previewId: null },
    { fileId: 'cfgQrImageFile', textId: 'cfgQrImage', progressId: 'cfgQrImageProgress', folder: 'payments', previewId: null }
  ];

  fileHooks.forEach(({ fileId, textId, progressId, folder, previewId }) => {
    const el = document.getElementById(fileId);
    if (el) {
      el.addEventListener('change', () => {
        handleFileUpload(fileId, textId, progressId, folder, previewId);
      });
    }
  });

  const mediaInput = document.getElementById('mockUploadInput');
  if (mediaInput) {
    // Overwrite native inline onchange
    mediaInput.removeAttribute('onchange');
    mediaInput.addEventListener('change', async (e) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;

      showToast('info', `Uploading ${files.length} media files...`);
      let mediaList = JSON.parse(localStorage.getItem('sa_media')) || [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        try {
          let url = '';
          if (window.supabaseClient) {
            const extension = file.name.split('.').pop();
            const cleanName = file.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
            const path = `media/${Date.now()}_${cleanName}.${extension}`;
            
            const { data, error } = await window.supabaseClient.storage
              .from('aquatics-assets')
              .upload(path, file, { cacheControl: '3600', upsert: true });
            
            if (error) throw error;
            const { data: { publicUrl } } = window.supabaseClient.storage
              .from('aquatics-assets')
              .getPublicUrl(path);
            url = publicUrl;
          } else {
            url = await new Promise((resolve) => {
              const reader = new FileReader();
              reader.onload = (evt) => resolve(evt.target.result);
              reader.readAsDataURL(file);
            });
          }

          mediaList.push({
            id: 'med_' + Math.floor(Math.random() * 1000000),
            name: file.name,
            image: url
          });
        } catch (err) {
          console.error(err);
          showToast('error', `Failed to upload: ${file.name}`);
        }
      }

      localStorage.setItem('sa_media', JSON.stringify(mediaList));
      renderMediaLibrary();
      showToast('success', `${files.length} image(s) processed and added to library.`);
    });
  }

  // Live filter event handlers
  document.getElementById('searchProducts')?.addEventListener('input', renderProducts);
  document.getElementById('filterCategory')?.addEventListener('change', renderProducts);
  document.getElementById('searchFoods')?.addEventListener('input', renderFoods);
  document.getElementById('filterFoodType')?.addEventListener('change', renderFoods);
  document.getElementById('searchItems')?.addEventListener('input', renderItems);
  document.getElementById('searchCoupons')?.addEventListener('input', renderCoupons);

  // Form submit listeners

  // 1. Product submit
  document.getElementById('productForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('editProductId').value;
    const name = document.getElementById('prodName').value.trim();
    const category = document.getElementById('prodCategory').value;
    const priceRaw = document.getElementById('prodPrice').value.trim();
    const image = document.getElementById('prodImage').value.trim();
    const desc = document.getElementById('prodDesc').value.trim();

    const price = priceRaw.startsWith('₹') || priceRaw.toLowerCase().includes('contact') ? priceRaw : '₹' + priceRaw;
    const tag = desc ? desc.substring(0, 15) : 'Special';

    const row = { name, category, price, image, tag, description: desc };

    if (id) {
      const p = products.find(prod => prod.id == id);
      if (p) {
        Object.assign(p, row);
        saveAllState();

        if (window.supabaseClient) {
          try {
            const { error } = await window.supabaseClient.from('products').update(row).eq('id', id);
            if (error) throw error;
            showToast('success', `'${name}' updated in Supabase!`);
          } catch (err) {
            console.error(err);
            showToast('error', 'Supabase sync failed: ' + err.message);
          }
        } else {
          showToast('success', `'${name}' updated locally!`);
        }
      }
    } else {
      const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
      const newProd = { id: newId, ...row };
      products.push(newProd);
      saveAllState();

      if (window.supabaseClient) {
        try {
          const { error } = await window.supabaseClient.from('products').insert([newProd]);
          if (error) throw error;
          showToast('success', `'${name}' added to Supabase!`);
        } catch (err) {
          console.error(err);
          showToast('error', 'Supabase sync failed: ' + err.message);
        }
      } else {
        showToast('success', `'${name}' added locally!`);
      }
    }

    renderAllTables();
    document.getElementById('productModal').classList.remove('active');
  });

  // 2. Food submit
  document.getElementById('foodForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('editFoodId').value;
    const name = document.getElementById('foodName').value.trim();
    const type = document.getElementById('foodType').value;
    const suitable = document.getElementById('foodSuitable').value.trim();
    const priceRaw = document.getElementById('foodPrice').value.trim();
    const stock = document.getElementById('foodStock').value;
    const image = document.getElementById('foodImage').value.trim();
    const desc = document.getElementById('foodDesc').value.trim();

    const price = priceRaw.startsWith('₹') || priceRaw.toLowerCase().includes('contact') ? priceRaw : '₹' + priceRaw;
    const row = { name, type, suitable, price, stock, image, description: desc };

    if (id) {
      const f = foods.find(food => food.id == id);
      if (f) {
        Object.assign(f, row);
        saveAllState();

        if (window.supabaseClient) {
          try {
            const { error } = await window.supabaseClient.from('foods').update(row).eq('id', id);
            if (error) throw error;
            showToast('success', `'${name}' updated in Supabase!`);
          } catch (err) {
            console.error(err);
            showToast('error', 'Supabase sync failed: ' + err.message);
          }
        } else {
          showToast('success', `'${name}' updated locally!`);
        }
      }
    } else {
      const newId = foods.length ? Math.max(...foods.map(f => f.id)) + 1 : 50;
      const newFood = { id: newId, ...row };
      foods.push(newFood);
      saveAllState();

      if (window.supabaseClient) {
        try {
          const { error } = await window.supabaseClient.from('foods').insert([newFood]);
          if (error) throw error;
          showToast('success', `'${name}' added to Supabase!`);
        } catch (err) {
          console.error(err);
          showToast('error', 'Supabase sync failed: ' + err.message);
        }
      } else {
        showToast('success', `'${name}' added locally!`);
      }
    }

    renderAllTables();
    document.getElementById('foodModal').classList.remove('active');
  });

  // 3. Item submit
  document.getElementById('itemForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('editItemId').value;
    const name = document.getElementById('itemName').value.trim();
    const priceRaw = document.getElementById('itemPrice').value.trim();
    const stock = document.getElementById('itemStock').value;
    const image = document.getElementById('itemImage').value.trim();

    const price = priceRaw.startsWith('₹') || priceRaw.toLowerCase().includes('contact') ? priceRaw : '₹' + priceRaw;
    const row = { name, price, stock, image };

    if (id) {
      const it = items.find(item => item.id == id);
      if (it) {
        Object.assign(it, row);
        saveAllState();

        if (window.supabaseClient) {
          try {
            const { error } = await window.supabaseClient.from('items').update(row).eq('id', id);
            if (error) throw error;
            showToast('success', `'${name}' accessory updated in Supabase!`);
          } catch (err) {
            console.error(err);
            showToast('error', 'Supabase sync failed: ' + err.message);
          }
        } else {
          showToast('success', `'${name}' accessory updated locally!`);
        }
      }
    } else {
      const newId = items.length ? Math.max(...items.map(it => it.id)) + 1 : 40;
      const newItem = { id: newId, ...row };
      items.push(newItem);
      saveAllState();

      if (window.supabaseClient) {
        try {
          const { error } = await window.supabaseClient.from('items').insert([newItem]);
          if (error) throw error;
          showToast('success', `'${name}' added to Supabase!`);
        } catch (err) {
          console.error(err);
          showToast('error', 'Supabase sync failed: ' + err.message);
        }
      } else {
        showToast('success', `'${name}' added locally!`);
      }
    }

    renderAllTables();
    document.getElementById('itemModal').classList.remove('active');
  });

  // 4. Category submit
  document.getElementById('categoryForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const oldName = document.getElementById('editCategoryName').value;
    const name = document.getElementById('catName').value.trim();
    const image = document.getElementById('catImage').value.trim();
    const status = document.getElementById('catStatus').value;

    const row = { name, image, status };

    if (oldName) {
      const c = categories.find(cat => cat.name === oldName);
      if (c) {
        Object.assign(c, row);
        saveAllState();

        if (window.supabaseClient) {
          try {
            if (oldName !== name) {
              await window.supabaseClient.from('categories').delete().eq('name', oldName);
            }
            const { error } = await window.supabaseClient.from('categories').upsert([row]);
            if (error) throw error;
            showToast('success', `Category '${name}' updated in Supabase!`);
          } catch (err) {
            console.error(err);
            showToast('error', 'Supabase sync failed: ' + err.message);
          }
        } else {
          showToast('success', `Category '${name}' updated locally!`);
        }
      }
    } else {
      const newCat = { count: 0, ...row };
      categories.push(newCat);
      saveAllState();

      if (window.supabaseClient) {
        try {
          const { error } = await window.supabaseClient.from('categories').insert([newCat]);
          if (error) throw error;
          showToast('success', `Category '${name}' added to Supabase!`);
        } catch (err) {
          console.error(err);
          showToast('error', 'Supabase sync failed: ' + err.message);
        }
      } else {
        showToast('success', `Category '${name}' added locally!`);
      }
    }

    renderAllTables();
    document.getElementById('categoryModal').classList.remove('active');
  });

  // 5. Coupon submit
  document.getElementById('couponForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('editCouponId').value;
    const code = document.getElementById('couponCode').value.trim().toUpperCase();
    const type = document.getElementById('couponType').value;
    const value = parseFloat(document.getElementById('couponValue').value);
    const min_order = parseFloat(document.getElementById('couponMinOrder').value);
    const expiry = document.getElementById('couponExpiry').value;
    const max_usage = document.getElementById('couponMaxUsage').value ? parseInt(document.getElementById('couponMaxUsage').value) : null;
    const active = document.getElementById('couponActiveToggle').checked;

    const row = { code, type, value, min_order, expiry, max_usage, active };

    if (id) {
      const c = coupons.find(coup => coup.id == id);
      if (c) {
        Object.assign(c, row);
        saveAllState();

        if (window.supabaseClient) {
          try {
            const { error } = await window.supabaseClient.from('coupons').update(row).eq('id', id);
            if (error) throw error;
            showToast('success', `Coupon '${code}' updated in Supabase!`);
          } catch (err) {
            console.error(err);
            showToast('error', 'Supabase sync failed: ' + err.message);
          }
        } else {
          showToast('success', `Coupon '${code}' updated locally!`);
        }
      }
    } else {
      const newId = coupons.length ? Math.max(...coupons.map(c => c.id)) + 1 : 1;
      const newCoup = { id: newId, current_usage: 0, ...row };
      coupons.push(newCoup);
      saveAllState();

      if (window.supabaseClient) {
        try {
          const { error } = await window.supabaseClient.from('coupons').insert([newCoup]);
          if (error) throw error;
          showToast('success', `Coupon '${code}' added to Supabase!`);
        } catch (err) {
          console.error(err);
          showToast('error', 'Supabase sync failed: ' + err.message);
        }
      } else {
        showToast('success', `Coupon '${code}' added locally!`);
      }
    }

    renderAllTables();
    document.getElementById('couponModal').classList.remove('active');
  });

  // Settings click listeners

  document.getElementById('btnSaveConfig')?.addEventListener('click', async () => {
    const whatsApp = document.getElementById('cfgWhatsApp').value.trim();
    const email = document.getElementById('cfgEmail').value.trim();
    const address = document.getElementById('cfgAddress').value.trim();
    const maintenance = document.getElementById('cfgMaintenance').value;
    const soundPitch = parseInt(document.getElementById('cfgSoundPitch').value) || 400;

    const val = { whatsApp, email, address, maintenance, soundPitch };

    if (window.supabaseClient) {
      try {
        const { error } = await window.supabaseClient.from('settings').upsert([{ key: 'config', value: val }]);
        if (error) throw error;
        showToast('success', 'Configurations saved to Supabase settings!');
      } catch (err) {
        console.error(err);
        showToast('error', 'Failed to save settings: ' + err.message);
      }
    } else {
      localStorage.setItem('sa_cfg_config', JSON.stringify(val));
      showToast('success', 'Configurations saved locally!');
    }
  });

  document.getElementById('btnSaveBanners')?.addEventListener('click', async () => {
    const heroTitle = document.getElementById('cfgHeroTitle').value.trim();
    const heroSubtitle = document.getElementById('cfgHeroSubtitle').value.trim();
    const heroBg = document.getElementById('cfgHeroBg').value.trim();
    const offerTitle = document.getElementById('cfgOfferTitle').value.trim();
    const offerCode = document.getElementById('cfgOfferCode').value.trim();
    const offerTimer = document.getElementById('cfgOfferTimer').value;

    const val = { heroTitle, heroSubtitle, heroBg, offerTitle, offerCode, offerTimer };

    if (window.supabaseClient) {
      try {
        const { error } = await window.supabaseClient.from('settings').upsert([{ key: 'banners', value: val }]);
        if (error) throw error;
        showToast('success', 'Hero sliders and banners saved to Supabase settings!');
      } catch (err) {
        console.error(err);
        showToast('error', 'Failed to save settings: ' + err.message);
      }
    } else {
      localStorage.setItem('sa_cfg_banners', JSON.stringify(val));
      showToast('success', 'Hero sliders and banners saved locally!');
    }
  });

  document.getElementById('btnSavePayments')?.addEventListener('click', async () => {
    const upiId = document.getElementById('cfgUpiId').value.trim();
    const qrImage = document.getElementById('cfgQrImage').value.trim();
    const deliveryCharge = parseFloat(document.getElementById('cfgDeliveryCharge').value) || 0;
    const packingCharge = parseFloat(document.getElementById('cfgPackingCharge').value) || 0;

    const val = { upiId, qrImage, deliveryCharge, packingCharge };

    if (window.supabaseClient) {
      try {
        const { error } = await window.supabaseClient.from('settings').upsert([{ key: 'payments', value: val }]);
        if (error) throw error;
        showToast('success', 'UPI and delivery parameters saved to Supabase settings!');
      } catch (err) {
        console.error(err);
        showToast('error', 'Failed to save settings: ' + err.message);
      }
    } else {
      localStorage.setItem('sa_cfg_payments', JSON.stringify(val));
      showToast('success', 'UPI and delivery parameters saved locally!');
    }
  });

  document.getElementById('btnSaveSEO')?.addEventListener('click', async () => {
    const title = document.querySelector('#sec-seo input.form-input').value.trim();
    const description = document.querySelector('#sec-seo textarea.form-input').value.trim();
    const keywordsInput = document.querySelectorAll('#sec-seo input.form-input')[1];
    const keywords = keywordsInput ? keywordsInput.value.trim() : '';
    const analyticsInput = document.querySelectorAll('#sec-seo input.form-input')[2];
    const analyticsId = analyticsInput ? analyticsInput.value.trim() : '';

    const val = { title, description, keywords, analyticsId };

    if (window.supabaseClient) {
      try {
        const { error } = await window.supabaseClient.from('settings').upsert([{ key: 'seo', value: val }]);
        if (error) throw error;
        showToast('success', 'SEO meta parameters saved to Supabase settings!');
      } catch (err) {
        console.error(err);
        showToast('error', 'Failed to save SEO meta: ' + err.message);
      }
    } else {
      localStorage.setItem('sa_cfg_seo', JSON.stringify(val));
      showToast('success', 'SEO meta parameters saved locally!');
    }
  });

  // 5. Auto-Seed Supabase DB
  document.getElementById('btnAutoSeed')?.addEventListener('click', async () => {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
      showToast('error', 'Supabase credentials not configured!');
      return;
    }

    if (!confirm('Are you sure you want to seed default catalog data to Supabase? This will overwrite duplicate keys.')) {
      return;
    }

    showToast('info', 'Seeding database tables. Please wait...');

    async function restUpsert(table, rows) {
      if (!rows || rows.length === 0) return;
      const url = `${SUPABASE_URL}/rest/v1/${table}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_SERVICE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(rows)
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`${table} upsert failed (${res.status}): ${text}`);
      }
    }
    
    try {
      showToast('info', 'Seeding categories...');
      await restUpsert('categories', categories);

      showToast('info', `Seeding ${products.length} products...`);
      await restUpsert('products', products);

      showToast('info', `Seeding ${foods.length} food items...`);
      await restUpsert('foods', foods);

      showToast('info', `Seeding ${items.length} accessories...`);
      await restUpsert('items', items);

      showToast('info', 'Seeding configurations...');
      await restUpsert('settings', [
        { key: 'config', value: { whatsApp: "+917995549922", email: "contact@subramanyaaquatics.com", address: "Complex, Vizag, Andhra Pradesh, India", maintenance: "no", soundPitch: 400 } },
        { key: 'banners', value: { heroTitle: "SUBRAMANYA AQUATICS", heroSubtitle: "Premium Exotic Fishes & Aquariums", heroBg: "logo.jpeg", offerTitle: "Special Summer Splash Discount!", offerCode: "AQUA10", offerTimer: "2026-12-31" } },
        { key: 'payments', value: { upiId: "7995549922@ybl", qrImage: "qr-code.png", deliveryCharge: 49, packingCharge: 10 } },
        { key: 'seo', value: { title: "SUBRAMANYA AQUATICS | Premium Exotic Fishes & Aquariums", description: "Subramanya Aquatics - Premium exotic fishes, luxury aquariums, and aquatic accessories.", keywords: "aquarium, exotic fish, ornamental fish", analyticsId: "G-SAQUATICS2025" } }
      ]);

      if (coupons.length > 0) {
        showToast('info', `Seeding ${coupons.length} coupons...`);
        await restUpsert('coupons', coupons);
      }

      showToast('success', 'Database seeded successfully!');
      initPortalState();
    } catch (err) {
      console.error(err);
      showToast('error', 'Seeding failed: ' + err.message);
    }
  });
}

// Cloud Upload Image Controller
async function handleFileUpload(fileInputId, textInputId, progressSpanId, folderName, previewImgId) {
  const fileInput = document.getElementById(fileInputId);
  const textInput = document.getElementById(textInputId);
  const progressSpan = document.getElementById(progressSpanId);
  const previewImg = previewImgId ? document.getElementById(previewImgId) : null;
  
  if (!fileInput || !fileInput.files || fileInput.files.length === 0) return;
  const file = fileInput.files[0];
  
  if (!window.supabaseClient) {
    console.warn("Supabase not set up. Storing image as Base64 in text field.");
    if (progressSpan) {
      progressSpan.style.display = 'inline';
      progressSpan.textContent = 'Storing locally...';
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      if (textInput) textInput.value = base64;
      if (previewImg) {
        previewImg.src = base64;
        previewImg.style.display = 'block';
      }
      const placeholder = document.getElementById(fileInputId.replace('File', 'Placeholder'));
      if (placeholder) placeholder.style.display = 'none';
      if (progressSpan) progressSpan.style.display = 'none';
    };
    reader.readAsDataURL(file);
    return;
  }
  
  if (progressSpan) {
    progressSpan.style.display = 'inline';
    progressSpan.textContent = 'Uploading...';
  }
  
  try {
    const extension = file.name.split('.').pop();
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    const filePath = `${folderName}/${Date.now()}_${cleanFileName}.${extension}`;
    
    const { data, error } = await window.supabaseClient.storage
      .from('aquatics-assets')
      .upload(filePath, file, { cacheControl: '3600', upsert: true });
      
    if (error) throw error;
    
    const { data: { publicUrl } } = window.supabaseClient.storage
      .from('aquatics-assets')
      .getPublicUrl(filePath);
      
    if (textInput) textInput.value = publicUrl;
    if (previewImg) {
      previewImg.src = publicUrl;
      previewImg.style.display = 'block';
    }
    const placeholder = document.getElementById(fileInputId.replace('File', 'Placeholder'));
    if (placeholder) placeholder.style.display = 'none';
    
    if (progressSpan) {
      progressSpan.textContent = 'Uploaded!';
      setTimeout(() => { progressSpan.style.display = 'none'; }, 1500);
    }
    showToast('success', `Uploaded to ${folderName} folder successfully!`);
  } catch (err) {
    console.error(err);
    showToast('error', 'Image upload failed: ' + err.message);
    if (progressSpan) progressSpan.style.display = 'none';
  }
}

// 6. Interactive SVG Charts Drawing Engine
function drawAnalyticsCharts() {
  const salesChart = document.getElementById('salesChartBody');
  const catChart = document.getElementById('categoryChartBody');

  if (salesChart) {
    salesChart.innerHTML = `
      <svg viewBox="0 0 500 200" class="svg-chart">
        <defs>
          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="var(--color-primary)" stop-opacity="0.0"/>
          </linearGradient>
        </defs>
        <line x1="10" y1="20" x2="490" y2="20" stroke="rgba(255,255,255,0.05)" />
        <line x1="10" y1="80" x2="490" y2="80" stroke="rgba(255,255,255,0.05)" />
        <line x1="10" y1="140" x2="490" y2="140" stroke="rgba(255,255,255,0.05)" />
        <line x1="10" y1="180" x2="490" y2="180" stroke="rgba(255,255,255,0.1)" />

        <path d="M 20 170 Q 100 130 150 140 T 300 60 T 400 90 T 480 30" fill="none" stroke="var(--color-primary)" stroke-width="3" />
        <path d="M 20 170 Q 100 130 150 140 T 300 60 T 400 90 T 480 30 L 480 180 L 20 180 Z" fill="url(#chartGlow)" />

        <circle cx="20" cy="170" r="4" fill="var(--color-secondary)" />
        <circle cx="150" cy="140" r="4" fill="var(--color-secondary)" />
        <circle cx="300" cy="60" r="4" fill="var(--color-secondary)" />
        <circle cx="480" cy="30" r="4" fill="var(--color-secondary)" />

        <text x="20" y="195" fill="var(--color-text-muted)" font-size="10">Jan</text>
        <text x="150" y="195" fill="var(--color-text-muted)" font-size="10">Mar</text>
        <text x="300" y="195" fill="var(--color-text-muted)" font-size="10">May</text>
        <text x="450" y="195" fill="var(--color-text-muted)" font-size="10">Jul</text>
      </svg>
    `;
  }

  if (catChart) {
    catChart.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 15px; width: 100%; justify-content: center;">
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 5px;">
            <span>🐠 Guppys & Mollies</span>
            <strong>45%</strong>
          </div>
          <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;">
            <div style="width: 45%; height: 100%; background: var(--color-primary); box-shadow: 0 0 8px var(--color-primary);"></div>
          </div>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 5px;">
            <span>🌺 Flowerhorns</span>
            <strong>30%</strong>
          </div>
          <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;">
            <div style="width: 30%; height: 100%; background: var(--color-secondary); box-shadow: 0 0 8px var(--color-secondary);"></div>
          </div>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 5px;">
            <span>🦕 Exotics & Giants</span>
            <strong>25%</strong>
          </div>
          <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;">
            <div style="width: 25%; height: 100%; background: var(--color-accent); box-shadow: 0 0 8px var(--color-accent);"></div>
          </div>
        </div>
      </div>
    `;
  }
}

// Load all from Firestore (stub for Firebase migration compatibility - delegates to Supabase)
window.loadAllFromFirestore = function() {
  showToast('info', 'Syncing all data from Supabase...');
  initPortalState();
};

// Password toggle for admin login
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('passwordToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      const pwInput = document.getElementById('loginPassword');
      const eyeOff = this.querySelector('.eye-off');
      const eyeOn = this.querySelector('.eye-on');
      if (pwInput.type === 'password') {
        pwInput.type = 'text';
        eyeOff.style.display = 'none';
        eyeOn.style.display = 'block';
      } else {
        pwInput.type = 'password';
        eyeOff.style.display = 'block';
        eyeOn.style.display = 'none';
      }
    });
  }
});

// 7. Custom Premium Toast Notification System
window.showToast = function(type, msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  toast.innerHTML = `
    <span style="font-weight: bold; background: rgba(255,255,255,0.1); width: 24px; height: 24px; display: inline-flex; justify-content: center; align-items: center; border-radius: 50%;">${icon}</span>
    <span>${msg}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideInToast 0.35s reverse forwards';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
};


