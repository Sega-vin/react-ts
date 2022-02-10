import { Dispatch } from "redux"
import { IUser, UserAction, UserActionTypes } from "../../types/userTypes"
import axios  from 'axios';


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try{
      dispatch({type: UserActionTypes.FETCH_USERS})
      const response = await axios.get('http://jsonplaceholder.typicode.com/users')
      dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
    }catch(e){
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка'})
    }
  }
}

export const newUser = (user:IUser) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try{
      dispatch({type: UserActionTypes.NEW_USER, payload: user})
    }catch(e){
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка'})
    }
  }
}

// export const deleteUser = (index: number) => {
//   return async (dispatch: Dispatch<UserAction>) => {
//     try{
//       dispatch({type: UserActionTypes.NEW_USER, payload: user})
//     }catch(e){
//       dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка'})
//     }
//   }
// }