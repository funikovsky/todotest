import { TaskItemProps } from './TaskItem.props';
import styles from './TaskItem.module.scss';
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Button } from '../Button/Button';
import { Description } from '../Description/Description';

export const TasklItem = ({ className, task, count, ...props }: TaskItemProps) => {
  const { title, description, dateOfCreation, expirationDate, status } = task;

  const creationDate = new Date(JSON.parse(dateOfCreation.date));
  const cururentDate = new Date();
  const distance = formatDistance(creationDate, cururentDate, {
    includeSeconds: false,
    locale: ru,
  });

  return (
    <li className={styles.taskItem} {...props}>
      <div className={styles.taskContent}>
        <div className={styles.taskHeader}>
          <div className={styles.taskTitle}>
            <span className={styles.taskCount}>{count}</span>
            <span>{title}</span>
          </div>
          <div className={styles.taskInfo}>
            <span>Дата создания: {dateOfCreation.formatDate}</span>
            <span>Выполнить до: {expirationDate}</span>
            <span>В работе: {distance}</span>
            <span>Статус: {status}</span>
          </div>
        </div>
        <Description count={count} id={task.id.toString()} description={description} />
      </div>
    </li>
  );
};
