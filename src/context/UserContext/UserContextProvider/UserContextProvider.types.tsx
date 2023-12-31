import { User, UserStatus } from '../../../@types';
import React from 'react';

export type UserContextValue = {
  auth?: User;
  userList: User[];
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
  updateUser: (password: string) => void;
  updateInfo: (name: string, email: string, phone: string, status: UserStatus) => void;
  getUserInfo: (id: number) => User | undefined;
  login(email: string, password: string): boolean;
  logout(): void;
};

export interface UserContextProps {
  children: React.ReactNode;
}
