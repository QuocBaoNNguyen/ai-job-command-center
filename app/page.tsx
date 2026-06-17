import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
          AI Job Search Command Center
        </p>

        <h1 className="mb-6 text-4xl font-bold text-gray-900">
          Track applications, analyze job descriptions, and prepare smarter.
        </h1>

        <p className="mb-8 text-lg text-gray-700">
          This project helps job seekers organize applications, compare resumes
          against job descriptions, generate tailored resume bullets, and prepare
          for interviews using AI.
        </p>

        <div className="flex gap-4">
          <Link
            href="/applications"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            View Applications
          </Link>

          <a
            href="https://github.com"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-800 hover:bg-gray-100"
          >
            GitHub Repo
          </a>
        </div>
      </section>
    </main>
  );
}
