import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState([false]);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" h-16 bg-indigo-400 w-full flex flex-row  justify-between items-center	 px-2  sticky top-0 z-10">
      <div className="h-full">
        <img src={logo} alt="" className=" h-full " />
      </div>
      <div className="md:hidden" onClick={() => handleIsOpen()}>
        {!isOpen ? (
          <XMarkIcon className="h-6 w-6 text-black-500" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-black-500" />
        )}
      </div>

      <ul
        className={` font-medium${
          isOpen
            ? " hidden md:flex gap-5 duration-0"
            : " duration-500 absolute left-0  top-16 text-indigo-400 text-center  flex flex-col bg-purple-200 w-full"
        }`}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/order">Order Review</NavLink>
        <NavLink to="/invoice">Invoice</NavLink>
        
      </ul>
    </div>
  );
};

export default Navbar;
