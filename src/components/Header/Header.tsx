import React, { FC } from 'react';
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';
import AppButton from '../ui/Button/AppButton';

const Header:FC = () => {
  return (
    <div>
      <header className={styles.header}>
        
          <NavLink to="/users">
            <AppButton className={styles.link}>
              Пользователи
            </AppButton>
          </NavLink>
          <NavLink to="/todos">
            <AppButton className={styles.link}>
              Задачи
            </AppButton>
          </NavLink>
      </header>
    </div>
  );
};

export default Header;