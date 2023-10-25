import './init';

import { BrowserRouter } from 'react-router-dom';
import MainRoute from './router';
import { UserContextProvider } from './context';
import { Header } from './component';

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <MainRoute />
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
