
import React, { useState, useEffect } from "react";
import { useTable, useResizeColumns, useFlexLayout } from "react-table";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const KeyContactsTable = ({
                              title,
                              columns,
                              data,
                              actions,
                              isActive,
                              onTableFocus,
                          }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleRowClick = (rowIndex) => {
        onTableFocus();
        setSelectedRow(rowIndex);
    };

    useEffect(() => {
        if (!isActive) {
            setSelectedRow(null);
        }
    }, [isActive]);

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
        <div className="table">
            <div className="table-header-wrapper">
                <div className="table-header">
                    <h2>{title}</h2>
                    <div
                        className="icon-container"
                        onClick={toggleCollapse}
                        style={{ cursor: "pointer" }}
                    >
                        {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
                    </div>
                </div>

                {!isCollapsed && (
                    <div className="action-buttons">
                        {actions.map((action, index) => (
                            <button key={index} onClick={action.onClick}>
                                {action.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {!isCollapsed && (
                <>
                    {/*<div className="separator" />*/}
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
                                                        minWidth: column.minWidth || "100px", // Минимальная ширина
                                                        maxWidth: column.maxWidth || "200px", // Максимальная ширина
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
                                        onClick={() => handleRowClick(rowIndex)}
                                        className={selectedRow === rowIndex ? "selected-row" : ""}
                                    >
                                        <td className="radio-cell">
                                            {isActive && selectedRow === rowIndex && (
                                                <input
                                                    type="radio"
                                                    name={`rowRadio-${title}`}
                                                    checked
                                                    readOnly
                                                />
                                            )}
                                        </td>
                                        {row.cells.map((cell) => {
                                            const { key: cellKey, ...cellRest } = cell.getCellProps();
                                            return <td key={cellKey} {...cellRest}>{cell.render("Cell")}</td>;
                                        })}
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default KeyContactsTable;







// import React, { useState, useEffect } from "react";
// import { useTable, useResizeColumns, useFlexLayout } from "react-table";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
//
// const KeyContactsTable = ({
//                               title,
//                               columns,
//                               data,
//                               actions,
//                               isActive,
//                               onTableFocus,
//                           }) => {
//     const [isCollapsed, setIsCollapsed] = useState(false);
//     const [selectedRow, setSelectedRow] = useState(null);
//
//     const toggleCollapse = () => {
//         setIsCollapsed(!isCollapsed);
//     };
//
//     const handleRowClick = (rowIndex) => {
//         onTableFocus();
//         setSelectedRow(rowIndex);
//     };
//
//     useEffect(() => {
//         if (!isActive) {
//             setSelectedRow(null);
//         }
//     }, [isActive]);
//
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
//         <div className="table">
//             <div className="table-header">
//                 <div className="table-hader">
//                     <h2>{title}</h2>
//                     <div
//                         className="icon-container"
//                         onClick={toggleCollapse}
//                         style={{ cursor: "pointer" }}
//                     >
//                         {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
//                     </div>
//                 </div>
//
//                 {!isCollapsed && (
//                     <div className="action-buttons">
//                         {actions.map((action, index) => (
//                             <button key={index} onClick={action.onClick}>
//                                 {action.label}
//                             </button>
//                         ))}
//                     </div>
//                 )}
//             </div>
//
//             {!isCollapsed && (
//                 <>
//                     <div className="separator" />
//                     <div className="table-wrapper">
//                         <table {...getTableProps()} className="react-table">
//                             <thead>
//                             {headerGroups.map((headerGroup) => {
//                                 // Извлечение `key` из props для <tr> (Строка 51)
//                                 const { key, ...rest } = headerGroup.getHeaderGroupProps();
//                                 return (
//                                     <tr key={key} {...rest}>
//                                         <th className="radio-cell-header"></th>
//                                         {headerGroup.headers.map((column) => {
//                                             // Извлечение `key` из props для <th> (Строка 57)
//                                             const { key: colKey, ...colRest } = column.getHeaderProps();
//                                             return (
//                                                 <th key={colKey} {...colRest} style={{ position: "relative" }}>
//                                                     {column.render("Header")}
//                                                     {column.canResize && (
//                                                         <div
//                                                             {...column.getResizerProps()}
//                                                             className="resizer"
//                                                         />
//                                                     )}
//                                                 </th>
//                                             );
//                                         })}
//                                     </tr>
//                                 );
//                             })}
//                             </thead>
//                             <tbody {...getTableBodyProps()}>
//                             {rows.map((row, rowIndex) => {
//                                 prepareRow(row);
//                                 // Извлечение `key` из props для <tr> (Строка 73)
//                                 const { key, ...rest } = row.getRowProps();
//                                 return (
//                                     <tr
//                                         key={key}
//                                         {...rest}
//                                         onClick={() => handleRowClick(rowIndex)}
//                                         className={selectedRow === rowIndex ? "selected-row" : ""}
//                                     >
//                                         <td className="radio-cell">
//                                             {isActive && selectedRow === rowIndex && (
//                                                 <input
//                                                     type="radio"
//                                                     name={`rowRadio-${title}`}
//                                                     checked
//                                                     readOnly
//                                                 />
//                                             )}
//                                         </td>
//                                         {row.cells.map((cell) => {
//                                             // Извлечение `key` из props для <td> (Строка 85)
//                                             const { key: cellKey, ...cellRest } = cell.getCellProps();
//                                             return <td key={cellKey} {...cellRest}>{cell.render("Cell")}</td>;
//                                         })}
//                                     </tr>
//                                 );
//                             })}
//                             </tbody>
//                         </table>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };
//
// export default KeyContactsTable;

//
// import React, { useState, useEffect } from "react";
// import { useTable, useResizeColumns, useFlexLayout } from "react-table";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
//
// const KeyContactsTable = ({
//   title,
//   columns,
//   data,
//   actions,
//   isActive,
//   onTableFocus,
// }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);
//
//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };
//
//   const handleRowClick = (rowIndex) => {
//     onTableFocus();
//     setSelectedRow(rowIndex);
//   };
//
//   useEffect(() => {
//     if (!isActive) {
//       setSelectedRow(null);
//     }
//   }, [isActive]);
//
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable(
//       {
//         columns,
//         data,
//       },
//       useFlexLayout, // Используем гибкий макет
//       useResizeColumns // Добавляем плагин для изменения ширины колонок
//     );
//
//   return (
//     <div className="table">
//       <div className="table-header">
//         <div className="table-hader">
//           <h2>{title}</h2>
//           <div
//             className="icon-container"
//             onClick={toggleCollapse}
//             style={{ cursor: "pointer" }}
//           >
//             {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
//           </div>
//         </div>
//
//         {!isCollapsed && (
//           <div className="action-buttons">
//             {actions.map((action, index) => (
//               <button key={index} onClick={action.onClick}>
//                 {action.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//
//       {!isCollapsed && (
//         <>
//           <div className="separator" />
//           <div className="table-wrapper">
//             <table {...getTableProps()} className="react-table">
//               <thead>
//                 {headerGroups.map((headerGroup) => (
//                   <tr {...headerGroup.getHeaderGroupProps()}>
//                     <th className="radio-cell-header"></th>
//                     {headerGroup.headers.map((column) => (
//                       <th
//                         {...column.getHeaderProps()}
//                         style={{
//                           ...column.getHeaderProps().style,
//                           position: "relative",
//                         }}
//                       >
//                         {column.render("Header")}
//                         {column.canResize && (
//                           <div
//                             {...column.getResizerProps()}
//                             className="resizer"
//                           />
//                         )}
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody {...getTableBodyProps()}>
//                 {rows.map((row, rowIndex) => {
//                   prepareRow(row);
//                   return (
//                     <tr
//                       {...row.getRowProps()}
//                       onClick={() => handleRowClick(rowIndex)}
//                       className={selectedRow === rowIndex ? "selected-row" : ""}
//                     >
//                       <td className="radio-cell">
//                         {isActive && selectedRow === rowIndex && (
//                           <input
//                             type="radio"
//                             name={`rowRadio-${title}`}
//                             checked
//                             readOnly
//                           />
//                         )}
//                       </td>
//                       {row.cells.map((cell) => (
//                         <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                       ))}
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
//
// export default KeyContactsTable;
