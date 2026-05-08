// ========== LOADING SCREEN ==========
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2800);
});

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
  document.querySelectorAll('a, button, .fish-card, .fish-card-m').forEach(el => {
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

// ========== BUBBLES (reduced for mobile perf) ==========
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

// ========== LIGHT RAYS (reduced) ==========
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

// ========== HAMBURGER ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

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
dots.forEach((dot, i) => dot.addEventListener('click', () => goToReview(i)));
if (totalReviews > 0) setInterval(() => goToReview((currentReview + 1) % totalReviews), 5000);

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
    if (target) target.scrollIntoView({ behavior: 'smooth' });
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
  let time = 3600 * 2 + 1800;
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

// ========== GOOGLE SHEETS BACKEND ==========
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbx7eW-GfbJhcqsRR-JTWgi19gymekudxYniN7PLmltybN02psrnkTlDPkjTSotz2CLX/exec';

// ========== CART SYSTEM ==========
let cart = JSON.parse(localStorage.getItem('sa_cart') || '[]');

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
  const delivery = cart.length > 0 ? 49 : 0;
  const packing = cart.length > 0 ? 10 : 0;
  const total = subtotal + delivery + packing;
  return { subtotal, delivery, packing, total };
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
    <div class="sheet-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="sheet-item-info">
        <h4>${item.name}</h4>
        <span class="si-price">₹${item.price}</span>
      </div>
      <div class="sheet-item-qty">
        <button class="qty-btn-s" onclick="updateQty(${i}, -1)">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn-s" onclick="updateQty(${i}, 1)">+</button>
      </div>
      <button class="remove-btn-s" onclick="removeFromCart(${i})">✕</button>
    </div>
  `).join('');

  if (couponRow) couponRow.style.display = 'flex';
  if (summary) {
    summary.style.display = 'block';
    const t = getCartTotals();
    document.getElementById('sumSubtotal').textContent = `₹${t.subtotal}`;
    document.getElementById('sumDelivery').textContent = `₹${t.delivery}`;
    document.getElementById('sumPacking').textContent = `₹${t.packing}`;
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
function openCheckout() {
  closeCartSheet();
  // Populate detailed bill
  const itemsDiv = document.getElementById('checkoutOrderItems');
  if (itemsDiv) {
    const t = getCartTotals();
    let billHtml = '<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(0,212,255,0.1);border-radius:12px;padding:14px;font-size:0.82rem;">';
    // Item rows
    cart.forEach(item => {
      billHtml += `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
        <span style="flex:1;color:rgba(255,255,255,0.7);">${item.name} <span style="color:rgba(255,255,255,0.35);">×${item.qty}</span></span>
        <span style="color:var(--white-glow);font-weight:600;">₹${item.price * item.qty}</span>
      </div>`;
    });
    // Bill breakdown
    billHtml += `
      <div style="margin-top:10px;padding-top:10px;border-top:1px dashed rgba(0,212,255,0.15);">
        <div style="display:flex;justify-content:space-between;padding:4px 0;color:rgba(255,255,255,0.5);"><span>Subtotal</span><span>₹${t.subtotal}</span></div>
        <div style="display:flex;justify-content:space-between;padding:4px 0;color:rgba(255,255,255,0.5);"><span>Delivery Charge</span><span>₹${t.delivery}</span></div>
        <div style="display:flex;justify-content:space-between;padding:4px 0;color:rgba(255,255,255,0.5);"><span>Packing Charges</span><span>₹${t.packing}</span></div>
      </div>
      <div style="display:flex;justify-content:space-between;padding:10px 0 4px;margin-top:8px;border-top:2px solid rgba(0,212,255,0.2);font-size:1rem;font-weight:700;color:var(--neon-teal);">
        <span>Total Amount</span><span>₹${t.total}</span>
      </div>`;
    billHtml += '</div>';
    itemsDiv.innerHTML = billHtml;
  }
  // Pre-fill phone if available
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

function selectPayment(el) {
  document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedPayment = el.getAttribute('data-method');
}

// ========== PLACE ORDER ==========
function placeOrder() {
  const name = document.getElementById('coName')?.value.trim();
  const address = document.getElementById('coAddress')?.value.trim();
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

  // If it's a QR-applicable payment method (UPI, GPay, PhonePe, Paytm, Net Banking)
  if (['upi', 'gpay', 'phonepe', 'paytm', 'netbanking'].includes(selectedPayment)) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const upiId = '7995549922@ybl'; // Default UPI ID for Subramanya Aquatics
    const payeeName = encodeURIComponent('Subramanya Aquatics');
    const amount = t.total;
    const note = encodeURIComponent(`Order ${orderId}`);
    const baseUpiUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${note}`;

    const upiPaymentModal = document.getElementById('upiPaymentModal');
    const upiModalAmount = document.getElementById('upiModalAmount');
    const upiQrCode = document.getElementById('upiQrCode');

    if (upiPaymentModal && upiModalAmount && upiQrCode) {
      upiModalAmount.textContent = `₹${t.total}`;
      
      // Set QR code src to static QR scan image with robust fallbacks
      upiQrCode.src = 'QR scan.jpeg';
      upiQrCode.onerror = function() {
        if (upiQrCode.src.includes('subramanya-aquatics/QR%20scan.jpeg') || (upiQrCode.src.endsWith('QR%20scan.jpeg') && !upiQrCode.src.includes('images/'))) {
          upiQrCode.src = 'images/QR scan.jpeg';
        } else if (upiQrCode.src.includes('images/QR%20scan.jpeg')) {
          upiQrCode.src = '../QR scan.jpeg';
        }
      };

      // Set custom title based on payment method
      const headerTitle = upiPaymentModal.querySelector('.checkout-header h3');
      if (headerTitle) {
        if (selectedPayment === 'gpay') headerTitle.innerHTML = '🅖 Pay with Google Pay';
        else if (selectedPayment === 'phonepe') headerTitle.innerHTML = '📲 Pay with PhonePe';
        else if (selectedPayment === 'paytm') headerTitle.innerHTML = '💰 Pay with Paytm';
        else if (selectedPayment === 'netbanking') headerTitle.innerHTML = '🏦 Pay with Net Banking / QR';
        else headerTitle.innerHTML = '📱 Pay Securely via UPI';
      }

      // If mobile, add an "Open Payment App" deep link button for convenience (excluding netbanking)
      let mobilePayBtn = document.getElementById('mobilePayBtn');
      if (isMobile && selectedPayment !== 'netbanking') {
        let deepLink = baseUpiUrl;
        let appName = 'UPI App';
        if (selectedPayment === 'gpay') {
          deepLink = `gpay://upi/pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${note}`;
          appName = 'Google Pay';
        } else if (selectedPayment === 'phonepe') {
          deepLink = `phonepe://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${note}`;
          appName = 'PhonePe';
        } else if (selectedPayment === 'paytm') {
          deepLink = `paytmmp://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR&tn=${note}`;
          appName = 'Paytm';
        }

        if (!mobilePayBtn) {
          mobilePayBtn = document.createElement('button');
          mobilePayBtn.id = 'mobilePayBtn';
          mobilePayBtn.className = 'btn-place-order neon-pulse';
          mobilePayBtn.style.width = '100%';
          mobilePayBtn.style.padding = '12px';
          mobilePayBtn.style.borderRadius = '12px';
          mobilePayBtn.style.background = 'linear-gradient(135deg, #00d4ff, #00ffc8)';
          mobilePayBtn.style.color = '#020c1b';
          mobilePayBtn.style.fontWeight = '700';
          mobilePayBtn.style.border = 'none';
          mobilePayBtn.style.cursor = 'pointer';
          mobilePayBtn.style.marginBottom = '12px';
          mobilePayBtn.style.display = 'block';
          
          const confirmBtn = upiPaymentModal.querySelector('button[onclick="confirmUpiPayment()"]');
          if (confirmBtn) {
            confirmBtn.parentNode.insertBefore(mobilePayBtn, confirmBtn);
          }
        }
        mobilePayBtn.innerHTML = `⚡ Open ${appName}`;
        mobilePayBtn.style.display = 'block';
        mobilePayBtn.onclick = function() {
          showClientToast(`Opening ${appName}...`);
          window.location.href = deepLink;
        };
      } else if (mobilePayBtn) {
        mobilePayBtn.style.display = 'none';
      }

      upiPaymentModal.style.display = 'flex';
      
      // Save pending order details
      window.pendingOrderData = { orderId, name, address, phone, t, selectedPayment, cartItems: [...cart] };
    } else {
      // Fallback if elements not found
      submitOrderData(orderId, name, address, phone, t, selectedPayment, [...cart]);
      cart = [];
      saveCart();
      closeCheckout();
      document.getElementById('successOrderId').textContent = `Order #${orderId}`;
      document.getElementById('orderSuccessOverlay')?.classList.add('active');
    }
  } else {
    // Card or other direct payment methods
    submitOrderData(orderId, name, address, phone, t, selectedPayment, [...cart]);
    cart = [];
    saveCart();
    closeCheckout();
    document.getElementById('successOrderId').textContent = `Order #${orderId}`;
    document.getElementById('orderSuccessOverlay')?.classList.add('active');
  }
}

