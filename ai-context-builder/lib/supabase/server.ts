import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async getAll() {
          // There is no getAll, so manually collect all cookies
          // cookieStore.get returns a cookie by name, cookieStore.getAll returns all cookies
          return cookieStore.getAll();
        },
        async setAll(cookiesToSet) {
          for (const { name, value, options } of cookiesToSet) {
            await cookieStore.set(name, value, options);
          }
        },
      },
    }
  )
}
