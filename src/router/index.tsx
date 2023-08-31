import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../component';
import { User } from "../component/Login/User";
import Join from "../component/Login/Join";
import Login from "../component/Login/Login";

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/userList' element={<User />} />
      <Route path='/join' element={<Join />} />
      <Route path='/login' element={<Login />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default routes;
