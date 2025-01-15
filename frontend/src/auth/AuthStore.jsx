import {createContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";

import React from "react";
import {useNavigate} from "react-router-dom";

const AuthStore = createContext();
export default AuthStore;

const Url = "http://127.0.0.1:8000";

export const AuthProvider = ({children}) => {
    let Navigate = useNavigate();
    let [user, setUser] = useState(
        localStorage.getItem("authToken")
            ? jwtDecode(localStorage.getItem("authToken"))
            : null
    );
    let [authToken, setAuthToken] = useState(() =>
        localStorage.getItem("authToken")
            ? JSON.parse(localStorage.getItem("authToken"))
            : null
    );
    let [loading, setLoading] = useState(true);

    let RegisterUser = async (e) => {
        e.preventDefault();

        let response = await fetch(`${Url}/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: e.target.email.value,
                username: e.target.username.value,
                password: e.target.password.value,
            }),
        });

        let data = await response.json();
        console.log(data);

        if (response.status === 201) {
            Navigate("login");
        } else {
            alert("Not register something Wrong..!");
        }
    };

    let LoginUser = async (e) => {
        e.preventDefault();

        let response = await fetch(`${Url}/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: e.target.password.value,
                username: e.target.username.value,
            }),
        });

        let data = await response.json();
        console.log(data);

        if (response.status === 200) {
            console.log(data);
            setAuthToken(data.tokens);
            setUser(jwtDecode(data.tokens.access));
            localStorage.setItem("authToken", JSON.stringify(data));
            Navigate("/");
        } else {
            alert("wrong");
        }
    };

    let LogoutUser = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem("authToken");
        Navigate("/");
    };

    let updateToken = async () => {
        console.log("updating");
        let response = await fetch(`${Url}/token/refresh/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refresh: authToken.refresh,
            }),
        });

        let data = await response.json();

        if (response.status === 200) {
            setAuthToken(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem("authToken", JSON.stringify(data));
        } else {
            LogoutUser();
        }
    };

    useEffect(() => {
        let interval = setInterval(() => {
            if (authToken) {
                updateToken();
            }
        }, 5000 * 5 * 60);
        return () => clearInterval(interval);
    }, [authToken, loading]);

    let ContextData = {
        LoginUser: LoginUser,
        LogoutUser: LogoutUser,
        RegisterUser: RegisterUser,
        user: user,
    };

    return (
        <AuthStore.Provider value={ContextData}>{children}</AuthStore.Provider>
    );
};
