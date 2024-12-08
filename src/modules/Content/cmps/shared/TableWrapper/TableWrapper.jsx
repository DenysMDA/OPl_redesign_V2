import React from "react";
import { useTable, useFlexLayout, useResizeColumns } from "react-table";
import "./TableWrapper.scss";
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
                {/* Заголовок таблицы */}
                <thead>
                {headerGroups.map((headerGroup) => {
                    const { key: headerGroupKey, ...headerGroupProps } =
                        headerGroup.getHeaderGroupProps(); // Извлекаем key отдельно

                    return (
                        <tr key={headerGroupKey} {...headerGroupProps}>
                            {headerGroup.headers.map((column, index) => {
                                const { key: columnKey, ...columnProps } =
                                    column.getHeaderProps(); // Извлекаем key отдельно
                                return (
                                    <th
                                        key={columnKey}
                                        {...columnProps}
                                        style={{
                                            width:
                                                index ===
                                                headerGroup.headers.length - 1
                                                    ? "auto"
                                                    : "150px",
                                            minWidth:
                                                column.minWidth || "150px",
                                            maxWidth:
                                                column.maxWidth || "150px",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
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

                {/* Тело таблицы */}
                <tbody {...getTableBodyProps()}>
                {rows.map((row, rowIndex) => {
                    prepareRow(row);
                    const { key: rowKey, ...rowProps } = row.getRowProps(); // Извлекаем key отдельно

                    const isSelected =
                        selectedRow === row.original; // Сравниваем с оригинальными данными строки

                    return (
                        <tr
                            key={rowKey}
                            {...rowProps}
                            onClick={() => onRowClick(row.original)}
                            className={
                                isSelected ? "selected-row" : ""
                            }
                        >
                            <td className="radio-cell">
                                {isActive && isSelected && (
                                    <FaRegSquareCheck className="radio-cell-icon" />
                                )}
                            </td>
                            {row.cells.map((cell, index) => {
                                const { key: cellKey, ...cellProps } =
                                    cell.getCellProps(); // Извлекаем key отдельно

                                return (
                                    <td
                                        key={cellKey}
                                        {...cellProps}
                                        style={{
                                            width:
                                                index ===
                                                row.cells.length - 1
                                                    ? "auto"
                                                    : "150px",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
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
