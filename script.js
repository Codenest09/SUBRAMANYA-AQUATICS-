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
  const delivery = cart.length > 0 ? 49 : 0;
  const packing = cart.length > 0 ? 10 : 0;
  
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
function openCheckout() {
  closeCartSheet();
  
  const itemsDiv = document.getElementById('checkoutOrderItems');
  if (itemsDiv) {
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
      if (!upiQrCode.complete || upiQrCode.naturalWidth === 0) {
        upiQrCode.src = qrPaths[0];
      }
    }

    const payNameInput = document.getElementById('payName');
    const payPhoneInput = document.getElementById('payPhone');
    if (payNameInput) payNameInput.value = name;
    if (payPhoneInput) payPhoneInput.value = phone;

    const payUtrInput = document.getElementById('payUtr');
    if (payUtrInput) payUtrInput.value = '';

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

function submitOrderData(orderId, name, address, city, pincode, state, phone, t, paymentMethod, cartItems, utr = '') {
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
    utr: utr
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

  const itemsSummary = itemsToSave.map(i => `${i.name} x${i.qty}`).join(', ');
  const orderPayload = {
    'Order ID': orderId,
    'Date': new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    'Customer Name': name,
    'Phone': phone,
    'Address': address,
    'Items': itemsSummary,
    'Total': '₹' + t.total,
    'Payment': paymentMethod + (utr ? ` (UTR: ${utr})` : ''),
    'Status': utr ? 'Pending Verification' : 'Confirmed'
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

    setTimeout(() => {
      submitOrderData(orderId, name, address, city, pincode, state, phone, t, selectedPayment, cartItems, utr);

      playSuccessSound();

      cart = [];
      saveCart();

      if (paymentTimerInterval) clearInterval(paymentTimerInterval);

      const upiPaymentModal = document.getElementById('upiPaymentModal');
      if (upiPaymentModal) upiPaymentModal.classList.remove('active');
      closeCheckout();

      if (spinner) spinner.style.display = 'none';
      if (btnText) btnText.textContent = 'Verify & Place Order';

      document.getElementById('successOrderId').textContent = `Order #${orderId}`;
      document.getElementById('orderSuccessOverlay')?.classList.add('active');
      showClientToast('Order placed successfully!');

      window.pendingOrderData = null;
    }, 1500);
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

// ========== MAIN INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  // Initialize product buttons
  injectProductButtons();
  updateCartBadge();
  renderCartSheet();

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
        target.classList.toggle('active');
        target.innerHTML = target.classList.contains('active') ? '❤️' : '🤍';
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
