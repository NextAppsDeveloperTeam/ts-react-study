import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../component';
import { User } from "../component/Page/User";
import Join from "../component/Page/Join";
import Login from "../component/Page/Login";
import MyPage from "../component/MyPage/MyPage/MyPage";

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/userList' element={<User />} />
      <Route path='/join' element={<Join />} />
      <Route path='/login' element={<Login />} />

      <Route path='/myPage' element={<MyPage />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default routes;
