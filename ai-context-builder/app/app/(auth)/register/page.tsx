export default function RegisterPage() {
  return (
    <form action="/auth/register" method="post" className="space-y-4">
      <h1 className="text-xl font-semibold">Create account</h1>

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
        Register
      </button>

      <p className="text-sm">
        Already have account? <a href="/login" className="underline">Login</a>
      </p>
    </form>
  )
}
