// ========== CLIENT-SIDE IMAGE RESOLUTION ==========
function resolveProductImage(p) {
  if (!p) return 'logo.jpeg';
  const name = (p.name || '').trim();
  const lowerName = name.toLowerCase();
  const category = (p.category || '').trim().toLowerCase();

  if (category.includes('food') || category.includes('fish food')) return 'images/guppies.png';
  if (category.includes('item') || category.includes('equipment') || category.includes('decorative')) return 'logo.jpeg';

  if (category.includes('guppy') || category.includes('guppies')) return 'images/guppies.png';
  if (category.includes('molly') || category.includes('mollies')) return 'images/guppies.png';
  if (category.includes('oxy-less') || category.includes('oxyless')) return 'images/discus.png';
  if (category.includes('betta')) return 'images/betta.png';
  if (category.includes('oscar')) return 'images/oscar.png';
  if (category.includes('flowerhorn') || category.includes('flower horn')) return 'images/flowerhorn.png';
  if (category.includes('arowana') || category.includes('arwana')) return 'images/arowana.png';
  if (category.includes('gold fish') || category.includes('goldfish')) return 'images/goldfish.png';
  if (category.includes('exotics') || category.includes('giant')) return 'images/koi.png';
  if (category.includes('angel')) return 'images/betta.png';

  if (lowerName.includes('guppy') || lowerName.includes('guppies')) return 'images/guppies.png';
  if (lowerName.includes('molly') || lowerName.includes('mollies')) return 'images/guppies.png';
  if (lowerName.includes('betta') || lowerName.includes('bata') || lowerName.includes('beta')) return 'images/betta.png';
  if (lowerName.includes('oscar')) return 'images/oscar.png';
  if (lowerName.includes('flowerhorn') || lowerName.includes('flower horn') || lowerName.includes('kamfa')) return 'images/flowerhorn.png';
  if (lowerName.includes('arowana') || lowerName.includes('arwana')) return 'images/arowana.png';
  if (lowerName.includes('gold fish') || lowerName.includes('goldfish')) return 'images/goldfish.png';
  if (lowerName.includes('koi')) return 'images/koi.png';
  if (lowerName.includes('discus')) return 'images/discus.png';
  if (lowerName.includes('platy') || lowerName.includes('platies') || lowerName.includes('shark') || lowerName.includes('zebra')) return 'images/discus.png';
  if (lowerName.includes('parrot') || lowerName.includes('gourami') || lowerName.includes('gurami')) return 'images/flowerhorn.png';
  if (lowerName.includes('gar') || lowerName.includes('aligator') || lowerName.includes('snake head') || lowerName.includes('cichlid')) return 'images/koi.png';
  if (lowerName.includes('angel')) return 'images/betta.png';

  return 'logo.jpeg';
}

// Loading Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 200);
});

// Custom Cursor
const cursorGlow = document.querySelector('.cursor-glow');
const cursorRing = document.querySelector('.cursor-ring');
if (cursorGlow && cursorRing) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX - 10 + 'px';
    cursorGlow.style.top = e.clientY - 10 + 'px';
    cursorRing.style.left = e.clientX - 20 + 'px';
    cursorRing.style.top = e.clientY - 20 + 'px';
  });
  document.querySelectorAll('a, button, .fish-card, .gallery-item').forEach(el => {
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

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

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

// Reviews Slider
let currentReview = 0;
const track = document.querySelector('.reviews-track');
const dots = document.querySelectorAll('.review-dot');
const totalReviews = document.querySelectorAll('.review-card').length;

function goToReview(index) {
  currentReview = index;
  if (track) track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToReview(i));
});
setInterval(() => {
  goToReview((currentReview + 1) % totalReviews);
}, 5000);

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    btn.textContent = '✓ Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #00ffc8, #00d4ff)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
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

/* --- PREMIUM CART & CHECKOUT LOGIC --- */

