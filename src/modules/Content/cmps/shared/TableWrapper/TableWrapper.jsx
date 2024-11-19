// TableWrapper.js
import React from "react";
import { useTable, useFlexLayout, useResizeColumns } from "react-table";
import "./TableWrapper.scss"; // Подключаем стили для компонента
import { FaRegSquareCheck } from "react-icons/fa6";

const TableWrapper = ({ columns, data, onRowClick, selectedRow, isActive }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useFlexLayout,
      useResizeColumns
    );

  return (
    <div className="table-wrapper">
      <table {...getTableProps()} className="react-table">
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...rest } = headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...rest}>
                <th className="radio-cell-header"></th>
                {headerGroup.headers.map((column) => {
                  const { key: colKey, ...colRest } = column.getHeaderProps();
                  return (
                    <th
                      key={colKey}
                      {...colRest}
                      style={{
                        ...column.getHeaderProps().style,
                        position: "relative",
                        minWidth: column.minWidth || "100px",
                        maxWidth: column.maxWidth || "200px",
                      }}
                    >
                      {column.render("Header")}
                      {column.canResize && (
                        <div
                          {...column.getResizerProps()}
                          className="resizer"
                        />
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            const { key, ...rest } = row.getRowProps();
            return (
              <tr
                key={key}
                {...rest}
                onClick={() => onRowClick(rowIndex)}
                className={selectedRow === rowIndex ? "selected-row" : ""}
              >
                <td className="radio-cell">
                  {isActive && selectedRow === rowIndex && (
                    <FaRegSquareCheck className="radio-cell-icon" />
                  )}
                </td>
                {row.cells.map((cell) => {
                  const { key: cellKey, ...cellRest } = cell.getCellProps();
                  return (
                    <td key={cellKey} {...cellRest}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableWrapper;
