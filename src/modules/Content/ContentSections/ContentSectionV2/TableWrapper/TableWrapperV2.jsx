import React from "react";
import { useTable, useFlexLayout, useResizeColumns } from "react-table";
import "./TableWrapperV2.scss";
import { FaRegSquareCheck } from "react-icons/fa6";

const TableWrapperV2 = ({ columns, data, onRowClick, selectedRow, isActive }) => {
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
        <div className="table-wrapper table-wrapper-v2">
            <table
                {...getTableProps()}
                className="react-table"
                style={{
                    width: "100%",
                    tableLayout: "auto",
                }}
            >
                {/* Заголовок таблицы */}
                <thead>
                {headerGroups.map((headerGroup) => {
                    const { key: headerGroupKey, ...headerGroupProps } =
                        headerGroup.getHeaderGroupProps();

                    return (
                        <tr key={headerGroupKey} {...headerGroupProps}>
                            {headerGroup.headers.map((column, index) => {
                                const { key: columnKey, ...columnProps } =
                                    column.getHeaderProps();

                                // Определяем ширину для Website
                                const columnWidth =
                                    column.id === "Website"
                                        ? "200px"
                                        : index === headerGroup.headers.length - 1
                                            ? "auto"
                                            : "150px";

                                return (
                                    <th
                                        key={columnKey}
                                        {...columnProps}
                                        style={{
                                            width: columnWidth,
                                            minWidth: column.minWidth || "150px",
                                            maxWidth: column.maxWidth || "150px",
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
                {rows.map((row) => {
                    prepareRow(row);
                    const { key: rowKey, ...rowProps } = row.getRowProps();

                    const isSelected = selectedRow === row.original;

                    return (
                        <tr
                            key={rowKey}
                            {...rowProps}
                            onClick={() => onRowClick(row.original)}
                            className={isSelected ? "selected-row" : ""}
                        >
                            <td className="radio-cell">
                                {isActive && isSelected && (
                                    <FaRegSquareCheck className="radio-cell-icon" />
                                )}
                            </td>
                            {row.cells.map((cell, index) => {
                                const { key: cellKey, ...cellProps } = cell.getCellProps();

                                // Оборачивание значений в <span>
                                const cellContent =
                                    cell.column.id === "AudioConference" ||
                                    cell.column.id === "Calling" ? (
                                        <span
                                            className={
                                                cell.value
                                                    ? "audio-conference-true"
                                                    : "audio-conference-false"
                                            }
                                        >
                        {cell.value ? "Available" : "Unavailable"}
                      </span>
                                    ) : cell.column.id === "State" ? (
                                        <span
                                            className={`operator-status-${cell.value.toLowerCase()}`}
                                        >
                        {cell.value}
                      </span>
                                    ) : cell.column.id === "Website" ? (
                                        <span className="website-col">{cell.render("Cell")}</span>
                                    ) : (
                                        <span>{cell.render("Cell")}</span>
                                    );

                                // Определяем ширину для Website
                                const cellWidth =
                                    cell.column.id === "Website"
                                        ? "200px"
                                        : index === row.cells.length - 1
                                            ? "auto"
                                            : "150px";

                                return (
                                    <td
                                        key={cellKey}
                                        {...cellProps}
                                        style={{
                                            width: cellWidth,
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {cellContent}
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

export default TableWrapperV2;

// const TableWrapperV2 = ({ columns, data, onRowClick, selectedRow, isActive }) => {
//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//         useTable(
//             {
//                 columns,
//                 data,
//             },
//             useFlexLayout,
//             useResizeColumns
//         );
//
//     return (
//         <div className="table-wrapper table-wrapper-v2">
//             <table
//                 {...getTableProps()}
//                 className="react-table"
//                 style={{
//                     width: "100%",
//                     tableLayout: "auto",
//                 }}
//             >
//                 {/* Заголовок таблицы */}
//                 <thead>
//                 {headerGroups.map((headerGroup) => {
//                     const { key: headerGroupKey, ...headerGroupProps } =
//                         headerGroup.getHeaderGroupProps();
//
//                     return (
//                         <tr key={headerGroupKey} {...headerGroupProps}>
//                             {headerGroup.headers.map((column, index) => {
//                                 const { key: columnKey, ...columnProps } =
//                                     column.getHeaderProps();
//
//                                 return (
//                                     <th
//                                         key={columnKey}
//                                         {...columnProps}
//                                         style={{
//                                             width:
//                                                 index === headerGroup.headers.length - 1
//                                                     ? "auto"
//                                                     : "150px",
//                                             minWidth: column.minWidth || "150px",
//                                             maxWidth: column.maxWidth || "150px",
//                                             overflow: "hidden",
//                                             textOverflow: "ellipsis",
//                                             whiteSpace: "nowrap",
//                                         }}
//                                     >
//                                         {column.render("Header")}
//                                         {column.canResize && (
//                                             <div
//                                                 {...column.getResizerProps()}
//                                                 className="resizer"
//                                             />
//                                         )}
//                                     </th>
//                                 );
//                             })}
//                         </tr>
//                     );
//                 })}
//                 </thead>
//
//                 {/* Тело таблицы */}
//                 <tbody {...getTableBodyProps()}>
//                 {rows.map((row, rowIndex) => {
//                     prepareRow(row);
//                     const { key: rowKey, ...rowProps } = row.getRowProps();
//
//                     const isSelected = selectedRow === row.original;
//
//                     return (
//                         <tr
//                             key={rowKey}
//                             {...rowProps}
//                             onClick={() => onRowClick(row.original)}
//                             className={isSelected ? "selected-row" : ""}
//                         >
//                             <td className="radio-cell">
//                                 {isActive && isSelected && (
//                                     <FaRegSquareCheck className="radio-cell-icon" />
//                                 )}
//                             </td>
//                             {row.cells.map((cell, index) => {
//                                 const { key: cellKey, ...cellProps } = cell.getCellProps();
//
//                                 // Вывод значения для AudioConference и Calling
//                                 const cellValue =
//                                     cell.column.id === "AudioConference" ||
//                                     cell.column.id === "Calling" ? (
//                                         <span
//                                             className={
//                                                 cell.value
//                                                     ? "audio-conference-true"
//                                                     : "audio-conference-false"
//                                             }
//                                         >
//                         {cell.value ? "Available" : "Unavailable"}
//                       </span>
//                                     ) : (
//                                         cell.render("Cell")
//                                     );
//
//                                 return (
//                                     <td
//                                         key={cellKey}
//                                         {...cellProps}
//                                         style={{
//                                             width:
//                                                 index === row.cells.length - 1
//                                                     ? "auto"
//                                                     : "150px",
//                                             overflow: "hidden",
//                                             textOverflow: "ellipsis",
//                                             whiteSpace: "nowrap",
//                                         }}
//                                     >
//                                         {cellValue}
//                                     </td>
//                                 );
//                             })}
//                         </tr>
//                     );
//                 })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default TableWrapperV2;


