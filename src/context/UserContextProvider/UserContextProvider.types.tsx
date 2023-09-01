import {User} from "../../@types";
import React from "react";

export type UserContextValue = {
  userList: User[];
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
};

export interface UserContextProps {
    children: React.ReactNode;
}