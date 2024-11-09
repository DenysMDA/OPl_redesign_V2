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
      useFlexLayout, // Используем гибкий макет
      useResizeColumns // Добавляем плагин для изменения ширины колонок
    );

  return (
    <div className="table">
      <div className="table-header">
        <div className="table-hader">
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
          <div className="separator" />
          <div className="table-wrapper">
            <table {...getTableProps()} className="react-table">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    <th className="radio-cell-header"></th>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        style={{
                          ...column.getHeaderProps().style,
                          position: "relative",
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
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
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
// import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Импорт иконок

// const KeyContactsTable = ({
//   title,
//   columns,
//   data,
//   actions,
//   isActive,
//   onTableFocus,
// }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null); // Локальное состояние для выбранной строки

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleRowClick = (rowIndex) => {
//     onTableFocus(); // Уведомляем, что эта таблица стала активной
//     setSelectedRow(rowIndex); // Устанавливаем выбранную строку
//   };

//   // Сбрасываем выбранную строку, если таблица становится неактивной
//   useEffect(() => {
//     if (!isActive) {
//       setSelectedRow(null);
//     }
//   }, [isActive]);

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
//             {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}{" "}
//             {/* Меняющаяся иконка */}
//           </div>
//         </div>

//         {!isCollapsed && ( // Показываем кнопки действий только если таблица развернута
//           <div className="action-buttons">
//             {actions.map((action, index) => (
//               <button key={index} onClick={action.onClick}>
//                 {action.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//       {!isCollapsed && (
//         <>
//           <div className="separator" />
//           <table>
//             <thead>
//               <tr>
//                 <th className="radio-cell-header"></th>{" "}
//                 {/* Заголовок для столбца с радиобатоном */}
//                 {columns.map((col, index) => (
//                   <th key={index}>{col}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((row, rowIndex) => (
//                 <tr
//                   key={rowIndex}
//                   onClick={() => handleRowClick(rowIndex)}
//                   className={selectedRow === rowIndex ? "selected-row" : ""} // Добавляем класс, если строка выбрана
//                 >
//                   <td className="radio-cell">
//                     {" "}
//                     {/* Добавлен класс для фиксированной ширины */}
//                     {isActive &&
//                       selectedRow === rowIndex && ( // Показать радиобатон только если таблица активна и строка выбрана
//                         <input
//                           type="radio"
//                           name={`rowRadio-${title}`} // Уникальное имя для каждой таблицы
//                           checked
//                           readOnly
//                         />
//                       )}
//                   </td>
//                   {columns.map((col, colIndex) => (
//                     <td key={colIndex}>{row[col]}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// };

// export default KeyContactsTable;
