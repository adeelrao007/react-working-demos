import Link from "next/link"
import Image from "next/image"
import { createClient } from "@/lib/supabase/server"

export default async function Navbar() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <header className="border-b bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          <Image
            src="/logo.png"
            alt="AI Context Builder Logo"
            width={120}
            height={48}
            style={{ height: '80px', width: 'auto' }}
            priority
          />
        </Link>

        <nav className="space-x-6 text-sm flex items-center">
          <Link href="/context-generator" className="btn ml-4 px-4 py-2 rounded-lg font-semibold" style={{backgroundColor: 'var(--button-main)', color: '#fff'}}>
            Getting Started
          </Link>
          {/* <Link href="/pricing">Pricing</Link> */}

          {user ? (
            <>
              <Link href="/dashboard">Dashboard</Link>

              <form action="/auth/logout" method="post">
                <button className="text-red-500">Logout</button>
              </form>
            </>
          ) : (
            <>
              {/* <Link href="/login">Login</Link> */}
              {/* <Link
                href="/register"
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Get Started
              </Link> */}
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
