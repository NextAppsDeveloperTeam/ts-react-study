import './init';

import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import UserContextProvider from './context/UserContextProvider';
import Header from './component/Common/Header/Header';

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
