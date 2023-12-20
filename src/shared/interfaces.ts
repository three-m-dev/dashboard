export interface IAddress {
  city: string;
  state: string;
  country: string;
  postalCode: string;
  addressLine: string;
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
  phoneScreenDate?: string;
  interviewDate?: string;
  status: string;
  notes?: string;
  ratings?: IRating[];
  job?: IJob;
  applicant: IApplicant;
  createdAt: string;
  updatedAt: string;
}

export interface IChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension: number;
  }[];
}

export interface IDepartment {
  id: string;
  company: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IDowntimeEntry {
  id: string;
  operatorId: string;
  date: string;
  downtime: {
    [reason: string]: number;
  };
  notes?: string;
  createdBy: string;
  updatedBy?: string;
}

export interface IDowntimeDetails {
  totalDowntime: number;
  downtime: {
    [key: string]: number;
  };
}

export interface IDowntimeReportData {
  [date: string]: IDowntimeDetails;
}

export interface IEmployee {
  userId: string;
  departmentId: string;
  directReportId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  addressId?: string;
  birthDate?: string;
  company: string;
  department: IDepartment;
  title: string;
  type: string;
  status: string;
  startDate: string;
  endDate?: string;
  notes?: string;
  createdBy: string;
  updatedBy?: string;
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

export interface IRating {
  value: number;
  notes?: string;
  createdBy: string;
}