// Helper function to submit order details
function submitOrderData(orderId, name, address, phone, t, paymentMethod, cartItems) {
  const itemsToSave = cartItems || [...cart];
  // Save to order history
  const orders = JSON.parse(localStorage.getItem('sa_orders') || '[]');
  orders.unshift({
    id: orderId,
    date: new Date().toLocaleDateString('en-IN'),
    items: itemsToSave,
    total: t.total,
    payment: paymentMethod,
    status: 'Confirmed'
  });
  localStorage.setItem('sa_orders', JSON.stringify(orders));

  // Save phone
  localStorage.setItem('sa_user_phone', phone);

  // Send order to Google Sheets
  const itemsSummary = itemsToSave.map(i => `${i.name} x${i.qty}`).join(', ');
  fetch(SHEETS_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      orderId,
      date: new Date().toLocaleDateString('en-IN'),
      name,
      phone,
      address,
      items: itemsSummary,
      total: '\u20b9' + t.total,
      payment: paymentMethod
    })
  }).catch(() => {});
}

// UPI Modal actions for desktop
function closeUpiModal() {
  const upiPaymentModal = document.getElementById('upiPaymentModal');
  if (upiPaymentModal) upiPaymentModal.style.display = 'none';
  showClientToast('Payment cancelled.');
}

