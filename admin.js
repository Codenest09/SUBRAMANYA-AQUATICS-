// ========== CLIENT-SIDE IMAGE RESOLUTION ==========
function resolveProductImage(p) {
  if (!p) return 'logo.jpeg';
  const name = (p.name || '').trim();
  const lowerName = name.toLowerCase();
  const category = (p.category || '').trim().toLowerCase();

  const img = p.image || p.img;
  if (img && (img.startsWith('fishes/') || img.startsWith('food/') || img.startsWith('items/') || img.startsWith('images/'))) {
    return img.includes('%20') ? img : encodeURI(img);
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
  if (category.includes('item') || category.includes('equipment') || lowerName.includes('heater') || lowerName.includes('light') || lowerName.includes('oxygen') || lowerName.includes('plants') || lowerName.includes('stones') || lowerName.includes('filter')) {
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
    if (lowerName.includes('f2 kamfa') || lowerName.includes('kamfa')) {
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
    if (lowerName.includes('moon tail')) {
      return 'fishes/moon%20tail%20mollies.jpg';
    }
    return 'fishes/mollies.webp';
  }

  if (lowerName.includes('platy') || lowerName.includes('platies')) {
    if (lowerName.includes('sword tail') || lowerName.includes('sward tail')) {
      return 'fishes/Sward%20tail%20platy.jpeg';
    }
    return 'fishes/Platy%20fish.webp';
  }

  if (lowerName.includes('shark')) {
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

  if (lowerName.includes('parrot')) {
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

  if (category.includes('arowana') || category.includes('arwana')) return 'images/arowana.png';
  if (category.includes('betta')) return 'images/betta.png';
  if (category.includes('discus')) return 'images/discus.png';
  if (category.includes('flowerhorn')) return 'images/flowerhorn.png';
  if (category.includes('goldfish') || category.includes('gold fish')) return 'images/goldfish.png';
  if (category.includes('guppy') || category.includes('guppies')) return 'images/guppies.png';
  if (category.includes('koi')) return 'images/koi.png';
  if (category.includes('oscar')) return 'images/oscar.png';

  return 'logo.jpeg';
}

// Subramanya Aquatics Admin Portal State Logic
const ADMIN_SHEETS_URL = '/api/orders'; // Local API
document.addEventListener('DOMContentLoaded', () => {
  initBubbleGenerator();
  initAuthSession();
  initNavigation();
  initFormSubmitHandlers();
  // Only call initPortalState and drawAnalyticsCharts here if Firebase Auth is NOT active
  // When Firebase Auth is active, onAuthStateChanged in initAuthSession handles this
  if (!window.auth) {
    initPortalState();
    drawAnalyticsCharts();
  }
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

// 2. Auth Session Guard (Firebase Auth)
function initAuthSession() {
  const loginSec = document.getElementById('loginSection');
  const appSec = document.getElementById('appSection');
  const loginForm = document.getElementById('loginForm');
  const btnLogout = document.getElementById('btnLogout');
  const loginBtn = loginForm ? loginForm.querySelector('button[type="submit"]') : null;
  const passwordToggle = document.getElementById('passwordToggle');
  const loginPassword = document.getElementById('loginPassword');
  let isLoggingIn = false;

  console.log('%c🔐 Auth Session Init', 'color: #00d4ff; font-weight: bold;');
  console.log('   Firebase Auth available:', !!window.auth);
  console.log('   Login form found:', !!loginForm);
  console.log('   Login button found:', !!loginBtn);

  // Helper to safely show the admin dashboard
  function showAdminDashboard() {
    try {
      loginSec.style.display = 'none';
      appSec.style.display = 'flex';
      initPortalState();
      drawAnalyticsCharts();
      window.handleRoute(); // Process current path route
      console.log('%c✅ Admin dashboard loaded', 'color: #00ffc8;');
    } catch (err) {
      console.error('Error initializing admin dashboard:', err);
      // Still show the dashboard even if init fails
      loginSec.style.display = 'none';
      appSec.style.display = 'flex';
    }
  }

  // Helper to set button loading state
  function setLoginLoading(loading) {
    if (!loginBtn) return;
    isLoggingIn = loading;
    if (loading) {
      loginBtn.dataset.originalText = loginBtn.innerHTML;
      loginBtn.innerHTML = '<span class="login-spinner"></span> Authenticating...';
      loginBtn.disabled = true;
      loginBtn.style.opacity = '0.7';
      loginBtn.style.cursor = 'wait';
    } else {
      loginBtn.innerHTML = loginBtn.dataset.originalText || '🔐 Enter Portal';
      loginBtn.disabled = false;
      loginBtn.style.opacity = '1';
      loginBtn.style.cursor = 'pointer';
    }
  }

  // Firebase Auth state observer
  if (window.auth) {
    console.log('   Setting up onAuthStateChanged listener...');
    window.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('%c✅ User authenticated:', 'color: #00ffc8;', user.email);
        showAdminDashboard();
      } else {
        console.log('%c🔒 No user session - showing login', 'color: #ffaa00;');
        if (window.location.pathname !== '/admin/login') {
          history.replaceState(null, '', '/admin/login');
        }
        loginSec.style.display = 'flex';
        appSec.style.display = 'none';
      }
    });
  } else {
    console.warn('⚠️ Firebase Auth not available - using localStorage fallback');
    // Fallback to localStorage if Firebase not initialized
    if (localStorage.getItem('adminToken') === 'true') {
      showAdminDashboard();
    } else {
      if (window.location.pathname !== '/admin/login') {
        history.replaceState(null, '', '/admin/login');
      }
      loginSec.style.display = 'flex';
      appSec.style.display = 'none';
    }
  }

  // Handle Login with Firebase Auth
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Prevent double submit
      if (isLoggingIn) return;

      const email = document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPassword').value;

      console.log('%c🔑 Login attempt:', 'color: #00d4ff;', email);

      if (!email || !pass) {
        showToast('error', 'Please enter both email and password.');
        return;
      }

      if (window.auth) {
        setLoginLoading(true);
        console.log('   Calling signInWithEmailAndPassword...');

        window.auth.signInWithEmailAndPassword(email, pass)
          .then((userCredential) => {
            console.log('%c✅ Login SUCCESS:', 'color: #00ffc8; font-weight: bold;', userCredential.user.email);
            setLoginLoading(false);
            showToast('success', 'Access granted! Welcome back Admin.');
            // Directly show dashboard as safety net (onAuthStateChanged also fires)
            showAdminDashboard();
          })
          .catch((error) => {
            setLoginLoading(false);
            console.error('%c❌ Login FAILED:', 'color: #ff4444; font-weight: bold;');
            console.error('   Error code:', error.code);
            console.error('   Error message:', error.message);

            let errorMsg = 'Access denied! Invalid credentials.';
            switch (error.code) {
              case 'auth/user-not-found':
                errorMsg = 'No admin account found with this email.';
                break;
              case 'auth/wrong-password':
                errorMsg = 'Incorrect password. Please try again.';
                break;
              case 'auth/invalid-email':
                errorMsg = 'Invalid email format.';
                break;
              case 'auth/invalid-credential':
                errorMsg = 'Invalid email or password. Please check your credentials.';
                break;
              case 'auth/too-many-requests':
                errorMsg = 'Too many failed attempts. Please wait and try again later.';
                break;
              case 'auth/network-request-failed':
                errorMsg = 'Network error. Please check your internet connection.';
                break;
              case 'auth/operation-not-allowed':
                errorMsg = 'Email/Password sign-in is NOT enabled in Firebase Console. Go to Firebase Console → Authentication → Sign-in method → Enable Email/Password.';
                console.error('%c⚠️ IMPORTANT: You need to enable Email/Password auth in Firebase Console!', 'color: #ff4444; font-size: 14px; font-weight: bold;');
                console.error('   Go to: https://console.firebase.google.com/project/subramanya-c02b6/authentication/providers');
                break;
              case 'auth/user-disabled':
                errorMsg = 'This admin account has been disabled.';
                break;
              default:
                errorMsg = `Login failed: ${error.message}`;
            }
            showToast('error', errorMsg);
          });
      } else {
        // Firebase not available — show clear message
        console.error('%c❌ Firebase Auth is NOT initialized!', 'color: #ff4444; font-weight: bold;');
        console.error('   Possible causes:');
        console.error('   1. No internet connection (Firebase CDN scripts failed to load)');
        console.error('   2. Firebase SDK scripts blocked by browser/firewall');
        console.error('   3. Error in firebase-config.js');
        showToast('error', 'Firebase not connected. Check your internet connection and browser console for details.');
      }
    });
  }

  // Handle Logout
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      if (window.auth) {
        window.auth.signOut().then(() => {
          localStorage.removeItem('adminToken');
          console.log('%c🚪 Logged out successfully', 'color: #00ffc8;');
          showToast('info', 'Logged out of portal securely.');
        }).catch((error) => {
          console.error('Logout error:', error);
          showToast('error', 'Error logging out. Please try again.');
        });
      } else {
        localStorage.removeItem('adminToken');
        showToast('info', 'Logged out of portal securely.');
        setTimeout(() => {
          appSec.style.display = 'none';
          loginSec.style.display = 'flex';
        }, 800);
      }
    });
  }

  // Handle Password Visibility Toggle
  if (passwordToggle && loginPassword) {
    passwordToggle.addEventListener('click', () => {
      const isPassword = loginPassword.type === 'password';
      loginPassword.type = isPassword ? 'text' : 'password';
      const eyeOff = passwordToggle.querySelector('.eye-off');
      const eyeOn = passwordToggle.querySelector('.eye-on');
      if (isPassword) {
        eyeOff.style.display = 'none';
        eyeOn.style.display = 'block';
      } else {
        eyeOff.style.display = 'block';
        eyeOn.style.display = 'none';
      }
    });
  }
}

