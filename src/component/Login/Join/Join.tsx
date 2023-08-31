import UserProvider from "../../../context/UserList/UserList";
import Header from "../../Home/Header/Header";
import React from "react";
import AddUser from "../../Home/AddUser/AddUser";

function Join() {
    return (
        <UserProvider>
            <Header />
            <AddUser />
        </UserProvider>
    );
}

export default Join;