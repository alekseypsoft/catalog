import React, { useEffect, useState, useContext } from "react";
import Authcontext from "../auth/Authcontext";
import { Link } from "react-router-dom";

const Home = () => {
  let { user } = useContext(Authcontext);
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
