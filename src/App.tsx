import './init';

import { BrowserRouter } from 'react-router-dom';
import MainRoute from './router';
import { BoardContextProvider, UserContextProvider } from './context';
import { Header } from './component';

const App = () => {
  return (
    <UserContextProvider>
      <BoardContextProvider>
        <BrowserRouter>
          <Header />
          <MainRoute />
        </BrowserRouter>
      </BoardContextProvider>
    </UserContextProvider>
  );
};

export default App;
