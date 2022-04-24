import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[100px] w-screen bg-blue-600 rounded-b-xl flex items-center px-5">
      <div className="text-white text-xl h-[40px] border-2 rounded-md px-5 py-2 flex items-center ml-3 cursor-pointer">
        New Asset
      </div>
      <div>Total P/L:</div>
    </div>
  );
};

export default Header;
