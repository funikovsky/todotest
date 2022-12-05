import { Tag } from '../components/Tag/Tag';
import { TasktList } from '../components/TaskList/TaskList';

export const Task = () => {
  return (
    <>
      <Tag href="/todotest">Назад к проектам</Tag>
      <TasktList />
    </>
  );
};
