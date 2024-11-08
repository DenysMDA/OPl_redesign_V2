import React, { useState, useEffect } from 'react';


const KeyContactsTable = ({ title, columns, data, actions, isActive, onTableFocus }) => {
  const [selectedRow, setSelectedRow] = useState(null); // Локальное состояние для выбранной строки

  const handleRowClick = (rowIndex) => {
    onTableFocus(); // Уведомляем, что эта таблица стала активной
    setSelectedRow(rowIndex); // Устанавливаем выбранную строку
  };

  // Сбрасываем выбранную строку, если таблица становится неактивной
  useEffect(() => {
    if (!isActive) {
      setSelectedRow(null);
    }
  }, [isActive]);

  return (
    <div className="table">
      <div className="table-header">
        <h2 style={{ cursor: 'pointer' }}>{title}</h2>
        <div className="action-buttons">
          {actions.map((action, index) => (
            <button key={index} onClick={action.onClick}>
              {action.label}
            </button>
          ))}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th></th> {/* Заголовок для столбца с радиобатоном */}
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} onClick={() => handleRowClick(rowIndex)}>
              <td>
                {selectedRow === rowIndex && ( // Показать радиобатон только для выбранной строки
                  <input
                    type="radio"
                    name={`rowRadio-${title}`} // Уникальное имя для каждой таблицы
                    checked
                    readOnly
                  />
                )}
              </td>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeyContactsTable;


// const KeyContactsTable = ({ title, columns, data, actions, selectedRow, onRowClick }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="table">
//       <div className="table-header">
//         <h2 onClick={toggleCollapse} style={{ cursor: 'pointer' }}>{title}</h2>
//         <div className="action-buttons">
//           {actions.map((action, index) => (
//             <button key={index} onClick={action.onClick}>
//               {action.label}
//             </button>
//           ))}
//         </div>
//       </div>
//       {!isCollapsed && (
//         <table>
//           <thead>
//             <tr>
//               <th></th> {/* Заголовок для столбца с радиобатоном */}
//               {columns.map((col, index) => (
//                 <th key={index}>{col}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, rowIndex) => (
//               <tr key={rowIndex} onClick={() => onRowClick(rowIndex)}>
//                 <td>
//                   {selectedRow === rowIndex && ( // Показать радиобатон только для выбранной строки
//                     <input
//                       type="radio"
//                       name={`rowRadio-${title}`} // Уникальное имя для каждой таблицы
//                       checked
//                       readOnly
//                     />
//                   )}
//                 </td>
//                 {columns.map((col, colIndex) => (
//                   <td key={colIndex}>{row[col]}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default KeyContactsTable;


