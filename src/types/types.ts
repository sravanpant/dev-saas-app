export type JobApplicationStatus = 
  | 'applied' 
  | 'interviewing' 
  | 'offered' 
  | 'rejected';

export type JobApplication = {
  $id: string;
  $createdAt: string;
  job_id: string;
  job_role: string;
  company: string;
  location: string;
  Salary_lpa_inr: number;
  status: JobApplicationStatus;
};

export type JobApplicationFormData = Omit<JobApplication, '$id' | '$createdAt'>;