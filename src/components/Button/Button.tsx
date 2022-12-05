import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <>
      <button className={cn(styles.button, className)} {...props}>
        {children}
      </button>
    </>
  );
};
