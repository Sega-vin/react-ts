import React, { FC, MouseEventHandler } from 'react';
import styles from './Modal.module.scss'
import CloseIcon from '@material-ui/icons/Close';
import AppButton, { ButtonType } from '../Button/AppButton';

interface ModalProps{
  visible: boolean;
  setVisible: (value:boolean) => void;
}

const Modal:FC<ModalProps> = ({children, visible, setVisible}) => {
  
  const modalClasses = [styles.modal]

  if(visible){
    modalClasses.push(styles.active)
  }
  return (
    <div 
      className={modalClasses.join(' ')} 
      onClick={() => setVisible(false)}
    >
      <div 
        className={styles.modalContent}  
        onClick={(e) => e.stopPropagation()}
      >
        <AppButton
          className={styles.close}
          onClick={() => setVisible(false)}
          VisibleType={ButtonType.icon}
        >
          <CloseIcon />
        </AppButton>
        {children}
      </div>
    </div>
  );
};

export default Modal;