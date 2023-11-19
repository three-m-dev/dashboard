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
