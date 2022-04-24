// App
import React from "react";
import { Routes, Route } from "react-router-dom";
import { paths } from "../utils/constants";

// Components
import MonthlyBudget from "./MonthlyBudget/MonthlyBudget";
import NewAsset from "./NewBuy/NewBuy";
import PortfolioTable from "./TableContainer/PortfolioTable";

const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path={paths.homePath} element={<PortfolioTable />} />
      <Route path={paths.monthlyBudget} element={<MonthlyBudget />}>
        <Route index element={<MonthlyBudget />} />
        <Route path={paths.newAsset} element={<NewAsset />} />
        <Route path={paths.monthlyBudget} element={<MonthlyBudget />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