// 1. Dynamic Injection of Premium Buttons into Product Cards
function injectPremiumButtons() {
  const cards = document.querySelectorAll('.fish-card');
  cards.forEach((card, index) => {
    const nameEl = card.querySelector('h4');
    const priceEl = card.querySelector('.price');
    const imgEl = card.querySelector('img');
    
    if (!nameEl || !priceEl || !imgEl) return;
    
    const name = nameEl.textContent;
    const priceText = priceEl.textContent;
    const img = imgEl.src;
    
    // Inject Wishlist Heart
    const imgCont = card.querySelector('.fish-img-container');
    if (imgCont && !imgCont.querySelector('.wishlist-btn')) {
      const btn = document.createElement('button');
      btn.className = 'wishlist-btn';
      btn.innerHTML = '🤍';
      btn.onclick = (e) => {
        e.stopPropagation();
        btn.classList.toggle('active');
        btn.innerHTML = btn.classList.contains('active') ? '❤️' : '🤍';
      };
      imgCont.appendChild(btn);
    }
    
    // Inject Cart Actions
    const info = card.querySelector('.fish-info');
    if (info && !info.querySelector('.card-actions')) {
      const actions = document.createElement('div');
      actions.className = 'card-actions';
      
      if (!priceText.toLowerCase().includes('contact')) {
        const numericPrice = parseInt(priceText.replace(/[^0-9]/g, ''));
        actions.innerHTML = `
          <button class="btn-add-cart" onclick="addToCart('${name}', ${numericPrice}, '${img}')">🛒 Add</button>
          <button class="btn-buy-now" onclick="buyNow('${name}', ${numericPrice}, '${img}')">⚡ Buy</button>
        `;
      } else {
        actions.innerHTML = `
          <a href="#contact" class="btn-enquire">📞 Enquire</a>
        `;
      }
      info.appendChild(actions);
    }
  });
}

// 2. Cart State Management
let cart = JSON.parse(localStorage.getItem('sa_cart')) || [];

function saveCart() {
  localStorage.setItem('sa_cart', JSON.stringify(cart));
  renderCart();
}

function addToCart(name, price, img) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }
  saveCart();
  
  // Show drawer
  document.getElementById('cartOverlay').classList.add('active');
  document.getElementById('cartDrawer').classList.add('active');
}

function buyNow(name, price, img) {
  addToCart(name, price, img);
  openCheckoutModal();
}

function updateQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  const countBadge = document.getElementById('cartCountBadge');
  const fabBadge = document.getElementById('floatingCartBadge');
  
  let subtotal = 0;
  let totalItems = 0;
  
  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-cart-msg">Your underwater cart is empty! 🐠</div>';
    document.getElementById('btnProceedCheckout').disabled = true;
  } else {
    container.innerHTML = '';
    cart.forEach((item, index) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
      
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
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
      `;
      container.appendChild(el);
    });
    document.getElementById('btnProceedCheckout').disabled = false;
  }
  
  countBadge.textContent = totalItems;
  fabBadge.textContent = totalItems;
  
  const tax = subtotal > 0 ? 10 : 0;
  const delivery = subtotal > 0 ? 50 : 0;
  const total = subtotal + tax + delivery;
  
  document.getElementById('cartSubtotal').textContent = '₹' + subtotal;
  document.getElementById('cartTax').textContent = '₹' + tax;
  document.getElementById('cartDelivery').textContent = '₹' + delivery;
  document.getElementById('cartTotal').textContent = '₹' + total;
}

// 3. UI Toggles
document.addEventListener('DOMContentLoaded', () => {
  renderDynamicCatalog();
  injectPremiumButtons();
  renderCart();

  initGallery();
  
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const fabCart = document.getElementById('floatingCartBtn');
  const btnProceedCheckout = document.getElementById('btnProceedCheckout');
  
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  
  function openCart() {
    cartOverlay.classList.add('active');
    cartDrawer.classList.add('active');
  }
  function closeCart() {
    cartOverlay.classList.remove('active');
    cartDrawer.classList.remove('active');
  }
  
  fabCart?.addEventListener('click', openCart);
  closeCartBtn?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);
  
  btnProceedCheckout?.addEventListener('click', () => {
    closeCart();
    openCheckoutModal();
  });
  
  closeCheckoutBtn?.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
  });
});

// 4. Checkout Logic
function openCheckoutModal() {
  document.getElementById('checkoutModal').classList.add('active');
  nextCheckoutStep(1);
}

function nextCheckoutStep(step) {
  // Simple validation for step 1
  if (step === 2) {
    const name = document.getElementById('chkName').value;
    const phone = document.getElementById('chkPhone').value;
    const addr = document.getElementById('chkAddress').value;
    if (!name || !phone || !addr) {
      alert("Please fill all shipping details!");
      return;
    }
  }
  
  if (step === 3) {
    // Populate Review
    const name = document.getElementById('chkName').value;
    const addr = document.getElementById('chkAddress').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const total = document.getElementById('cartTotal').textContent;
    
    document.getElementById('reviewName').textContent = name;
    document.getElementById('reviewAddress').textContent = addr;
    document.getElementById('reviewPayment').textContent = payment;
    document.getElementById('reviewTotal').textContent = total;
  }
  
  // UI Tabs
  document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
  document.querySelector('.step[data-step="'+step+'"]').classList.add('active');
  
  document.querySelectorAll('.checkout-step-content').forEach(el => el.classList.remove('active'));
  document.getElementById('checkoutStep'+step).classList.add('active');
  
  // Show QR code when payment step is reached
  if (step === 2 && typeof toggleQRCode === 'function') {
    toggleQRCode();
  }
}

// 5. Payment Simulation & Admin Order Sync
function processPayment() {
  const processing = document.getElementById('paymentProcessing');
  processing.classList.add('active');
  
  setTimeout(() => {
    processing.classList.remove('active');
    document.getElementById('checkoutModal').classList.remove('active');
    completeOrder();
  }, 2500);
}

function completeOrder() {
  const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
  const name = document.getElementById('chkName').value;
  const total = document.getElementById('cartTotal').textContent;
  
  // Generate product string
  const prodString = cart.map(item => `${item.name} (${item.qty})`).join(', ');
  
  // Save to Admin orders localStorage (sa_orders)
  const existingOrders = JSON.parse(localStorage.getItem('sa_orders')) || [];
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  
  existingOrders.unshift({
    id: orderId,
    customer: name,
    product: prodString,
    amount: total,
    status: 'pending',
    date: dateStr
  });
  
  localStorage.setItem('sa_orders', JSON.stringify(existingOrders));
  
  // Clear cart
  cart = [];
  saveCart();
  
  // Show Success Screen
  document.getElementById('successOrderId').textContent = orderId;
  const successScreen = document.getElementById('successScreen');
  successScreen.classList.add('active');
}

function closeSuccessScreen() {
  document.getElementById('successScreen').classList.remove('active');
  document.getElementById('addressForm').reset();
}

/* --- PHASE 2 PREMIUM LOGIC --- */

// 1. Toasts & Popups
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
// Trigger every 30-60 seconds
setInterval(triggerLivePurchase, 45000);
setTimeout(triggerLivePurchase, 10000); // Initial trigger

// 2. Flash Sale Countdown
function initFlashSale() {
  const timerEl = document.getElementById('flashTimer');
  if (!timerEl) return;
  let time = 3600 * 2 + 1800; // 2h 30m
  setInterval(() => {
    time--;
    if(time < 0) time = 0;
    const h = Math.floor(time / 3600).toString().padStart(2, '0');
    const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const s = (time % 60).toString().padStart(2, '0');
    timerEl.textContent = `${h}:${m}:${s}`;
  }, 1000);
}
initFlashSale();

// 3. Auth & Account Drawer
document.addEventListener('DOMContentLoaded', () => {
  const floatingAuthBtn = document.getElementById('floatingAuthBtn');
  const authModal = document.getElementById('authModal');
  const closeAuthBtn = document.getElementById('closeAuthBtn');
  
  const accountDrawer = document.getElementById('accountDrawer');
  const closeAccountBtn = document.getElementById('closeAccountBtn');
  
  // Check if logged in
  function checkAuthAndOpen() {
    if(localStorage.getItem('sa_user_logged_in') === 'true') {
      accountDrawer.classList.add('active');
      cartOverlay.classList.add('active');
      switchAccTab('orders'); // default tab
    } else {
      authModal.classList.add('active');
    }
  }
  
  floatingAuthBtn?.addEventListener('click', checkAuthAndOpen);
  closeAuthBtn?.addEventListener('click', () => authModal.classList.remove('active'));
  closeAccountBtn?.addEventListener('click', () => {
    accountDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
  });
});

function sendOTP() {
  const phone = document.getElementById('authPhone').value;
  if(phone.length < 10) { showClientToast('Enter valid phone number!'); return; }
  
  document.getElementById('authPhoneStep').classList.remove('active');
  document.getElementById('authOtpStep').classList.add('active');
  showClientToast('OTP sent to ' + phone);
}

function verifyOTP() {
  const otp = document.getElementById('authOTP').value;
  if(otp.length < 4) { showClientToast('Enter 4 digit OTP!'); return; }
  
  localStorage.setItem('sa_user_logged_in', 'true');
  localStorage.setItem('sa_user_phone', document.getElementById('authPhone').value);
  
  document.getElementById('authModal').classList.remove('active');
  showClientToast('Logged in successfully!');
  
  // Open drawer
  document.getElementById('accountDrawer').classList.add('active');
  document.getElementById('cartOverlay').classList.add('active');
  switchAccTab('orders');
}

// 4. Account Tabs Logic
function switchAccTab(tab) {
  document.querySelectorAll('.acc-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.acc-tab[onclick="switchAccTab('${tab}')"]`).classList.add('active');
  
  const content = document.getElementById('accContent');
  if (tab === 'orders') {
    const orders = JSON.parse(localStorage.getItem('sa_orders')) || [];
    if(orders.length === 0) {
      content.innerHTML = '<div class="empty-cart-msg">No orders found yet.</div>';
    } else {
      content.innerHTML = orders.map(o => `
        <div class="acc-item-card">
          <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
            <strong style="color:var(--aqua-cyan);">${o.id}</strong>
            <span>${o.status.toUpperCase()}</span>
          </div>
          <div style="font-size:0.85rem; color:rgba(255,255,255,0.7);">${o.product}</div>
          <div style="margin-top:10px; font-weight:bold;">${o.amount}</div>
          <button class="btn-secondary" style="margin-top:10px; width:100%;" onclick="trackOrderSim()">Track Order</button>
        </div>
      `).join('');
    }
  } else if (tab === 'wishlist') {
    content.innerHTML = '<div class="empty-cart-msg">Wishlist feature active! Saved items will appear here.</div>';
  } else if (tab === 'profile') {
    const phone = localStorage.getItem('sa_user_phone') || 'Unknown';
    content.innerHTML = `
      <div class="acc-item-card">
        <h4 style="margin-bottom:10px;">User Profile</h4>
        <p>Phone: ${phone}</p>
        <button class="btn-secondary" style="margin-top:15px; border-color:var(--coral-pink); color:var(--coral-pink);" onclick="logoutClient()">Logout</button>
      </div>
    `;
  }
}

