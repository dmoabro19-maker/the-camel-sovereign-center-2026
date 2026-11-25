
const SUPABASE_URL = "https://vbcbdbubicebieqvujrp.supabase.co";

// Replace this placeholder with your Supabase publishable key.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_fl2pOEMnSEHLaXPxvTloYQ_D81KM6sQ";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

window.camelSupabase = supabase;
