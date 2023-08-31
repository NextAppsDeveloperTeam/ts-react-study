import React, {createContext, useState, useEffect} from "react";
import {User, UserContextType, users, UserStatus} from "../../component/Home/@types/user";

export const UserContext = createContext<UserContextType | null>(null);

interface Props {
    children: React.ReactNode;
}

const UserProvider = ({children}:Props) => {
    const [userList, setUserList] = useState<User[]>(users);

    const addUser = (user: User) => {
        if(user) {
            const newList : User[] = [...userList, {
                id: userList.length+1,
                name: user.name,
                email: user.email,
                phone: user.phone,
                password: user.password,
                status: UserStatus.User,
            }];
            localStorage.setItem('UserList', JSON.stringify(newList));
            setUserList(newList);
        }
    };

    const deleteUser = (id: number) => {
        const list = userList.filter(user => user.id !== id);
        localStorage.removeItem('UserList');
        setUserList(list);
    };

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

export default UserProvider;