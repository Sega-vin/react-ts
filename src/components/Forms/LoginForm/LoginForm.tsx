import React, { FC, useState } from 'react';
import { LoginData } from '../../../types/types';
import AppButton, { ButtonType } from '../../ui/Button/AppButton';
import AppInput from '../../ui/Input/AppInput';
import styles from './LoginForm.module.scss'


interface LoginFormProps{ 
  login: (loginData: LoginData) => void
}

const LoginForm:FC<LoginFormProps> = ({login}) => {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const loginEmit = (e: React.MouseEvent) => {
    e.preventDefault()
    login(loginData)
    // setLoginData({email: '', password: ''})
  }

  return (
    <div>
      <form className={styles.loginForm}>
        <h2 className='text-title-h6'>Форма входа</h2>
        <div style={{marginTop: '10px'}}>
          <AppInput 
            value={loginData.email} 
            label="Email" 
            getVal={(value) => setLoginData({...loginData, email: value})}    
          />
        </div>
        <div style={{marginTop: '10px'}}>
          <AppInput 
            value={loginData.password}
            label="Password" 
            type="password"
            getVal={(value) => setLoginData({...loginData, password: value})} 
          />
        </div>
        <AppButton 
          VisibleType={ButtonType.fill} 
          style={{marginTop: '20px'}}
          onClick={(e) => loginEmit(e)}
        >Войти</AppButton>
      </form>
      
    </div>
  );
};

export default LoginForm;