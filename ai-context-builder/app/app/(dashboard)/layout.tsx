import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b px-6 py-3">
        <div className="flex justify-between">
          <span className="font-bold">AI Context Builder</span>
          <form action="/auth/logout" method="post">
            <button className="text-sm text-red-500">Logout</button>
          </form>
        </div>
      </nav>

      <main className="p-6">{children}</main>
    </div>
  )
}
