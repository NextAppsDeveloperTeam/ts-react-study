import UserProvider from "../../../context/UserList/UserList";
import Header from "../../Home/Header/Header";
import React from "react";
import UserList from "../../Home/UserList/UserList";

function User() {
    return (
        <UserProvider>
            <Header />
            <UserList />
        </UserProvider>
    );
}

export default User;