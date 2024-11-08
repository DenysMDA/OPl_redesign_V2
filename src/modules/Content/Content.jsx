import React, { useEffect, useState } from 'react'
import './Content.scss'
import { RiMenuUnfoldFill } from "react-icons/ri";
import { RiMenuFoldFill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa6";
import { BsColumnsGap } from "react-icons/bs";

import { RiFileTransferFill } from "react-icons/ri";
import { RiFileTransferLine } from "react-icons/ri";

import { RiAdminFill } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";

import NavMenuBlock from './cmps/NavMenuBlock'
import IconButton from './cmps/IconButton';

export const menu = {
    "Operator Settings": {
        subMenu: [
            { title: "Operator Configuration" },
            { title: "Customer Consents" }
        ]
    },
    "Number Management": {
        subMenu: [
            { title: "Manage by Tenant" },
            { title: "Manage by Number" },
            { title: "SenderId Management" }
        ]
    },
    "Number Management History": {
        subMenu: [
            { title: "Released from Tenant" },
            { title: "Upload to Tenant" },
            { title: "Upload to Stock" },
            { title: "Live Search Orders" },
            { title: "Number Capabilities Updates" },
            { title: "SMS Capable Updates" },
            { title: "Port In Orders" },
            { title: "Port Out Orders" },
            { title: "Program Brief" },
            { title: "Campaign Brief" },
            { title: "10DLC Brand Briefs" },
            { title: "10DLC Campaign Briefs" },
            { title: "SenderId Order Details" },
            { title: "Inter Tenant Transfer Orders" }
        ]
    },
    "Migrations": {
        subMenu: [
            { title: "Telco Migrations" }
        ]
    },
    "Administration": {
        subMenu: [
            { title: "Calling Profiles" },
            { title: "Number Profiles" },
            { title: "Operator Management" },
            { title: "Port-In Plans" }
        ]
    },
    "Tools": {
        subMenu: [
            { title: "TNI Number Search" }
        ]
    },
    "Trunks & Calling Profiles": {
        subMenu: [
            { title: "Calling Profile Management" },
            { title: "Trunk Management" }
        ]
    },
    "Dashboard and data": {
        subMenu: [
            { title: "CDR & CQD download" },
            { title: "SLA & KPI dashboard" }
        ]
    },
    "Support": {
        subMenu: [
            { title: "Please submit customer and engineering related issues to the Microsoft ticketing system" },
        ]
    }
};

const Content = () => {
    const [selectedMenus, setSelectedMenus] = useState([]);
    const [isShowMenu, setIsShowMenu] = useState(true); // Новое состояние
    const [hoveredMenu, setHoveredMenu] = useState(null); // Состояние для отслеживания наведенной иконки

    useEffect(() => {
        // console.log(isShowMenu)
    }, [isShowMenu])

    const toggleShowMenu = () => {
        setIsShowMenu((prevIsShowMenu) => !prevIsShowMenu);
    };

    // Функция для переключения отображения меню
    const toggleMenu = (menuTitle) => {
        setSelectedMenus((prevSelectedMenus) =>
            prevSelectedMenus.includes(menuTitle)
                ? prevSelectedMenus.filter((title) => title !== menuTitle)
                : [...prevSelectedMenus, menuTitle]
        );
    };

    return (
        <main className='main-wrapper'>      
            <div className='icon-nav-block'>
                {/* Кнопка для отображения/скрытия меню */}
                <div
                    className={`icon-wrapper ${isShowMenu ? 'active' : ''}`}
                    onClick={toggleShowMenu}
                >
                    {!isShowMenu ? <RiMenuUnfoldFill className='icon' /> : <RiMenuFoldFill className='icon' />}
                </div>

                {/* Использование IconButton для каждого пункта меню */}
                <IconButton
                    icon={MdManageAccounts}
                    menuTitle="Operator Settings"
                    isActive={selectedMenus.includes("Operator Settings")}
                    onClick={toggleMenu}
                />

                <IconButton
                    icon={FaHashtag}
                    menuTitle="Number Management"
                    isActive={selectedMenus.includes("Number Management")}
                    onClick={toggleMenu}
                />

                <IconButton
                    icon={BsColumnsGap}
                    menuTitle="Number Management History"
                    isActive={selectedMenus.includes("Number Management History")}
                    onClick={toggleMenu}
                />

                <IconButton
                    icon={RiFileTransferLine}
                    menuTitle="Migrations"
                    isActive={selectedMenus.includes("Migrations")}
                    onClick={toggleMenu}
                />

                <IconButton
                    icon={GrUserAdmin}
                    menuTitle="Administration"
                    isActive={selectedMenus.includes("Administration")}
                    onClick={toggleMenu}
                />

                <IconButton
                    icon={BsTelephone}
                    menuTitle="Trunks & Calling Profiles"
                    isActive={selectedMenus.includes("Trunks & Calling Profiles")}
                    onClick={toggleMenu}
                />

                <IconButton
                    icon={FaTools}
                    menuTitle="Tools"
                    isActive={selectedMenus.includes("Tools")}
                    onClick={toggleMenu}
                />

                <IconButton
                    icon={BsGraphUpArrow}
                    menuTitle="Dashboard and data"
                    isActive={selectedMenus.includes("Dashboard and data")}
                    onClick={toggleMenu}
                />

                <IconButton
                    icon={MdOutlineContactSupport}
                    menuTitle="Support"
                    isActive={selectedMenus.includes("Support")}
                    onClick={toggleMenu}
                />
            </div>

            <div className='main-content'>
                {isShowMenu && (
                    <div className="menu-block">
                        {selectedMenus.map((menuTitle) => (
                            <NavMenuBlock key={menuTitle} menuTitle={menuTitle} menu={menu} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default Content
