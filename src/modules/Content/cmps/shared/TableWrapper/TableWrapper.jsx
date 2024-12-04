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
          <table
              {...getTableProps()}
              className="react-table"
              style={{
                  width: "100%",
                  tableLayout: "auto", // Меняем на "auto" для автоматической компоновки
              }}
          >
              <thead>
              {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                      {/*<th className="radio-cell-header" style={{width: '10px'}}></th>*/}
                      {headerGroup.headers.map((column, index) => (
                          <th
                              {...column.getHeaderProps()}
                              style={{
                                  width: index === headerGroup.headers.length - 1 ? "auto" : "150px", // Последняя колонка растягивается
                                  minWidth: column.minWidth || "150px",
                                  maxWidth: column.maxWidth || "150px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                              }}
                          >
                              {column.render("Header")}
                              {column.canResize && (
                                  <div {...column.getResizerProps()} className="resizer"/>
                              )}
                          </th>
                      ))}
                  </tr>
              ))}
              </thead>
              <tbody {...getTableBodyProps()}>
              {rows.map((row, rowIndex) => {
                  prepareRow(row);
                  return (
                      <tr
                          {...row.getRowProps()}
                          onClick={() => onRowClick(rowIndex)}
                          className={selectedRow === rowIndex ? "selected-row" : ""}
                      >
                          <td className="radio-cell">
                              {isActive && selectedRow === rowIndex && (
                                  <FaRegSquareCheck className="radio-cell-icon"/>
                              )}
                          </td>
                          {row.cells.map((cell, index) => (
                              <td
                                  {...cell.getCellProps()}
                                  style={{
                                      width: index === row.cells.length - 1 ? "auto" : "150px", // Последняя колонка растягивается
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      whiteSpace: "nowrap",
                                  }}
                              >
                                  {cell.render("Cell")}
                              </td>
                          ))}
                      </tr>
                  );
              })}
              </tbody>
          </table>
      </div>
  );
};

export default TableWrapper;
