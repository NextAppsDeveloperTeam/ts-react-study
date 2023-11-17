import {User, UserStatus} from '../../../@types';
import React from 'react';

export type BoardContextValue = {
  auth?: User;
  userList: User[];
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
  updateInfo: (name: string, email: string, phone: string, status: UserStatus) => void;
};

export interface BoardContextProps {
  children: React.ReactNode;
}
