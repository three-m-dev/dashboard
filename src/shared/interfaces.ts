export interface Address {
  city: string;
  state: string;
  country: string;
  postalCode: string;
  addressLine: string;
}

export interface IJob {
  id: string;
  departmentId: string;
  company: string;
  title: string;
  description: string;
  location: string;
  type: string;
  status: string;
  benefits?: string[];
  requirements?: string[];
  qualifications?: string[];
  schedule?: string[];
  salary?: number;
  wage?: number;
  positionsOpen: number;
  createdBy: string;
  updatedBy?: string;
  closingAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IApplicant {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeRef?: string;
  resumeLink?: string;
  answers?: string[];
  additionalInfo?: string;
}

export interface IApplication {
  jobId?: string;
  applicantId: string;
  phoneScreenDate?: Date;
  interviewDate?: Date;
  status: string;
  notes?: string;
  ratings?: IRating[];
  applicant: IApplicant;
  createdAt: string;
  updatedAt: string;
}

export interface IRating {
  value: number;
  notes?: string;
  createdBy: string;
}
