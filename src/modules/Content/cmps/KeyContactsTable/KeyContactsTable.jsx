import React, {useState, useEffect} from "react";
import {useTable, useResizeColumns, useFlexLayout} from "react-table";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import "./KeyContactsTable.scss";
import {AiOutlineDelete, AiOutlineEdit, AiOutlinePlus} from "react-icons/ai";
import {MdLibraryAdd, MdEditSquare} from "react-icons/md";
import {TiEdit} from "react-icons/ti";
import {RiDeleteBin6Line} from "react-icons/ri";
import {LuSearch} from "react-icons/lu";
import {FiSettings} from "react-icons/fi";

const KeyContactsTable = ({
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
    const [searchTerm, setSearchTerm] = useState(""); // Добавьте состояние для поиска

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

    useEffect(() => {
        console.log(data)
    }, [data]);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
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
                    <div className="header-title">
                        <div className="header-title-separator"></div>
                        <h2>{title}</h2>
                        {/* <div className="separator" /> */}
                    </div>

                    <div className='icon-container-wrapper'>
                        <div>Items: {data.length}</div>
                        <div
                            className="icon-container"
                            onClick={toggleCollapse}
                            style={{cursor: "pointer"}}
                        >
                            {isCollapsed ? <FaChevronDown/> : <FaChevronUp/>}
                        </div>
                    </div>
                </div>

                {!isCollapsed && (
                    <div className="action-buttons">
                        <div className='action-icon-block'>
                            {actions.map((action, index) => {
                                let Icon;
                                // Пример выбора иконки на основе метки действия
                                switch (action.label) {
                                    case "Add":
                                        Icon = MdLibraryAdd;
                                        break;
                                    case "Edit":
                                        Icon = TiEdit;
                                        break;
                                    case "Delete":
                                        Icon = RiDeleteBin6Line;
                                        break;
                                    default:
                                        Icon = null;
                                }
                                return (
                                    <div key={index} className='action-icon-wrapper'>
                                        <button onClick={action.onClick}>
                                            {Icon && <Icon className="action-icon"/>} {action.label}
                                        </button>
                                        <div className="action-buttons-separator"></div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='action-icon-block-right'>
                            {isSearchable &&
                                <div className="search">
                                    <div className='search-icon'>
                                        <LuSearch className='icon'/>
                                    </div>
                                    <input placeholder='Search' type="text" className="search-input"/>
                                </div>
                            }
                            <div className='table-setting'>
                                <FiSettings/>
                            </div>
                        </div>

                    </div>
                )}
            </div>

            {!isCollapsed && (
                <div className="table-wrapper">
                    <table {...getTableProps()} className="react-table">
                        <thead>
                        {headerGroups.map((headerGroup) => {
                            const {key, ...rest} = headerGroup.getHeaderGroupProps();
                            return (
                                <tr key={key} {...rest}>
                                    <th className="radio-cell-header"></th>
                                    {headerGroup.headers.map((column) => {
                                        const {key: colKey, ...colRest} =
                                            column.getHeaderProps();
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
                            const {key, ...rest} = row.getRowProps();
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
                                        const {key: cellKey, ...cellRest} = cell.getCellProps();
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
            )}
        </div>
    );
};

export default KeyContactsTable;
