import { UserActionTypes, UserState, UserAction } from "../../types/userTypes";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        loading: true,
        error: null,
        users: []
      }
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        users: action.payload
      }
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
        users: []
      }
    case UserActionTypes.NEW_USER: 
      return {
        loading:false,
        error: null,
        users: [action.payload, ...state.users]
      }
      // case UserActionTypes.DELETE_USER: 
      //   // return {
      //   //   loading:false,
      //   //   error: null,
      //   //   users: [action.payload, ...state.users]
      //   // }
    default:
      return state
  }
}