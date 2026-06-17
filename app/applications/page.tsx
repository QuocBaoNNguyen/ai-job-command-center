type JobApplication = {
  id: number;
  company: string;
  role: string;
  status: "Saved" | "Applied" | "Interview" | "Rejected" | "Offer";
  dateApplied: string;
};

const applications: JobApplication[] = [
  {
    id: 1,
    company: "OpenAI",
    role: "Software Engineer, New Grad",
    status: "Saved",
    dateApplied: "Not applied yet",
  },
  {
    id: 2,
    company: "Stripe",
    role: "Backend Software Engineer",
    status: "Applied",
    dateApplied: "2026-06-17",
  },
  {
    id: 3,
    company: "Notion",
    role: "AI Applications Engineer",
    status: "Interview",
    dateApplied: "2026-06-15",
  },
];

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Job Applications
          </h1>
          <p className="mt-2 text-gray-700">
            Track companies, roles, application statuses, and follow-up dates.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-sm uppercase text-gray-600">
              <tr>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date Applied</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application) => (
                <tr key={application.id} className="border-t border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {application.company}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {application.role}
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                      {application.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {application.dateApplied}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}