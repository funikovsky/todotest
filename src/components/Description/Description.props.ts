import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DescriptionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  description: string;
  id: string;
  count?: number;
}
