import React, {useState, useEffect} from "react";
import {User, UserStatus} from "../../@types";
import { UserContext } from '../UserContext';
import { UserContextProps as Props } from './UserContextProvider.types';

const users : User[] = [
    {
        id: 1,
        name: 'admin',
        email: 'test00@test.com',
        phone: '010-1111-2222',
        password: '1234',
        status: UserStatus.Admin,
    },
    {
        id: 2,
        name: 'user1',
        email: 'test01@test.com',
        phone: '010-1111-3333',
        password: '1234',
        status: UserStatus.User,
    },
];

const UserContextProvider = ({children}:Props) => {
    const [userList, setUserList] = useState<User[]>(users);

    const addUser = useCallback((user: User) => {
        if(user) {
            const newList : User[] = [...userList, {
                id: userList[userList.length-1].id+1,
                name: user.name,
                email: user.email,
                phone: user.phone,
                password: user.password,
                status: user.status,
            }];
            localStorage.setItem('UserList', JSON.stringify(newList));
            setUserList(newList);
        }
    },[userList]);

    const deleteUser = useCallback((id: number) => {
        const list = userList.filter(user => user.id !== id);
        localStorage.removeItem('UserList');
        setUserList(list);
    }, [userList]);

    useEffect(() => {
        const list = localStorage.getItem('UserList');
        if(list) {
            setUserList(JSON.parse(list));
        }
    }, []);

    return (
        <UserContext.Provider
            value={{
                userList,
                addUser,
                deleteUser,
            }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;