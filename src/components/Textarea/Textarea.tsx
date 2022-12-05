import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';
import cn from 'classnames';

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <>
      <textarea className={cn(styles.textarea, className)} {...props} />
    </>
  );
};
