export interface Address {
  city: string;
  state: string;
  country: string;
  postalCode: string;
  addressLine: string;
}

export interface ITeamMember {
  id: string;
  userId: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: Address;
  dateOfBirth: string | null;
  company: string;
  department: string;
  role: string;
  directReport: string | null;
  status: string;
  salary: number | null;
  notes: string | null;
  createdBy: string;
  updatedBy: string;
  hiredAt: string;
  terminatedAt: string | null;
  resignedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IDepartment {
  id: string;
  name: string;
  count: number;
}

export interface ICareer {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  department: string;
  employmentType: string;
  responsibilities: string[];
  qualifications: string[];
  startingAt: string;
  compensationType: string;
  benefits: string[];
  status: string;
  applicantCount: number;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAnswers {
  question: string;
  answer: string;
}

export interface IApplicant {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  resumeRef: string;
  answers: IAnswers[];
}

export interface IApplication {
  id: string;
  careerId: string;
  career: ICareer;
  status: string;
  source: string;
  applicant: IApplicant;
  submittedAt: string;
  processedAt: string;
  createdAt: string;
  updatedAt: string;
}
