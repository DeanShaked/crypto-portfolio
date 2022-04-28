// App
import React, { useEffect } from "react";
import PropTypes from "prop-types";

// Material UI Table components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@material-ui/core";

// React Table Hooks
import { useFilters, useSortBy, useTable } from "react-table";

import "./TableView.scss";

const TableView = ({ columns, data }) => {
  const isTableSorted = () => {
    return null;
  };

  const table = useTable(
    {
      columns,
      data,
      defaultColumn: {},
    },
    useFilters,
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  if (data.length === 0) {
    return <></>; // Insert skeleton here
  }

  return (
    <div className="open-positions-table">
      <TableContainer className="open-positions-table-container">
        <Table stickyHeader {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup, idx) => (
              <TableRow key={idx}>
                {headerGroup.headers.map((column, index) => (
                  <TableCell
                    className="open-positions-table-header-cell"
                    key={index}
                    {...column.getHeaderProps()}
                  >
                    <div {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      <span className="open-positions-table-sorting-buttons">
                        {" "}
                        {isTableSorted(column)}
                      </span>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow
                  key={i}
                  {...row.getRowProps({})}
                  className="open-positions-table-row"
                >
                  {row.cells.map((cell, rowKeyIndex) => {
                    return (
                      <TableCell
                        className="open-positions-table-body-cell"
                        key={rowKeyIndex}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

TableView.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.any,
};

export default TableView;
