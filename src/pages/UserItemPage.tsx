import React, { useEffect, useState, FC } from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from '../types/user';
import axios  from 'axios';
import Card from '../components/ui/Card';

const UserItemPage:FC = () => {

  const [user, setUser] = useState<IUser | null>(null)
  const { id } = useParams<{ id: string}>()
  
  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    try {
      const response = await axios.get<IUser | null>('https://jsonplaceholder.typicode.com/users/'+ id)
      setUser(response.data)
    }catch(e){
      alert(e)
    }
  }

  return (
    <div>
      <Card>
        <h1>{user?.name}</h1>
        <p>{user?.email}</p>
        <p>{user?.address.city}</p>
        <p>{user?.address.street}</p>
      </Card>
    </div>
  );
};

export default UserItemPage;