import './init';

import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { UserContextProvider } from './context';
import { Header } from './component';

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
