"use client";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseValue = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_VALUE || "";

if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_VALUE
) {
  console.warn(
    "Missing Supabase environment variables - functionality will be limited"
  );
}

export const supabase = createClient(supabaseUrl, supabaseValue);
