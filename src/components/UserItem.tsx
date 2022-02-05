import React, {FC} from 'react';
import { IUser } from '../types/types';
import Card from './ui/Card';

interface UserItemProps{
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem:FC<UserItemProps> = ({user, onClick}) => {
  return (
    <Card>
      <div onClick={() => onClick(user)}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.address.street}</p>
        <p>{user.address.city}</p>
      </div>
      <button>Удалить</button>
    </Card>
  );
};

export default UserItem;