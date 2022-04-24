import { Grid } from "@material-ui/core";
import React from "react";

const PortfolioTable = () => {
  const tableColumns = useMemo(
    () => [
      {
        Header: "Symbol",
        accessor: (properties) => {},
        disableSortBy: true,
      },
      {
        Header: "Symbol Name",
        accessor: (properties) => {},
        disableSortBy: true,
      },
      {
        Header: "Amount",
        accessor: (properties) => {},
        disableSortBy: true,
      },
      {
        Header: "Open Rate",
        accessor: (proprties) => {},
        disableSortBy: true,
      },
      {
        Header: "Current Rate",
        accessor: (properties) => {},
        disableSortBy: true,
      },

      {
        Header: "Total Price",
        accessor: (properties) => {},
        disableSortBy: true,
      },
      {
        Header: "Platform",
        accessor: (properties) => {},
        disableSortBy: true,
      },
    ],
    [ratesDict, openPositionsList]
  );

  return (
    <TableView
      columns={tableColumns}
      data={ratesDict && openPositionsList ? openPositionsList : []}
    />
  );
};

export default PortfolioTable;
