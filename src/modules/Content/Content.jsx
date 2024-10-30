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
    "Support": {}
};

const Content = () => {
    const [selectedMenus, setSelectedMenus] = useState([]);

    useEffect(() => {
        console.log(selectedMenus)
    }, [selectedMenus])

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
                <div
                    className={`icon-wrapper ${selectedMenus.includes("") ? 'active' : ''}`}
                >
                    <RiMenuUnfoldFill className='icon' />
                </div>
                <div
                    className={`icon-wrapper ${selectedMenus.includes("Operator Settings") ? 'active' : ''}`}
                    onClick={() => toggleMenu("Operator Settings")}
                >
                    <MdManageAccounts className='icon' />
                </div>

                <div
                    className={`icon-wrapper ${selectedMenus.includes("Number Management") ? 'active' : ''}`}
                    onClick={() => toggleMenu("Number Management")}
                >
                    <FaHashtag className='icon' />
                </div>

                <div
                    className={`icon-wrapper ${selectedMenus.includes("Number Management History") ? 'active' : ''}`}
                    onClick={() => toggleMenu("Number Management History")}
                >
                    <BsColumnsGap className='icon' />
                </div>

                <div
                    className={`icon-wrapper ${selectedMenus.includes("Migrations") ? 'active' : ''}`}
                    onClick={() => toggleMenu("Migrations")}
                >
                    <RiFileTransferLine className='icon' />
                </div>

                <div
                    className={`icon-wrapper ${selectedMenus.includes("Administration") ? 'active' : ''}`}
                    onClick={() => toggleMenu("Administration")}
                >
                    <GrUserAdmin className='icon' />
                </div>

                <div
                    className={`icon-wrapper ${selectedMenus.includes("Trunks & Calling Profiles") ? 'active' : ''}`}
                    onClick={() => toggleMenu("Trunks & Calling Profiles")}
                >
                    <BsTelephone className='icon' />
                </div>
                <div
                    className={`icon-wrapper ${selectedMenus.includes("Tools") ? 'active' : ''}`}
                    onClick={() => toggleMenu("Tools")}
                >
                    <FaTools className='icon' />
                </div>
                <div
                    className={`icon-wrapper ${selectedMenus.includes("Dashboard and data") ? 'active' : ''}`}
                    onClick={() => toggleMenu("Dashboard and data")}
                >
                    <BsGraphUpArrow className='icon' />
                </div>
                <div
                    className={`icon-wrapper ${selectedMenus.includes("Support") ? 'active' : ''}`}
                    onClick={() => toggleMenu("Support")}
                >
                    <MdOutlineContactSupport className='icon' />
                </div>

            </div>

            <div className='main-content'>
                <div className="menu-block">
                    {selectedMenus.map((menuTitle) => (
                        <div key={menuTitle} className="menu-section">
                            <h3>{menuTitle}</h3>
                            {menu[menuTitle].subMenu && (
                                <ul>
                                    {menu[menuTitle].subMenu.map((subItem) => (
                                        <li key={subItem.title}>{subItem.title}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
};

// const Content = () => {
//     const [selectedMenus, setSelectedMenus] = useState([]);

//     return (
//         <main className='main-wrapper'>
//             <div className='icon-nav-block'>
//                 <div className="icon-wrapper">
//                     <RiMenuUnfoldFill className='icon' />
//                 </div>
//                 <div className="icon-wrapper">
//                     <MdManageAccounts className='icon' />
//                 </div>
//                 <div className="icon-wrapper">
//                     <FaHashtag className='icon' />
//                 </div>
//                 <div className="icon-wrapper">
//                     <BsTelephoneFill className='icon' />
//                 </div>
//                 <div className="icon-wrapper">
//                     <FaTools className='icon' />
//                 </div>
//                 <div className="icon-wrapper">
//                     <BsGraphUpArrow className='icon' />
//                 </div>
//                 <div className="icon-wrapper">
//                     <MdOutlineContactSupport className='icon' />
//                 </div>
//                 <div className="icon-wrapper">
//                     <IoDocumentText className='icon' />
//                 </div>

//             </div>
//             <div className='main-content'>
//                 {Object.keys(menu).map((mainTitle) => (
//                     <div key={mainTitle} className="menu-section">
//                         <h3>{mainTitle}</h3>
//                         {menu[mainTitle].subMenu && (
//                             <ul>
//                                 {menu[mainTitle].subMenu.map((subItem) => (
//                                     <li key={subItem.title}>{subItem.title}</li>
//                                 ))}
//                             </ul>
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <div></div>
//         </main>
//     )
// }

export default Content
