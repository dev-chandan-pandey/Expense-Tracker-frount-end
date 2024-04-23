import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="">
      <div className=" flex justify-between p-[30px]  text-[30px] font-bold ">
        <NavLink to="/signup" className=" hover:text-red-600">
          Signup
        </NavLink>
        <NavLink to="/login" className=" hover:text-blue-400">
          Login
        </NavLink>
        <NavLink
          to="/dashboard"
          className="hover:underline hover:text-yellow-600"
        >
          Dashboard
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
