import { User } from '../../@types';
import React from 'react';

export type UserContextValue = {
  auth?: User;
  userList: User[];
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
  login(email: string, password: string): boolean;
  logout(): void;
};

export interface UserContextProps {
  children: React.ReactNode;
}
