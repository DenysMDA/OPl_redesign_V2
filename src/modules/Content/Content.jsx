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

import NavMenuBlock from "./cmps/PageNavigation/PageNavigation";
import IconButton from "./cmps/IconButton";
import KeyContactsTable from "./cmps/KeyContactsTable/KeyContactsTable";
import EntityDetail from "./cmps/EntityDetail/EntityDetail";
import Panel from "./cmps/Panel/Panel";
import TabComponent from "./cmps/TabComponent/TabComponent";
import IconNavBlock from "./cmps/Navigation/IconNavBlock";
import PageNavigation from "./cmps/PageNavigation/PageNavigation";


const Content = () => {
    const [expandedMenus, setExpandedMenus] = useState([]);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isPanelVisible, setIsPanelVisible] = useState(false);
    // const [theme, setTheme] = useState('light');

    const [activeTable, setActiveTable] = useState(null); // Состояние для отслеживания активной таблицы
    const handleButtonClick = (buttonName) => {
        console.log(`${buttonName} button clicked`);
        // Handle the button action here
    };
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

    // const toggleTheme = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme);
    //     document.documentElement.setAttribute('data-theme', newTheme);
    // };

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

            <IconNavBlock isShowMenu={isShowMenu} toggleShowMenu={toggleShowMenu}/>


            <div className="content-wrapper">
                <PageNavigation onButtonClick={handleButtonClick}/>

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
            <button style={{width: '10px'}} onClick={togglePanelVisibility}>O</button>

            <Panel isVisible={isPanelVisible} onClose={togglePanelVisibility}/>
        </main>
    );
};

export default Content;
