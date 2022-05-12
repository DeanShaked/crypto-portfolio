import React, { useMemo } from "react";
import { returnNumberWithCommas } from "@/utils/helpers";
import { DataMock } from "./DataMock";
import TableView from "./TableView";
import { useDispatch, useSelector } from "react-redux";

const PortfolioTable = () => {
  const positionsList = useSelector((state) => state.tradeSlice.openPositions);

  console.log("positionsList :>> ", positionsList);
  const tableColumns = useMemo(
    () => [
      {
        Header: "Symbol",
        accessor: (properties) => {
          return <p className="">{properties.symbol}</p>;
        },
        disableSortBy: true,
      },
      {
        Header: "Symbol Name",
        accessor: (properties) => {
          return <p className="">{properties.symbolName}</p>;
        },
        disableSortBy: true,
      },
      {
        Header: "Amount",
        accessor: (properties) => {
          return <p className="">{properties.amount}</p>;
        },
        disableSortBy: true,
      },
      {
        Header: "Open Rate",
        accessor: (properties) => {
          return (
            <p className="">{returnNumberWithCommas(properties.openRate)}</p>
          );
        },
        disableSortBy: true,
      },
      {
        Header: "Current Rate",
        accessor: (properties) => {
          return <p className="">{properties.currentRate}</p>;
        },
        disableSortBy: true,
      },

      {
        Header: "Total Price",
        accessor: (properties) => {
          return (
            <p className="">
              {returnNumberWithCommas(properties.amount * properties.openRate)}
            </p>
          );
        },
        disableSortBy: true,
      },
      {
        Header: "Platform",
        accessor: (properties) => {
          return <p className="">{properties.platform}</p>;
        },
        disableSortBy: true,
      },
    ],
    [DataMock]
  );

  return <TableView columns={tableColumns} data={DataMock} />;
};

export default PortfolioTable;
