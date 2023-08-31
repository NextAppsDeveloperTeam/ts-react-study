import UserProvider from "../../../context/UserList/UserList";
import Header from "../../Home/Header/Header";
import React from "react";
import LoginUser from "../../Home/LoginUser/LoginUser";

function Login() {
    return (
        <UserProvider>
            <Header />
            <LoginUser />
        </UserProvider>
    );
}

export default Login;