import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Home,
  MyPage,
  UserList,
  AuthLogin,
  AuthReg,
  MyPwdChange,
  MyDelete,
  MyInfoUpdate,
  MyPwdCheck,
  BoardList,
  BoardPost,
  BoardPage,
} from '../component';
import { useContext } from 'react';
import { UserContext, UserContextValue } from '../context';
import { UserStatus } from '../@types';

const MainRoute = () => {
  const { auth } = useContext(UserContext) as UserContextValue;

  return (
    <Routes>
      <Route path='/' element={<Home />} />

      {auth ? (
        <>
          <Route path='/myPage' element={<MyPage />} />
          <Route path='/myPwdChange' element={<MyPwdChange />} />
          <Route path='myInfoUpdate' element={<MyInfoUpdate />} />
          <Route path='myPwdCheck' element={<MyPwdCheck />} />
          <Route path='/myDelete' element={<MyDelete />} />
          <Route path='/boardList' element={<BoardList />} />
          <Route path='/boardPost' element={<BoardPost />} />
          <Route path='/boardPage' element={<BoardPage />} />
          {auth.status === UserStatus.Admin && <Route path='/userList' element={<UserList />} />}
        </>
      ) : (
        <>
          <Route path='/login' element={<AuthLogin />} />
          <Route path='/join' element={<AuthReg />} />
        </>
      )}

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default MainRoute;
