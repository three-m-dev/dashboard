export interface IProductionLog {
  id: string;
  company: string;
  weekOf: string;
  properties: {
    [property: string]: number;
  };
  notes: string;
  createdAt: string;
  updatedAt: string;
}
