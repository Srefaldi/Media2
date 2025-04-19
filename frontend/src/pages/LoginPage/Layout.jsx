import React from "react";
import Navbar from "../../components/Landing/NavbarLogin/NavbarLogin";
import Sidebar from "../../components/LoginPage/Sidebar";
import Footer from "../../components/Landing/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="mt-1 columns" style={{ minHeight: "100vh" }}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