function logoutClient() {
  localStorage.removeItem('sa_user_logged_in');
  document.getElementById('accountDrawer').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');
  showClientToast('Logged out successfully');
}

// 5. Coupon System
let couponDiscount = 0;
function applyCoupon() {
  const code = document.getElementById('couponCodeInput').value.trim().toUpperCase();
  if (code === 'AQUA20') {
    couponDiscount = 0.20; // 20% off
    document.getElementById('discountRow').style.display = 'flex';
    showClientToast('Coupon AQUA20 applied successfully!');
    renderCart(); // re-render to apply discount
  } else {
    couponDiscount = 0;
    document.getElementById('discountRow').style.display = 'none';
    showClientToast('Invalid promo code');
    renderCart();
  }
}

// Override renderCart slightly to include discount logic inside the calculation
const originalRenderCart = renderCart;
renderCart = function() {
  originalRenderCart(); // Let it do normal math
  // Now apply discount manually
  let subtotal = 0;
  cart.forEach(item => subtotal += item.price * item.qty);
  
  const discountAmount = Math.round(subtotal * couponDiscount);
  if(couponDiscount > 0) {
    document.getElementById('cartDiscount').textContent = '-₹' + discountAmount;
    
    // Recalculate total
    const tax = subtotal > 0 ? 10 : 0;
    const delivery = subtotal > 0 ? 50 : 0;
    const total = (subtotal - discountAmount) + tax + delivery;
    
    document.getElementById('cartTax').textContent = '₹' + tax;
    document.getElementById('cartTotal').textContent = '₹' + total;
  }
};

// 6. Tracking & Invoices
function trackOrderSim() {
  document.getElementById('successScreen').classList.remove('active');
  document.getElementById('trackingModal').classList.add('active');
}

document.getElementById('closeTrackingBtn')?.addEventListener('click', () => {
  document.getElementById('trackingModal').classList.remove('active');
});

function downloadInvoice() {
  showClientToast('Generating PDF Invoice...');
  setTimeout(() => {
    alert("Invoice downloaded to your device as PDF! (Simulated)");
  }, 1500);
}

// 7. Dynamic Catalog Render Engine
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

