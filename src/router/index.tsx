import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../component';

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default routes;
