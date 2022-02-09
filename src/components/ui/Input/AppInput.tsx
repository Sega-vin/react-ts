import React, { FC, InputHTMLAttributes } from 'react';
import styles from './AppInput.module.scss'

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement>{
  getVal: (value:string) => void;
  className?: string;
  label?: string;
}

const AppInput:FC<AppInputProps> = ({className, label, getVal, ...props}) => {
  const inputClasses = [styles.appInput, className]
  return (
    <div>
      <label htmlFor="inp" className={styles.label}>{label}</label>
      <input 
        id="inp"
        className={inputClasses.join(' ')}
        {...props}
        onChange={(e) => getVal(e.target.value)}  
      />
    </div>
  );
};

export default AppInput;