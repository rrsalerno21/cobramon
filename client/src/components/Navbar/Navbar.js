import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import "./Navbar.css";

// NavLink adds "active" to className when path matches.

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const links = [<BrandLink key="/" to="/" />];

  // if (isLoggedIn) {
  //   links.push(
  //     <NavLink key="profile" className="nav-item" to="/profile">
  //       Profile
  //     </NavLink>
  //   );
  //   links.push(
  //     <span key="lougout" className="nav-item" onClick={logout}>
  //       Logout
  //     </span>
  //   );
  // } else {
  //   links.push(
  //     <NavLink key="signup" className="nav-item" to="/signup">
  //       Sign Up
  //     </NavLink>
  //   );
  //   links.push(
  //     <NavLink key="login" className="nav-item" to="/login">
  //       Login
  //     </NavLink>
  //   );
  // }

  // ********TODO: ADD IF STATEMENT BACK 
    links.push(
      <NavLink key="profile" className="nav-item" to="/profile">
        Profile
      </NavLink>
    );
        links.push(
      <span key="lougout" className="nav-item" onClick={logout}>
        Logout
      </span>
    );
      links.push(
      <NavLink key="login" className="nav-item" to="/login">
        Login
      </NavLink>
    );
      links.push(
      <NavLink key="signup" className="nav-item" to="/signup">
        Sign Up
      </NavLink>
    );
    links.push(
      <NavLink key="chat" className="nav-item" to="/chat">
        Chat
      </NavLink>
    );
    links.push(
      <NavLink key="tables" className="nav-item" to="/tables">
        Tables
      </NavLink>
    );
    links.push(
      <NavLink key="qrcodes" className="nav-item" to="/qrcodes">
        QRCs
      </NavLink>
    );
    links.push(
      <NavLink key="reviews" className="nav-item" to="/reviews">
        Reviews
      </NavLink>
    );
    links.push(
      <NavLink key="welcome" className="nav-item" to="/welcome">
        Welcome
      </NavLink>
    );
    links.push(
      <NavLink key="customerchat" className="nav-item" to="/customerchat">
        Customer Chat
      </NavLink>
    );
    links.push(
      <NavLink key="customerreview" className="nav-item" to="/customerreview">
        Customer Review
      </NavLink>
    );
    links.push(
      <NavLink key="thankyou" className="nav-item" to="/thankyou">
        Thank You
      </NavLink>
    );
  return <nav className="Navbar">{links}</nav>;
}

function BrandLink(props) {
  return (
    <NavLink className="nav-item brand" exact {...props}>
      React JWT
    </NavLink>
  );
}

export default Navbar;