function confirmUpiPayment() {
  if (window.pendingOrderData) {
    const { orderId, name, address, phone, t, selectedPayment, cartItems } = window.pendingOrderData;
    submitOrderData(orderId, name, address, phone, t, selectedPayment, cartItems);
    
    // Clear cart
    cart = [];
    saveCart();

    // Hide modal and close checkout
    const upiPaymentModal = document.getElementById('upiPaymentModal');
    if (upiPaymentModal) upiPaymentModal.style.display = 'none';
    closeCheckout();

    // Show success
    document.getElementById('successOrderId').textContent = `Order #${orderId}`;
    document.getElementById('orderSuccessOverlay')?.classList.add('active');
    showClientToast('Payment confirmed & order placed!');
    
    window.pendingOrderData = null;
  }
}

function continueShopping() {
  document.getElementById('orderSuccessOverlay')?.classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setActiveNavItem('home');
}

// ========== PANELS (Orders / Profile) ==========
function closePanel(id) {
  document.getElementById(id)?.classList.remove('active');
}

function openOrdersPanel() {
  const body = document.getElementById('ordersPanelBody');
  const orders = JSON.parse(localStorage.getItem('sa_orders') || '[]');
  if (!body) return;

  if (orders.length === 0) {
    body.innerHTML = '<div class="panel-empty"><span class="empty-icon">📦</span>No orders yet<br>Start shopping to see your orders here!</div>';
  } else {
    body.innerHTML = orders.map(o => `
      <div class="order-history-card">
        <div class="ohc-top"><span class="ohc-id">${o.id}</span><span class="ohc-date">${o.date}</span></div>
        <div class="ohc-total">₹${o.total}</div>
        <span class="ohc-status">${o.status}</span>
      </div>
    `).join('');
  }
  document.getElementById('ordersPanel')?.classList.add('active');
}

