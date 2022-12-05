import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ProjectsItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  count: number;
  title: string;
}
