import React, { FC } from 'react';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import { LoginData } from '../../types/types';
import styles from './LoginPage.module.scss'

const LoginPage:FC = () => {
  const login = (loginData: LoginData) => {
    console.log(loginData)
  }
  return (
    <div>
      <div className={styles.centered}>
        <div className={styles.wrapper}>
          <LoginForm login={login}/>
        </div>  
      </div> 
    </div>
  );
};

export default LoginPage;