// 3. SPA Navigation Routing
// 3. SPA Navigation Routing
window.navigateToRoute = function(route) {
  history.pushState(null, '', route);
  window.handleRoute();
};

window.handleRoute = function() {
  let path = window.location.pathname;
  if (path.endsWith('/') && path.length > 1) {
    path = path.slice(0, -1);
  }
  
  const isAuthenticated = window.auth ? window.auth.currentUser : localStorage.getItem('adminToken') === 'true';
  
  const routeMap = {
    '/admin/login': 'login',
    '/admin/dashboard': 'overview',
    '/admin/products': 'products',
    '/admin/orders': 'orders',
    '/admin/coupons': 'coupons',
    '/admin/payments': 'payments',
    '/admin/banners': 'banners',
    '/admin/settings': 'settings',
    '/admin/foods': 'foods',
    '/admin/items': 'items',
    '/admin/categories': 'categories',
    '/admin/customers': 'customers',
    '/admin/messages': 'messages',
    '/admin/testimonials': 'testimonials',
    '/admin/media': 'media',
    '/admin/seo': 'seo',
    '/admin': 'overview'
  };
  
  let target = routeMap[path] || 'overview';
  
  const loginSec = document.getElementById('loginSection');
  const appSec = document.getElementById('appSection');
  
  if (!isAuthenticated) {
    if (path !== '/admin/login') {
      history.replaceState(null, '', '/admin/login');
    }
    if (loginSec) loginSec.style.display = 'flex';
    if (appSec) appSec.style.display = 'none';
    return;
  }
  
  // If authenticated and tries to go to login, redirect to dashboard
  if (path === '/admin/login' || path === '/admin') {
    history.replaceState(null, '', '/admin/dashboard');
    target = 'overview';
  }
  
  if (loginSec) loginSec.style.display = 'none';
  if (appSec) appSec.style.display = 'flex';
  
  // Deactivate all links and sections
  const navLinks = document.querySelectorAll('.sidebar-link, .mobile-nav-item');
  const sections = document.querySelectorAll('.app-section');
  navLinks.forEach(l => l.classList.remove('active'));
  sections.forEach(s => s.classList.remove('active'));
  
  // Activate target
  document.querySelectorAll(`[data-target="${target}"]`).forEach(l => l.classList.add('active'));
  const activeSection = document.getElementById(`sec-${target}`);
  if (activeSection) activeSection.classList.add('active');
  
  // Update header titles
  const headersMap = {
    overview: { title: 'Dashboard Overview', desc: 'Real-time business performance analytics' },
    products: { title: 'Fish Catalog', desc: 'Manage aquatic fish catalog — add, edit, or remove fish items' },
    foods: { title: 'Foods & Nutrition', desc: 'Manage fish food products — pellets, flakes, live food and supplements' },
    items: { title: 'Aquatic Items', desc: 'Manage aquarium items — heaters, lights, oxygen pumps' },
    categories: { title: 'Store Categories', desc: 'Manage freshwater, saltwater, and gear catalog classes' },
    orders: { title: 'Orders Management', desc: 'Process customer purchase requests, track deliveries and invoices' },
    customers: { title: 'Customers List', desc: 'View, search, filter, or ban registered customers' },
    messages: { title: 'Customer Inquiries', desc: 'Review and reply to customer contact form messages' },
    testimonials: { title: 'Review Testimonials', desc: 'Approve or reject customer ratings' },
    media: { title: 'Media Library', desc: 'Upload, optimize and search fish images or videos' },
    seo: { title: 'SEO Configurations', desc: 'Configure search engine indexing meta tags and sitemaps' },
    settings: { title: 'Portal Settings', desc: 'Change general portal settings, contacts and maintenance modes' },
    coupons: { title: 'Promotional Coupons', desc: 'Create, manage, and track discount coupon codes' },
    payments: { title: 'Payment & QR Control', desc: 'Manage QR code image, UPI settings, and verify UTR payments' },
    banners: { title: 'Homepage Banners', desc: 'Manage Hero text, banners, featured products' }
  };
  
  const titleEl = document.getElementById('sectionHeaderTitle');
  const subEl = document.getElementById('sectionHeaderSubtitle');
  if (headersMap[target] && titleEl && subEl) {
    titleEl.textContent = headersMap[target].title;
    subEl.textContent = headersMap[target].desc;
  }
};

function initNavigation() {
  const navLinks = document.querySelectorAll('.sidebar-link, .mobile-nav-item');
  const targetRouteMap = {
    overview: '/admin/dashboard',
    products: '/admin/products',
    foods: '/admin/foods',
    items: '/admin/items',
    categories: '/admin/categories',
    coupons: '/admin/coupons',
    orders: '/admin/orders',
    customers: '/admin/customers',
    messages: '/admin/messages',
    testimonials: '/admin/testimonials',
    media: '/admin/media',
    seo: '/admin/seo',
    settings: '/admin/settings',
    payments: '/admin/payments',
    banners: '/admin/banners'
  };
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      if (!target) return;
      const route = targetRouteMap[target] || '/admin/dashboard';
      window.navigateToRoute(route);
    });
  });
  
  window.addEventListener('popstate', window.handleRoute);
  
  // Call routing on load (will check auth status)
  window.handleRoute();
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
let firestoreListenersActive = false;

