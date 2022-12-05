import { DetailedHTMLProps, LiHTMLAttributes } from 'react';
import { Task } from '../../interfaces/Project.interface';

export interface TaskItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  task: Task;
  count: number;
}
