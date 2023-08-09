import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, TodoHome, TestHome } from '../component';

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<TestHome />} />
      <Route path='/todo' element={<TodoHome />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default routes;
