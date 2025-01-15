import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthStore from "../auth/AuthStore.jsx";

const Navbar = () => {
  let { user, LogoutUser } = useContext(AuthStore);
  return (
    <nav className="navbar navbar-expand-lg bg-dark  navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Навигационная панель
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {user === null ? (
                <Link to="register" className="nav-link active">
                  Зарегистрироваться
                </Link>
              ) : null}
            </li>
            <li className="nav-item">
              {user === null ? (
                <Link to="login" className="nav-link active">
                  Войти
                </Link>
              ) : null}
            </li>
            <li className="nav-item">
              {user ? (
                <a className="nav-link active" onClick={LogoutUser}>
                  Выйти
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
