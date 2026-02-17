import Link from "next/link"

export default function Pricing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow text-center max-w-md">
        <h1 className="text-2xl font-bold">Simple Pricing</h1>

        <p className="mt-4 text-gray-600">
          Pay a small platform fee to use the builder with your own AI keys.
        </p>

        <div className="mt-8 space-y-4">
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold">$10 / year</h2>
            <p className="text-sm text-gray-500">Best for regular use</p>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="font-semibold">$1 / month</h2>
            <p className="text-sm text-gray-500">Flexible option</p>
          </div>
        </div>

        <Link
          href="/register"
          className="block mt-8 bg-black text-white py-3 rounded-lg"
        >
          Create Account
        </Link>
      </div>
    </div>
  )
}
