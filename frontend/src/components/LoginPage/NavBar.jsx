import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo-nav.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <nav
        style={{ backgroundColor: "#001F3F" }}
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <a href="/" className="w-25">
              <img src={logo} alt="Logo" className="h-30 w-30" />
            </a>
          </NavLink>

          <a
            href="!#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
