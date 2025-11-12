import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseURL, anonKey);
