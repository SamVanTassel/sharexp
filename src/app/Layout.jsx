import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
 const headline = useSelector((state) => state.users.username);
  return (
    <div id="page">
      <div id="navbar">
        <div id="links">
        <Link to="/">Home</Link>
        <Link to="companies">Companies</Link>
        </div>
        <div id="user">
          <Link to="login">Login</Link>
          {headline}
        <img
          alt="Peter"
          src="https://avatars.dicebear.com/api/big-smile/Peter.svg"
          width="50px"
          height="50px"
        />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
