// src/utils/supabase/server.ts
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export function createClient() {
  // Crée et retourne le client Supabase
  const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // URL de Supabase
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // Clé publique d'anon
  );

  return supabase;
}
