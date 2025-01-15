import React, { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import AuthStore from "../auth/AuthStore.jsx";

const Register = (e) => {
  let { LoginUser, RegisterUser } = useContext(AuthStore);

  return (
    <div className="form-signin">
      <form onSubmit={RegisterUser}>
        <h1 className="h3 mb-3 fw-normal">Пожалуйста, войдите</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Введите свое имя пользователя"
            name="username"
          />
          <label htmlFor="floatingInput">Пользователь</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="Введите свою почту"
            name="email"
          />
          <label htmlFor="floatingEmail">Почта</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
          />
          <label htmlFor="floatingPassword">Пароль</label>
        </div>
        <div className="form-check text-start my-3"></div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default Register;
