import React, { useState } from "react";
import logo from "../assets/cc-logo.png";
import search_icon from "../assets/search-icon.png";
import user_icon from "../assets/user-icon.png";
import cart_icon from "../assets/cart-icon.png";
import menu_icon from "../assets/menu-icon.png";
import drop_icon from "../assets/dropdown-icon.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={logo} className="w-36" alt="logo" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          HOME
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/products" className="flex flex-col items-center gap-1">
          PRODUCTS
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          ABOUT
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          CONTACT US
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={search_icon}
          className="w-5 cursor-pointer"
          alt="search-icon"
        />
        <div className="group relative">
          <img src={user_icon} alt="user-icon" className="w-5 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">LogOut</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative">
          <img src={cart_icon} alt="cart-icon" className="w-5 cursor-pointer" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => {
            setVisible(true);
          }}
          src={menu_icon}
          alt="menu-icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Added the div for mobile dropdown screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => {
              setVisible(false);
            }}
            className="flex items-center gap-4 p-3"
          >
            <img
              src={drop_icon}
              alt="dropdown-icon"
              className="h-4 rotate-90 cursor-pointer"
            />
            <p className="cursor-pointer">Back</p>
          </div>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-5 p1-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-5 p1-6 border"
            to="/products"
          >
            PRODUCTS
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-5 p1-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-5 p1-6 border"
            to="/contact"
          >
            CONTACT US
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
