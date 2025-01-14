import React, { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Authcontext from "../auth/Authcontext";

const Register = (e) => {
  let { LoginUser, RegisterUser } = useContext(Authcontext);

  return (
    <div className="form-signin">
      <form onSubmit={RegisterUser}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Create your username"
            name="username"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="enter your email"
            name="email"
          />
          <label htmlFor="floatingEmail">Email</label>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