function openProfilePanel() {
  const body = document.getElementById('profilePanelBody');
  if (!body) return;
  const phone = localStorage.getItem('sa_user_phone') || 'Not set';
  const orders = JSON.parse(localStorage.getItem('sa_orders') || '[]');
  body.innerHTML = `
    <div class="order-history-card" style="text-align:center;">
      <div style="font-size:3rem;margin-bottom:12px;">👤</div>
      <h4 style="margin-bottom:8px;color:var(--aqua-cyan);">My Account</h4>
      <p style="font-size:0.85rem;color:rgba(255,255,255,0.5);margin-bottom:4px;">Phone: ${phone}</p>
      <p style="font-size:0.85rem;color:rgba(255,255,255,0.5);">Orders: ${orders.length}</p>
    </div>
    <div class="order-history-card">
      <h4 style="margin-bottom:10px;font-size:0.85rem;">Contact Subramanya Aquatics</h4>
      <a href="https://api.whatsapp.com/send?phone=917995549922" target="_blank" style="color:var(--neon-teal);font-size:0.85rem;">💬 WhatsApp: +91 79955 49922</a>
    </div>
  `;
  document.getElementById('profilePanel')?.classList.add('active');
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

    // Check if already injected
    const info = card.querySelector('.fish-info');
    if (!info || info.querySelector('.card-actions')) return;

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    // Parse price - if numeric, show cart buttons; otherwise WhatsApp enquiry
    const priceMatch = priceText.match(/₹([\d,]+)/);
    if (priceMatch) {
      const price = parseInt(priceMatch[1].replace(/,/g, ''));
      actions.innerHTML = `
        <button class="btn-enquire" style="flex:1;font-size:0.78rem;padding:8px 0;" onclick="event.stopPropagation();addToCart('${name.replace(/'/g, "\\'")}', ${price}, '${imgSrc}')">🛒 Add</button>
        <button class="btn-enquire" style="flex:1;font-size:0.78rem;padding:8px 0;background:linear-gradient(135deg,#00d4ff,#00ffc8)!important;" onclick="event.stopPropagation();buyNow('${name.replace(/'/g, "\\'")}', ${price}, '${imgSrc}')">⚡ Buy</button>
      `;
    } else {
      const textMsg = encodeURIComponent(`Hello! I'm interested in "${name}". Is it available? 🐠`);
      actions.innerHTML = `
        <a href="https://api.whatsapp.com/send?phone=917995549922&text=${textMsg}" target="_blank" class="btn-enquire" style="flex:1;font-size:0.78rem;padding:8px 0;">💬 Enquire</a>
      `;
    }
    info.appendChild(actions);

    // Add wishlist heart
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
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  injectProductButtons();
  updateCartBadge();
  renderCartSheet();

  // Cart sheet controls
  document.getElementById('closeCartSheet')?.addEventListener('click', closeCartSheet);
  document.getElementById('cartSheetOverlay')?.addEventListener('click', closeCartSheet);
  document.getElementById('proceedCheckoutBtn')?.addEventListener('click', openCheckout);

  // Checkout controls
  document.getElementById('checkoutBackBtn')?.addEventListener('click', closeCheckout);

  // Coupon button
  document.getElementById('applyCouponBtn')?.addEventListener('click', () => {
    const code = document.getElementById('couponInput')?.value.trim().toUpperCase();
    if (code === 'AQUA20') {
      showClientToast('Coupon AQUA20 applied! 20% off');
    } else {
      showClientToast('Invalid coupon code');
    }
  });

  // Bottom navigation
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

  // Legacy floating auth button
  const floatingAuthBtn = document.getElementById('floatingAuthBtn');
  const authModal = document.getElementById('authModal');
  const closeAuthBtn = document.getElementById('closeAuthBtn');
  const accountDrawer = document.getElementById('accountDrawer');
  const closeAccountBtn = document.getElementById('closeAccountBtn');

  floatingAuthBtn?.addEventListener('click', () => {
    if (localStorage.getItem('sa_user_logged_in') === 'true') {
      accountDrawer?.classList.add('active');
      switchAccTab('wishlist');
    } else {
      authModal?.classList.add('active');
    }
  });
  closeAuthBtn?.addEventListener('click', () => authModal?.classList.remove('active'));
  closeAccountBtn?.addEventListener('click', () => accountDrawer?.classList.remove('active'));
});

// ========== AUTH (legacy) ==========
function sendOTP() {
  const phone = document.getElementById('authPhone').value;
  if (phone.length < 10) { showClientToast('Enter valid phone number!'); return; }
  document.getElementById('authPhoneStep').classList.remove('active');
  document.getElementById('authOtpStep').classList.add('active');
  showClientToast('OTP sent to ' + phone);
}

function verifyOTP() {
  const otp = document.getElementById('authOTP').value;
  if (otp.length < 4) { showClientToast('Enter 4 digit OTP!'); return; }
  localStorage.setItem('sa_user_logged_in', 'true');
  localStorage.setItem('sa_user_phone', document.getElementById('authPhone').value);
  document.getElementById('authModal').classList.remove('active');
  showClientToast('Logged in successfully!');
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
    content.innerHTML = '<div class="empty-cart-msg">Your saved items will appear here once liked! ❤️</div>';
  } else if (tab === 'profile') {
    const phone = localStorage.getItem('sa_user_phone') || 'Unknown';
    content.innerHTML = `<div class="acc-item-card"><h4 style="margin-bottom:10px;">User Profile</h4><p>Phone: ${phone}</p><button class="btn-secondary" style="margin-top:15px;border-color:var(--coral-pink);color:var(--coral-pink);" onclick="logoutClient()">Logout</button></div>`;
  }
}

function logoutClient() {
  localStorage.removeItem('sa_user_logged_in');
  document.getElementById('accountDrawer')?.classList.remove('active');
  showClientToast('Logged out successfully');
}
