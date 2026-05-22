// ========== CLIENT-SIDE IMAGE RESOLUTION ==========
function resolveProductImage(p) {
  if (!p) return 'logo.jpeg';
  const imgPath = p.image || '';
  if (imgPath.startsWith('data:') || imgPath === 'logo.jpeg' || imgPath === 'qr-code.png') {
    return imgPath;
  }

  // Construct a beautiful dynamic inline SVG with linear gradient and category emoji
  const category = (p.category || 'Aquarium Items').trim();
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

  // Generate a unique gradient pair based on category name hashing
  let hash = 0;
  for (let i = 0; i < category.length; i++) {
    hash = category.charCodeAt(i) + ((hash << 5) - hash);
  }

  const colors = [
    ['#00c6ff', '#0072ff'], // blue-blue
    ['#f857a6', '#ff5858'], // pink-orange
    ['#11998e', '#38ef7d'], // teal-green
    ['#FF8008', '#FFC837'], // orange-yellow
    ['#8A2387', '#E94057'], // purple-red
    ['#1AD6FD', '#1D62F0'], // neon-blue
    ['#8e2de2', '#4a00e0']  // violet
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
    { id: 1, name: 'Moon Tail Guppys', category: 'Guppys', price: '₹99', image: 'images/guppies.png', tag: 'Best Seller' },
    { id: 2, name: 'Premium Mixed', category: 'Guppys', price: '₹99', image: 'images/guppies.png', tag: 'Premium' },
    { id: 3, name: 'Mixed Guppy', category: 'Guppys', price: '₹69', image: 'images/guppies.png', tag: 'Standard' },
    { id: 4, name: 'Golden Guppys (24K)', category: 'Guppys', price: '₹249', image: 'images/guppies.png', tag: 'Exotic' },
    { id: 5, name: 'HB Blue', category: 'Guppys', price: '₹250', image: 'images/guppies.png', tag: 'Popular' },
    { id: 6, name: 'Koi Guppys', category: 'Guppys', price: '₹249', image: 'images/guppies.png', tag: 'Exotic' },
    { id: 7, name: 'Platinum Guppys', category: 'Guppys', price: '₹99', image: 'images/guppies.png', tag: 'Regular' },
    { id: 8, name: 'Platinum (Dumbo)', category: 'Guppys', price: '₹250', image: 'images/guppies.png', tag: 'Premium' },
    { id: 9, name: 'Dragon Tail', category: 'Guppys', price: '₹250', image: 'images/guppies.png', tag: 'Premium' },
    { id: 10, name: "Guppy Baby's", category: 'Guppys', price: '₹7 / pc', image: 'images/guppies.png', tag: 'Fry' },
    { id: 11, name: 'Guppy Semi Adults', category: 'Guppys', price: '₹40 / pair', image: 'images/guppies.png', tag: 'Semi Adult' },
    { id: 12, name: 'Koi Texido', category: 'Guppys', price: '₹250', image: 'images/guppies.png', tag: 'Premium' },
    { id: 13, name: 'Dark Knight Dragon', category: 'Guppys', price: '₹250', image: 'images/guppies.png', tag: 'Premium' },

    // Angels
    { id: 14, name: 'White Angel', category: 'Angels', price: '₹150', image: 'images/betta.png', tag: 'Popular' },
    { id: 15, name: 'Marbel Angel', category: 'Angels', price: '₹199', image: 'images/betta.png', tag: 'Popular' },
    { id: 16, name: 'Angel', category: 'Angels', price: '₹100', image: 'images/betta.png', tag: 'Standard' },

    // Mollies
    { id: 17, name: 'Mollys', category: 'Mollies', price: '₹49', image: 'images/guppies.png', tag: 'Popular' },
    { id: 18, name: 'Moontail Mollys', category: 'Mollies', price: '₹99', image: 'images/guppies.png', tag: 'Standard' },
    { id: 19, name: 'Balloon Mollys', category: 'Mollies', price: '₹79', image: 'images/guppies.png', tag: 'Healthy' },
    { id: 20, name: "Molly Baby's", category: 'Mollies', price: '₹5 / pc', image: 'images/guppies.png', tag: 'Fry' },

    // Oxy-less Fishes
    { id: 21, name: 'Gourami', category: 'Oxy-less Fishes', price: '₹79', image: 'images/discus.png', tag: 'Healthy' },
    { id: 22, name: 'Plattys', category: 'Oxy-less Fishes', price: '₹59', image: 'images/discus.png', tag: 'Standard' },
    { id: 23, name: 'Sword Tail Plattys', category: 'Oxy-less Fishes', price: '₹99', image: 'images/discus.png', tag: 'Popular' },
    { id: 24, name: 'Zebra', category: 'Oxy-less Fishes', price: '₹59', image: 'images/discus.png', tag: 'Active' },
    { id: 25, name: 'Sharks (Small)', category: 'Oxy-less Fishes', price: '₹59', image: 'images/discus.png', tag: 'Active' },
    { id: 26, name: 'Sharks (Medium)', category: 'Oxy-less Fishes', price: '₹99', image: 'images/discus.png', tag: 'Active' },
    { id: 27, name: 'Sharks (Large)', category: 'Oxy-less Fishes', price: 'Contact Us', image: 'images/discus.png', tag: 'Giant' },
    { id: 28, name: 'Vail Tail Zebra', category: 'Oxy-less Fishes', price: '₹150', image: 'images/discus.png', tag: 'Exotic' },

    // Betta's
    { id: 29, name: 'OHM (Males)', category: "Betta's", price: '₹149', image: 'images/betta.png', tag: 'Exotic' },
    { id: 30, name: 'OHM (Female)', category: "Betta's", price: '₹99', image: 'images/betta.png', tag: 'Standard' },
    { id: 31, name: 'HMPK Male', category: "Betta's", price: '₹250', image: 'images/betta.png', tag: 'Popular' },
    { id: 32, name: 'Placarts', category: "Betta's", price: '₹499', image: 'images/betta.png', tag: 'Exotic' },
    { id: 33, name: 'Candy Betta', category: "Betta's", price: 'Contact Us', image: 'images/betta.png', tag: 'Show Grade' },
    { id: 34, name: 'HMPK Female', category: "Betta's", price: 'Contact Us', image: 'images/betta.png', tag: 'Standard' },

    // Wild Oscars
    { id: 35, name: 'Albino Oscar', category: 'Wild Oscars', price: '₹499', image: 'images/oscar.png', tag: 'Giant' },
    { id: 36, name: 'Tiger Red Oscar', category: 'Wild Oscars', price: '₹499', image: 'images/oscar.png', tag: 'Giant' },
    { id: 37, name: 'Red Oscar', category: 'Wild Oscars', price: '₹599', image: 'images/oscar.png', tag: 'Premium' },
    { id: 38, name: 'Lemon Oscar', category: 'Wild Oscars', price: '₹599', image: 'images/oscar.png', tag: 'Premium' },
    { id: 39, name: 'Mango Oscar', category: 'Wild Oscars', price: '₹599', image: 'images/oscar.png', tag: 'Premium' },

    // Discus
    { id: 75, name: 'Premium Discus Fish', category: 'Discus', price: '₹499', image: 'images/discus.png', tag: 'Exotic' },

    // Flowerhorns
    { id: 40, name: 'SRD', category: 'Flowerhorns', price: 'Contact Us', image: 'images/flowerhorn.png', tag: 'Show Grade' },
    { id: 41, name: 'KML', category: 'Flowerhorns', price: 'Contact Us', image: 'images/flowerhorn.png', tag: 'Show Grade' },
    { id: 42, name: 'F2 Kamfa', category: 'Flowerhorns', price: 'Contact Us', image: 'images/flowerhorn.png', tag: 'Show Grade' },
    { id: 43, name: 'Polar Parrot Breeding Pair', category: 'Flowerhorns', price: '₹500', image: 'images/flowerhorn.png', tag: 'Breeding Pair' },
    { id: 44, name: 'Polar Parrot Pair', category: 'Flowerhorns', price: '₹250', image: 'images/flowerhorn.png', tag: 'Pair' },
    { id: 45, name: 'Parrots', category: 'Flowerhorns', price: '₹999', image: 'images/flowerhorn.png', tag: 'Healthy' },

    // Arowana
    { id: 46, name: 'Silver Arowana', category: 'Arowana', price: 'Contact Us', image: 'images/arowana.png', tag: 'Luxury' },
    { id: 47, name: 'Golden Arowana', category: 'Arowana', price: 'Contact Us', image: 'images/arowana.png', tag: 'Luxury' },
    { id: 48, name: 'Red Arowana', category: 'Arowana', price: 'Contact Us', image: 'images/arowana.png', tag: 'Luxury' },

    // Gold Fish
    { id: 49, name: 'Gold Fish', category: 'Gold Fish', price: '₹250', image: 'images/goldfish.png', tag: 'Classic' },
    { id: 50, name: 'Black Moor Gold Fish', category: 'Gold Fish', price: '₹99', image: 'images/goldfish.png', tag: 'Dark Accent' },

    // Exotics & Giants
    { id: 51, name: 'Alligator Gar (Small)', category: 'Exotics & Giants', price: '₹1000', image: 'images/koi.png', tag: 'Exotic' },
    { id: 52, name: 'Cichlids', category: 'Exotics & Giants', price: '₹200', image: 'images/koi.png', tag: 'Standard' },
    { id: 53, name: 'Channa Fish', category: 'Exotics & Giants', price: '₹2000', image: 'images/koi.png', tag: 'Exotic' },
    { id: 54, name: 'Japanese Koi', category: 'Exotics & Giants', price: '₹1000', image: 'images/koi.png', tag: 'Classic' },
    { id: 55, name: 'Indian Koi', category: 'Exotics & Giants', price: 'Contact Us', image: 'images/koi.png', tag: 'Standard' },
    { id: 56, name: 'Giant Gourami', category: 'Exotics & Giants', price: '₹1000', image: 'images/koi.png', tag: 'Giant' },

    // Aquarium Items
    { id: 57, name: 'Aquarium Heater (50W)', category: 'Aquarium Items', price: '₹300', image: 'logo.jpeg', tag: 'Heater' },
    { id: 58, name: 'Aquarium Heater (100W)', category: 'Aquarium Items', price: '₹350', image: 'logo.jpeg', tag: 'Heater' },
    { id: 59, name: 'Aquarium Light Large', category: 'Aquarium Items', price: '₹400', image: 'logo.jpeg', tag: 'Light' },
    { id: 60, name: 'Aquarium Light Small', category: 'Aquarium Items', price: '₹300', image: 'logo.jpeg', tag: 'Light' },
    { id: 61, name: 'Bubble Oxygen', category: 'Aquarium Items', price: '₹200', image: 'logo.jpeg', tag: 'Oxygen' },
    { id: 62, name: 'Double Oxygen', category: 'Aquarium Items', price: '₹300', image: 'logo.jpeg', tag: 'Oxygen' },
    { id: 63, name: 'Internal Oxygen (Small)', category: 'Aquarium Items', price: '₹300', image: 'logo.jpeg', tag: 'Oxygen' },
    { id: 64, name: 'Internal Oxygen (Large)', category: 'Aquarium Items', price: '₹400', image: 'logo.jpeg', tag: 'Oxygen' },

    // Aquarium Decorative Items
    { id: 65, name: 'Plastic Plants Piece', category: 'Aquarium Decorative Items', price: '₹25', image: 'logo.jpeg', tag: 'Decor' },
    { id: 66, name: 'Stones (1kg)', category: 'Aquarium Decorative Items', price: '₹50', image: 'logo.jpeg', tag: 'Decor' },

    // Fish Food
    { id: 67, name: 'Dry Worms (10g)', category: 'Fish Food', price: '₹25', image: 'images/guppies.png', tag: 'Food' },
    { id: 68, name: 'Farm Food (100g)', category: 'Fish Food', price: '₹200', image: 'images/guppies.png', tag: 'Food' },
    { id: 69, name: 'Okiko Black Pearl Flowerhorn Food', category: 'Fish Food', price: '₹300', image: 'images/guppies.png', tag: 'Food' },
    { id: 70, name: 'Okiko Head Power Flowerhorns Food', category: 'Fish Food', price: '₹300', image: 'images/guppies.png', tag: 'Food' },
    { id: 71, name: 'Okiko Red Diamond Flowerhorn Food', category: 'Fish Food', price: '₹300', image: 'images/guppies.png', tag: 'Food' },
    { id: 72, name: 'Optimun 3 in 1 Fish Food', category: 'Fish Food', price: '₹160', image: 'images/guppies.png', tag: 'Food' },
    { id: 73, name: 'Tiyo Fish Food (Small)', category: 'Fish Food', price: '₹20', image: 'images/guppies.png', tag: 'Food' },
    { id: 74, name: 'Tiyo Fish Food', category: 'Fish Food', price: '₹30', image: 'images/guppies.png', tag: 'Food' }
  ];

  const defaultCategories = [
    { name: 'Guppys', count: 13, image: 'images/guppies.png', status: 'Active' },
    { name: 'Angels', count: 3, image: 'images/betta.png', status: 'Active' },
    { name: 'Mollies', count: 4, image: 'images/guppies.png', status: 'Active' },
    { name: 'Oxy-less Fishes', count: 8, image: 'images/discus.png', status: 'Active' },
    { name: "Betta's", count: 6, image: 'images/betta.png', status: 'Active' },
    { name: 'Wild Oscars', count: 5, image: 'images/oscar.png', status: 'Active' },
    { name: 'Discus', count: 1, image: 'images/discus.png', status: 'Active' },
    { name: 'Flowerhorns', count: 6, image: 'images/flowerhorn.png', status: 'Active' },
    { name: 'Arowana', count: 3, image: 'images/arowana.png', status: 'Active' },
    { name: 'Gold Fish', count: 2, image: 'images/goldfish.png', status: 'Active' },
    { name: 'Exotics & Giants', count: 6, image: 'images/koi.png', status: 'Active' },
    { name: 'Aquarium Items', count: 8, image: 'logo.jpeg', status: 'Active' },
    { name: 'Aquarium Decorative Items', count: 2, image: 'logo.jpeg', status: 'Active' },
    { name: 'Fish Food', count: 8, image: 'images/guppies.png', status: 'Active' }
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
  // Clear stale localStorage if it contains bad paths
  if (storedProducts) {
    try {
      const parsed = JSON.parse(storedProducts);
      const hasBadPaths = parsed.some(p => 
        p.image && (p.image.includes(' ') || p.image !== p.image.toLowerCase() || p.image.startsWith('fishes/') || p.image.startsWith('items/') || p.image.startsWith('food/'))
      );
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
          p.image = image;
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
          image: image,
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


