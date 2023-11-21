import React, { useState, useEffect } from 'react';
import { Board, User, UserStatus } from '../../../@types';
import { UserContext } from '../UserContext';
import { UserContextProps as Props } from './UserContextProvider.types';

const users: User[] = [
  {
    id: 1,
    name: 'admin',
    email: 'test00@test.com',
    phone: '010-1111-2222',
    password: 'abcd123@',
    status: UserStatus.Admin,
  },
  {
    id: 2,
    name: 'user1',
    email: 'test01@test.com',
    phone: '010-1111-3333',
    password: 'abcd123@',
    status: UserStatus.User,
  },
];

const boards: Board[] = [
  {
    id: 1,
    title: '제목',
    content: '내용',
    user_id: 1,
    create_date: new Date('2023-9-13'),
    update_date: undefined,
    views: 0,
    comment: [{ id: 1, user_id: 1, content: '댓글' }],
  },
  {
    id: 2,
    title: '제목2',
    content: '내용2',
    user_id: 2,
    create_date: new Date('2023-11-5'),
    update_date: new Date(),
    views: 0,
    comment: [{ id: 1, user_id: 2, content: '댓글' }],
  },
];

const UserContextProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<User>();
  const [userList, setUserList] = useState<User[]>(users);
  const [boardList, setBoardList] = useState<Board[]>(boards);
  const [loading, setLoading] = useState(false);

  // -------------------------------------------------------------------------------------------------------------------
  ll(auth);
  useEffect(() => {
    const list = localStorage.getItem('UserList');
    if (list) {
      const userList: User[] = JSON.parse(list);
      setUserList(userList);

      const userAuthId = localStorage.getItem('UserAuth');
      if (userAuthId) {
        const user = userList.find((info) => info.id === Number(userAuthId));
        setAuth(user);
      }
    }
    setLoading(true);
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  const addUser = useCallback(
    (user: User) => {
      if (user) {
        const newList: User[] = [
          ...userList,
          {
            id: userList[userList.length - 1].id + 1,
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: user.password,
            status: user.status,
          },
        ];
        localStorage.setItem('UserList', JSON.stringify(newList));
        setUserList(newList);
      }
    },
    [userList]
  );

  const addBoard = useCallback(
    (board: Board) => {
      if (board) {
        const newList: Board[] = [
          ...boardList,
          {
            id: boardList[boardList.length - 1].id + 1,
            title: board.title,
            content: board.content,
            user_id: board.user_id,
            create_date: board.create_date,
            update_date: board.update_date,
            views: board.views,
            comment: [{ id: board.id, user_id: board.user_id, content: board.content }],
          },
        ];
        localStorage.setItem('BoardList', JSON.stringify(newList));
        setBoardList(newList);
      }
    },
    [boardList]
  );

  const deleteUser = useCallback(
    (id: number) => {
      const list = userList.filter((user) => user.id !== id);
      localStorage.removeItem('UserList');
      setUserList(list);
    },
    [userList]
  );

  const updateUser = useCallback(
    (password: string) => {
      if (auth) {
        const userInfo = userList.find((info) => info.id === auth.id);
        if (userInfo) {
          const updateList = userList.map((item) => ({
            ...item,
            password: item.id === userInfo.id ? password : item.password,
          }));
          auth.password = password;
          localStorage.setItem('UserList', JSON.stringify(updateList));
          setUserList(updateList);
        }
      }
    },
    [auth, userList]
  );

  const updateInfo = useCallback(
    (name: string, email: string, phone: string, status: UserStatus) => {
      if (auth) {
        const userInfo = userList.find((info) => info.id === auth.id);
        if (userInfo) {
          const updateList = userList.map((item) => ({
            ...item,
            name: item.id === userInfo.id ? name : item.name,
            email: item.id === userInfo.id ? email : item.email,
            phone: item.id === userInfo.id ? phone : item.phone,
            status: item.id === userInfo.id ? status : item.status,
          }));
          auth.name = name;
          auth.email = email;
          auth.phone = phone;
          auth.status = status;
          localStorage.setItem('UserList', JSON.stringify(updateList));
          setUserList(updateList);
        }
      }
    },
    [auth, userList]
  );

  const login = useCallback(
    (email: string, password: string) => {
      const userInfo = userList.find((info) => info.email === email && info.password === password);
      if (userInfo) {
        setAuth(userInfo);
        localStorage.setItem('UserAuth', `${userInfo.id}`);
        alert(`${userInfo.name}님 환영합니다.`);
        return true;
      } else {
        return false;
      }
    },
    [userList]
  );

  const logout = useCallback(() => {
    setAuth(undefined);
    localStorage.removeItem('UserAuth');
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <UserContext.Provider
      value={{
        auth,
        userList,
        boardList,
        addUser,
        deleteUser,
        updateUser,
        updateInfo,
        login,
        logout,
      }}
    >
      {loading && children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
