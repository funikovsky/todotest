import styles from './Tag.module.scss';
import { TagProps } from './Tag.props';
import { Link } from 'react-router-dom';
import cn from 'classnames';

export const Tag = ({ className, href, children, ...props }: TagProps) => {
  return (
    <div className={cn(className, styles.tag)} {...props}>
      <Link to={href}>{children}</Link>
    </div>
  );
};
