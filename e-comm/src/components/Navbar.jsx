import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 py-2 flex px-8 items-center gap-5">
      <img
        className="w-12"
        src="https://tse2.mm.bing.net/th/id/OIP.G9wTBnUiVfNjJBdt2nzzGAAAAA?pid=Api&P=0&h=180"
        alt=""
      />
      <div className="text-2xl flex font-bold   gap-7">
        <Menu to={"/"} title={"Home"} />
        <Menu to={"/products"} title={"Products"} />
      </div>
    </div>
  );
};

const Menu = ({ to, title }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "text-[tomato]" : "")}
      to={to}
    >
      {title}
    </NavLink>
  );
};

export default Navbar;
