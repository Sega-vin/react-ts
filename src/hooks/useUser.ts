import { IUser } from "../types/user";
import {  useMemo } from 'react';

export const useSortedUser = (users:IUser[], searchVal:string) => {
  const sortUsers = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1)
  }, [users, searchVal])

  return sortUsers
}

