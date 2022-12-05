import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useParams } from 'react-router-dom';
import { format, add } from 'date-fns';

import styles from './TaskList.module.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState, KeyboardEvent } from 'react';
import { Priority, Status, Task } from '../../interfaces/Project.interface';
import { addTask } from '../../redux/slice/ProjectsSlice';
import { TasklItem } from '../TaskItem/TaskItem';
import { Textarea } from '../Textarea/Textarea';

export const TasktList = () => {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [countDays, setCountDays] = useState<string>('');

  const projectsData = useAppSelector((state) => state.projects.data);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  if (id && projectsData.length > 0) {
    let indexProject = +id - 1;
    let { projectTitle, tasks } = projectsData[indexProject];

    const createTaskFromEnter = (key: KeyboardEvent) => {
      if (key.code === 'Enter') {
        createTaskItem();
      }
    };

    const createTaskItem = () => {
      if (!taskTitle) return;
      const createDate = new Date();
      const calendarDateFormat = 'dd.MM.yy H:m';
      const totalAddDays = countDays
        ? format(add(createDate, { days: +countDays }), 'dd.MM.yy')
        : 'нет срока';
      const item: Task = {
        id: Date.now(),
        title: taskTitle,
        description: taskDescription,
        dateOfCreation: {
          date: JSON.stringify(createDate),
          formatDate: format(createDate, calendarDateFormat),
        },
        expirationDate: totalAddDays,
        priority: Priority.Low,
        status: Status.Development,
        coments: '',
        subDescription: {},
      };

      dispatch(addTask({ item, indexProject }));
      setTaskTitle('');
      setTaskDescription('');
      setCountDays('');
    };

    return (
      <div className={styles.list}>
        <span className={styles.projectTitle}>{`Проект № ${id} - ${projectTitle}`}</span>
        {!tasks.length && <div>На данный момент задач к проекту нет</div>}
        <div className={styles.taskForm}>
          <div className={styles.inputBlock}>
            <Input
              onChange={(e) => setTaskTitle(e.target.value)}
              value={taskTitle}
              placeholder="Новая задача"
              onKeyDown={(key: KeyboardEvent) => createTaskFromEnter(key)}
            />

            <Input
              onChange={(e) => setCountDays(e.target.value)}
              value={countDays}
              placeholder="Кол-во дней на выполнение"
              onKeyDown={(key: KeyboardEvent) => createTaskFromEnter(key)}
            />
          </div>
          <Textarea
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
            placeholder="Описание задачи"
            onKeyDown={(key: KeyboardEvent) => createTaskFromEnter(key)}
          />

          <Button onClick={() => createTaskItem()}>+</Button>
        </div>
        {tasks.length > 0 && (
          <div className={styles.taskContent}>
            <ul>
              {tasks.map((task, index) => (
                <TasklItem count={index + 1} key={task.id} task={task} />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return <></>;
};
