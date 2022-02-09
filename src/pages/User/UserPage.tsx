import React, { useEffect, useState, FC } from 'react';
import UserItem from '../../components/UserItem';
import List from '../../components/ui/List';
import { IUser } from '../../types/user';
import { useNavigate } from 'react-router-dom';
import AppButton from '../../components/ui/Button/AppButton';
import Modal from '../../components/ui/Modal/Modal';
import AppInput from '../../components/ui/Input/AppInput';
import UserForm from '../../components/Forms/UserForm/UserForm';
import { CSSTransition } from 'react-transition-group';
import { useSortedUser } from '../../hooks/useUser';
import UserService from '../../API/UserService';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/action-creators/userAction';
import { useActions } from '../../hooks/useActions';

const UserPage:FC = () => {
  // const [users, setUsers] = useState<IUser[]>([])
  const [searchVal, setSearchVal] = useState<string>('')
  const [modalUser, setModalUser] = useState<boolean>(false)
  const navigate = useNavigate()

  const {users, error, loading} = useAppSelector(state => state.user)

  const {fetchUsers} = useActions()
  const sortUsers = useSortedUser(users, searchVal)

  useEffect(() => {
    // getUsers()
    fetchUsers()
  }, [])

  // async function getUsers() {
  //     const users = await UserService.getAll()
  //     setUsers(users)
  // }
  
  const createUser = (user: IUser) => {
    // setUsers([user, ...users])
    setModalUser(false)
  }

  const deleteUser = (index: number) => {
    users.splice(index, 1)
    // setUsers([...users])
  }

  if(loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if(loading) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <div style={{padding: '10px'}}>
        <div style={{width: '300px'}}>
          <AppInput 
            value={searchVal} 
            getVal={(value:string) => setSearchVal(value)}
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
              (<CSSTransition
                key={user.id} 
                timeout={500}
                classNames="item"
              >
                <UserItem 
                  user={user} 
                  index={index}                  
                  onClick={(user) => navigate('/users/' + user.id)}
                  delUser={(index) => deleteUser(index)}
                />
              </CSSTransition>)
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