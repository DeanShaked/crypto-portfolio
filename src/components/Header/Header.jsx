import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[100px] w-screen bg-blue-600 rounded-b-xl flex flex-row items-center px-5 justify-around">
      <div className="text-white text-3xl">Home</div>
      <div className="flex flex-row justify-around">
        <div className="text-white text-xl px-5">Dashboard</div>
        <div className="text-white text-xl px-5">New Asset</div>
      </div>
      <div className="text-white text-xl border-2 rounded-md px-5 py-2 ml-3">
        Login
      </div>
    </div>
  );
};

export default Header;
