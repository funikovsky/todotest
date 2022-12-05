import { useState, KeyboardEvent } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { addProject } from '../../redux/slice/ProjectsSlice';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './ProjectsTop.module.scss';

export const ProjectTop = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const enterProjectName = (key: KeyboardEvent) => {
    if (key.code === 'Enter') {
      createNewProject();
    }
  };

  const createNewProject = () => {
    if (!value) return;

    dispatch(addProject(value));
    setValue('');
  };
  return (
    <>
      <div className={styles.projectsTop}>
        <Input
          className={styles.input}
          placeholder="Имя твоего проекта"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(key: KeyboardEvent) => enterProjectName(key)}
        />
        <Button className={styles.createButton} onClick={() => createNewProject()}>
          +
        </Button>
      </div>
    </>
  );
};
