import dayjs from 'dayjs';

export interface IProject {
  id?: number;
  name?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  leader?: string | null;
}

export const defaultValue: Readonly<IProject> = {};