const categoryEmojis = {
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

function renderDynamicCatalog() {
  const container = document.getElementById('catalogContainer');
  if (!container) return;

  // Try fetching from server first (most reliable), fallback to localStorage
  fetch('/api/products')
    .then(res => {
      if (!res.ok) throw new Error('Server returned ' + res.status);
      return res.json();
    })
    .then(serverProducts => {
      if (Array.isArray(serverProducts) && serverProducts.length > 0) {
        console.log('Catalog loaded from server (' + serverProducts.length + ' products)');
        // Update localStorage cache with server data
        try { localStorage.setItem('sa_products', JSON.stringify(serverProducts)); } catch(e) {}
        buildCatalogCards(container, serverProducts);
      } else {
        // Server has no data, fall back to localStorage or defaults
        console.log('Server has no products, falling back to localStorage/defaults');
        loadCatalogFromLocalOrDefaults(container);
      }
    })
    .catch(err => {
      // Server unavailable (e.g. opened as file://), fall back to localStorage
      console.warn('Could not fetch from server:', err.message, '— using localStorage/defaults');
      loadCatalogFromLocalOrDefaults(container);
    });
}

function loadCatalogFromLocalOrDefaults(container) {
  let storedProducts = localStorage.getItem('sa_products');
  // Clear bad paths from localStorage (spaces, uppercase, wrong dirs)
  if (storedProducts) {
    try {
      const parsed = JSON.parse(storedProducts);
      const hasBadPaths = parsed.some(p => 
        p.image && (p.image.includes(' ') || p.image !== p.image.toLowerCase() || p.image.startsWith('fishes/') || p.image.startsWith('items/') || p.image.startsWith('food/'))
      );
      if (hasBadPaths) {
        localStorage.removeItem('sa_products');
        storedProducts = null;
      }
    } catch(e) {
      localStorage.removeItem('sa_products');
      storedProducts = null;
    }
  }
  let productsList = storedProducts ? JSON.parse(storedProducts) : defaultProducts;
  if (!storedProducts) {
    localStorage.setItem('sa_products', JSON.stringify(defaultProducts));
  }
  buildCatalogCards(container, productsList);
}

function buildCatalogCards(container, productsList) {
  const categoryOrder = [
    'Guppys', 'Angels', 'Mollies', 'Oxy-less Fishes', "Betta's", 'Wild Oscars',
    'Discus', 'Flowerhorns', 'Arowana', 'Gold Fish', 'Exotics & Giants', 'Aquarium Items',
    'Aquarium Decorative Items', 'Fish Food'
  ];

  const productsByCategory = {};
  productsList.forEach(p => {
    if (!productsByCategory[p.category]) {
      productsByCategory[p.category] = [];
    }
    productsByCategory[p.category].push(p);
  });

  container.innerHTML = '';

  categoryOrder.forEach(catName => {
    const catProducts = productsByCategory[catName];
    if (catProducts && catProducts.length > 0) {
      const emoji = categoryEmojis[catName] || '🐠';
      
      const sec = document.createElement('div');
      sec.className = 'category-section reveal';
      
      const h3 = document.createElement('h3');
      h3.className = 'category-title';
      h3.textContent = `${emoji} ${catName}`;
      sec.appendChild(h3);

      const slider = document.createElement('div');
      slider.className = 'fish-slider';

      catProducts.forEach(p => {
        const card = document.createElement('div');
        card.className = 'fish-card';
        
        card.innerHTML = `
          <div class="fish-img-container">
            <img src="${resolveProductImage(p)}" alt="${p.name}" loading="lazy" onerror="this.src='logo.jpeg'">
          </div>
          <div class="fish-info">
            <h4>${p.name}</h4>
            <span class="price">${p.price}</span>
          </div>
        `;
        slider.appendChild(card);
      });

      sec.appendChild(slider);
      container.appendChild(sec);
    }
  });

  // Also re-inject premium buttons for the new dynamic cards
  if (typeof injectPremiumButtons === 'function') {
    injectPremiumButtons();
  }

  if (typeof revealOnScroll === 'function') {
    revealOnScroll();
  }
}

// Toggle QR Code visibility based on payment method
function toggleQRCode() {
  const qrSection = document.getElementById('qrCodeSection');
  if (!qrSection) return;
  const upiSelected = document.querySelector('input[name="payment"]:checked')?.value === 'UPI';
  qrSection.style.display = upiSelected ? 'block' : 'none';
}

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

