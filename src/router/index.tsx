import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, MyPage, UserList, AuthLogin, AuthReg } from '../component';
import { useContext } from 'react';
import { UserContext, UserContextValue } from '../context';

const MainRoute = () => {
  const { auth } = useContext(UserContext) as UserContextValue;

  return (
    <Routes>
      <Route path='/' element={<Home />} />

      {auth ? (
        <>
          <Route path='/myPage' element={<MyPage />} />
          <Route path='/userList' element={<UserList />} />
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
