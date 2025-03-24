export interface JobApplication {
  $id: string;
  job_id: string;
  job_role: string;
  company: string;
  location: string;
  Salary_lpa_inr: number;
  status: string;
  $createdAt: string;
}

export type JobApplicationStatus =
  | "applied"
  | "interviewing"
  | "offered"
  | "rejected";
