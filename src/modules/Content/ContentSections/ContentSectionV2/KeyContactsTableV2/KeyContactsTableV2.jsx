import React, {useState, useEffect} from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import "./KeyContactsTableV2.scss";
import TableWrapper from "../../../cmps/shared/TableWrapper/TableWrapper";
import ActionButtons from "../../../cmps/shared/ActionButtons/ActionButtons";
import ActionButtonsV2 from "../ActionButtonsV2/ActionButtonsV2";

const KeyContactsTableV2 = ({
                                title,
                                columns,
                                data,
                                actions,
                                isActive,
                                onTableFocus,
                                areTablesCollapsed,
                                isSearchable,
                            }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [filteredData, setFilteredData] = useState(data); // Состояние для фильтрованных данных
    const [activeFilter, setActiveFilter] = useState("All"); // Состояние для активной кнопки

    const toggleCollapse = () => {
        setIsCollapsed((prev) => !prev);
    };

    const handleRowClick = (rowIndex) => {
        onTableFocus();
        setSelectedRow(rowIndex);
    };

    const handleFilter = (state) => {
        setActiveFilter(state); // Устанавливаем активный фильтр
        if (state === "All") {
            setFilteredData(data); // Показываем все данные
        } else {
            setFilteredData(data.filter((item) => item.State === state)); // Фильтруем по State
        }
    };

    const getCountByState = (state) => {
        if (state === "All") return data.length;
        return data.filter((item) => item.State === state).length;
    };

    useEffect(() => {
        if (!isActive) {
            setSelectedRow(null);
        }
    }, [isActive]);

    useEffect(() => {
        setIsCollapsed(areTablesCollapsed);
    }, [areTablesCollapsed]);

    return (
        <div className="table">
            <div className="table-header-wrapper">
                <div className="table-header">
                    <div className="header-title">
                        <h2>{title}</h2>
                    </div>

                    <div className="icon-container-wrapper">
                        <div
                            className="icon-container"
                            onClick={toggleCollapse}
                            style={{ cursor: "pointer" }}
                        >
                            {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
                        </div>
                    </div>
                </div>

                {!isCollapsed && (
                    <ActionButtonsV2 actions={actions} isSearchable={isSearchable} />
                )}
            </div>

            {!isCollapsed && (
                <>
                    {/* Панель фильтров */}
                    <div className="table-filter-panel">
                        <button
                            onClick={() => handleFilter("All")}
                            className={`filter-btn ${activeFilter === "All" ? "active" : ""}`}
                        >
                            All
                            <div className="filter-count">{getCountByState("All")}</div>
                        </button>
                        <button
                            onClick={() => handleFilter("Active")}
                            className={`filter-btn ${
                                activeFilter === "Active" ? "active" : ""
                            }`}
                        >
                            Active
                            <div className="filter-count">{getCountByState("Active")}</div>
                        </button>
                        <button
                            onClick={() => handleFilter("PrivatePreview")}
                            className={`filter-btn ${
                                activeFilter === "PrivatePreview" ? "active" : ""
                            }`}
                        >
                            PrivatePreview
                            <div className="filter-count">
                                {getCountByState("PrivatePreview")}
                            </div>
                        </button>
                        <button
                            onClick={() => handleFilter("Blocked")}
                            className={`filter-btn ${
                                activeFilter === "Blocked" ? "active" : ""
                            }`}
                        >
                            Blocked
                            <div className="filter-count">{getCountByState("Blocked")}</div>
                        </button>
                        <button
                            onClick={() => handleFilter("PublicPreview")}
                            className={`filter-btn ${
                                activeFilter === "PublicPreview" ? "active" : ""
                            }`}
                        >
                            PublicPreview
                            <div className="filter-count">
                                {getCountByState("PublicPreview")}
                            </div>
                        </button>
                    </div>

                    {/* Проверка на пустой массив */}
                    {filteredData.length === 0 ? (
                        <div className="no-data">No Data</div>
                    ) : (
                        <TableWrapper
                            columns={columns}
                            data={filteredData} // Передаем отфильтрованные данные
                            onRowClick={handleRowClick}
                            selectedRow={selectedRow}
                            isActive={isActive}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default KeyContactsTableV2;

// const KeyContactsTableV2 = ({
//                               title,
//                               columns,
//                               data,
//                               actions,
//                               isActive,
//                               onTableFocus,
//                               areTablesCollapsed,
//                               isSearchable,
//                           }) => {
//     const [isCollapsed, setIsCollapsed] = useState(false);
//     const [selectedRow, setSelectedRow] = useState(null);
//
//     const toggleCollapse = () => {
//         setIsCollapsed((prev) => !prev);
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
//     useEffect(() => {
//         setIsCollapsed(areTablesCollapsed);
//     }, [areTablesCollapsed]);
//
//     return (
//         <div className="table">
//             <div className="table-header-wrapper">
//                 <div className="table-header">
//                     <div className="header-title">
//                         <div className="header-title-separator"></div>
//                         <h2>{title}</h2>
//                     </div>
//
//                     <div className="icon-container-wrapper">
//                         {/*<div>Items: {data.length}</div>*/}
//                         <div
//                             className="icon-container"
//                             onClick={toggleCollapse}
//                             style={{ cursor: "pointer" }}
//                         >
//                             {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
//                         </div>
//                     </div>
//                 </div>
//
//                 {!isCollapsed && (
//                     <ActionButtonsV2 actions={actions} isSearchable={isSearchable} />
//                 )}
//             </div>
//
//             {!isCollapsed && (
//                 <>
//                     <div className='table-filter-panel'>
//
//                     </div>
//                     <TableWrapper
//                         columns={columns}
//                         data={data}
//                         onRowClick={handleRowClick}
//                         selectedRow={selectedRow}
//                         isActive={isActive}
//                     />
//                 </>
//
//             )}
//         </div>
//     );
// };
//
// export default KeyContactsTableV2;
//
//
