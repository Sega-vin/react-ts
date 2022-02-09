import React, { FC } from 'react';
import styles from './AppButton.module.scss'

export enum ButtonType {
  icon='icon',
  default='default',
  fill="fill"
}

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes{
  className?: string;
  VisibleType?: ButtonType;
}

const AppButton:FC<ButtonProps> = ({onClick, children, className, VisibleType, ...props}) => {

  const buttonClasses = [styles.appButton, className]

  if(VisibleType === 'icon'){
    buttonClasses.push(styles.appButton_icon)
  }
  if(VisibleType === 'fill'){
    buttonClasses.push(styles.appButton_fill)
  }
  
  return (
    <button 
      {...props}
      className={buttonClasses.join(' ')} 
      onClick={(e) => {if(onClick) onClick(e)}}
    >
      {children}
    </button>
  );
};

export default AppButton;