import React, { useEffect, useState, FC, useMemo } from 'react';
import UserItem from '../components/UserItem';
import List from '../components/ui/List';
import axios  from 'axios';
import { IUser } from '../types/types';
import { useNavigate } from 'react-router-dom';
import AppButton from '../components/ui/Button/AppButton';
import Modal from '../components/ui/Modal/Modal';
import AppInput from '../components/ui/Input/AppInput';
import UserForm from '../components/Forms/UserForm/UserForm';

const UserPage:FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [searchVal, setSearchVal] = useState<string>('')
  const [modalUser, setModalUser] = useState<boolean>(false)
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
  
  const createUser = (user: IUser) => {
    setUsers([user, ...users])
  }

  const deleteUser = (index: number) => {
    users.splice(index, 1)
    setUsers([...users])
  }

  const sortUsers = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1)
  }, [users, searchVal])

  return (
    <div>
      <div style={{padding: '10px'}}>
        <div style={{width: '300px'}}>
          <AppInput 
            value={searchVal} 
            onChange={(value:string) => setSearchVal(value)}
            label="Поиск:"
          />
        </div>
        <hr />
        <AppButton
          onClick={() => setModalUser(true)}
        >Добавить юзера</AppButton>
      </div>
      <div>
        <List 
          items={sortUsers} 
          renderItem={(user: IUser, index) => 
            (<UserItem 
              user={user} 
              index={index}
              key={user.id} 
              onClick={(user) => navigate('/users/' + user.id)}
              delUser={(index) => deleteUser(index)}
            />)
          }
        />
      </div>
      <Modal visible={modalUser} setVisible={setModalUser}>
        <UserForm create={createUser}/>
      </Modal>
    </div>
  );
};

export default UserPage;