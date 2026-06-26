import Link from "next/link";
import { applications } from "@/lib/applications";
import { getStatusClasses } from "@/lib/statusStyles";

export default function Home() {
  const totalApplications = applications.length;

  const activeApplications = applications.filter((application) =>
    ["Applied", "Online Assessment", "Interview", "Final Round"].includes(
      application.status
    )
  ).length;

  const interviews = applications.filter(
    (application) =>
      application.status === "Interview" || application.status === "Final Round"
  ).length;

  const offers = applications.filter(
    (application) => application.status === "Offer"
  ).length;

  const rejected = applications.filter(
    (application) => application.status === "Rejected"
  ).length;

  const stats = [
    {
      label: "Total Applications",
      value: totalApplications,
    },
    {
      label: "Active",
      value: activeApplications,
    },
    {
      label: "Interviews",
      value: interviews,
    },
    {
      label: "Offers",
      value: offers,
    },
    {
      label: "Rejected",
      value: rejected,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            AI Job Search Command Center
          </p>

          <h1 className="mb-6 max-w-4xl text-4xl font-bold text-gray-900">
            Track applications, analyze job descriptions, and prepare smarter.
          </h1>

          <p className="mb-8 max-w-3xl text-lg text-gray-700">
            This project helps job seekers organize applications, compare
            resumes against job descriptions, generate tailored resume bullets,
            and prepare for interviews using AI.
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
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Applications
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                A quick look at the latest roles in your tracker.
              </p>
            </div>

            <Link
              href="/applications"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="divide-y divide-gray-200">
            {applications.slice(0, 3).map((application) => (
              <div
                key={application.id}
                className="flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {application.company}
                  </p>
                  <p className="text-sm text-gray-600">{application.role}</p>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-sm font-medium ${getStatusClasses(
                    application.status
                  )}`}
                >
                  {application.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}