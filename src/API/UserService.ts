import axios  from 'axios';
import { IUser } from '../types/userTypes';

export default class UserService {
  static async getAll(){
    try {
      const response = await axios.get('http://jsonplaceholder.typicode.com/users')
      return response.data
    }catch(e){
      console.log(e)
    }
  }
}