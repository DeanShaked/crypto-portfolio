import React from "react";
import PageRouter from "../PageRouter/PageRouter";

const Header = () => {
  return (
    <div className="h-[100px] w-screen bg-blue-600 rounded-b-xl flex items-center px-5">
      <PageRouter />
    </div>
  );
};

export default Header;
