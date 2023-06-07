export interface IEmployee {
  id?: number;
  name?: string | null;
  address?: string | null;
  salary?: number | null;
  projectId?: number | null;
}

export const defaultValue: Readonly<IEmployee> = {};
