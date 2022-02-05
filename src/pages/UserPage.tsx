import React, { useEffect, useState, FC, useMemo } from 'react';
import Search from '../components/Search';
import UserItem from '../components/UserItem';
import List from '../components/ui/List';
import axios  from 'axios';
import { IUser } from '../types/types';
import { useNavigate } from 'react-router-dom';

const UserPage:FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [searchVal, setSearchVal] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    getUsers()
  }, [])

  async function getUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    }catch(e){
      alert(e)
    }
  }
  
  const sortUsers = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1)
  }, [users, searchVal])

  return (
    <div>
      <Search 
        value={searchVal} 
        onChange={(value:string) => setSearchVal(value)}
        reset={() => setSearchVal('')}
      />
        <div>
          <List 
            items={sortUsers} 
            renderItem={(user: IUser) => 
              (<UserItem user={user} key={user.id} onClick={(user) => navigate('/users/' + user.id)}/>)
            }
          />
        </div>
    </div>
  );
};

export default UserPage;