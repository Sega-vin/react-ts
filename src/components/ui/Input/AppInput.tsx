import React, { FC } from 'react';
import styles from './AppInput.module.scss'

interface AppInputProps{
  value: string;
  onChange: (value:string) => void;
  className?: string;
  label?: string;
}

const AppInput:FC<AppInputProps> = ({value, onChange, className, label}) => {
  const inputClasses = [styles.appInput, className]
  return (
    <div>
      <label htmlFor="inp">{label}</label>
      <input 
        placeholder={label}
        id="inp"
        className={inputClasses.join(' ')}
        type="text" 
        onChange={(e) => onChange(e.target.value)} 
        value={value} 
      />
    </div>
  );
};

export default AppInput;