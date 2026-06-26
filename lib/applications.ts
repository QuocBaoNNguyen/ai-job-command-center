export type ApplicationStatus =
  | "Interested"
  | "Applied"
  | "Online Assessment"
  | "Interview"
  | "Final Round"
  | "Offer"
  | "Rejected";

export type ApplicationPriority = "Low" | "Medium" | "High";

export type JobApplication = {
  id: string;
  company: string;
  role: string;
  location: string;
  status: ApplicationStatus;
  priority: ApplicationPriority;
  dateApplied: string;
  jobLink: string;
  notes: string;
};

export const applications: JobApplication[] = [
  {
    id: "1",
    company: "Anthropic",
    role: "AI Fellowship / Early Career Role",
    location: "San Francisco, CA",
    status: "Interested",
    priority: "High",
    dateApplied: "2026-06-20",
    jobLink: "https://www.anthropic.com/careers",
    notes:
      "Emphasize AI experience, tutoring, communication, and full-stack project work.",
  },
  {
    id: "2",
    company: "Advantest",
    role: "Software Engineering Intern",
    location: "San Jose, CA",
    status: "Interview",
    priority: "High",
    dateApplied: "2026-01-10",
    jobLink: "https://www.advantest.com/careers",
    notes:
      "Prep Python fundamentals, arrays, strings, hashmaps, and basic algorithms.",
  },
  {
    id: "3",
    company: "Qnovo",
    role: "Technical Product Manager",
    location: "Newark, CA",
    status: "Applied",
    priority: "Medium",
    dateApplied: "2025-12-24",
    jobLink: "https://www.qnovo.com/careers",
    notes:
      "Frame experience around product thinking, dashboards, user problems, and AI tools.",
  },
];