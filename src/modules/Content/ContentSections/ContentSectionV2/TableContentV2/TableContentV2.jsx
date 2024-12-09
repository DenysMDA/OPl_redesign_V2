import React, {useState, useEffect} from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import "./TableContentV2.scss";
import TableWrapper from "../../../cmps/shared/TableWrapper/TableWrapper";
import ActionButtons from "../../../cmps/shared/ActionButtons/ActionButtons";
import ActionButtonsV2 from "../ActionButtonsV2/ActionButtonsV2";
import TileWrapper from "../../../cmps/shared/TileWrapper/TileWrapper";
import TableWrapperV2 from "../TableWrapper/TableWrapperV2";

const TableContentV2 = ({
                            title,
                            columns,
                            data,
                            actions,
                            isActive,
                            onTableFocus,
                            areTablesCollapsed,
                            isSearchable,
                            onRowSelect,
                            handleTypeSelect,
                            selectedTileType,
                            selectedItem
                        }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [filteredData, setFilteredData] = useState(data); // Состояние для фильтрованных данных
    const [activeFilter, setActiveFilter] = useState("All"); // Состояние для активной кнопки

    const toggleCollapse = () => {
        setIsCollapsed((prev) => !prev);
    };

    // const handleRowClick = (rowIndex) => {
    //     onTableFocus();
    //     setSelectedRow(rowIndex);
    // };

    const handleRowClick = (rowData) => {
        onTableFocus(); // Фокус на таблице
        setSelectedRow(rowData); // Сохраняем выделенную строку
        if (onRowSelect) {
            onRowSelect(rowData); // Передаём выбранные данные в родительский компонент
        }
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
        <div className="table table-v2">
            <div className="table-header-wrapper">

                <div className="table-header">
                    <div className="header-title">
                        <h2>{title}</h2>
                    </div>

                    <div className="icon-container-wrapper">
                        <div
                            className="icon-container"
                            onClick={toggleCollapse}
                            style={{cursor: "pointer"}}
                        >
                            {isCollapsed ? <FaChevronDown/> : <FaChevronUp/>}
                        </div>
                    </div>
                </div>

                <div className='selected-item-info'>
                    <div className='selected-item-desc'>

                    </div>

                    <div className='selected-item-map'>

                    </div>
                </div>

                {!isCollapsed && (
                    <ActionButtonsV2 actions={actions} isSearchable={isSearchable} handleTypeSelect={handleTypeSelect}/>
                )}
            </div>

            {!isCollapsed && (
                <div className='table-content'>
                    {/* Панель фильтров */}
                    <div className="table-filter-panel">
                        <button
                            onClick={() => handleFilter("All")}
                            className={`filter-btn ${activeFilter === "All" ? "active" : ""}`}
                        >
                            <span>All</span>
                            <div className="filter-count">{getCountByState("All")}</div>
                        </button>
                        <button
                            onClick={() => handleFilter("Active")}
                            className={`filter-btn ${
                                activeFilter === "Active" ? "active" : ""
                            }`}
                        >
                         <span>Active</span>
                            <div className="filter-count">{getCountByState("Active")}</div>
                        </button>
                        <button
                            onClick={() => handleFilter("PrivatePreview")}
                            className={`filter-btn ${
                                activeFilter === "PrivatePreview" ? "active" : ""
                            }`}
                        >
                            <span>Private</span>
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
                            <span>Blocked</span>
                            <div className="filter-count">{getCountByState("Blocked")}</div>
                        </button>
                        <button
                            onClick={() => handleFilter("PublicPreview")}
                            className={`filter-btn ${
                                activeFilter === "PublicPreview" ? "active" : ""
                            }`}
                        >
                            <span>Public</span>
                            <div className="filter-count">
                                {getCountByState("PublicPreview")}
                            </div>
                        </button>
                    </div>

                    {/* Проверка на пустой массив */}
                    {filteredData.length === 0 ? (
                        <div className="table-no-data">No Data</div>
                    ) : (
                        selectedTileType ? (
                            <TileWrapper
                                columns={columns}
                                data={filteredData} // Передаем отфильтрованные данные
                                onTileClick={(item, index) => {
                                    handleRowClick(item); // Обновляем выбранный элемент
                                    setSelectedRow(index); // Устанавливаем индекс выбранной плитки
                                }}
                                selectedTile={selectedRow} // Индекс выбранной плитки
                                isActive={isActive}
                                selectedItem={selectedItem}
                            />
                        ) : (
                            <TableWrapperV2
                                columns={columns}
                                data={filteredData} // Передаем отфильтрованные данные
                                onRowClick={handleRowClick}
                                selectedRow={selectedRow}
                                isActive={isActive}
                            />
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default TableContentV2;

