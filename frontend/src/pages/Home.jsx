import React, { useEffect, useState, useContext } from "react";
import AuthStore from "../auth/AuthStore.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  let { user } = useContext(AuthStore);
  return (
    <div>
      {user ? (
        <span>
          <p className="user_name">Hello {user.username}</p>
        </span>
      ) : (
        <p className="user_name">User is not Found</p>
      )}
    </div>
  );
};

export default Home;
