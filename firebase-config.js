// Firebase Configuration Boilerplate
// TODO: Replace the config values below with your actual Firebase project settings
// from the Firebase Console -> Project Settings -> General -> Your apps -> SDK setup and configuration

const firebaseConfig = {
  apiKey: "AIzaSyAYZchjsH1THH3WY3qQUPeoKaL8YbksvKI",
  authDomain: "subramanya-c02b6.firebaseapp.com",
  projectId: "subramanya-c02b6",
  storageBucket: "subramanya-c02b6.firebasestorage.app",
  messagingSenderId: "908359586796",
  appId: "1:908359586796:web:311558cfdb6f9a2f5c26c9"
};

// Initialize Firebase only if the API key has been replaced
let db = null;
let auth = null;

if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
    console.log("Firebase successfully initialized!");
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
} else {
  console.warn("Firebase is NOT initialized. Please update the firebaseConfig in firebase-config.js.");
}
