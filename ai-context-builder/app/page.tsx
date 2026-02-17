import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold leading-tight">
          Turn your app idea into a perfect AI prompt
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Stop guessing what to tell ChatGPT or Claude.  
          Our guided builder asks smart questions and generates a complete
          project brief ready for AI coding tools.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/register"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Start Building
          </Link>

          <Link
            href="/login"
            className="border px-6 py-3 rounded-lg"
          >
            I already have an account
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-semibold text-lg">Guided Questions</h3>
            <p className="text-gray-600 mt-2">
              We ask only relevant questions based on your idea.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">AI Ready Output</h3>
            <p className="text-gray-600 mt-2">
              Works with ChatGPT, Claude, Copilot, Cursor & more.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">No Technical Knowledge</h3>
            <p className="text-gray-600 mt-2">
              Anyone can plan a full software project in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AI Context Builder
      </footer>
    </div>
  )
}
