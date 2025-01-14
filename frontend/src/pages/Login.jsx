import React, { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Authcontext from "../auth/Authcontext";

const Login = (e) => {
  let { LoginUser } = useContext(Authcontext);

  return (
    <div className="form-signin">
      <form onSubmit={LoginUser}>
        <h1 className="h3 mb-3 fw-normal">Please login in</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="username"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-check text-start my-3"></div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
