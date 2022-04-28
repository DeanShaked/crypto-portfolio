import React from "react";
import { NavLink } from "react-router-dom";
import { paths } from "../../utils/constants";

const PageRouter = () => {
  return (
    <div className="flex flex-row space-x-5  items-center">
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
  );
};

export default PageRouter;
