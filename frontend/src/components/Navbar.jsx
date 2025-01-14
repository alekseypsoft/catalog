import { useContext } from "react";
import { Link } from "react-router-dom";
import Authcontext from "../auth/Authcontext";

const Navbar = () => {
  let { user, LogoutUser } = useContext(Authcontext);
  return (
    <nav className="navbar navbar-expand-lg bg-dark  navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {user === null ? (
                <Link to="register" className="nav-link active">
                  Register
                </Link>
              ) : null}
            </li>
            <li className="nav-item">
              {user === null ? (
                <Link to="login" className="nav-link active">
                  Login
                </Link>
              ) : null}
            </li>
            <li className="nav-item">
              {user ? (
                <a className="nav-link active" onClick={LogoutUser}>
                  LogOut
                </a>
              ) : null}
            </li>
          </ul>
          <form className="d-flex" role="search"></form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
