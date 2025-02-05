import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../features/authSlice";
import logo from '../../assets/img/logo-nav.png'; 
import iconHamburger from '../../assets/img/icon-hamburger.svg'; 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    
    <section className="hero is-fullheight is-fullwidth">
      {/* Navbar */}
      <nav className="h-22 overflow-hidden" style={{ backgroundColor: '#001F3F' }} >
        <div className="px-6 container mx-auto flex items-center justify-between landing-navbar">
          <a href="/" className="w-25">
            <img src={logo} alt="Logo" className="h-18 w-auto" /> 
          </a>
          <div className="hidden md:inline space-x-6 font-semibold">
              <a
                href="/"
                style={{ color: 'white' }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
              >
                Beranda
              </a>
              <a
                href="/daftar-materi"
                style={{ color: 'white' }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
              >
                Materi
              </a>
              <a
                href="/informasi"
                style={{ color: 'white' }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
              >
                Informasi
              </a>
            </div>
          <p
                  className="hidden md:inline px-4 py-2 rounded-3xl font-semibold"
                  
                >
                  
                </p>
          <img src={iconHamburger} className="hamburger md:hidden" alt="Menu" />
        </div>

        {/* Nav Mobile */}
        <div className="menu absolute container hidden flex-col bg-white shadow-md inset-x-0 mx-auto px-6 py-5">

          <a className="text-black hover:text-red-500" href="#">Beranda</a>
          <a className="text-black hover:text-red-500" href="#">Materi</a>
          <a className="text-black hover:text-red-500" href="#">Informasi</a>
          <p className="block w-full text-white px-4 py-2 rounded-3xl mt-4" style={{ backgroundColor: '#001F3F' }}>
          
        </p>

        </div>
      </nav>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={Auth} className="box">
                {isError && <p className="has-text-centered">{message}</p>}
                <h1 className="title is-2">Sign In</h1>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="******"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;