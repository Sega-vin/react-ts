import React, {FC} from 'react';
import { IUser } from '../types/types';
import AppButton from './ui/Button/AppButton';
import Card from './ui/Card';

interface UserItemProps{
  user: IUser;
  onClick: (user: IUser) => void;
  delUser: (index: number) => void;
  index: number
}

const UserItem:FC<UserItemProps> = ({user, onClick, delUser, index}) => {
  return (
    <Card>
      <div onClick={() => onClick(user)}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.address.street}</p>
        <p>{user.address.city}</p>
      </div>
      <AppButton onClick={() => delUser(index)}>
        Удалить
      </AppButton>
    </Card>
  );
};

export default UserItem;