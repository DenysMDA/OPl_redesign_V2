import React, {useState, useEffect} from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import "./TableV2.scss";
import ActionButtons from "../shared/ActionButtons/ActionButtons";
import TableWrapper from "../shared/TableWrapper/TableWrapper";

const TableV2 = ({
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

    const toggleCollapse = () => {
        setIsCollapsed((prev) => !prev);
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

    useEffect(() => {
        setIsCollapsed(areTablesCollapsed);
    }, [areTablesCollapsed]);

    return (
        <div className="table">
            <div className="table-header-wrapper">
                <div className="table-header">
                    <div className="header-title">
                        <div className="header-title-separator"></div>
                        <h2>{title}</h2>
                    </div>

                    <div className="icon-container-wrapper">
                        <div>Items: {data.length}</div>
                        <div
                            className="icon-container"
                            onClick={toggleCollapse}
                            style={{ cursor: "pointer" }}
                        >
                            {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
                        </div>
                    </div>
                </div>

                {/* Используем ActionButtonsV2 */}
                {!isCollapsed && (
                    <ActionButtons actions={actions} isSearchable={isSearchable} />
                )}
            </div>

            {/* Используем TableWrapper */}
            {!isCollapsed && (
                <TableWrapper
                    columns={columns}
                    data={data}
                    onRowClick={handleRowClick}
                    selectedRow={selectedRow}
                    isActive={isActive}
                />
            )}
        </div>
    );
};

export default TableV2;


