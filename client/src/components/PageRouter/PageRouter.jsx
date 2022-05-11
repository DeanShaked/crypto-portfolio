// App
import React from "react";
import { NavLink } from "react-router-dom";
import { paths } from "@/utils/constants";

// Redux
import { useDispatch } from "react-redux";
import { toggleModal } from "@/store/slicers/appSlice";

const PageRouter = () => {
  const dispatch = useDispatch();

  const toggleLoginModal = () => {
    dispatch(toggleModal("login"));
  };
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-row space-x-5 items-center flex-grow">
        <NavLink
          to={paths.newAssetPath}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-purple"
              : "font-bold text-white hover:text-purple opacity-80 hover:opacity-100 "
          }
        >
          New Asset
        </NavLink>
        <NavLink
          to={paths.monthlyBudgetPath}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-purple"
              : "font-bold text-white hover:text-purple opacity-80 hover:opacity-100 "
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={paths.portfolioPath}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-purple"
              : "font-bold text-white hover:text-purple opacity-80 hover:opacity-100 "
          }
        >
          Portfolio
        </NavLink>
      </div>
      <button
        className="flex text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={toggleLoginModal}
      >
        Login
      </button>
      <button className="flex text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Register
      </button>
    </div>
  );
};

export default PageRouter;
