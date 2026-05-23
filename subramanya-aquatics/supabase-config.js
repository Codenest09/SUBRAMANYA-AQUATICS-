// Supabase Configuration for Subramanya Aquatics
const SUPABASE_URL = 'https://urqxfpaiqatyaltsfuzq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVycXhmcGFpcWF0eWFsdHNmdXpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MjIwMzcsImV4cCI6MjA5NTA5ODAzN30.UgSqKPaWUFjqa_1tISsQ6DRtvOPAaGpMs84x1nLIpHc';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVycXhmcGFpcWF0eWFsdHNmdXpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTUyMjAzNywiZXhwIjoyMDk1MDk4MDM3fQ.t_RuxPohi1KZUS2kqCwKPUH6k1d9tOAwT3GO5QcQ4hI';

// Attach to window so other scripts can access them
window.supabaseClient = null;

try {
  if (typeof supabase === 'undefined') {
    throw new Error('Supabase client library not loaded. Check script tags in HTML.');
  }
  if (SUPABASE_URL === 'YOUR_SUPABASE_PROJECT_URL' || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
    console.warn('⚠️ Supabase credentials not set! The app will run in offline mode using localStorage.');
  } else {
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
    console.log('%c✅ Supabase client initialized (service_role, RLS bypassed)!', 'color: #00ffc8; font-weight: bold;');
  }
} catch (error) {
  console.error('%c❌ Supabase initialization FAILED:', 'color: #ff4444; font-weight: bold;', error.message);
}
