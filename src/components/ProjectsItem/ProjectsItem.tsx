import { ProjectsItemProps } from './ProjectsItem.props';
import { useNavigate } from 'react-router-dom';

import styles from './ProjectsItem.module.scss';
import { Button } from '../Button/Button';
import { useAppDispatch } from '../../hooks/hooks';
import { dellProject } from '../../redux/slice/ProjectsSlice';

export const ProjectsItem = ({ className, count, title, ...props }: ProjectsItemProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (count: number) => {
    dispatch(dellProject(count));
  };
  const openProject = (id: number) => {
    navigate(`/todotest/tasks/${id}`);
  };

  return (
    <>
      <li className={styles.li} {...props}>
        <div className={styles.projectTitle}>
          <span>{count}</span>
          <span>{title}</span>
        </div>
        <div className={styles.buttonBlock}>
          <Button onClick={() => openProject(count)} className={styles.btn}>
            Открыть
          </Button>
          <Button onClick={() => handleClick(count)} className={styles.btn}>
            Удалить
          </Button>
        </div>
      </li>
    </>
  );
};
