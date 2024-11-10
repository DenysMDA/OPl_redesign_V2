import React, {useEffect, useState} from "react";
import "./Content.scss";
import {RiMenuUnfoldFill} from "react-icons/ri";
import {RiMenuFoldFill} from "react-icons/ri";
import {GrUserManager} from "react-icons/gr";
import {MdOutlineManageAccounts} from "react-icons/md";
import {MdManageAccounts} from "react-icons/md";
import {BsTelephoneFill} from "react-icons/bs";
import {BsTelephone} from "react-icons/bs";
import {FaTools} from "react-icons/fa";
import {VscTools} from "react-icons/vsc";
import {BsGraphUpArrow} from "react-icons/bs";
import {MdOutlineContactSupport} from "react-icons/md";
import {IoDocumentText} from "react-icons/io5";
import {IoDocumentTextOutline} from "react-icons/io5";
import {FaHashtag} from "react-icons/fa6";
import {BsColumnsGap} from "react-icons/bs";

import {RiFileTransferFill} from "react-icons/ri";
import {RiFileTransferLine} from "react-icons/ri";

import {RiAdminFill} from "react-icons/ri";
import {RiAdminLine} from "react-icons/ri";
import {GrUserAdmin} from "react-icons/gr";

import NavMenuBlock from "./cmps/NavMenuBlock/NavMenuBlock";
import IconButton from "./cmps/IconButton";
import KeyContactsTable from "./cmps/KeyContactsTable/KeyContactsTable";
import EntityDetail from "./cmps/EntityDetail/EntityDetail";
import Panel from "./cmps/Panel/Panel";
import TabComponent from "./cmps/TabComponent/TabComponent";

export const menu = {
    "Operator Settings": {
        icon: <MdManageAccounts/>,
        subMenu: [
            {title: "Operator Configuration"},
            {title: "Customer Consents"},
        ],
    },
    "Number Management": {
        icon: <FaHashtag/>,
        subMenu: [
            {title: "Manage by Tenant"},
            {title: "Manage by Number"},
            {title: "SenderId Management"},
        ],
    },
    "Number Management History": {
        icon: <BsColumnsGap/>,
        subMenu: [
            {title: "Released from Tenant"},
            {title: "Upload to Tenant"},
            {title: "Upload to Stock"},
            {title: "Live Search Orders"},
            {title: "Number Capabilities Updates"},
            {title: "SMS Capable Updates"},
            {title: "Port In Orders"},
            {title: "Port Out Orders"},
            {title: "Program Brief"},
            {title: "Campaign Brief"},
            {title: "10DLC Brand Briefs"},
            {title: "10DLC Campaign Briefs"},
            {title: "SenderId Order Details"},
            {title: "Inter Tenant Transfer Orders"},
        ],
    },
    Migrations: {
        icon: <RiFileTransferLine/>,
        subMenu: [{title: "Telco Migrations"}],
    },
    Administration: {
        icon: <GrUserAdmin/>,
        subMenu: [
            {title: "Calling Profiles"},
            {title: "Number Profiles"},
            {title: "Operator Management"},
            {title: "Port-In Plans"},
        ],
    },
    Tools: {
        icon: <FaTools/>,
        subMenu: [{title: "TNI Number Search"}],
    },
    "Trunks & Calling Profiles": {
        icon: <BsTelephone/>,
        subMenu: [
            {title: "Calling Profile Management"},
            {title: "Trunk Management"},
        ],
    },
    "Dashboard and data": {
        icon: <BsGraphUpArrow/>,
        subMenu: [
            {title: "CDR & CQD download"},
            {title: "SLA & KPI dashboard"},
        ],
    },
    Support: {
        icon: <MdOutlineContactSupport/>,
        subMenu: [
            {
                title:
                    "Please submit customer and engineering related issues to the Microsoft ticketing system",
            },
        ],
    },
};

