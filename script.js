// Loading Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2800);
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

/* --- PREMIUM CATALOG & WHATSAPP LOGIC --- */

// 1. Dynamic Injection of Premium Inquiry Buttons into Product Cards
function injectPremiumButtons() {
  const cards = document.querySelectorAll('.fish-card');
  cards.forEach((card) => {
    const nameEl = card.querySelector('h4');
    const priceEl = card.querySelector('.price');
    
    if (!nameEl || !priceEl) return;
    
    const name = nameEl.textContent.trim();
    const priceText = priceEl.textContent.trim();
    
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
    
    // Inject Direct WhatsApp Enquiry Button
    const info = card.querySelector('.fish-info');
    if (info && !info.querySelector('.card-actions')) {
      const actions = document.createElement('div');
      actions.className = 'card-actions';
      
      const textMsg = encodeURIComponent(`Hello Subramanya Aquatics! I am interested in inquiring about "${name}" (${priceText}). Is it currently available? 🐠`);
      actions.innerHTML = `
        <a href="https://api.whatsapp.com/send?phone=917995549922&text=${textMsg}" target="_blank" class="btn-enquire">
          💬 Enquire on WhatsApp
        </a>
      `;
      info.appendChild(actions);
    }
  });
}

// 2. Global DOM Handlers
document.addEventListener('DOMContentLoaded', () => {
  injectPremiumButtons();
  
  const floatingAuthBtn = document.getElementById('floatingAuthBtn');
  const authModal = document.getElementById('authModal');
  const closeAuthBtn = document.getElementById('closeAuthBtn');
  
  const accountDrawer = document.getElementById('accountDrawer');
  const closeAccountBtn = document.getElementById('closeAccountBtn');
  
  function checkAuthAndOpen() {
    if (localStorage.getItem('sa_user_logged_in') === 'true') {
      accountDrawer?.classList.add('active');
      switchAccTab('wishlist');
    } else {
      authModal?.classList.add('active');
    }
  }
  
  floatingAuthBtn?.addEventListener('click', checkAuthAndOpen);
  closeAuthBtn?.addEventListener('click', () => authModal?.classList.remove('active'));
  closeAccountBtn?.addEventListener('click', () => {
    accountDrawer?.classList.remove('active');
  });
});

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

// Random Live Purchase Popup (Modified to show "Inquired about")
const fakeNames = ["Rajesh", "Priya", "Vikram", "Anitha", "Suresh", "Kavya"];
const fakeFishes = ["Golden Arowana", "SRD Flowerhorn", "Polar Parrots", "Red Oscar", "Betta OHM", "Platinum Guppys"];
function triggerLivePurchase() {
  const popup = document.getElementById('livePurchasePopup');
  if (!popup) return;
  const randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
  const randomFish = fakeFishes[Math.floor(Math.random() * fakeFishes.length)];
  
  document.getElementById('livePopName').textContent = `${randomName} from Vizag`;
  document.getElementById('livePopItem').textContent = `inquired about a ${randomFish}`;
  
  popup.classList.add('active');
  setTimeout(() => popup.classList.remove('active'), 5000);
}
setInterval(triggerLivePurchase, 45000);
setTimeout(triggerLivePurchase, 10000);

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

// 3. Auth & Account Tab Logic
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
  
  document.getElementById('accountDrawer').classList.add('active');
  switchAccTab('wishlist');
}

function switchAccTab(tab) {
  document.querySelectorAll('.acc-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.acc-tab[onclick="switchAccTab('${tab}')"]`);
  if (activeTab) activeTab.classList.add('active');
  
  const content = document.getElementById('accContent');
  if (!content) return;

  if (tab === 'wishlist') {
    content.innerHTML = '<div class="empty-cart-msg">Your saved items and fishes will appear here once liked! ❤️</div>';
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
  showClientToast('Logged out successfully');
}


