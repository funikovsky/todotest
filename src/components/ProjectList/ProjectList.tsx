import { useAppSelector } from '../../hooks/hooks';
import { Button } from '../Button/Button';
import { ProjectsItem } from '../ProjectsItem/ProjectsItem';
import styles from './ProjectList.module.scss';

export const ProjectList = () => {
  const projectsData = useAppSelector((state) => state.projects.data);

  if (!projectsData.length)
    return (
      <div className={styles.list__empty}>
        <span>Пока проектов нет, начинай создавать!!!</span>
      </div>
    );

  return (
    <div>
      <ul className={styles.list}>
        {projectsData.map((project, index) => (
          <ProjectsItem key={index} count={index + 1} title={project.projectTitle} />
        ))}
      </ul>
    </div>
  );
};
