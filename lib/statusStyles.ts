import type { ApplicationStatus } from "@/lib/applications";

export function getStatusClasses(status: ApplicationStatus) {
  switch (status) {
    case "Interested":
      return "bg-gray-100 text-gray-700";

    case "Applied":
      return "bg-blue-100 text-blue-700";

    case "Online Assessment":
      return "bg-yellow-100 text-yellow-800";

    case "Interview":
      return "bg-purple-100 text-purple-700";

    case "Final Round":
      return "bg-indigo-100 text-indigo-700";

    case "Offer":
      return "bg-green-100 text-green-700";

    case "Rejected":
      return "bg-red-100 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
}