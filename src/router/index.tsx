import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, MyPage, UserList, AuthLogin, AuthReg, MyPwdChange, MyDelete } from '../component';

const MainRoute = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />

        <>
          <Route path='/myPage' element={<MyPage />} />
          <Route path='/myPwdChange' element={<MyPwdChange />} />
          <Route path='/myDelete' element={<MyDelete />} />
          <Route path='/userList' element={<UserList />} />
        </>
        <>
          <Route path='/login' element={<AuthLogin />} />
          <Route path='/join' element={<AuthReg />} />
        </>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default MainRoute;
