import React, { FC } from 'react';
import styles from './AppButton.module.scss'

export enum ButtonType {
  icon='icon',
  default='default'
}

interface ButtonProps{
  onClick?: () => void,
  className?: string;
  type?: ButtonType;
  prevent?: boolean
}

const AppButton:FC<ButtonProps> = ({onClick, children, className, type, prevent}) => {

  const PreventClick = (e: React.MouseEvent) => {
    if(prevent) e.preventDefault()
    if(onClick) onClick()
  }

  const buttonClasses = [styles.appButton, className]

  if(type === 'icon'){
    buttonClasses.push(styles.appButton_icon)
  }

  return (
    <button 
      className={buttonClasses.join(' ')} 
      onClick={(e) => PreventClick(e)}
    >
      {children}
    </button>
  );
};

export default AppButton;