import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

export const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Твои проекты</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
