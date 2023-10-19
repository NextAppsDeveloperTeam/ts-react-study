import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, MyPage, UserList, AuthLogin, AuthReg } from '../component';
import PrivateRoute from '../component/PrivateRouter/PrivateRouter';

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<PrivateRoute authentication={true} />}>
        <Route path='/userList' element={<UserList />} />
      </Route>
      <Route element={<PrivateRoute authentication={false} />}>
        <Route path='/join' element={<AuthReg />} />
        <Route path='/login' element={<AuthLogin />} />
      </Route>

      <Route element={<PrivateRoute authentication={true} />}>
        <Route path='/myPage' element={<MyPage />} />
      </Route>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default routes;
