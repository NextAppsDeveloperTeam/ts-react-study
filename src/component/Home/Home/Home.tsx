import React from 'react';
import Header from "../Header/Header";
import UserProvider from "../../../context/UserList/UserList";

function App() {
    return (
        <UserProvider>
            <Header />
        </UserProvider>
    );
}

export default App;