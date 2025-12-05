import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseValue = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_VALUE;

if (!supabaseUrl || !supabaseValue) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseValue);