// Default Static Data (used as fallbacks and for database seeding)
const defaultProducts = [
  { id: 1, name: 'Moon Tail Guppys', category: 'Guppys', price: '₹99', image: 'fishes/Sward tail guppy.jpeg', tag: 'Best Seller' },
  { id: 2, name: 'Golden Guppys (24K)', category: 'Guppys', price: '₹249', image: 'fishes/Golden guppy.jpg', tag: 'Premium' },
  { id: 3, name: 'Premium Mixed Guppys', category: 'Guppys', price: '₹99', image: 'fishes/Premium mixed guppys.jpeg', tag: 'Premium Mix' },
  { id: 4, name: 'Mixed Guppys', category: 'Guppys', price: '₹69', image: 'fishes/Mixed guppys.jpg', tag: 'Mixed Variety' },
  { id: 5, name: 'HB Blue Guppys', category: 'Guppys', price: '₹250', image: 'fishes/Hb blue guppys.jpg', tag: 'Half Black' },
  { id: 6, name: 'Koi Guppys', category: 'Guppys', price: '₹249', image: 'fishes/Albino Red eye guppy.jpg', tag: 'Koi Pattern' },
  { id: 7, name: 'Platinum Guppys', category: 'Guppys', price: '₹99', image: 'fishes/Platinum guppys.webp', tag: 'Platinum' },
  { id: 8, name: 'Platinum Dumbo Ear Guppys', category: 'Guppys', price: '₹250', image: 'fishes/Platinum dumbo ear guppys.jpeg', tag: 'Dumbo Ear' },
  { id: 9, name: 'Dragon Tail Guppys', category: 'Guppys', price: '₹250', image: 'fishes/Dragon tail guppys.jpg', tag: 'Dragon Tail' },
  { id: 10, name: 'Guppy Babies', category: 'Guppys', price: '₹7 / pc', image: 'fishes/Guppy babys.png', tag: 'Babies' },
  { id: 11, name: 'Guppy Semi Adults', category: 'Guppys', price: '₹40 / pair', image: 'fishes/Guppys semi adults.webp', tag: 'Semi Adult' },
  { id: 111, name: 'Koi Texido', category: 'Guppys', price: '₹250', image: 'fishes/Koi texido.jpg', tag: 'Premium' },
  { id: 112, name: 'Dark Knight Dragon', category: 'Guppys', price: '₹250', image: 'fishes/Dark knight dragon.jpg', tag: 'Premium' },
  { id: 113, name: 'White Angel', category: 'Angels', price: '₹150', image: 'fishes/White angel.jpg', tag: 'Popular' },
  { id: 114, name: 'Marbel Angel', category: 'Angels', price: '₹199', image: 'fishes/Marbel angel.jpg', tag: 'Popular' },
  { id: 115, name: 'Angel', category: 'Angels', price: '₹100', image: 'fishes/Angel.jpg', tag: 'Standard' },
  { id: 12, name: 'Mollys', category: 'Mollies', price: '₹49', image: 'fishes/mollies.webp', tag: 'Popular' },
  { id: 22, name: 'Moon Tail Mollies', category: 'Mollies', price: '₹99', image: 'fishes/moon tail mollies.jpg', tag: 'Moon Tail' },
  { id: 23, name: 'Balloon Mollies', category: 'Mollies', price: '₹79', image: 'fishes/ballon mollies.jpeg', tag: 'Balloon' },
  { id: 24, name: 'Molly Babies', category: 'Mollies', price: '₹5 / pc', image: 'fishes/Molly babyes.jpeg', tag: 'Babies' },
  { id: 13, name: 'Gourami', category: 'Oxy-less Fishes', price: '₹79', image: 'fishes/Gourami.jpg', tag: 'Healthy' },
  { id: 25, name: 'Platys', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/Platy fish.webp', tag: 'Colorful' },
  { id: 26, name: 'Sword Tail Platys', category: 'Oxy-less Fishes', price: '₹99', image: 'fishes/Sward tail platy.jpeg', tag: 'Sword Tail' },
  { id: 27, name: 'Zebra', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/Zebra fish.webp', tag: 'Striped' },
  { id: 28, name: 'Shark (Small)', category: 'Oxy-less Fishes', price: '₹59', image: 'fishes/Shark small.webp', tag: 'Small' },
  { id: 14, name: 'Red Cap Oranda Gold Fish', category: 'Gold Fish', price: '₹150', image: 'fishes/Red cap oranda gold fish.jpeg', tag: 'Cute' },
  { id: 29, name: 'Black Moor Gold Fish', category: 'Gold Fish', price: '₹99', image: 'fishes/Black moor gold fish.jpg', tag: 'Dark' },
  { id: 30, name: 'Standard Gold Fish', category: 'Gold Fish', price: '₹79', image: 'fishes/standard gold fish.webp', tag: 'Standard' },
  { id: 15, name: 'Arowana (Silver)', category: 'Exotic & Large Fishes', price: 'Contact Us', image: 'fishes/Arowana silver .webp', tag: 'Exotic Giant' },
  { id: 31, name: 'Flowerhorn SRD', category: 'Exotic & Large Fishes', price: 'Contact Us', image: 'fishes/Flowerhorn srd.jpg', tag: 'Ultra Head' },
  { id: 32, name: 'Oscar (Copper)', category: 'Exotic & Large Fishes', price: '₹200', image: 'fishes/Copper oscar.webp', tag: 'Aggressive' },
  { id: 33, name: 'Oscar (Albino)', category: 'Exotic & Large Fishes', price: '₹250', image: 'fishes/Albino oscar.jpeg', tag: 'Aggressive' },
  { id: 34, name: 'Oscar (White)', category: 'Exotic & Large Fishes', price: '₹250', image: 'fishes/White oscar.webp', tag: 'Beautiful' },
  { id: 35, name: 'Parrot Fish', category: 'Exotic & Large Fishes', price: '₹250', image: 'fishes/Parrot fish.webp', tag: 'Premium' },
  { id: 36, name: 'Polar Parrot Breeding Pair', category: 'Exotic & Large Fishes', price: '₹500', image: 'fishes/polar parrot breeding pair.jpg', tag: 'Breeder' },
  { id: 37, name: 'Milky Carp', category: 'Carp & Koi', price: '₹150', image: 'fishes/milky carp.webp', tag: 'Stunning' },
  { id: 38, name: 'Koi Carp', category: 'Carp & Koi', price: '₹99', image: 'fishes/koi carp.webp', tag: 'Active' },
  { id: 16, name: 'Flowerhorn Food (Humpy Head)', type: 'Pellets', suitable: 'Flowerhorns', price: '₹250', stock: 'In Stock', image: 'food/Humpy head food.jpeg', desc: 'Promotes head growth' }
];

const requiredGuppyNames = [
  'HB Blue Guppys',
  'Platinum Dumbo Ear Guppys',
  'Dragon Tail Guppys',
  'Guppy Babies',
  'Guppy Semi Adults'
];

const defaultCategories = [
  { name: 'Guppys', count: 11, image: 'fishes/Golden guppy.jpg', status: 'Active' },
  { name: 'Angels', count: 3, image: 'fishes/White angel.jpg', status: 'Active' },
  { name: 'Mollies', count: 4, image: 'fishes/moon tail mollies.jpg', status: 'Active' },
  { name: 'Oxy-less Fishes', count: 5, image: 'fishes/Gourami.jpg', status: 'Active' },
  { name: 'Gold Fish', count: 3, image: 'fishes/Red cap oranda gold fish.jpeg', status: 'Active' },
  { name: 'Exotic & Large Fishes', count: 7, image: 'fishes/Flowerhorn srd.jpg', status: 'Active' },
  { name: 'Carp & Koi', count: 2, image: 'fishes/milky carp.webp', status: 'Active' }
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

const defaultCoupons = [
  { id: 1, code: 'AQUA10', type: 'percentage', value: 10, minOrder: 300, expiry: new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0], maxUsage: 100, currentUsage: 0, active: true },
  { id: 2, code: 'FISH20', type: 'percentage', value: 20, minOrder: 500, expiry: new Date(Date.now() + 60*24*60*60*1000).toISOString().split('T')[0], maxUsage: 50, currentUsage: 0, active: true },
  { id: 3, code: 'NEWUSER50', type: 'fixed', value: 50, minOrder: 200, expiry: new Date(Date.now() + 90*24*60*60*1000).toISOString().split('T')[0], maxUsage: 200, currentUsage: 0, active: true },
  { id: 4, code: 'PREMIUM100', type: 'fixed', value: 100, minOrder: 1000, expiry: new Date(Date.now() + 45*24*60*60*1000).toISOString().split('T')[0], maxUsage: 30, currentUsage: 0, active: true }
];

const defaultItems = [
  { id: 1, name: 'Aquarium Heater (50W)', price: '₹300', stock: 'In Stock', image: 'items/50w aquarium heater.webp' },
  { id: 2, name: 'Aquarium Heater (100W)', price: '₹350', stock: 'In Stock', image: 'items/100 w aquarium heater.webp' },
  { id: 3, name: 'Aquarium Light Large', price: '₹400', stock: 'In Stock', image: 'items/Aquarium light (large ).jpg' },
  { id: 4, name: 'Aquarium Light Small', price: '₹300', stock: 'In Stock', image: 'items/Aquarium light (small).jpg' },
  { id: 5, name: 'Bubble Oxygen', price: '₹200', stock: 'In Stock', image: 'items/buble oxygen.webp' },
  { id: 6, name: 'Double Oxygen', price: '₹300', stock: 'In Stock', image: 'items/double oxygen.webp' },
  { id: 7, name: 'Internal Oxygen (Small)', price: '₹300', stock: 'In Stock', image: 'items/internal oxgyen (small).webp' },
  { id: 8, name: 'Internal Oxygen (Large)', price: '₹400', stock: 'In Stock', image: 'items/internal oxgyen (big).jpg' }
];

// ── Firebase Firestore Helpers ──────────────────────────────────────────────────

// Save a single collection to Firestore
function saveCollectionToFirestore(collectionName, dataArray, idField = 'id') {
  if (!window.db) return Promise.resolve();
  const batch = db.batch();
  dataArray.forEach(item => {
    const docId = String(item[idField] || item.code || Date.now());
    const ref = db.collection(collectionName).doc(docId);
    batch.set(ref, JSON.parse(JSON.stringify(item)));
  });
  return batch.commit()
    .then(() => console.log(`%c☁️ ${collectionName} synced to Firebase (${dataArray.length} docs)`, 'color: #00ffc8;'))
    .catch(err => console.error(`❌ Failed to sync ${collectionName}:`, err));
}

// Delete a single doc from Firestore
function deleteDocFromFirestore(collectionName, docId) {
  if (!window.db) return Promise.resolve();
  return db.collection(collectionName).doc(String(docId)).delete()
    .then(() => console.log(`%c🗑️ Deleted ${collectionName}/${docId} from Firebase`, 'color: #ffaa00;'))
    .catch(err => console.error(`❌ Failed to delete ${collectionName}/${docId}:`, err));
}

// Save/Update a single doc in Firestore
function saveDocToFirestore(collectionName, docId, data) {
  if (!window.db) return Promise.resolve();
  return db.collection(collectionName).doc(String(docId)).set(JSON.parse(JSON.stringify(data)))
    .then(() => console.log(`%c☁️ Saved ${collectionName}/${docId} to Firebase`, 'color: #00ffc8;'))
    .catch(err => console.error(`❌ Failed to save ${collectionName}/${docId}:`, err));
}

// Load a full collection from Firestore
function loadCollectionFromFirestore(collectionName) {
  if (!window.db) return Promise.resolve([]);
  return db.collection(collectionName).get()
    .then(snapshot => {
      const data = [];
      snapshot.forEach(doc => data.push(doc.data()));
      console.log(`%c📥 Loaded ${data.length} docs from Firebase ${collectionName}`, 'color: #00d4ff;');
      return data;
    })
    .catch(err => {
      console.error(`❌ Failed to load ${collectionName}:`, err);
      return [];
    });
}

// Seed default data if empty in Firebase
window.seedDefaultDataIfEmpty = async function(force = false) {
  if (!window.db) return;
  console.log('%c🌱 Checking if database seeding is required...', 'color: #ffaa00; font-weight: bold;');
  try {
    const productsSnapshot = await db.collection('products').limit(1).get();
    if (productsSnapshot.empty || force) {
      console.log('%c🌱 Seeding default products to Firebase...', 'color: #00ffc8;');
      await saveCollectionToFirestore('products', defaultProducts);
    }
    
    const categoriesSnapshot = await db.collection('categories').limit(1).get();
    if (categoriesSnapshot.empty || force) {
      console.log('%c🌱 Seeding default categories to Firebase...', 'color: #00ffc8;');
      await saveCollectionToFirestore('categories', defaultCategories, 'name');
    }

    const couponsSnapshot = await db.collection('coupons').limit(1).get();
    if (couponsSnapshot.empty || force) {
      console.log('%c🌱 Seeding default coupons to Firebase...', 'color: #00ffc8;');
      await saveCollectionToFirestore('coupons', defaultCoupons);
    }

    const foodsSnapshot = await db.collection('foods').limit(1).get();
    if (foodsSnapshot.empty || force) {
      console.log('%c🌱 Seeding default foods to Firebase...', 'color: #00ffc8;');
      await saveCollectionToFirestore('foods', defaultFoods);
    }

    const itemsSnapshot = await db.collection('items').limit(1).get();
    if (itemsSnapshot.empty || force) {
      console.log('%c🌱 Seeding default items to Firebase...', 'color: #00ffc8;');
      await saveCollectionToFirestore('items', defaultItems);
    }

    const ordersSnapshot = await db.collection('orders').limit(1).get();
    if (ordersSnapshot.empty || force) {
      console.log('%c🌱 Seeding default orders to Firebase...', 'color: #00ffc8;');
      await saveCollectionToFirestore('orders', defaultOrders);
    }

    const customersSnapshot = await db.collection('customers').limit(1).get();
    if (customersSnapshot.empty || force) {
      console.log('%c🌱 Seeding default customers to Firebase...', 'color: #00ffc8;');
      await saveCollectionToFirestore('customers', defaultCustomers);
    }

    const inquiriesSnapshot = await db.collection('inquiries').limit(1).get();
    if (inquiriesSnapshot.empty || force) {
      console.log('%c🌱 Seeding default inquiries to Firebase...', 'color: #00ffc8;');
      await saveCollectionToFirestore('inquiries', defaultInquiries);
    }

    const testimonialsSnapshot = await db.collection('testimonials').limit(1).get();
    if (testimonialsSnapshot.empty || force) {
      console.log('%c🌱 Seeding default testimonials to Firebase...', 'color: #00ffc8;');
      await saveCollectionToFirestore('testimonials', defaultTestimonials, 'name');
    }

    // Seed settings (config, banners, payments)
    const configRef = db.collection('settings').doc('config');
    const configSnap = await configRef.get();
    if (!configSnap.exists || force) {
      console.log('%c🌱 Seeding default config to Firebase...', 'color: #00ffc8;');
      await configRef.set({
        whatsApp: '+91 9876543210',
        email: 'info@subramanyaaquatics.com',
        address: 'Visakhapatnam, Andhra Pradesh, India',
        maintenance: 'no',
        soundPitch: '400'
      });
    }

    const bannersRef = db.collection('settings').doc('banners');
    const bannersSnap = await bannersRef.get();
    if (!bannersSnap.exists || force) {
      console.log('%c🌱 Seeding default banners to Firebase...', 'color: #00ffc8;');
      await bannersRef.set({
        heroTitle: 'Subramanya Aquatics',
        heroSubtitle: 'Premium Quality Fish & Aquarium Accessories',
        heroBg: 'logo.jpeg',
        offerTitle: 'Special Summer Splash Discount!',
        offerCode: 'AQUA10',
        offerTimer: new Date(Date.now() + 7*24*60*60*1000).toISOString().split('T')[0]
      });
    }

    const paymentsRef = db.collection('settings').doc('payments');
    const paymentsSnap = await paymentsRef.get();
    if (!paymentsSnap.exists || force) {
      console.log('%c🌱 Seeding default payments config to Firebase...', 'color: #00ffc8;');
      await paymentsRef.set({
        upiId: 'subramanyaaquatics@ybl',
        qrImage: 'QR scan.jpeg',
        deliveryCharge: '150',
        packingCharge: '50'
      });
    }

    console.log('%c🌱 Database seeding checked/completed.', 'color: #00ffc8; font-weight: bold;');
  } catch (err) {
    console.error('❌ Error during seeding:', err);
  }
};

// Setup real-time Firestore listeners for ALL collections
function setupFirestoreListeners() {
  if (!window.db || firestoreListenersActive) return;
  firestoreListenersActive = true;

  console.log('%c👂 Setting up real-time Firestore listeners for all collections...', 'color: #00d4ff; font-weight: bold;');

  // Coupons listener
  db.collection('coupons').onSnapshot(snapshot => {
    if (snapshot.metadata.hasPendingWrites) return;
    const fireData = [];
    snapshot.forEach(doc => fireData.push(doc.data()));
    if (fireData.length > 0) {
      coupons = fireData;
      localStorage.setItem('sa_coupons', JSON.stringify(coupons));
      renderCoupons();
      if (document.getElementById('cardTotalCoupons')) document.getElementById('cardTotalCoupons').textContent = coupons.length;
      if (document.getElementById('cardActiveCoupons')) document.getElementById('cardActiveCoupons').textContent = coupons.filter(c => c.active).length;
      console.log('%c🔄 Coupons updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Coupons listener error:', err));

  // Foods listener
  db.collection('foods').onSnapshot(snapshot => {
    if (snapshot.metadata.hasPendingWrites) return;
    const fireData = [];
    snapshot.forEach(doc => fireData.push(doc.data()));
    if (fireData.length > 0) {
      foods = fireData;
      localStorage.setItem('sa_foods', JSON.stringify(foods));
      renderFoods();
      console.log('%c🔄 Foods updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Foods listener error:', err));

  // Items listener
  db.collection('items').onSnapshot(snapshot => {
    if (snapshot.metadata.hasPendingWrites) return;
    const fireData = [];
    snapshot.forEach(doc => fireData.push(doc.data()));
    if (fireData.length > 0) {
      items = fireData;
      localStorage.setItem('sa_items', JSON.stringify(items));
      renderItems();
      console.log('%c🔄 Items updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Items listener error:', err));

  // Products listener
  db.collection('products').onSnapshot(snapshot => {
    if (snapshot.metadata.hasPendingWrites) return;
    const fireData = [];
    snapshot.forEach(doc => fireData.push(doc.data()));
    if (fireData.length > 0) {
      products = fireData.sort((a,b) => a.id - b.id);
      localStorage.setItem('sa_products', JSON.stringify(products));
      renderProducts();
      if (document.getElementById('cardTotalProducts')) document.getElementById('cardTotalProducts').textContent = products.length;
      console.log('%c🔄 Products updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Products listener error:', err));

  // Categories listener
  db.collection('categories').onSnapshot(snapshot => {
    if (snapshot.metadata.hasPendingWrites) return;
    const fireData = [];
    snapshot.forEach(doc => fireData.push(doc.data()));
    if (fireData.length > 0) {
      categories = fireData;
      localStorage.setItem('sa_categories', JSON.stringify(categories));
      renderCategories();
      console.log('%c🔄 Categories updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Categories listener error:', err));

  // Orders listener
  db.collection('orders').onSnapshot(snapshot => {
    if (snapshot.metadata.hasPendingWrites) return;
    const fireData = [];
    snapshot.forEach(doc => {
      const d = doc.data();
      fireData.push({
        id: doc.id,
        customer: d.customer || d['Customer Name'] || 'Guest',
        product: d.product || d['Items'] || '',
        amount: d.amount || d['Total'] || '0',
        status: (d.status || d['Status'] || 'pending').toLowerCase(),
        date: d.date || d['Date'] || '',
        phone: d.phone || d['Phone'] || '',
        address: d.address || d['Address'] || '',
        payment: d.payment || d['Payment'] || '',
        utr: d.utr || '',
        screenshot: d.screenshot || '',
        items: d.items || null
      });
    });
    if (fireData.length > 0) {
      orders = fireData;
      localStorage.setItem('sa_orders', JSON.stringify(orders));
      renderOrders();
      if (document.getElementById('cardActiveOrders')) document.getElementById('cardActiveOrders').textContent = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length;
      if (document.getElementById('ordersCounter')) document.getElementById('ordersCounter').textContent = orders.filter(o => o.status === 'pending').length;
      console.log('%c🔄 Orders updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Orders listener error:', err));

  // Customers listener
  db.collection('customers').onSnapshot(snapshot => {
    if (snapshot.metadata.hasPendingWrites) return;
    const fireData = [];
    snapshot.forEach(doc => fireData.push(doc.data()));
    if (fireData.length > 0) {
      customers = fireData;
      localStorage.setItem('sa_customers', JSON.stringify(customers));
      renderCustomers();
      console.log('%c🔄 Customers updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Customers listener error:', err));

  // Inquiries listener
  db.collection('inquiries').onSnapshot(snapshot => {
    if (snapshot.metadata.hasPendingWrites) return;
    const fireData = [];
    snapshot.forEach(doc => fireData.push(doc.data()));
    if (fireData.length > 0) {
      inquiries = fireData;
      localStorage.setItem('sa_inquiries', JSON.stringify(inquiries));
      renderInquiries();
      console.log('%c🔄 Inquiries updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Inquiries listener error:', err));

  // Testimonials listener
  db.collection('testimonials').onSnapshot(snapshot => {
    if (snapshot.metadata.hasPendingWrites) return;
    const fireData = [];
    snapshot.forEach(doc => fireData.push(doc.data()));
    if (fireData.length > 0) {
      testimonials = fireData;
      localStorage.setItem('sa_testimonials', JSON.stringify(testimonials));
      renderTestimonials();
      console.log('%c🔄 Testimonials updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Testimonials listener error:', err));

  // Config listener
  db.collection('settings').doc('config').onSnapshot(doc => {
    if (doc.exists) {
      const cfg = doc.data();
      localStorage.setItem('sa_cfg', JSON.stringify(cfg));
      if (document.getElementById('cfgWhatsApp')) document.getElementById('cfgWhatsApp').value = cfg.whatsApp || '';
      if (document.getElementById('cfgEmail')) document.getElementById('cfgEmail').value = cfg.email || '';
      if (document.getElementById('cfgAddress')) document.getElementById('cfgAddress').value = cfg.address || '';
      if (document.getElementById('cfgMaintenance')) document.getElementById('cfgMaintenance').value = cfg.maintenance || 'no';
      if (document.getElementById('cfgSoundPitch')) document.getElementById('cfgSoundPitch').value = cfg.soundPitch || '400';
      console.log('%c🔄 Config updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Config listener error:', err));

  // Banners listener
  db.collection('settings').doc('banners').onSnapshot(doc => {
    if (doc.exists) {
      const bnr = doc.data();
      localStorage.setItem('sa_banners', JSON.stringify(bnr));
      if (document.getElementById('cfgHeroTitle')) document.getElementById('cfgHeroTitle').value = bnr.heroTitle || '';
      if (document.getElementById('cfgHeroSubtitle')) document.getElementById('cfgHeroSubtitle').value = bnr.heroSubtitle || '';
      if (document.getElementById('cfgHeroBg')) document.getElementById('cfgHeroBg').value = bnr.heroBg || '';
      if (document.getElementById('cfgOfferTitle')) document.getElementById('cfgOfferTitle').value = bnr.offerTitle || '';
      if (document.getElementById('cfgOfferCode')) document.getElementById('cfgOfferCode').value = bnr.offerCode || '';
      if (document.getElementById('cfgOfferTimer')) document.getElementById('cfgOfferTimer').value = bnr.offerTimer || '';
      console.log('%c🔄 Banners updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Banners listener error:', err));

  // Payments listener
  db.collection('settings').doc('payments').onSnapshot(doc => {
    if (doc.exists) {
      const pm = doc.data();
      localStorage.setItem('sa_payments', JSON.stringify(pm));
      if (document.getElementById('cfgUpiId')) document.getElementById('cfgUpiId').value = pm.upiId || '';
      if (document.getElementById('cfgQrImage')) document.getElementById('cfgQrImage').value = pm.qrImage || '';
      if (document.getElementById('cfgDeliveryCharge')) document.getElementById('cfgDeliveryCharge').value = pm.deliveryCharge || '0';
      if (document.getElementById('cfgPackingCharge')) document.getElementById('cfgPackingCharge').value = pm.packingCharge || '0';
      console.log('%c🔄 Payments updated from Firebase real-time', 'color: #00ffc8;');
    }
  }, err => console.error('Payments listener error:', err));
}

// Sync all collections to Firestore (push local → cloud)
window.syncAllToFirestore = function() {
  if (!window.db) {
    showToast('error', 'Firebase not connected. Check your internet.');
    return;
  }
  showToast('info', '☁️ Syncing all catalogs to Firebase...');
  Promise.all([
    saveCollectionToFirestore('products', products),
    saveCollectionToFirestore('categories', categories, 'name'),
    saveCollectionToFirestore('foods', foods),
    saveCollectionToFirestore('items', items),
    saveCollectionToFirestore('coupons', coupons),
    saveCollectionToFirestore('orders', orders),
    saveCollectionToFirestore('customers', customers),
    saveCollectionToFirestore('inquiries', inquiries),
    saveCollectionToFirestore('testimonials', testimonials, 'name')
  ]).then(() => {
    showToast('success', '✅ All catalogs synced to Firebase successfully!');
  }).catch((err) => {
    console.error('Error syncing all to Firebase:', err);
    showToast('error', 'Some catalogs failed to sync. Check console.');
  });
};

// Load all collections from Firebase (pull cloud → local)
window.loadAllFromFirestore = async function() {
  if (!window.db) {
    showToast('error', 'Firebase not connected. Check your internet.');
    return;
  }
  showToast('info', '📥 Checking & seeding default data if empty...');
  await seedDefaultDataIfEmpty();
  
  showToast('info', '📥 Loading database from Firebase...');
  try {
    const [fbProducts, fbCategories, fbFoods, fbItems, fbCoupons, fbOrders, fbCustomers, fbInquiries, fbTestimonials] = await Promise.all([
      loadCollectionFromFirestore('products'),
      loadCollectionFromFirestore('categories'),
      loadCollectionFromFirestore('foods'),
      loadCollectionFromFirestore('items'),
      loadCollectionFromFirestore('coupons'),
      loadCollectionFromFirestore('orders'),
      loadCollectionFromFirestore('customers'),
      loadCollectionFromFirestore('inquiries'),
      loadCollectionFromFirestore('testimonials')
    ]);

    if (fbProducts.length > 0) { products = fbProducts.sort((a,b) => a.id - b.id); localStorage.setItem('sa_products', JSON.stringify(products)); }
    if (fbCategories.length > 0) { categories = fbCategories; localStorage.setItem('sa_categories', JSON.stringify(categories)); }
    if (fbFoods.length > 0) { foods = fbFoods; localStorage.setItem('sa_foods', JSON.stringify(foods)); }
    if (fbItems.length > 0) { items = fbItems; localStorage.setItem('sa_items', JSON.stringify(items)); }
    if (fbCoupons.length > 0) { coupons = fbCoupons; localStorage.setItem('sa_coupons', JSON.stringify(coupons)); }
    if (fbOrders.length > 0) { orders = fbOrders; localStorage.setItem('sa_orders', JSON.stringify(orders)); }
    if (fbCustomers.length > 0) { customers = fbCustomers; localStorage.setItem('sa_customers', JSON.stringify(customers)); }
    if (fbInquiries.length > 0) { inquiries = fbInquiries; localStorage.setItem('sa_inquiries', JSON.stringify(inquiries)); }
    if (fbTestimonials.length > 0) { testimonials = fbTestimonials; localStorage.setItem('sa_testimonials', JSON.stringify(testimonials)); }

    renderProducts(); renderCategories(); renderFoods(); renderItems(); renderCoupons(); renderOrders(); renderCustomers(); renderInquiries(); renderTestimonials(); renderMediaLibrary();
    
    // Update counters
    document.getElementById('cardTotalProducts').textContent = products.length;
    document.getElementById('cardActiveOrders').textContent = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length;
    document.getElementById('ordersCounter').textContent = orders.filter(o => o.status === 'pending').length;
    if (document.getElementById('cardTotalCoupons')) document.getElementById('cardTotalCoupons').textContent = coupons.length;
    if (document.getElementById('cardActiveCoupons')) document.getElementById('cardActiveCoupons').textContent = coupons.filter(c => c.active).length;

    showToast('success', '✅ Loaded all catalogs from Firebase successfully!');
  } catch (err) {
    console.error('Error loading database from Firebase:', err);
    showToast('error', 'Failed to load database from Firebase. Using local fallback.');
  }
};

function initPortalState() {
  // Load state from local storage or set defaults
  products = JSON.parse(localStorage.getItem('sa_products')) || defaultProducts;
  
  // Force update specific default guppy prices if they exist in localStorage to reflect new corporate updates
  products.forEach(p => {
    if (p.name === 'HB Blue Guppys') p.price = '₹250';
    if (p.name === 'Platinum Dumbo Ear Guppys') p.price = '₹250';
    if (p.name === 'Dragon Tail Guppys') p.price = '₹250';
    if (p.name === 'Guppy Babies') p.price = '₹7 / pc';
    if (p.name === 'Guppy Semi Adults') p.price = '₹40 / pair';
  });
  
  categories = JSON.parse(localStorage.getItem('sa_categories')) || defaultCategories;
  orders = JSON.parse(localStorage.getItem('sa_orders')) || defaultOrders;
  customers = JSON.parse(localStorage.getItem('sa_customers')) || defaultCustomers;
  testimonials = JSON.parse(localStorage.getItem('sa_testimonials')) || defaultTestimonials;
  inquiries = JSON.parse(localStorage.getItem('sa_inquiries')) || defaultInquiries;
  foods = JSON.parse(localStorage.getItem('sa_foods')) || defaultFoods;
  coupons = JSON.parse(localStorage.getItem('sa_coupons')) || defaultCoupons;
  items = JSON.parse(localStorage.getItem('sa_items')) || defaultItems;

  // Clean up old items with wrong photo filenames and prices, and inject actual ones
  items = items.filter(it => !['Aquarium Heater (50W)', 'Aquarium Heater (100W)', 'Aquarium Light Large', 'Aquarium Light Small', 'Bubble Oxygen', 'Double Oxygen', 'Internal Oxygen (Small)', 'Internal Oxygen (Large)'].includes(it.name));

  const existingItemNames = new Set(items.map(it => it.name));
  const nextItemId = items.length ? Math.max(...items.map(it => it.id)) + 1 : 100;
  let itemIdCounter = nextItemId;
  defaultItems.filter(di => !existingItemNames.has(di.name))
    .forEach(di => {
      items.push({ ...di, id: itemIdCounter++ });
    });

  // Inject any missing required guppy varieties into existing data
  const existingNames = new Set(products.map(p => p.name));
  const nextId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 100;
  let idCounter = nextId;
  defaultProducts.filter(dp => requiredGuppyNames.includes(dp.name) && !existingNames.has(dp.name))
    .forEach(dp => {
      products.push({ ...dp, id: idCounter++ });
    });

  // Clean up old placeholder foods and inject actual ones
  foods = foods.filter(f => !['Hikari Cichlid Gold Pellets', 'Tetra Guppy Color Flakes', 'Betta Bio-Gold Pellets', 'Live Bloodworms', 'Frozen Brine Shrimp', 'Arowana Growth Formula'].includes(f.name));
  
  const existingFoodNames = new Set(foods.map(f => f.name));
  const nextFoodId = foods.length ? Math.max(...foods.map(f => f.id)) + 1 : 100;
  let foodIdCounter = nextFoodId;
  defaultFoods.filter(df => !existingFoodNames.has(df.name))
    .forEach(df => {
      foods.push({ ...df, id: foodIdCounter++ });
    });

  saveAllState();

  // Render everything
  renderProducts();
  renderCategories();
  renderFoods();
  renderItems();
  renderOrders();
  renderCustomers();
  renderInquiries();
  renderTestimonials();
  renderMediaLibrary();
  renderCoupons();

  // Update counters
  document.getElementById('cardTotalProducts').textContent = products.length;
  document.getElementById('cardActiveOrders').textContent = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length;
  document.getElementById('ordersCounter').textContent = orders.filter(o => o.status === 'pending').length;
  if(document.getElementById('cardTotalCoupons')) document.getElementById('cardTotalCoupons').textContent = coupons.length;
  if(document.getElementById('cardActiveCoupons')) document.getElementById('cardActiveCoupons').textContent = coupons.filter(c => c.active).length;

  // Setup Firebase real-time listeners & initial cloud load
  if (window.db && !firestoreListenersActive) {
    setupFirestoreListeners();
    // On first load, try to pull from Firebase if local data is defaults
    loadAllFromFirestore();
  }
}

function saveAllState() {
  localStorage.setItem('sa_products', JSON.stringify(products));
  localStorage.setItem('sa_categories', JSON.stringify(categories));
  localStorage.setItem('sa_orders', JSON.stringify(orders));
  localStorage.setItem('sa_customers', JSON.stringify(customers));
  localStorage.setItem('sa_testimonials', JSON.stringify(testimonials));
  localStorage.setItem('sa_inquiries', JSON.stringify(inquiries));
  localStorage.setItem('sa_foods', JSON.stringify(foods));
  localStorage.setItem('sa_items', JSON.stringify(items));
  localStorage.setItem('sa_coupons', JSON.stringify(coupons));
}

// Render Coupons Table
function renderCoupons() {
  const tbody = document.getElementById('couponsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const searchVal = document.getElementById('searchCoupons')?.value.toLowerCase() || '';
  const filtered = coupons.filter(c => c.code.toLowerCase().includes(searchVal));

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--color-text-muted);padding:20px;">No coupons found. Create one!</td></tr>';
    return;
  }

  filtered.forEach(c => {
    const isExpired = new Date(c.expiry) < new Date();
    const isLimitReached = c.maxUsage && c.currentUsage >= c.maxUsage;
    const statusText = !c.active ? 'Inactive' : (isExpired ? 'Expired' : (isLimitReached ? 'Limit Reached' : 'Active'));
    const statusClass = !c.active || isExpired || isLimitReached ? 'cancelled' : 'delivered';
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="coupon-code">${c.code}</span></td>
      <td><span class="coupon-discount">${c.type === 'percentage' ? c.value + '%' : '₹' + c.value} OFF</span></td>
      <td>₹${c.minOrder}</td>
      <td>${c.expiry}</td>
      <td>${c.currentUsage} / ${c.maxUsage || '∞'}</td>
      <td><span class="badge badge-${statusClass}">${statusText}</span></td>
      <td style="display:flex;gap:6px;">
        <button class="btn-secondary" style="padding: 4px 10px;" onclick="toggleCouponStatus(${c.id})">${c.active ? '⛔ Disable' : '✅ Enable'}</button>
        <button class="btn-secondary" style="padding: 4px 10px;" onclick="openEditCoupon(${c.id})">✏️ Edit</button>
        <button class="btn-secondary" style="padding: 4px 10px; border-color: var(--color-accent); color: var(--color-accent);" onclick="deleteCoupon(${c.id})">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.toggleCouponStatus = function(id) {
  const c = coupons.find(coupon => coupon.id == id);
  if (c) {
    c.active = !c.active;
    saveAllState();
    saveDocToFirestore('coupons', c.id, c);
    renderCoupons();
    if(document.getElementById('cardTotalCoupons')) document.getElementById('cardTotalCoupons').textContent = coupons.length;
    if(document.getElementById('cardActiveCoupons')) document.getElementById('cardActiveCoupons').textContent = coupons.filter(cp => cp.active).length;
    showToast('info', `Coupon ${c.code} is now ${c.active ? 'Active' : 'Inactive'}`);
  }
};

window.openEditCoupon = function(id) {
  const c = coupons.find(coupon => coupon.id == id);
  if (!c) return;
  document.getElementById('editCouponId').value = c.id;
  document.getElementById('couponCode').value = c.code;
  document.getElementById('couponType').value = c.type;
  document.getElementById('couponValue').value = c.value;
  document.getElementById('couponMinOrder').value = c.minOrder;
  document.getElementById('couponExpiry').value = c.expiry;
  document.getElementById('couponMaxUsage').value = c.maxUsage || '';
  document.getElementById('couponActiveToggle').checked = c.active;
  document.getElementById('couponModalTitle').textContent = 'Edit Coupon: ' + c.code;
  document.getElementById('couponModal').classList.add('active');
};

window.deleteCoupon = function(id) {
  const c = coupons.find(coupon => coupon.id == id);
  if (c && confirm(`Delete coupon "${c.code}"?`)) {
    coupons = coupons.filter(coupon => coupon.id != id);
    saveAllState();
    deleteDocFromFirestore('coupons', id);
    renderCoupons();
    if(document.getElementById('cardTotalCoupons')) document.getElementById('cardTotalCoupons').textContent = coupons.length;
    if(document.getElementById('cardActiveCoupons')) document.getElementById('cardActiveCoupons').textContent = coupons.filter(cp => cp.active).length;
    showToast('success', `Coupon "${c.code}" deleted.`);
  }
};

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
        <td><img src="${resolveProductImage(p)}" alt="${p.name}" style="width:40px;height:40px;border-radius:8px;border:1.5px solid var(--color-primary);object-fit:cover;"></td>
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
    deleteDocFromFirestore('categories', c.name);
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
      <td><img src="${resolveProductImage(f)}" alt="${f.name}" style="width:44px;height:44px;border-radius:8px;border:1.5px solid var(--color-primary);object-fit:cover;"></td>
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
    deleteDocFromFirestore('foods', id);
    renderFoods();
    showToast('success', `"${f.name}" removed from foods.`);
  }
};

// Render Aquatic Items Table
function renderItems() {
  const tbody = document.getElementById('itemsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const searchVal = document.getElementById('searchItems')?.value.toLowerCase() || '';

  const filtered = items.filter(it => it.name.toLowerCase().includes(searchVal));

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--color-text-muted);padding:20px;">No items found. Add one above!</td></tr>';
    return;
  }

  filtered.forEach(it => {
    const stockBadge = it.stock === 'In Stock' ? 'delivered' : it.stock === 'Low Stock' ? 'pending' : 'cancelled';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${resolveProductImage(it)}" alt="${it.name}" style="width:44px;height:44px;border-radius:8px;border:1.5px solid var(--color-primary);object-fit:cover;"></td>
      <td><strong>${it.name}</strong></td>
      <td><strong style="color:var(--color-secondary);">${it.price}</strong></td>
      <td><span class="badge badge-${stockBadge}">${it.stock}</span></td>
      <td>
        <button class="btn-secondary" style="padding:4px 10px;margin-right:6px;" onclick="openEditItem(${it.id})">✏️ Edit</button>
        <button class="btn-secondary" style="padding:4px 10px;border-color:var(--color-accent);color:var(--color-accent);" onclick="deleteItem(${it.id})">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.openEditItem = function(id) {
  const it = items.find(item => item.id == id);
  if (!it) return;
  document.getElementById('editItemId').value = it.id;
  document.getElementById('itemName').value = it.name;
  document.getElementById('itemPrice').value = it.price.replace('₹', '');
  document.getElementById('itemStock').value = it.stock;
  document.getElementById('itemImage').value = it.image || '';
  document.getElementById('itemModalTitle').textContent = 'Edit: ' + it.name;
  document.getElementById('itemModal').classList.add('active');
};

window.deleteItem = function(id) {
  const it = items.find(item => item.id == id);
  if (it && confirm(`Delete "${it.name}" from items catalog?`)) {
    items = items.filter(item => item.id != id);
    saveAllState();
    deleteDocFromFirestore('items', id);
    renderItems();
    showToast('success', `"${it.name}" removed.`);
  }
};

// Helper to return badge class for different transaction and fulfillment statuses
function getStatusBadgeClass(status) {
  const s = (status || '').toLowerCase().trim();
  if (s === 'pending' || s === 'pending verification') return 'badge-pending-verification';
  if (s === 'payment verified') return 'badge-payment-verified';
  if (s === 'rejected') return 'badge-rejected';
  if (s === 'order confirmed' || s === 'confirmed') return 'badge-order-confirmed';
  if (s === 'shipped') return 'badge-shipped';
  if (s === 'delivered') return 'badge-delivered';
  return 'badge-pending';
}

// Window level helper to open the payment screenshot modal
window.openScreenshotModal = function(base64Data) {
  const modal = document.getElementById('screenshotModal');
  const img = document.getElementById('screenshotViewerImg');
  if (modal && img) {
    img.src = base64Data;
    modal.classList.add('active');
  }
};

// Render Orders Table
function renderOrders() {
  const tbody = document.getElementById('ordersTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  orders.forEach(o => {
    const tr = document.createElement('tr');
    
    // Support either o.product or o.items array
    const itemsStr = Array.isArray(o.items) ? o.items.map(i => `${i.name} x${i.qty}`).join(', ') : (o.product || '-');
    const totalStr = o.amount || (o.total ? `₹${o.total}` : '-');
    const utrStr = o.utr || '-';
    
    const screenshotHtml = o.screenshot 
      ? `<img src="${o.screenshot}" alt="Proof" style="width: 44px; height: 44px; border-radius: 6px; border: 1.5px solid var(--color-primary); object-fit: cover; cursor: pointer; display: block; margin: 0 auto; box-shadow: 0 0 10px rgba(0, 212, 255, 0.15);" onclick="openScreenshotModal('${o.screenshot}')">`
      : `<span style="font-size: 0.8rem; color: rgba(255,255,255,0.35);">No proof</span>`;
      
    const badgeClass = getStatusBadgeClass(o.status);
    const friendlyStatus = (o.status || 'pending').toUpperCase();

    tr.innerHTML = `
      <td><strong>${o.id}</strong></td>
      <td>${o.customer || 'Guest'}</td>
      <td>${o.phone || '-'}</td>
      <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${itemsStr}">${itemsStr}</td>
      <td><strong style="color: var(--color-secondary);">${totalStr}</strong></td>
      <td><code style="font-family: monospace; color: #00ffc8; font-size: 0.85rem; padding: 2px 6px; background: rgba(0,255,200,0.05); border-radius: 4px;">${utrStr}</code></td>
      <td style="text-align: center;">${screenshotHtml}</td>
      <td><span class="badge ${badgeClass}">${friendlyStatus}</span></td>
      <td>${o.date}</td>
      <td>
        <div style="display: flex; gap: 6px; align-items: center; justify-content: flex-start;">
          <button class="btn-secondary" style="padding: 4px 8px; font-size: 0.75rem; height: auto;" onclick="openInvoice('${o.id}')">🖨️ Invoice</button>
          <select class="select-filter" style="padding: 4px 6px; font-size: 0.75rem; height: auto; width: 125px;" onchange="changeOrderStatus('${o.id}', this.value)">
            <option value="Pending Verification" ${o.status === 'Pending Verification' || o.status === 'pending' ? 'selected' : ''}>Pending Verification</option>
            <option value="Payment Verified" ${o.status === 'Payment Verified' ? 'selected' : ''}>Payment Verified</option>
            <option value="Rejected" ${o.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
            <option value="Order Confirmed" ${o.status === 'Order Confirmed' || o.status === 'confirmed' ? 'selected' : ''}>Order Confirmed</option>
            <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
            <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
          </select>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Change Order Status
window.changeOrderStatus = function(id, val) {
  // Update local state
  const o = orders.find(ord => ord.id === id);
  if (o) {
    o.status = val;
    saveAllState();
    initPortalState();
    showToast('success', `Order ${id} status updated to ${val}!`);
  }
  
  // Update server API
  fetch(`/api/orders/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: val })
  }).catch(() => {
    // Server update failed, but local update succeeded
    console.log('Server update failed, but local update succeeded');
  });

  // Update Firebase Firestore if initialized
  if (window.db) {
    db.collection('orders').doc(id).update({
      'status': val,
      'Status': val
    })
      .then(() => {
        console.log('Order status updated in Firebase Firestore');
      })
      .catch((error) => {
        console.error('Error updating order status in Firebase Firestore:', error);
      });
  }
};

// Sync real orders from server
window.syncOrdersFromSheets = function() {
  showToast('info', 'Syncing orders...');

  // Fallback API sync function
  const fallbackSync = () => {
    fetch(ADMIN_SHEETS_URL)
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data) || data.length === 0) {
          showToast('info', 'No orders found yet.');
          return;
        }
        processIncomingOrders(data);
        showToast('success', `Synced ${data.length} order(s) from server!`);
      })
      .catch(() => showToast('error', 'Failed to connect to server.'));
  };

  // Process data array into local orders
  const processIncomingOrders = (data) => {
    // Merge with existing, server orders take priority by ID
    const existingIds = new Set(orders.map(o => o.id || o['Order ID']));
    data.forEach(serverOrder => {
      const orderId = serverOrder['Order ID'];
      if (!existingIds.has(orderId)) {
        // Convert server format to local format
        const localOrder = {
          id: orderId,
          customer: serverOrder['Customer Name'],
          product: serverOrder['Items'],
          amount: serverOrder['Total'],
          status: (serverOrder['Status'] || 'pending').toLowerCase(),
          date: serverOrder['Date'],
          phone: serverOrder['Phone'],
          address: serverOrder['Address'],
          payment: serverOrder['Payment']
        };
        orders.unshift(localOrder);
      }
    });
    saveAllState();
    renderOrders();
  };

  // Try Firebase Firestore first if initialized
  if (window.db) {
    db.collection('orders').get().then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      processIncomingOrders(data);
      showToast('success', `Synced ${data.length} order(s) from Firebase!`);
    }).catch((error) => {
      console.error('Error fetching orders from Firebase Firestore:', error);
      fallbackSync();
    });
  } else {
    fallbackSync();
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

// Helper to compress and resize images client-side before uploading
function compressAndResizeImage(file, callback) {
  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const max_size = 400; // 400px is perfect for thumbnails and fast loading
      let width = img.width;
      let height = img.height;
      if (width > height) {
        if (width > max_size) {
          height *= max_size / width;
          width = max_size;
        }
      } else {
        if (height > max_size) {
          width *= max_size / height;
          height = max_size;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      // Compress to JPEG with 0.7 quality to keep under 30KB
      const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
      callback(dataUrl);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

// Convert dataURL to Blob for Firebase Storage uploading
function dataURLtoBlob(dataurl) {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// Helper to upload images dynamically to Firebase Storage and update text input URL paths
window.handleImageUpload = function(fileInputId, textInputId, progressSpanId, folderName) {
  const fileInput = document.getElementById(fileInputId);
  const textInput = document.getElementById(textInputId);
  const progressSpan = document.getElementById(progressSpanId);
  
  if (!fileInput || !fileInput.files || fileInput.files.length === 0) return;
  const file = fileInput.files[0];
  
  if (!window.storage) {
    showToast('error', 'Firebase Storage not initialized. Cannot upload image.');
    return;
  }
  
  progressSpan.style.display = 'inline-block';
  progressSpan.textContent = 'Compressing...';
  progressSpan.style.color = 'var(--color-primary)';
  
  compressAndResizeImage(file, (dataUrl) => {
    const blob = dataURLtoBlob(dataUrl);
    
    // Create a storage ref using .jpg extension since we compressed it to jpeg
    let originalName = file.name;
    const dotIndex = originalName.lastIndexOf('.');
    if (dotIndex !== -1) {
      originalName = originalName.substring(0, dotIndex) + '.jpg';
    } else {
      originalName = originalName + '.jpg';
    }
    const filename = Date.now() + '_' + originalName;
    const storageRef = window.storage.ref().child(`${folderName}/${filename}`);
    
    progressSpan.textContent = 'Uploading: 0%';
    
    const uploadTask = storageRef.put(blob, { contentType: 'image/jpeg' });
    
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        progressSpan.textContent = `Uploading: ${progress}%`;
      }, 
      (error) => {
        console.error('Upload failed:', error);
        progressSpan.textContent = 'Failed!';
        progressSpan.style.color = 'var(--color-accent)';
        showToast('error', 'Image upload failed: ' + error.message);
      }, 
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          textInput.value = downloadURL;
          progressSpan.textContent = 'Success!';
          progressSpan.style.color = 'var(--color-secondary)';
          showToast('success', 'Image uploaded & optimized to Firebase successfully!');
        });
      }
    );
  });
};

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
  document.getElementById('searchCoupons')?.addEventListener('input', renderCoupons);

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
          saveDocToFirestore('products', p.id, p);
          showToast('success', `${name} updated successfully!`);
        }
      } else {
        const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
        const newProd = { id: newId, name, category,
          price: price.startsWith('₹') || price.toLowerCase().includes('contact') ? price : '₹' + price,
          image, tag: desc ? desc.substring(0, 15) : 'New'
        };
        products.push(newProd);
        saveDocToFirestore('products', newId, newProd);
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
          saveDocToFirestore('foods', f.id, f);
          showToast('success', `${name} updated successfully!`);
        }
      } else {
        const newId = foods.length ? Math.max(...foods.map(f => f.id)) + 1 : 1;
        const newFood = { id: newId, name, type, suitable,
          price: price.startsWith('₹') || price.toLowerCase().includes('contact') ? price : '₹' + price,
          stock, image, desc
        };
        foods.push(newFood);
        saveDocToFirestore('foods', newId, newFood);
        showToast('success', `Food item '${name}' added to catalog!`);
      }
      saveAllState();
      renderFoods();
      foodModal.classList.remove('active');
    });
  }

  document.getElementById('searchItems')?.addEventListener('input', renderItems);

  // ---- AQUATIC ITEMS MODAL ----
  const itemModal = document.getElementById('itemModal');
  const btnAddItem = document.getElementById('btnAddItem');
  const btnCloseItem = document.getElementById('btnCloseItemModal');
  const itemForm = document.getElementById('itemForm');

  if (btnAddItem && itemModal) {
    btnAddItem.addEventListener('click', () => {
      itemForm.reset();
      document.getElementById('editItemId').value = '';
      document.getElementById('itemModalTitle').textContent = 'Add Aquatic Item';
      itemModal.classList.add('active');
    });
  }
  if (btnCloseItem && itemModal) {
    btnCloseItem.addEventListener('click', () => itemModal.classList.remove('active'));
  }
  if (itemForm) {
    itemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('editItemId').value;
      const name = document.getElementById('itemName').value;
      const price = document.getElementById('itemPrice').value;
      const stock = document.getElementById('itemStock').value;
      const image = document.getElementById('itemImage').value || 'logo.jpeg';

      if (id) {
        const it = items.find(item => item.id == id);
        if (it) {
          it.name = name;
          it.price = price.startsWith('₹') || price.toLowerCase().includes('contact') ? price : '₹' + price;
          it.stock = stock; it.image = image;
          saveDocToFirestore('items', it.id, it);
          showToast('success', `${name} updated successfully!`);
        }
      } else {
        const newId = items.length ? Math.max(...items.map(item => item.id)) + 1 : 1;
        const newItem = { id: newId, name,
          price: price.startsWith('₹') || price.toLowerCase().includes('contact') ? price : '₹' + price,
          stock, image
        };
        items.push(newItem);
        saveDocToFirestore('items', newId, newItem);
        showToast('success', `Item '${name}' added to catalog!`);
      }
      saveAllState();
      renderItems();
      itemModal.classList.remove('active');
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
        if (c) { 
          c.name = name; c.image = image; c.status = status; 
          saveDocToFirestore('categories', c.name, c);
        }
        showToast('success', `Category "${name}" updated!`);
      } else {
        const newCat = { name, count: 0, image, status };
        categories.push(newCat);
        saveDocToFirestore('categories', name, newCat);
        showToast('success', `Category "${name}" created!`);
      }
      saveAllState();
      renderCategories();
      categoryModal.classList.remove('active');
    });
  }

  // ---- COUPON MODAL ----
  const couponModal = document.getElementById('couponModal');
  const btnAddCoupon = document.getElementById('btnAddNewCoupon');
  const btnCloseCoupon = document.getElementById('btnCloseCouponModal');
  const couponForm = document.getElementById('couponForm');

  if (btnAddCoupon && couponModal) {
    btnAddCoupon.addEventListener('click', () => {
      couponForm.reset();
      document.getElementById('editCouponId').value = '';
      document.getElementById('couponModalTitle').textContent = 'Create New Coupon';
      document.getElementById('couponExpiry').value = new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0]; // Default 30 days
      couponModal.classList.add('active');
    });
  }
  if (btnCloseCoupon && couponModal) {
    btnCloseCoupon.addEventListener('click', () => couponModal.classList.remove('active'));
  }
  if (couponForm) {
    couponForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('editCouponId').value;
      const code = document.getElementById('couponCode').value.trim().toUpperCase();
      const type = document.getElementById('couponType').value;
      const value = parseFloat(document.getElementById('couponValue').value);
      const minOrder = parseFloat(document.getElementById('couponMinOrder').value);
      const expiry = document.getElementById('couponExpiry').value;
      const maxUsage = document.getElementById('couponMaxUsage').value ? parseInt(document.getElementById('couponMaxUsage').value) : null;
      const active = document.getElementById('couponActiveToggle').checked;

      // Duplicate check (ignore self)
      const isDuplicate = coupons.some(c => c.code === code && c.id != id);
      if (isDuplicate) {
        showToast('error', 'Coupon code already exists!');
        return;
      }

      if (id) {
        const c = coupons.find(coupon => coupon.id == id);
        if (c) { 
          c.code = code; c.type = type; c.value = value; 
          c.minOrder = minOrder; c.expiry = expiry; 
          c.maxUsage = maxUsage; c.active = active;
          saveDocToFirestore('coupons', c.id, c);
        }
        showToast('success', `Coupon "${code}" updated!`);
      } else {
        const newId = coupons.length ? Math.max(...coupons.map(c => c.id)) + 1 : 1;
        const newCoupon = { id: newId, code, type, value, minOrder, expiry, maxUsage, currentUsage: 0, active };
        coupons.push(newCoupon);
        saveDocToFirestore('coupons', newId, newCoupon);
        showToast('success', `Coupon "${code}" created!`);
      }
      saveAllState();
      renderCoupons();
      if(document.getElementById('cardTotalCoupons')) document.getElementById('cardTotalCoupons').textContent = coupons.length;
      if(document.getElementById('cardActiveCoupons')) document.getElementById('cardActiveCoupons').textContent = coupons.filter(c => c.active).length;
      couponModal.classList.remove('active');
    });
  }

  // Configurations submission
  document.getElementById('btnSaveConfig')?.addEventListener('click', () => {
    const data = {
      whatsApp: document.getElementById('cfgWhatsApp')?.value || '',
      email: document.getElementById('cfgEmail')?.value || '',
      address: document.getElementById('cfgAddress')?.value || '',
      maintenance: document.getElementById('cfgMaintenance')?.value || 'no',
      soundPitch: document.getElementById('cfgSoundPitch')?.value || '400'
    };
    saveDocToFirestore('settings', 'config', data)
      .then(() => showToast('success', 'Subramanya Aquatics core configuration saved successfully!'))
      .catch(err => showToast('error', 'Failed to save configuration: ' + err.message));
  });

  document.getElementById('btnSaveBanners')?.addEventListener('click', () => {
    const data = {
      heroTitle: document.getElementById('cfgHeroTitle')?.value || '',
      heroSubtitle: document.getElementById('cfgHeroSubtitle')?.value || '',
      heroBg: document.getElementById('cfgHeroBg')?.value || '',
      offerTitle: document.getElementById('cfgOfferTitle')?.value || '',
      offerCode: document.getElementById('cfgOfferCode')?.value || '',
      offerTimer: document.getElementById('cfgOfferTimer')?.value || ''
    };
    saveDocToFirestore('settings', 'banners', data)
      .then(() => showToast('success', 'Homepage banner settings saved successfully!'))
      .catch(err => showToast('error', 'Failed to save banner settings: ' + err.message));
  });

  document.getElementById('btnSavePayments')?.addEventListener('click', () => {
    const data = {
      upiId: document.getElementById('cfgUpiId')?.value || '',
      qrImage: document.getElementById('cfgQrImage')?.value || '',
      deliveryCharge: document.getElementById('cfgDeliveryCharge')?.value || '0',
      packingCharge: document.getElementById('cfgPackingCharge')?.value || '0'
    };
    saveDocToFirestore('settings', 'payments', data)
      .then(() => showToast('success', 'Payment gateway settings saved successfully!'))
      .catch(err => showToast('error', 'Failed to save payment settings: ' + err.message));
  });

  // Image file upload change listeners
  document.getElementById('prodImageFile')?.addEventListener('change', () => {
    window.handleImageUpload('prodImageFile', 'prodImage', 'prodImageUploadProgress', 'fishes');
  });
  document.getElementById('foodImageFile')?.addEventListener('change', () => {
    window.handleImageUpload('foodImageFile', 'foodImage', 'foodImageUploadProgress', 'food');
  });
  document.getElementById('itemImageFile')?.addEventListener('change', () => {
    window.handleImageUpload('itemImageFile', 'itemImage', 'itemImageUploadProgress', 'items');
  });
  document.getElementById('catImageFile')?.addEventListener('change', () => {
    window.handleImageUpload('catImageFile', 'catImage', 'catImageUploadProgress', 'categories');
  });
  document.getElementById('cfgHeroBgFile')?.addEventListener('change', () => {
    window.handleImageUpload('cfgHeroBgFile', 'cfgHeroBg', 'cfgHeroBgProgress', 'banners');
  });
  document.getElementById('cfgQrImageFile')?.addEventListener('change', () => {
    window.handleImageUpload('cfgQrImageFile', 'cfgQrImage', 'cfgQrImageProgress', 'payments');
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
    deleteDocFromFirestore('products', id);
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
