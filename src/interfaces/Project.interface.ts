import { ISubDesc } from '../redux/slice/ProjectsSlice';

export enum Status {
  Queue = 'В очереди',
  Development = 'В работе',
  Done = 'Выполнена',
}
export enum Priority {
  High,
  Low,
}

export interface IDate {
  date: string;
  formatDate: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  dateOfCreation: IDate;
  timeAtWork?: number;
  expirationDate?: string;
  priority: Priority;
  status: Status;
  coments: string;
  subDescription: ISubDesc;
}

export interface Project {
  projectTitle: string;
  tasks: Array<Task>;
}
