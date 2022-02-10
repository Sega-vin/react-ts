import React, { FC, useState } from 'react';
import { IUser } from '../../../types/userTypes';
import AppButton from '../../ui/Button/AppButton';
import AppInput from '../../ui/Input/AppInput';
import styles from './UserForm.module.scss'

interface UserFormProps{
  create: (user: IUser) => void
}

const UserForm:FC<UserFormProps> = ({create}) => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const createUser = (e: React.MouseEvent) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      address: {},
      ...user
    }
    create(newPost)
    setUser({name: '', email: ''})
  }

  return (
    <form>
      <AppInput 
        value={user.name} 
        label='Имя'
        getVal={(value) => setUser({...user, name: value})}
      />
      <AppInput 
        value={user.email} 
        label='Email'
        getVal={(value) => setUser({...user, email: value})}
      />
      <AppButton
        onClick={(e) => createUser(e)}
      >Создать пользователя</AppButton>
    </form>
  );
};

export default UserForm;