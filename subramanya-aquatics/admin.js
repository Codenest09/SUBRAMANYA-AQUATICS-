// ========== CLIENT-SIDE IMAGE RESOLUTION ==========
function getSpecificNameMatch(lowerName, category) {
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
    'fishes/White angel.jpg', 'fishes/Marbel angel.jpg', 'fishes/Angel.jpg',
    'fishes/Koi texido.jpg', 'fishes/Dark knight dragon.jpg',
    'fishes/Red cap oranda gold fish.jpeg', 'fishes/standard gold fish.webp',
    'fishes/Arowana silver .webp', 'fishes/Flowerhorn srd.jpg', 'fishes/Copper oscar.webp',
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
    'Wild Oscars': '🦁',
    'Discus': '🐠',
    'Flowerhorns': '🌺',
    'Arowana': '🐉',
    'Gold Fish': '🪙',
    'Exotics & Giants': '🦖',
    'Aquarium Items': '🛠️',
    'Aquarium Decorative Items': '🪸',
    'Fish Food': '🍽️'
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
    categories: { title: 'Store Categories', desc: 'Manage freshwater, saltwater, and gear catalog classes' },
    orders: { title: 'Orders Management', desc: 'Process customer purchase requests, track deliveries and invoices' },
    customers: { title: 'Customers List', desc: 'View, search, filter, or ban registered customers' },
    messages: { title: 'Customer Inquiries', desc: 'Review and reply to customer contact form messages' },
    testimonials: { title: 'Review Testimonials', desc: 'Approve or reject customer ratings' },
    media: { title: 'Media Library', desc: 'Upload, optimize and search fish images or videos' },
    seo: { title: 'SEO Configurations', desc: 'Configure search engine indexing meta tags and sitemaps' },
    settings: { title: 'Portal Settings', desc: 'Change general portal settings, contacts and maintenance modes' }
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

function initPortalState() {
    const defaultProducts = [
      // Guppys
      { id: 1, name: 'Moon Tail Guppys', category: 'Guppys', price: '₹99', image: 'fishes/mixed-guppys.jpg', tag: 'Best Seller' },
      { id: 2, name: 'Premium Mixed', category: 'Guppys', price: '₹99', image: 'fishes/premium-mixed-guppys.jpeg', tag: 'Premium' },
      { id: 3, name: 'Mixed Guppy', category: 'Guppys', price: '₹69', image: 'fishes/mixed-guppys.jpg', tag: 'Standard' },
      { id: 4, name: 'Golden Guppys (24K)', category: 'Guppys', price: '₹249', image: 'fishes/golden-guppy.jpg', tag: 'Exotic' },
      { id: 5, name: 'HB Blue', category: 'Guppys', price: '₹250', image: 'fishes/hb-blue-guppys.jpg', tag: 'Popular' },
      { id: 6, name: 'Koi Guppys', category: 'Guppys', price: '₹249', image: 'fishes/koi-texido.jpg', tag: 'Exotic' },
      { id: 7, name: 'Platinum Guppys', category: 'Guppys', price: '₹99', image: 'fishes/platinum-guppys.webp', tag: 'Regular' },
      { id: 8, name: 'Platinum (Dumbo)', category: 'Guppys', price: '₹250', image: 'fishes/platinum-dumbo-ear-guppys.jpeg', tag: 'Premium' },
      { id: 9, name: 'Dragon Tail', category: 'Guppys', price: '₹250', image: 'fishes/dragon-tail-guppys.jpg', tag: 'Premium' },
      { id: 10, name: "Guppy Baby's", category: 'Guppys', price: '₹7 / pc', image: 'fishes/guppy-babys.png', tag: 'Fry' },
      { id: 11, name: 'Guppy Semi Adults', category: 'Guppys', price: '₹40 / pair', image: 'fishes/guppys-semi-adults.webp', tag: 'Semi Adult' },
      { id: 12, name: 'Koi Texido', category: 'Guppys', price: '₹250', image: 'fishes/koi-texido.jpg', tag: 'Premium' },
      { id: 13, name: 'Dark Knight Dragon', category: 'Guppys', price: '₹250', image: 'fishes/dark-knight-dragon.jpg', tag: 'Premium' },

      // Angels
      { id: 14, name: 'White Angel', category: 'Angels', price: '₹150', image: 'fishes/white-angel.jpg', tag: 'Popular' },
      { id: 15, name: 'Marbel Angel', category: 'Angels', price: '₹199', image: 'fishes/marbel-angel.jpg', tag: 'Popular' },
      { id: 16, name: 'Angel', category: 'Angels', price: '₹100', image: 'fishes/Angel.jpg', tag: 'Standard' },

      // Mollies
      { id: 17, name: 'Mollys', category: 'Mollies', price: '₹49', image: 'fishes/mollies.webp', tag: 'Popular' },
      { id: 18, name: 'Moontail Mollys', category: 'Mollies', price: '₹99', image: 'fishes/moon-tail-mollies.jpg', tag: 'Standard' },
      { id: 19, name: 'Balloon Mollys', category: 'Mollies', price: '₹79', image: 'fishes/ballon-mollies.jpeg', tag: 'Healthy' },
      { id: 20, name: "Molly Baby's", category: 'Mollies', price: '₹5 / pc', image: 'fishes/molly-babyes.jpeg', tag: 'Fry' },

      // Oxy-less Fishes
      { id: 21, name: 'Gourami', category: 'Oxy-less Fishes', price: '₹79', image: 'fishes/Gourami.jpg', tag: 'Healthy' },
      { id: 22, name: 'Plattys', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/platy-fish.webp', tag: 'Standard' },
      { id: 23, name: 'Sword Tail Plattys', category: 'Oxy-less Fishes', price: '₹99', image: 'fishes/sward-tail-platy.jpeg', tag: 'Popular' },
      { id: 24, name: 'Zebra', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/zebra-fish.webp', tag: 'Active' },
      { id: 25, name: 'Sharks (Small)', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/shark-small.webp', tag: 'Active' },
      { id: 26, name: 'Sharks (Medium)', category: 'Oxy-less Fishes', price: '₹99', image: 'fishes/shark-medium.avif', tag: 'Active' },
      { id: 27, name: 'Sharks (Large)', category: 'Oxy-less Fishes', price: 'Contact Us', image: 'fishes/shark-large.jpeg', tag: 'Giant' },
      { id: 28, name: 'Vail Tail Zebra', category: 'Oxy-less Fishes', price: '₹150', image: 'fishes/vail-tail-zebra-yellow.webp', tag: 'Exotic' },

      // Betta's
      { id: 29, name: 'OHM (Males)', category: "Betta's", price: '₹149', image: 'fishes/beta-ohm-male.webp', tag: 'Exotic' },
      { id: 30, name: 'OHM (Female)', category: "Betta's", price: '₹99', image: 'fishes/beta-ohm-females.jpg', tag: 'Standard' },
      { id: 31, name: 'HMPK Male', category: "Betta's", price: '₹250', image: 'fishes/beta-hmpk-male.webp', tag: 'Popular' },
      { id: 32, name: 'Placarts', category: "Betta's", price: '₹499', image: 'fishes/beta-placarts-male.jpg', tag: 'Exotic' },
      { id: 33, name: 'Candy Betta', category: "Betta's", price: 'Contact Us', image: 'fishes/bata-candy-male.jpeg', tag: 'Show Grade' },
      { id: 34, name: 'HMPK Female', category: "Betta's", price: 'Contact Us', image: 'fishes/beta-hmpk-female.jpeg', tag: 'Standard' },

      // Wild Oscars
      { id: 35, name: 'Albino Oscar', category: 'Wild Oscars', price: '₹499', image: 'fishes/albino-oscar-fish.webp', tag: 'Giant' },
      { id: 36, name: 'Tiger Red Oscar', category: 'Wild Oscars', price: '₹499', image: 'fishes/red-tiger-oscar.jpg', tag: 'Giant' },
      { id: 37, name: 'Red Oscar', category: 'Wild Oscars', price: '₹599', image: 'fishes/red-oscar.jpg', tag: 'Premium' },
      { id: 38, name: 'Lemon Oscar', category: 'Wild Oscars', price: '₹599', image: 'fishes/lemon-oscar.jpeg', tag: 'Premium' },
      { id: 39, name: 'Mango Oscar', category: 'Wild Oscars', price: '₹599', image: 'fishes/mango-oscar.jpg', tag: 'Premium' },

      // Discus
      { id: 75, name: 'Premium Discus Fish', category: 'Discus', price: '₹499', image: 'logo.jpeg', tag: 'Exotic' },

      // Flowerhorns
      { id: 40, name: 'SRD', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/srd-flowerhorn.jpg', tag: 'Show Grade' },
      { id: 41, name: 'KML', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/kml-flowerhorn.jpg', tag: 'Show Grade' },
      { id: 42, name: 'F2 Kamfa', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/f2-kamfa.jpg', tag: 'Show Grade' },
      { id: 43, name: 'Polar Parrot Breeding Pair', category: 'Flowerhorns', price: '₹500', image: 'fishes/polar-parrots(-zebra).jpg', tag: 'Breeding Pair' },
      { id: 44, name: 'Polar Parrot Pair', category: 'Flowerhorns', price: '₹250', image: 'fishes/polar-parrots-(-white).jpg', tag: 'Pair' },
      { id: 45, name: 'Parrots', category: 'Flowerhorns', price: '₹999', image: 'fishes/parrot-(-red).jpg', tag: 'Healthy' },

      // Arowana
      { id: 46, name: 'Silver Arowana', category: 'Arowana', price: 'Contact Us', image: 'fishes/silver-arwana.webp', tag: 'Luxury' },
      { id: 47, name: 'Golden Arowana', category: 'Arowana', price: 'Contact Us', image: 'fishes/gold-arwana.jpg', tag: 'Luxury' },
      { id: 48, name: 'Red Arowana', category: 'Arowana', price: 'Contact Us', image: 'fishes/red-arwana.jpeg', tag: 'Luxury' },

      // Gold Fish
      { id: 49, name: 'Gold Fish', category: 'Gold Fish', price: '₹250', image: 'fishes/gold-fish.jpeg', tag: 'Classic' },
      { id: 50, name: 'Black Moor Gold Fish', category: 'Gold Fish', price: '₹99', image: 'fishes/black-more-gold-fish.jpg', tag: 'Dark Accent' },

      // Exotics & Giants
      { id: 51, name: 'Alligator Gar (Small)', category: 'Exotics & Giants', price: '₹1000', image: 'fishes/aligator-gar.jpg', tag: 'Exotic' },
      { id: 52, name: 'Cichlids', category: 'Exotics & Giants', price: '₹200', image: 'fishes/Chichilids.jpg', tag: 'Standard' },
      { id: 53, name: 'Channa Fish', category: 'Exotics & Giants', price: '₹2000', image: 'fishes/snake-head-fish.jpg', tag: 'Exotic' },
      { id: 54, name: 'Japanese Koi', category: 'Exotics & Giants', price: '₹1000', image: 'fishes/japanese-koi-fish.jpg', tag: 'Classic' },
      { id: 55, name: 'Indian Koi', category: 'Exotics & Giants', price: 'Contact Us', image: 'fishes/indian-koi-fish.jpeg', tag: 'Standard' },
      { id: 56, name: 'Giant Gourami', category: 'Exotics & Giants', price: '₹1000', image: 'fishes/giant-gourami-baby.jpg', tag: 'Giant' },

      // Aquarium Items
      { id: 57, name: 'Aquarium Heater (50W)', category: 'Aquarium Items', price: '₹300', image: 'items/50w-aquarium-heater.webp', tag: 'Heater' },
      { id: 58, name: 'Aquarium Heater (100W)', category: 'Aquarium Items', price: '₹350', image: 'items/100-w-aquarium-heater.webp', tag: 'Heater' },
      { id: 59, name: 'Aquarium Light Large', category: 'Aquarium Items', price: '₹400', image: 'items/aquarium-light-(large-).jpg', tag: 'Light' },
      { id: 60, name: 'Aquarium Light Small', category: 'Aquarium Items', price: '₹300', image: 'items/aquarium-light-(small).jpg', tag: 'Light' },
      { id: 61, name: 'Bubble Oxygen', category: 'Aquarium Items', price: '₹200', image: 'items/buble-oxygen.webp', tag: 'Oxygen' },
      { id: 62, name: 'Double Oxygen', category: 'Aquarium Items', price: '₹300', image: 'items/double-oxygen.webp', tag: 'Oxygen' },
      { id: 63, name: 'Internal Oxygen (Small)', category: 'Aquarium Items', price: '₹300', image: 'items/internal-oxgyen-(small).webp', tag: 'Oxygen' },
      { id: 64, name: 'Internal Oxygen (Large)', category: 'Aquarium Items', price: '₹400', image: 'items/internal-oxgyen-(big).jpg', tag: 'Oxygen' },

      // Aquarium Decorative Items
      { id: 65, name: 'Plastic Plants Piece', category: 'Aquarium Decorative Items', price: '₹25', image: 'items/plastic-plants-(small).jpg', tag: 'Decor' },
      { id: 66, name: 'Stones (1kg)', category: 'Aquarium Decorative Items', price: '₹50', image: 'items/stones.jpg', tag: 'Decor' },

      // Fish Food
      { id: 67, name: 'Dry Worms (10g)', category: 'Fish Food', price: '₹25', image: 'food/dry-worms-cubes.jpeg', tag: 'Food' },
      { id: 68, name: 'Farm Food (100g)', category: 'Fish Food', price: '₹200', image: 'food/farm-food.jpg', tag: 'Food' },
      { id: 69, name: 'Okiko Black Pearl Flowerhorn Food', category: 'Fish Food', price: '₹300', image: 'food/okiko-black-pearl-flowehorn-food.webp', tag: 'Food' },
      { id: 70, name: 'Okiko Head Power Flowerhorns Food', category: 'Fish Food', price: '₹300', image: 'food/okiko-head-power-flowerhorns-food.jpeg', tag: 'Food' },
      { id: 71, name: 'Okiko Red Diamond Flowerhorn Food', category: 'Fish Food', price: '₹300', image: 'food/okoko-red-diamond-fish-food.jpg', tag: 'Food' },
      { id: 72, name: 'Optimun 3 in 1 Fish Food', category: 'Fish Food', price: '₹160', image: 'food/optimun-3-in-1-fish-food.webp', tag: 'Food' },
      { id: 73, name: 'Tiyo Fish Food (Small)', category: 'Fish Food', price: '₹20', image: 'food/tiyo-fish-food-(small).jpeg', tag: 'Food' },
      { id: 74, name: 'Tiyo Fish Food', category: 'Fish Food', price: '₹30', image: 'food/tiyo-fish-food(large).jpg', tag: 'Food' }
    ];

    const defaultCategories = [
      { name: 'Guppys', count: 13, image: 'fishes/premium-mixed-guppys.jpeg', status: 'Active' },
      { name: 'Angels', count: 3, image: 'fishes/white-angel.jpg', status: 'Active' },
      { name: 'Mollies', count: 4, image: 'fishes/mollies.webp', status: 'Active' },
      { name: 'Oxy-less Fishes', count: 8, image: 'fishes/Gourami.jpg', status: 'Active' },
      { name: "Betta's", count: 6, image: 'fishes/beta-hmpk-male.webp', status: 'Active' },
      { name: 'Wild Oscars', count: 5, image: 'fishes/red-oscar.jpg', status: 'Active' },
      { name: 'Discus', count: 1, image: 'logo.jpeg', status: 'Active' },
      { name: 'Flowerhorns', count: 6, image: 'fishes/srd-flowerhorn.jpg', status: 'Active' },
      { name: 'Arowana', count: 3, image: 'fishes/silver-arwana.webp', status: 'Active' },
      { name: 'Gold Fish', count: 2, image: 'fishes/gold-fish.jpeg', status: 'Active' },
      { name: 'Exotics & Giants', count: 6, image: 'fishes/japanese-koi-fish.jpg', status: 'Active' },
      { name: 'Aquarium Items', count: 8, image: 'logo.jpeg', status: 'Active' },
      { name: 'Aquarium Decorative Items', count: 2, image: 'logo.jpeg', status: 'Active' },
      { name: 'Fish Food', count: 8, image: 'food/dry-worms-cubes.jpeg', status: 'Active' }
    ];

  const defaultOrders = [
    { id: 'ORD-8932', customer: 'Rajesh Kumar', product: 'Silver Arowana (1 Pair)', amount: 'Contact Us', status: 'confirmed', date: 'May 06, 2026' },
    { id: 'ORD-8933', customer: 'Priya Sharma', product: 'Golden Guppys 24K (5 pairs)', amount: '₹1,245', status: 'delivered', date: 'May 05, 2026' },
    { id: 'ORD-8934', customer: 'Vikram Patel', product: 'Black Moor Gold Fish (2 pairs)', amount: '₹198', status: 'pending', date: 'May 04, 2026' },
    { id: 'ORD-8935', customer: 'Anitha Reddy', product: 'Polar Parrot Breeding Pair (1 Pair)', amount: '₹500', status: 'shipped', date: 'May 03, 2026' }
  ];

  const defaultCustomers = [
    { id: 'CUST-001', name: 'Rajesh Kumar', email: 'rajesh@gmail.com', orders: 4, status: 'Active' },
    { id: 'CUST-002', name: 'Priya Sharma', email: 'priya@gmail.com', orders: 2, status: 'Active' },
    { id: 'CUST-003', name: 'Vikram Patel', email: 'vikram@gmail.com', orders: 1, status: 'Active' },
    { id: 'CUST-004', name: 'Anitha Reddy', email: 'anitha@gmail.com', orders: 7, status: 'Active' }
  ];

  const defaultTestimonials = [
    { name: 'Rajesh Kumar', text: 'Absolutely amazing collection of exotic fishes! The Arowana I purchased is healthy and stunning.', rating: '⭐⭐⭐⭐⭐', status: 'Approved' },
    { name: 'Priya Sharma', text: 'Got my entire aquarium setup done by Subramanya Aquatics. The planted tank looks like an underwater paradise.', rating: '⭐⭐⭐⭐⭐', status: 'Approved' }
  ];

  const defaultInquiries = [
    { id: 1, name: 'Sanjay Kumar', email: 'sanjay@gmail.com', msg: 'Do you ship live fishes to Hyderabad safely? Looking for some SRD Flowerhorn.', phone: '+91 98765 43210' },
    { id: 2, name: 'Megha Sen', email: 'megha@yahoo.com', msg: 'Interested in getting a custom 3ft glass aquarium setup for my living room.', phone: '+91 87654 32109' }
  ];

  // Load state from local storage or set defaults
  let storedProducts = localStorage.getItem('sa_products');
  // Clear stale localStorage if it contains bad paths (i.e. paths containing old deleted images/ folder or outdated default paths)
  if (storedProducts) {
    try {
      const parsed = JSON.parse(storedProducts);
      const hasBadPaths = parsed.some(p => {
        if (!p.image) return true;
        if (p.image.startsWith('images/')) return true;
        // If it's a default product (id <= 74), check if the image matches our new mapping
        if (p.id <= 74) {
          const expectedImage = defaultProducts.find(dp => dp.id === p.id)?.image;
          if (expectedImage && p.image !== expectedImage) {
            return true;
          }
        }
        return false;
      });
      if (hasBadPaths) {
        localStorage.removeItem('sa_products');
        localStorage.removeItem('sa_categories');
        storedProducts = null;
      }
    } catch(e) {
      localStorage.removeItem('sa_products');
      storedProducts = null;
    }
  }

  products = storedProducts ? JSON.parse(storedProducts) : defaultProducts;
  categories = JSON.parse(localStorage.getItem('sa_categories')) || defaultCategories;
  orders = JSON.parse(localStorage.getItem('sa_orders')) || defaultOrders;
  customers = JSON.parse(localStorage.getItem('sa_customers')) || defaultCustomers;
  testimonials = JSON.parse(localStorage.getItem('sa_testimonials')) || defaultTestimonials;
  inquiries = JSON.parse(localStorage.getItem('sa_inquiries')) || defaultInquiries;

  saveAllState();

  // Render everything
  renderProducts();
  renderCategories();
  renderOrders();
  renderCustomers();
  renderInquiries();
  renderTestimonials();
  renderMediaLibrary();

  // Update counters
  document.getElementById('cardTotalProducts').textContent = products.length;
  document.getElementById('cardActiveOrders').textContent = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length;
  document.getElementById('ordersCounter').textContent = orders.filter(o => o.status === 'pending').length;

}

function saveAllState() {
  try {
    localStorage.setItem('sa_products', JSON.stringify(products));
    localStorage.setItem('sa_categories', JSON.stringify(categories));
    localStorage.setItem('sa_orders', JSON.stringify(orders));
    localStorage.setItem('sa_customers', JSON.stringify(customers));
    localStorage.setItem('sa_testimonials', JSON.stringify(testimonials));
    localStorage.setItem('sa_inquiries', JSON.stringify(inquiries));
  } catch (e) {
    console.error('localStorage save failed:', e.message);
    if (e.name === 'QuotaExceededError' || e.code === 22) {
      showToast('error', 'Storage full! Custom image data is too large for browser storage.');
    }
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
      <td>${c.count} items</td>
      <td><span style="font-size: 0.8rem; color: var(--color-text-muted);">${c.image}</span></td>
      <td><span class="badge badge-delivered">${c.status}</span></td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px;" onclick="showToast('info', 'Edit category is available!')">✏️ Edit</button>
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
    tr.innerHTML = `
      <td><strong>${o.id}</strong></td>
      <td>${o.customer}</td>
      <td>${o.product}</td>
      <td><strong style="color: var(--color-secondary);">${o.amount}</strong></td>
      <td><span class="badge badge-${o.status}">${o.status.toUpperCase()}</span></td>
      <td>${o.date}</td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px; margin-right: 6px;" onclick="openInvoice('${o.id}')">🖨️ Invoice</button>
        <select class="select-filter" style="padding: 4px 8px; font-size: 0.8rem; height: auto;" onchange="changeOrderStatus('${o.id}', this.value)">
          <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Pending</option>
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
window.changeOrderStatus = function(id, val) {
  const o = orders.find(ord => ord.id === id);
  if (o) {
    o.status = val;
    saveAllState();
    initPortalState();
    showToast('success', `Order ${id} status updated to ${val.toUpperCase()}!`);
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

window.toggleCustomerStatus = function(id) {
  const c = customers.find(cust => cust.id === id);
  if (c) {
    c.status = c.status === 'Active' ? 'Banned' : 'Active';
    saveAllState();
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
        <span style="color: var(--color-text-muted); font-size: 0.8rem;">${i.phone}</span>
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

window.deleteInquiry = function(id) {
  inquiries = inquiries.filter(i => i.id !== id);
  saveAllState();
  renderInquiries();
  showToast('info', 'Inquiry message deleted.');
};

// Render Testimonials Table
function renderTestimonials() {
  const tbody = document.getElementById('testimonialsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  testimonials.forEach((t, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${t.name}</strong></td>
      <td>"${t.text}"</td>
      <td><span style="color: gold;">${t.rating}</span></td>
      <td><span class="badge badge-delivered">${t.status}</span></td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px; border-color: var(--color-accent); color: var(--color-accent);" onclick="deleteTestimonial(${index})">🗑️ Remove</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.deleteTestimonial = function(index) {
  testimonials.splice(index, 1);
  saveAllState();
  renderTestimonials();
  showToast('info', 'Testimonial review removed.');
};

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



// 5. Form Submissions Handlers & Modal Controllers
function initFormSubmitHandlers() {
  const modal = document.getElementById('productModal');
  const btnAdd = document.getElementById('btnAddNewProduct');
  const btnClose = document.getElementById('btnCloseProductModal');
  const form = document.getElementById('productForm');

  const fileInput = document.getElementById('prodImageFile');
  const base64Input = document.getElementById('prodImageBase64');
  const imgPreview = document.getElementById('prodImagePreview');
  const imgPlaceholder = document.getElementById('prodImagePlaceholder');

  // File reader change event listener
  fileInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const base64Str = evt.target.result;
        base64Input.value = base64Str;
        if (imgPreview) {
          imgPreview.src = base64Str;
          imgPreview.style.display = 'block';
        }
        if (imgPlaceholder) {
          imgPlaceholder.style.display = 'none';
        }
      };
      reader.readAsDataURL(file);
    } else {
      base64Input.value = '';
      if (imgPreview) {
        imgPreview.src = '';
        imgPreview.style.display = 'none';
      }
      if (imgPlaceholder) {
        imgPlaceholder.style.display = 'block';
      }
    }
  });

  // Search & filter live updates
  document.getElementById('searchProducts')?.addEventListener('input', renderProducts);
  document.getElementById('filterCategory')?.addEventListener('change', renderProducts);

  if (btnAdd && modal) {
    btnAdd.addEventListener('click', () => {
      form.reset();
      document.getElementById('editProductId').value = '';
      document.getElementById('productModalTitle').textContent = 'Add New Fish Item';
      
      // Reset image preview state
      if (base64Input) base64Input.value = '';
      if (imgPreview) {
        imgPreview.src = '';
        imgPreview.style.display = 'none';
      }
      if (imgPlaceholder) {
        imgPlaceholder.style.display = 'block';
      }
      
      modal.classList.add('active');
    });
  }

  if (btnClose && modal) {
    btnClose.addEventListener('click', () => modal.classList.remove('active'));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('editProductId').value;
      const name = document.getElementById('prodName').value;
      const category = document.getElementById('prodCategory').value;
      const price = document.getElementById('prodPrice').value;
      const image = base64Input.value || ''; // Custom Base64 if uploaded, otherwise empty
      const desc = document.getElementById('prodDesc').value;
      let actionLabel = '';

      if (id) {
        // Edit existing
        const p = products.find(prod => prod.id == id);
        if (p) {
          p.name = name;
          p.category = category;
          p.price = price.startsWith('₹') || price.toLowerCase().includes('contact') ? price : '₹' + price;
          if (image) {
            p.image = image;
          }
          p.tag = desc ? desc.substring(0, 15) : 'Special';
          actionLabel = `${name} updated`;
        }
      } else {
        // Add new
        const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({
          id: newId,
          name: name,
          category: category,
          price: price.startsWith('₹') || price.toLowerCase().includes('contact') ? price : '₹' + price,
          image: image || 'logo.jpeg',
          tag: desc ? desc.substring(0, 15) : 'New'
        });
        actionLabel = `New fish '${name}' added`;
      }

      // Save state to localStorage
      saveAllState();
      showToast('success', `${actionLabel} successfully! Changes are updated on the website.`);

      initPortalState();
      modal.classList.remove('active');
    });
  }

  // Configurations submission
  document.getElementById('btnSaveConfig')?.addEventListener('click', () => {
    showToast('success', 'Subramanya Aquatics core configuration saved successfully!');
  });
}

// Open Edit Product Modal
window.openEditProduct = function(id) {
  const p = products.find(prod => prod.id == id);
  if (p) {
    document.getElementById('editProductId').value = p.id;
    document.getElementById('prodName').value = p.name;
    document.getElementById('prodCategory').value = p.category;
    document.getElementById('prodPrice').value = p.price.replace('₹', '');
    document.getElementById('prodDesc').value = p.tag;

    // Reset file input
    const fileInput = document.getElementById('prodImageFile');
    if (fileInput) fileInput.value = '';

    const base64Input = document.getElementById('prodImageBase64');
    const imgPreview = document.getElementById('prodImagePreview');
    const imgPlaceholder = document.getElementById('prodImagePlaceholder');

    const resolvedImg = resolveProductImage(p);
    if (p.image && p.image.startsWith('data:')) {
      if (base64Input) base64Input.value = p.image;
      if (imgPreview) {
        imgPreview.src = p.image;
        imgPreview.style.display = 'block';
      }
      if (imgPlaceholder) imgPlaceholder.style.display = 'none';
    } else {
      if (base64Input) base64Input.value = '';
      if (imgPreview) {
        imgPreview.src = resolvedImg;
        imgPreview.style.display = 'block';
      }
      if (imgPlaceholder) imgPlaceholder.style.display = 'none';
    }

    document.getElementById('productModalTitle').textContent = 'Edit ' + p.name;
    document.getElementById('productModal').classList.add('active');
  }
};

// Delete Product
window.deleteProduct = function(id) {
  const p = products.find(prod => prod.id == id);
  if (p && confirm(`Are you sure you want to delete ${p.name} from catalog?`)) {
    products = products.filter(prod => prod.id != id);
    saveAllState();
    showToast('success', 'Product deleted successfully.');
    initPortalState();
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
Delivery : Visakhapatnam, Andhra Pradesh
---------------------------------------------
ITEMS PURCHASED:
1. ${o.product}
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
        <!-- Grid lines -->
        <line x1="10" y1="20" x2="490" y2="20" stroke="rgba(255,255,255,0.05)" />
        <line x1="10" y1="80" x2="490" y2="80" stroke="rgba(255,255,255,0.05)" />
        <line x1="10" y1="140" x2="490" y2="140" stroke="rgba(255,255,255,0.05)" />
        <line x1="10" y1="180" x2="490" y2="180" stroke="rgba(255,255,255,0.1)" />

        <!-- Line graph -->
        <path d="M 20 170 Q 100 130 150 140 T 300 60 T 400 90 T 480 30" fill="none" stroke="var(--color-primary)" stroke-width="3" />
        <path d="M 20 170 Q 100 130 150 140 T 300 60 T 400 90 T 480 30 L 480 180 L 20 180 Z" fill="url(#chartGlow)" />

        <!-- Data dots -->
        <circle cx="20" cy="170" r="4" fill="var(--color-secondary)" />
        <circle cx="150" cy="140" r="4" fill="var(--color-secondary)" />
        <circle cx="300" cy="60" r="4" fill="var(--color-secondary)" />
        <circle cx="480" cy="30" r="4" fill="var(--color-secondary)" />

        <!-- Axis Labels -->
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

  // Auto remove toast
  setTimeout(() => {
    toast.style.animation = 'slideInToast 0.35s reverse forwards';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
};


