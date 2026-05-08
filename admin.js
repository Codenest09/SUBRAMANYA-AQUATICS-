// Subramanya Aquatics Admin Portal State Logic
const ADMIN_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbx7eW-GfbJhcqsRR-JTWgi19gymekudxYniN7PLmltybN02psrnkTlDPkjTSotz2CLX/exec';
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

      if (email === 'admin@subramanya.com' && pass === 'Aquatics@2025') {
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
    products: { title: 'Fish Items', desc: 'Manage aquatic fish catalog — add, edit, or remove fish items' },
    foods: { title: 'Foods & Nutrition', desc: 'Manage fish food products — pellets, flakes, live food and supplements' },
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
let foods = [];

function initPortalState() {
  // Mock/Initial Data
  const defaultProducts = [
    { id: 1, name: 'Moon Tail Guppys', category: 'Guppys', price: '₹99', image: 'fishes/Sward tail guppy.jpeg', tag: 'Best Seller' },
    { id: 2, name: 'Golden Guppys (24K)', category: 'Guppys', price: '₹249', image: 'fishes/Golden guppy.jpg', tag: 'Premium' },
    { id: 3, name: 'Premium Mixed Guppys', category: 'Guppys', price: '₹99', image: 'fishes/Premium mixed guppys.jpeg', tag: 'Premium Mix' },
    { id: 4, name: 'Mixed Guppys', category: 'Guppys', price: '₹69', image: 'fishes/Mixed guppys.jpg', tag: 'Mixed Variety' },
    { id: 5, name: 'HB Blue Guppys', category: 'Guppys', price: '₹149', image: 'fishes/Hb blue guppys.jpg', tag: 'Half Black' },
    { id: 6, name: 'Koi Guppys', category: 'Guppys', price: '₹249', image: 'fishes/Albino Red eye guppy.jpg', tag: 'Koi Pattern' },
    { id: 7, name: 'Platinum Guppys', category: 'Guppys', price: '₹99', image: 'fishes/Platinum guppys.webp', tag: 'Platinum' },
    { id: 8, name: 'Platinum Dumbo Ear Guppys', category: 'Guppys', price: '₹149', image: 'fishes/Platinum dumbo ear guppys.jpeg', tag: 'Dumbo Ear' },
    { id: 9, name: 'Dragon Tail Guppys', category: 'Guppys', price: '₹149', image: 'fishes/Dragon tail guppys.jpg', tag: 'Dragon Tail' },
    { id: 10, name: 'Guppy Babies', category: 'Guppys', price: 'Contact Us', image: 'fishes/Guppy babys.png', tag: 'Babies' },
    { id: 11, name: 'Guppy Semi Adults', category: 'Guppys', price: 'Contact Us', image: 'fishes/Guppys semi adults.webp', tag: 'Semi Adult' },
    { id: 12, name: 'Mollys', category: 'Mollies', price: '₹49', image: 'fishes/mollies.webp', tag: 'Popular' },
    { id: 22, name: 'Moon Tail Mollies', category: 'Mollies', price: '₹99', image: 'fishes/moon tail mollies.jpg', tag: 'Moon Tail' },
    { id: 23, name: 'Balloon Mollies', category: 'Mollies', price: '₹79', image: 'fishes/ballon mollies.jpeg', tag: 'Balloon' },
    { id: 24, name: 'Molly Babies', category: 'Mollies', price: '₹5 / pc', image: 'fishes/Molly babyes.jpeg', tag: 'Babies' },
    { id: 13, name: 'Gourami', category: 'Oxy-less Fishes', price: '₹79', image: 'fishes/Gourami.jpg', tag: 'Healthy' },
    { id: 25, name: 'Platys', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/Platy fish.webp', tag: 'Colorful' },
    { id: 26, name: 'Sword Tail Platys', category: 'Oxy-less Fishes', price: '₹99', image: 'fishes/Sward tail platy.jpeg', tag: 'Sword Tail' },
    { id: 27, name: 'Zebra', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/Zebra fish.webp', tag: 'Striped' },
    { id: 28, name: 'Shark (Small)', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/Shark small.webp', tag: 'Small' },
    { id: 29, name: 'Shark (Medium)', category: 'Oxy-less Fishes', price: '₹99', image: 'fishes/Shark medium.avif', tag: 'Medium' },
    { id: 30, name: 'Shark (Large)', category: 'Oxy-less Fishes', price: 'Contact Us', image: 'fishes/Shark large.jpeg', tag: 'Large' },
    { id: 31, name: 'Veil Tail Zebra', category: 'Oxy-less Fishes', price: '₹150', image: 'fishes/Vail tail zebra green.jpg', tag: 'Veil Tail' },
    { id: 14, name: 'OHM (Males)', category: "Betta's", price: '₹149', image: 'fishes/Beta ohm male.webp', tag: 'Exotic' },
    { id: 32, name: 'OHM (Female)', category: "Betta's", price: '₹99', image: 'fishes/Beta ohm females.jpg', tag: 'Female' },
    { id: 33, name: 'HMPK Male', category: "Betta's", price: '₹250', image: 'fishes/Beta HMPK male.webp', tag: 'HMPK' },
    { id: 34, name: 'Placarts', category: "Betta's", price: '₹499', image: 'fishes/Beta placarts male.jpg', tag: 'Exotic' },
    { id: 35, name: 'Candy Betta', category: "Betta's", price: 'Contact Us', image: 'fishes/Bata candy male.jpeg', tag: 'Candy' },
    { id: 36, name: 'HMPK Female', category: "Betta's", price: 'Contact Us', image: 'fishes/Beta hmpk female.jpeg', tag: 'HMPK Female' },
    { id: 15, name: 'Albino Oscar', category: 'Wild Oscars', price: '₹499', image: 'fishes/Albino oscar fish.webp', tag: 'Giant' },
    { id: 37, name: 'Tiger Red Oscar', category: 'Wild Oscars', price: '₹499', image: 'fishes/Red tiger oscar.jpg', tag: 'Tiger' },
    { id: 38, name: 'Red Oscar', category: 'Wild Oscars', price: '₹599', image: 'fishes/Red oscar.jpg', tag: 'Red' },
    { id: 39, name: 'Lemon Oscar', category: 'Wild Oscars', price: '₹599', image: 'fishes/Lemon oscar.jpeg', tag: 'Lemon' },
    { id: 40, name: 'Mango Oscar', category: 'Wild Oscars', price: '₹599', image: 'fishes/Mango oscar.jpg', tag: 'Mango' },
    { id: 16, name: 'SRD', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/Srd flowerhorn.jpg', tag: 'Show Grade' },
    { id: 41, name: 'KML', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/Kml flowerhorn.jpg', tag: 'KML' },
    { id: 42, name: 'F2 Kamfa', category: 'Flowerhorns', price: 'Contact Us', image: 'fishes/F2 kamfa.jpg', tag: 'Kamfa' },
    { id: 17, name: 'Polar Parrot Breeding Pair', category: 'Flowerhorns', price: '₹500', image: 'fishes/Polar parrots( zebra).jpg', tag: 'Breeding Pair' },
    { id: 18, name: 'Polar Parrot Pair', category: 'Flowerhorns', price: '₹250', image: 'fishes/Polar parrots( zebra).jpg', tag: 'Pair' },
    { id: 43, name: 'Parrots', category: 'Flowerhorns', price: '₹999', image: 'fishes/Parrot ( red).jpg', tag: 'Red Parrot' },
    { id: 19, name: 'Silver Arowana', category: 'Arowana', price: 'Contact Us', image: 'fishes/Silver arwana.webp', tag: 'Luxury' },
    { id: 44, name: 'Golden Arowana', category: 'Arowana', price: 'Contact Us', image: 'fishes/Gold arwana.jpg', tag: 'Luxury' },
    { id: 45, name: 'Red Arowana', category: 'Arowana', price: 'Contact Us', image: 'fishes/Red Arwana.jpeg', tag: 'Luxury' },
    { id: 20, name: 'Gold Fish', category: 'Gold Fish', price: '₹250', image: 'fishes/Gold fish.jpeg', tag: 'Classic' },
    { id: 21, name: 'Black Moor Gold Fish', category: 'Gold Fish', price: '₹99', image: 'fishes/Black more gold fish.jpg', tag: 'Dark Accent' },
    { id: 46, name: 'Alligator Gar (Small)', category: 'Exotics & Giants', price: '₹1000', image: 'fishes/Aligator gar.jpg', tag: 'Monster' },
    { id: 47, name: 'Cichlids', category: 'Exotics & Giants', price: '₹200', image: 'fishes/Chichilids.jpg', tag: 'Colorful' },
    { id: 48, name: 'Channa Fish', category: 'Exotics & Giants', price: '₹2000', image: 'fishes/Snake head fish.jpg', tag: 'Snakehead' },
    { id: 49, name: 'Japanese Koi', category: 'Exotics & Giants', price: '₹1000', image: 'fishes/Japanese koi fish.jpg', tag: 'Imported' },
    { id: 50, name: 'Indian Koi', category: 'Exotics & Giants', price: 'Contact Us', image: 'fishes/Indian koi fish.jpeg', tag: 'Local' },
    { id: 51, name: 'Giant Gourami', category: 'Exotics & Giants', price: '₹1000', image: 'fishes/Giant gourami baby.jpg', tag: 'Giant' }
  ];

  // Fish variety names that must always exist (to inject into existing localStorage data)
  const requiredGuppyNames = [
    'Premium Mixed Guppys', 'Mixed Guppys', 'HB Blue Guppys', 'Koi Guppys',
    'Platinum Guppys', 'Platinum Dumbo Ear Guppys', 'Dragon Tail Guppys',
    'Guppy Babies', 'Guppy Semi Adults',
    'Moon Tail Mollies', 'Balloon Mollies', 'Molly Babies',
    'Platys', 'Sword Tail Platys', 'Zebra',
    'Shark (Small)', 'Shark (Medium)', 'Shark (Large)', 'Veil Tail Zebra',
    "OHM (Female)", 'HMPK Male', 'Placarts', 'Candy Betta', 'HMPK Female',
    'Tiger Red Oscar', 'Red Oscar', 'Lemon Oscar', 'Mango Oscar',
    'KML', 'F2 Kamfa', 'Parrots', 'Golden Arowana', 'Red Arowana',
    'Alligator Gar (Small)', 'Cichlids', 'Channa Fish', 'Japanese Koi', 'Indian Koi', 'Giant Gourami'
  ];

  const defaultCategories = [
    { name: 'Guppys', count: 11, image: 'fishes/Sward tail guppy.jpeg', status: 'Active' },
    { name: 'Mollies', count: 4, image: 'fishes/mollies.webp', status: 'Active' },
    { name: 'Oxy-less Fishes', count: 8, image: 'fishes/Gourami.jpg', status: 'Active' },
    { name: "Betta's", count: 6, image: 'fishes/Beta ohm male.webp', status: 'Active' },
    { name: 'Wild Oscars', count: 5, image: 'fishes/Albino oscar fish.webp', status: 'Active' },
    { name: 'Flowerhorns', count: 5, image: 'fishes/Srd flowerhorn.jpg', status: 'Active' },
    { name: 'Arowana', count: 3, image: 'fishes/Silver arwana.webp', status: 'Active' },
    { name: 'Gold Fish', count: 2, image: 'fishes/Gold fish.jpeg', status: 'Active' },
    { name: 'Exotics & Giants', count: 6, image: 'fishes/Aligator gar.jpg', status: 'Active' }
  ];

  const defaultFoods = [
    { id: 1, name: 'Hikari Cichlid Gold Pellets', type: 'Pellets', suitable: 'Flowerhorns, Oscars, Cichlids', price: '₹299', stock: 'In Stock', image: 'logo.jpeg', desc: 'Premium sinking pellets, 342g — enhances color and growth' },
    { id: 2, name: 'Tetra Guppy Color Flakes', type: 'Flakes', suitable: 'Guppys, Mollies, Tetras', price: '₹149', stock: 'In Stock', image: 'logo.jpeg', desc: 'Color-enhancing flake food, 100g — ideal for small tropical fish' },
    { id: 3, name: 'Betta Bio-Gold Pellets', type: 'Pellets', suitable: "Betta's", price: '₹199', stock: 'In Stock', image: 'logo.jpeg', desc: 'Floating mini pellets, 20g — specially formulated for Betta fish' },
    { id: 4, name: 'Live Bloodworms', type: 'Live Food', suitable: 'All Fishes', price: '₹99', stock: 'Low Stock', image: 'logo.jpeg', desc: 'Fresh live bloodworms — high protein treat for all fish' },
    { id: 5, name: 'Frozen Brine Shrimp', type: 'Frozen Food', suitable: 'Guppys, Bettas, Discus', price: '₹129', stock: 'In Stock', image: 'logo.jpeg', desc: 'Individually frozen brine shrimp cubes, 100g pack' },
    { id: 6, name: 'Arowana Growth Formula', type: 'Pellets', suitable: 'Arowana', price: '₹599', stock: 'In Stock', image: 'logo.jpeg', desc: 'High-protein floating sticks for Arowana — promotes rapid growth' }
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
  products = JSON.parse(localStorage.getItem('sa_products')) || defaultProducts;
  categories = JSON.parse(localStorage.getItem('sa_categories')) || defaultCategories;
  orders = JSON.parse(localStorage.getItem('sa_orders')) || defaultOrders;
  customers = JSON.parse(localStorage.getItem('sa_customers')) || defaultCustomers;
  testimonials = JSON.parse(localStorage.getItem('sa_testimonials')) || defaultTestimonials;
  inquiries = JSON.parse(localStorage.getItem('sa_inquiries')) || defaultInquiries;
  foods = JSON.parse(localStorage.getItem('sa_foods')) || defaultFoods;

  // Inject any missing required guppy varieties into existing data
  const existingNames = new Set(products.map(p => p.name));
  const nextId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 100;
  let idCounter = nextId;
  defaultProducts.filter(dp => requiredGuppyNames.includes(dp.name) && !existingNames.has(dp.name))
    .forEach(dp => {
      products.push({ ...dp, id: idCounter++ });
    });

  saveAllState();

  // Render everything
  renderProducts();
  renderCategories();
  renderFoods();
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
  localStorage.setItem('sa_products', JSON.stringify(products));
  localStorage.setItem('sa_categories', JSON.stringify(categories));
  localStorage.setItem('sa_orders', JSON.stringify(orders));
  localStorage.setItem('sa_customers', JSON.stringify(customers));
  localStorage.setItem('sa_testimonials', JSON.stringify(testimonials));
  localStorage.setItem('sa_inquiries', JSON.stringify(inquiries));
  localStorage.setItem('sa_foods', JSON.stringify(foods));
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
      <td><img src="${p.image}" alt="${p.name}" style="width: 44px; height: 44px; border-radius: 8px; border: 1.5px solid var(--color-primary); object-fit: cover;"></td>
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
  categories.forEach((c, idx) => {
    const itemCount = products.filter(p => p.category === c.name).length;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>🐠 ${c.name}</strong></td>
      <td><span class="badge badge-confirmed">${itemCount} fish</span></td>
      <td><span style="font-size: 0.8rem; color: var(--color-text-muted);">${c.image}</span></td>
      <td><span class="badge badge-${c.status === 'Active' ? 'delivered' : 'cancelled'}">${c.status}</span></td>
      <td style="display:flex;gap:6px;flex-wrap:wrap;">
        <button class="btn-secondary" style="padding: 4px 10px;" onclick="viewCategoryItems('${c.name}')">👁️ View Items</button>
        <button class="btn-secondary" style="padding: 4px 10px;" onclick="openEditCategory(${idx})">✏️ Edit</button>
        <button class="btn-secondary" style="padding: 4px 10px; border-color: var(--color-accent); color: var(--color-accent);" onclick="deleteCategory(${idx})">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// View items belonging to a category
window.viewCategoryItems = function(catName) {
  const panel = document.getElementById('categoryItemsPanel');
  const title = document.getElementById('categoryItemsTitle');
  const tbody = document.getElementById('categoryItemsTableBody');
  if (!panel || !tbody) return;

  title.textContent = `🐠 Fish Items in "${catName}"`;
  const filtered = products.filter(p => p.category === catName);
  tbody.innerHTML = '';

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--color-text-muted);">No fish items in this category yet.</td></tr>';
  } else {
    filtered.forEach(p => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><img src="${p.image}" alt="${p.name}" style="width:40px;height:40px;border-radius:8px;border:1.5px solid var(--color-primary);object-fit:cover;"></td>
        <td><strong>${p.name}</strong></td>
        <td><strong style="color:var(--color-secondary);">${p.price}</strong></td>
        <td><span class="badge badge-pending">${p.tag || 'Regular'}</span></td>
        <td>
          <button class="btn-secondary" style="padding:4px 10px;margin-right:6px;" onclick="openEditProduct(${p.id})">✏️ Edit</button>
          <button class="btn-secondary" style="padding:4px 10px;border-color:var(--color-accent);color:var(--color-accent);" onclick="deleteProduct(${p.id})">🗑️ Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  panel.style.display = 'block';
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.closeCategoryItems = function() {
  const panel = document.getElementById('categoryItemsPanel');
  if (panel) panel.style.display = 'none';
};

// Open edit category modal
window.openEditCategory = function(idx) {
  const c = categories[idx];
  if (!c) return;
  document.getElementById('editCategoryName').value = idx;
  document.getElementById('catName').value = c.name;
  document.getElementById('catImage').value = c.image;
  document.getElementById('catStatus').value = c.status;
  document.getElementById('categoryModalTitle').textContent = 'Edit Category: ' + c.name;
  document.getElementById('categoryModal').classList.add('active');
};

window.deleteCategory = function(idx) {
  const c = categories[idx];
  if (c && confirm(`Delete category "${c.name}"? This will NOT delete the fish in it.`)) {
    categories.splice(idx, 1);
    saveAllState();
    renderCategories();
    showToast('success', `Category "${c.name}" deleted.`);
  }
};

// Render Foods Table
function renderFoods() {
  const tbody = document.getElementById('foodsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const searchVal = document.getElementById('searchFoods')?.value.toLowerCase() || '';
  const typeFilter = document.getElementById('filterFoodType')?.value || 'all';

  const filtered = foods.filter(f => {
    const matchSearch = f.name.toLowerCase().includes(searchVal) || f.suitable.toLowerCase().includes(searchVal);
    const matchType = typeFilter === 'all' || f.type === typeFilter;
    return matchSearch && matchType;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--color-text-muted);padding:20px;">No food items found. Add one above!</td></tr>';
    return;
  }

  filtered.forEach(f => {
    const stockBadge = f.stock === 'In Stock' ? 'delivered' : f.stock === 'Low Stock' ? 'pending' : 'cancelled';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${f.image || 'logo.jpeg'}" alt="${f.name}" style="width:44px;height:44px;border-radius:8px;border:1.5px solid var(--color-primary);object-fit:cover;"></td>
      <td><strong>${f.name}</strong><br><span style="font-size:0.75rem;color:var(--color-text-muted);">${f.desc || ''}</span></td>
      <td><span class="badge badge-confirmed">${f.type}</span></td>
      <td style="font-size:0.85rem;">${f.suitable}</td>
      <td><strong style="color:var(--color-secondary);">${f.price}</strong></td>
      <td><span class="badge badge-${stockBadge}">${f.stock}</span></td>
      <td>
        <button class="btn-secondary" style="padding:4px 10px;margin-right:6px;" onclick="openEditFood(${f.id})">✏️ Edit</button>
        <button class="btn-secondary" style="padding:4px 10px;border-color:var(--color-accent);color:var(--color-accent);" onclick="deleteFood(${f.id})">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.openEditFood = function(id) {
  const f = foods.find(food => food.id == id);
  if (!f) return;
  document.getElementById('editFoodId').value = f.id;
  document.getElementById('foodName').value = f.name;
  document.getElementById('foodType').value = f.type;
  document.getElementById('foodSuitable').value = f.suitable;
  document.getElementById('foodPrice').value = f.price.replace('₹', '');
  document.getElementById('foodStock').value = f.stock;
  document.getElementById('foodImage').value = f.image || '';
  document.getElementById('foodDesc').value = f.desc || '';
  document.getElementById('foodModalTitle').textContent = 'Edit: ' + f.name;
  document.getElementById('foodModal').classList.add('active');
};

window.deleteFood = function(id) {
  const f = foods.find(food => food.id == id);
  if (f && confirm(`Delete "${f.name}" from foods catalog?`)) {
    foods = foods.filter(food => food.id != id);
    saveAllState();
    renderFoods();
    showToast('success', `"${f.name}" removed from foods.`);
  }
};

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

// Sync real orders from Google Sheets
window.syncOrdersFromSheets = function() {
  showToast('info', 'Syncing orders from Google Sheets...');
  fetch(ADMIN_SHEETS_URL)
    .then(res => res.json())
    .then(data => {
      if (!Array.isArray(data) || data.length === 0) {
        showToast('info', 'No orders found in Google Sheets yet.');
        return;
      }
      // Map sheet columns to order objects
      const sheetOrders = data.map((row, i) => ({
        id: row['Order ID'] || ('SA-' + (9000 + i)),
        customer: row['Customer Name'] || 'Unknown',
        product: row['Items'] || '-',
        amount: row['Total'] || '-',
        status: (row['Status'] || 'pending').toLowerCase(),
        date: row['Date'] || '-',
        phone: row['Phone'] || '-',
        address: row['Address'] || '-',
        payment: row['Payment'] || '-'
      }));
      // Merge with existing, sheet orders take priority by ID
      const existingIds = new Set(orders.map(o => o.id));
      sheetOrders.forEach(so => {
        if (!existingIds.has(so.id)) orders.unshift(so);
      });
      saveAllState();
      renderOrders();
      const count = sheetOrders.length;
      showToast('success', `Synced ${count} order(s) from Google Sheets!`);
    })
    .catch(() => showToast('error', 'Failed to connect to Google Sheets. Check script permissions.'));
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
  products.forEach(p => {
    const div = document.createElement('div');
    div.style.background = 'var(--glass-bg)';
    div.style.border = '1px solid var(--glass-border)';
    div.style.borderRadius = '12px';
    div.style.padding = '8px';
    div.style.textAlign = 'center';
    div.innerHTML = `
      <img src="${p.image}" style="width: 100%; height: 80px; object-fit: cover; border-radius: 8px;" alt="media">
      <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${p.image.replace('fishes/', '')}</div>
    `;
    grid.appendChild(div);
  });
}

// 5. Form Submissions Handlers & Modal Controllers
function initFormSubmitHandlers() {
  const modal = document.getElementById('productModal');
  const btnAdd = document.getElementById('btnAddNewProduct');
  const btnClose = document.getElementById('btnCloseProductModal');
  const form = document.getElementById('productForm');

  // Search & filter live updates
  document.getElementById('searchProducts')?.addEventListener('input', renderProducts);
  document.getElementById('filterCategory')?.addEventListener('change', renderProducts);
  document.getElementById('searchFoods')?.addEventListener('input', renderFoods);
  document.getElementById('filterFoodType')?.addEventListener('change', renderFoods);

  // ---- FISH PRODUCT MODAL ----
  if (btnAdd && modal) {
    btnAdd.addEventListener('click', () => {
      form.reset();
      document.getElementById('editProductId').value = '';
      document.getElementById('productModalTitle').textContent = 'Add New Fish Item';
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
      const image = document.getElementById('prodImage').value;
      const desc = document.getElementById('prodDesc').value;

      if (id) {
        const p = products.find(prod => prod.id == id);
        if (p) {
          p.name = name; p.category = category;
          p.price = price.startsWith('₹') || price.toLowerCase().includes('contact') ? price : '₹' + price;
          p.image = image;
          p.tag = desc ? desc.substring(0, 15) : 'Special';
          showToast('success', `${name} updated successfully!`);
        }
      } else {
        const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, name, category,
          price: price.startsWith('₹') || price.toLowerCase().includes('contact') ? price : '₹' + price,
          image, tag: desc ? desc.substring(0, 15) : 'New'
        });
        showToast('success', `New fish '${name}' added to catalog!`);
      }
      saveAllState();
      initPortalState();
      modal.classList.remove('active');
    });
  }

  // ---- FOOD MODAL ----
  const foodModal = document.getElementById('foodModal');
  const btnAddFood = document.getElementById('btnAddFood');
  const btnCloseFood = document.getElementById('btnCloseFoodModal');
  const foodForm = document.getElementById('foodForm');

  if (btnAddFood && foodModal) {
    btnAddFood.addEventListener('click', () => {
      foodForm.reset();
      document.getElementById('editFoodId').value = '';
      document.getElementById('foodModalTitle').textContent = 'Add Food Item';
      foodModal.classList.add('active');
    });
  }
  if (btnCloseFood && foodModal) {
    btnCloseFood.addEventListener('click', () => foodModal.classList.remove('active'));
  }
  if (foodForm) {
    foodForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('editFoodId').value;
      const name = document.getElementById('foodName').value;
      const type = document.getElementById('foodType').value;
      const suitable = document.getElementById('foodSuitable').value;
      const price = document.getElementById('foodPrice').value;
      const stock = document.getElementById('foodStock').value;
      const image = document.getElementById('foodImage').value || 'logo.jpeg';
      const desc = document.getElementById('foodDesc').value;

      if (id) {
        const f = foods.find(food => food.id == id);
        if (f) {
          f.name = name; f.type = type; f.suitable = suitable;
          f.price = price.startsWith('₹') || price.toLowerCase().includes('contact') ? price : '₹' + price;
          f.stock = stock; f.image = image; f.desc = desc;
          showToast('success', `${name} updated successfully!`);
        }
      } else {
        const newId = foods.length ? Math.max(...foods.map(f => f.id)) + 1 : 1;
        foods.push({ id: newId, name, type, suitable,
          price: price.startsWith('₹') || price.toLowerCase().includes('contact') ? price : '₹' + price,
          stock, image, desc
        });
        showToast('success', `Food item '${name}' added to catalog!`);
      }
      saveAllState();
      renderFoods();
      foodModal.classList.remove('active');
    });
  }

  // ---- CATEGORY MODAL ----
  const categoryModal = document.getElementById('categoryModal');
  const btnAddCat = document.getElementById('btnAddCategory');
  const btnCloseCat = document.getElementById('btnCloseCategoryModal');
  const categoryForm = document.getElementById('categoryForm');

  if (btnAddCat && categoryModal) {
    btnAddCat.addEventListener('click', () => {
      categoryForm.reset();
      document.getElementById('editCategoryName').value = '';
      document.getElementById('categoryModalTitle').textContent = 'Create New Category';
      categoryModal.classList.add('active');
    });
  }
  if (btnCloseCat && categoryModal) {
    btnCloseCat.addEventListener('click', () => categoryModal.classList.remove('active'));
  }
  if (categoryForm) {
    categoryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const idx = document.getElementById('editCategoryName').value;
      const name = document.getElementById('catName').value;
      const image = document.getElementById('catImage').value || 'logo.jpeg';
      const status = document.getElementById('catStatus').value;

      if (idx !== '') {
        const c = categories[parseInt(idx)];
        if (c) { c.name = name; c.image = image; c.status = status; }
        showToast('success', `Category "${name}" updated!`);
      } else {
        categories.push({ name, count: 0, image, status });
        showToast('success', `Category "${name}" created!`);
      }
      saveAllState();
      renderCategories();
      categoryModal.classList.remove('active');
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
    document.getElementById('prodImage').value = p.image;
    document.getElementById('prodDesc').value = p.tag;

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
    initPortalState();
    showToast('success', 'Product deleted from catalog.');
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
