import { Routes, Route, Navigate } from 'react-router-dom';
import {Home, MyPage, UserList, AuthLogin, AuthReg} from "../component";


const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/userList' element={<UserList />} />
      <Route path='/join' element={<AuthReg />} />
      <Route path='/login' element={<AuthLogin />} />

      <Route path='/myPage' element={<MyPage />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default routes;
