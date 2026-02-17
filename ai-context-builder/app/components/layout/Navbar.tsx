import Link from "next/link"
import { createClient } from "@/lib/supabase/server"

export default async function Navbar() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          AI Context Builder
        </Link>

        <nav className="space-x-6 text-sm flex items-center">
          <Link href="/pricing">Pricing</Link>

          {user ? (
            <>
              <Link href="/dashboard">Dashboard</Link>

              <form action="/auth/logout" method="post">
                <button className="text-red-500">Logout</button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link
                href="/register"
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Get Started
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
