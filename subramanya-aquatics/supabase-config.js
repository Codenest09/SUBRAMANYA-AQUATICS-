// Supabase Configuration for Subramanya Aquatics
const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Attach to window so other scripts can access them
window.supabaseClient = null;

try {
  if (typeof supabase === 'undefined') {
    throw new Error('Supabase client library not loaded. Check script tags in HTML.');
  }
  if (SUPABASE_URL === 'YOUR_SUPABASE_PROJECT_URL' || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
    console.warn('⚠️ Supabase credentials not set! The app will run in offline mode using localStorage.');
  } else {
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('%c✅ Supabase client initialized successfully!', 'color: #00ffc8; font-weight: bold;');
  }
} catch (error) {
  console.error('%c❌ Supabase initialization FAILED:', 'color: #ff4444; font-weight: bold;', error.message);
}
