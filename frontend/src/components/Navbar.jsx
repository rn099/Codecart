import React from "react";
import logo from "../assets/cc-logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={logo} className="w-36" alt="logo" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
