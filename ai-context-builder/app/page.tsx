import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-4 text-center">
        <Image
          src="/banner-steps.png"
          alt="How it works steps banner"
          width={800}
          height={180}
          className="mx-auto mb-8 max-w-full h-auto"
          priority
        />
        <h2 className="text-4xl font-bold leading-tight">
          Transform Your App Vision Into an AI-Ready Blueprint
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          No more writer’s block or prompt confusion!<br />
          Our intelligent builder guides you step-by-step, asking the right questions to capture your idea’s essence.<br />
          Instantly generate a detailed project brief—perfect for ChatGPT, Claude, or any AI coding tool.
        </p>

        {/* <div className="mt-10 flex justify-center gap-4">
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
        </div> */}
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-semibold text-lg">Guided Questions</h3>
            <p className="text-gray-600 mt-2">
              We ask only relevant questions based on your idea. Our smart system adapts to your project type, uncovering details you might not have considered.
              Each step is designed to clarify your vision, making sure nothing important is missed—no matter your experience level.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">AI Ready Output</h3>
            <p className="text-gray-600 mt-2">
              Works with ChatGPT, Claude, Copilot, Cursor & more. Instantly get a clear, structured brief that AI tools understand—no editing or reformatting needed.
              Your project details are delivered in a format optimized for seamless handoff to any AI assistant or developer.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">No Technical Knowledge</h3>
            <p className="text-gray-600 mt-2">
              Anyone can plan a full software project in minutes. No coding, jargon, or prior experience required—just answer simple questions and watch your idea take shape.
              Our platform is designed for everyone, from entrepreneurs to hobbyists, making professional project planning accessible to all.
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
