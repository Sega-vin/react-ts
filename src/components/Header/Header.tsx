import React, { FC, useState } from 'react';
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';
import AppButton, { ButtonType } from '../ui/Button/AppButton';
import List from '../ui/List'

const Header:FC = () => {
  const [menu, setMenu] = useState([
    {
      name: 'Пользователи',
      path: '/users'
    },
    {
      name: 'Задачи',
      path: '/todos'
    },
  ])
  

  return (
    <div>
      <header className={styles.header}>
        {menu.map(item => 
          <NavLink 
          to={item.path} 
          className={({ isActive }) => isActive ? styles.linkActive : '' }
          key={item.path}
        > 
          <AppButton className={styles.link}>
            {item.name}
          </AppButton>
        </NavLink>
        )}
      </header>
    </div>
  );
};

export default Header;