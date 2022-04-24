import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-5">
      <Outlet />
    </div>
  );
};

export default Home;
