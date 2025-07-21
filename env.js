// env.js
// Export environment variables for Poetry Share app
export const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL || window.SUPABASE_URL;
export const SUPABASE_ANON_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY || window.SUPABASE_ANON_KEY;
