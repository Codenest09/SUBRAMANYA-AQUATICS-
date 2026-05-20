// Firebase Configuration for Subramanya Aquatics
const firebaseConfig = {
  apiKey: "AIzaSyAYZchjsH1THH3WY3qQUPeoKaL8YbksvKI",
  authDomain: "subramanya-c02b6.firebaseapp.com",
  projectId: "subramanya-c02b6",
  storageBucket: "subramanya-c02b6.firebasestorage.app",
  messagingSenderId: "908359586796",
  appId: "1:908359586796:web:311558cfdb6f9a2f5c26c9"
};

// Attach to window so other scripts can access them
window.db = null;
window.auth = null;
window.firebaseReady = false;

try {
  if (typeof firebase === 'undefined') {
    throw new Error('Firebase SDK not loaded. Check internet connection and script tags.');
  }
  firebase.initializeApp(firebaseConfig);
  window.db = firebase.firestore();
  window.auth = firebase.auth();
  window.firebaseReady = true;
  console.log('%c✅ Firebase initialized successfully!', 'color: #00ffc8; font-weight: bold;');
  console.log('   Auth:', window.auth ? 'Ready' : 'NOT available');
  console.log('   Firestore:', window.db ? 'Ready' : 'NOT available');
} catch (error) {
  console.error('%c❌ Firebase initialization FAILED:', 'color: #ff4444; font-weight: bold;', error.message);
  console.warn('The admin portal will work in offline/local mode without Firebase.');
}
