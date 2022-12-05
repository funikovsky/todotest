import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addSubDescr, addSubDescrByID, ISubDesc } from '../../redux/slice/ProjectsSlice';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import styles from './Description.module.scss';
import { DescriptionProps } from './Description.props';

export const Description = ({ className, description, id, count, ...props }: DescriptionProps) => {
  const [subDescr, setSubDescr] = useState<string>('');
  const data = useAppSelector((state) => state.projects.subDescData);
  const dispatch = useAppDispatch();

  const SubId = Date.now();

  const createSubDesc = () => {
    const obj: ISubDesc = {};
    if (!data[id]) {
      obj[id] = [{ id: SubId.toString(), text: subDescr }];
      dispatch(addSubDescr({ ...obj }));
    } else {
      dispatch(addSubDescrByID({ id, text: { id: SubId.toString(), text: subDescr } }));
    }
    setSubDescr('');
  };

  return (
    <div className={styles.subDescr} {...props}>
      <div className={styles.taskDescription}>{description}</div>
      <Textarea
        value={subDescr}
        onChange={(e) => setSubDescr(e.target.value)}
        placeholder="Введите комментарий"
      />
      <div className={styles.descrButtonBlock}>
        <Button onClick={() => createSubDesc()}>Комментировать</Button>
      </div>
      {data[id]
        ? data[id].map((item, index) => (
            <Description count={count} key={index} id={item.id} description={item.text} />
          ))
        : ''}
    </div>
  );
};
