// App
import React from "react";
import { Routes, Route } from "react-router-dom";
import { paths } from "@/utils/constants";

// Layout
import Home from "@/layout/Home/Home";

// Components
import MonthlyBudget from "./MonthlyBudget/MonthlyBudget";
import NewAsset from "./NewAsset/NewAsset";
import PortfolioTable from "./TableContainer/PortfolioTable";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />}>
        <Route index element={<PortfolioTable />} />
        <Route path={paths.portfolioPath} element={<PortfolioTable />} />
        <Route path={paths.newAssetPath} element={<NewAsset />} />
        <Route path={paths.monthlyBudgetPath} element={<MonthlyBudget />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
