export default function LoginPage() {
  return (
    <form action="/auth/login" method="post" className="space-y-4">
      <h1 className="text-xl font-semibold">Login</h1>

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full border p-2 rounded"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="w-full border p-2 rounded"
      />

      <button className="w-full bg-black text-white p-2 rounded">
        Login
      </button>

      <p className="text-sm">
        No account? <a href="/register" className="underline">Register</a>
      </p>
    </form>
  )
}