const ContentV2 = () => {
    const [expandedMenus, setExpandedMenus] = useState([]);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isPanelVisible, setIsPanelVisible] = useState(false);

    const [activeTable, setActiveTable] = useState(null); // Состояние для отслеживания активной таблицы

    const columns1 = [
        {Header: "Type", accessor: "Type", minWidth: 200},
        {Header: "Display Name", accessor: "Display Name", minWidth: 200},
        {Header: "First Name", accessor: "First Name", minWidth: 200},
        {Header: "Last Name", accessor: "Last Name", minWidth: 200},
        {Header: "Title", accessor: "Title", minWidth: 200},
        {Header: "Phone Number", accessor: "Phone Number", minWidth: 200},
        {
            Header: "Alternative Number",
            accessor: "Alternative Number",
            minWidth: 200,
        },
    ];
    const data1 = [
        {
            Type: "ServiceManager",
            "Display Name": "SM-DisplayName",
            "First Name": "SM-FirstName",
            "Last Name": "SM-LastName",
            Title: "SM-Title",
            "Phone Number": "SM-Phone",
            "Alternative Number": "SM-AnotherPhone",
        },
        {
            Type: "OperationsCenter",
            "Display Name": "Ops-DisplayName",
            "First Name": "Ops-FirstName",
            "Last Name": "Ops-LastName",
            Title: "Ops-Title",
            "Phone Number": "Ops-Phone",
            "Alternative Number": "Ops-AnotherPhone",
        },
    ];
    const columns2 = [
        {Header: "Type", accessor: "Type", minWidth: 200},
        {Header: "Display Name", accessor: "Display Name", minWidth: 200},
        {Header: "First Name", accessor: "First Name", minWidth: 200},
        {Header: "Last Name", accessor: "Last Name", minWidth: 200},
    ];
    const data2 = [
        {
            Type: "NetworkManager",
            "Display Name": "Net-DisplayName",
            "First Name": "Net-FirstName",
            "Last Name": "Net-LastName",
        },
        {
            Type: "SupportCenter",
            "Display Name": "Support-DisplayName",
            "First Name": "Support-FirstName",
            "Last Name": "Support-LastName",
        },
    ];

    const actions = [
        {label: "Add", onClick: () => console.log("Add clicked")},
        {label: "Edit", onClick: () => console.log("Edit clicked")},
        {label: "Delete", onClick: () => console.log("Delete clicked")},
    ];

    const toggleMenu = (menuTitle) => {
        if (isShowMenu) {
            setExpandedMenus(
                (prevExpandedMenus) =>
                    prevExpandedMenus.includes(menuTitle)
                        ? prevExpandedMenus.filter((title) => title !== menuTitle) // Закрыть меню, если оно уже открыто
                        : [...prevExpandedMenus, menuTitle] // Открыть новое меню
            );
        }
    };

    const toggleShowMenu = () => {
        setIsShowMenu((prevIsShowMenu) => !prevIsShowMenu);
        if (!isShowMenu) {
            setExpandedMenus([]); // Закрыть все меню при сворачивании
        }
    };

    const handleTableFocus = (tableId) => {
        setActiveTable(tableId); // Устанавливаем активную таблицу
    };

    const togglePanelVisibility = () => {
        setIsPanelVisible((prev) => !prev);
    };

    return (
        <main className="main-wrapper">
            <div
                className={`icon-nav-block ${isShowMenu ? "expanded" : "collapsed"}`}
            >
                <div
                    className={`icon-wrapper ${isShowMenu ? "active" : ""}`}
                    onClick={toggleShowMenu}
                >
                    {!isShowMenu ? (
                        <RiMenuUnfoldFill className="icon"/>
                    ) : (
                        <RiMenuFoldFill className="icon"/>
                    )}
                </div>

                {Object.keys(menu).map((menuTitle, index) => (
                    <div
                        key={index}
                        className={`menu-item ${
                            expandedMenus.includes(menuTitle) ? "expanded" : ""
                        }`}
                    >
                        <div className="menu-header" onClick={() => toggleMenu(menuTitle)}>
                            <div className="menu-icon">{menu[menuTitle].icon}</div>
                            {isShowMenu && <div className="menu-title">{menuTitle}</div>}
                        </div>
                        {expandedMenus.includes(menuTitle) && isShowMenu && (
                            <ul className="sub-menu">
                                {menu[menuTitle].subMenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem.title}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            <div className="content-wrapper">

                <EntityDetail/>

                <TabComponent/>

                <KeyContactsTable
                    title="First Key Contacts"
                    columns={columns1}
                    data={data1}
                    actions={actions}
                    isActive={activeTable === 1}
                    onTableFocus={() => handleTableFocus(1)}
                />
                <KeyContactsTable
                    title="Second Key Contacts"
                    columns={columns2}
                    data={data2}
                    actions={actions}
                    isActive={activeTable === 2}
                    onTableFocus={() => handleTableFocus(2)}
                />
            </div>
            <button onClick={togglePanelVisibility}>Open Panel</button>
            <Panel isVisible={isPanelVisible} onClose={togglePanelVisibility}/>
        </main>
    );
};

export default ContentV2;
