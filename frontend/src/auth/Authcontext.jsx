import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import React from "react";
import { useNavigate } from "react-router-dom";

const Authcontext = createContext();
export default Authcontext;

export const Authprovider = ({ children }) => {
  let Navigate = useNavigate();
  let [user, setUser] = useState(
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  let [authToken, setAuthtokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [loading, setloading] = useState(true);

  let RegisterUser = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/register/", {
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

    let response = await fetch("http://127.0.0.1:8000/login/", {
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
      setAuthtokens(data.tokens);
      setUser(jwtDecode(data.tokens.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      Navigate("/");
    } else {
      alert("wrong");
    }
  };

  let LogoutUser = () => {
    setAuthtokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    Navigate("/");
  };

  let updateToken = async () => {
    console.log("updating");
    let response = await fetch("http://127.0.0.1:8000/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authToken.refresh,
      }),
    });

    let data = await response.json();
    // console.log(data);
    if (response.status === 200) {
      setAuthtokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      LogoutUser();
    }
  };

  useEffect(() => {
    let min = 5000 * 5 * 60;

    let interval = setInterval(() => {
      if (authToken) {
        updateToken();
      }
    }, min);
    return () => clearInterval(interval);
  }, [authToken, loading]);

  let Contextdata = {
    LoginUser: LoginUser,
    LogoutUser: LogoutUser,
    RegisterUser: RegisterUser,
    user: user,
  };

  return (
    <Authcontext.Provider value={Contextdata}>{children}</Authcontext.Provider>
  );
};
