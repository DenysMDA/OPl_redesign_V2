import React, { useState } from "react";
import {RiMenuUnfoldFill, RiMenuFoldFill, RiFileTransferLine} from "react-icons/ri";
import {MdManageAccounts, MdOutlineContactSupport} from "react-icons/md";
import {FaHashtag} from "react-icons/fa6";
import {BsColumnsGap, BsGraphUpArrow, BsTelephone} from "react-icons/bs";
import {GrUserAdmin} from "react-icons/gr";
import {FaTools} from "react-icons/fa";
import './IconNavBlock.scss'

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

const IconNavBlock = ({ isShowMenu, toggleShowMenu }) => {
    const [expandedMenus, setExpandedMenus] = useState([]);
    const [hoveredMenu, setHoveredMenu] = useState(null);

    const toggleMenu = (menuTitle) => {
        if (isShowMenu) {
            setExpandedMenus((prevExpandedMenus) =>
                prevExpandedMenus.includes(menuTitle)
                    ? prevExpandedMenus.filter((title) => title !== menuTitle)
                    : [...prevExpandedMenus, menuTitle]
            );
        }
    };

    return (
        <div className={`icon-nav-block ${isShowMenu ? "expanded" : "collapsed"}`}>
            <div
                className={`icon-wrapper ${isShowMenu ? "active" : ""}`}
                onClick={toggleShowMenu}
            >
                {!isShowMenu ? <RiMenuUnfoldFill className="icon" /> : <RiMenuFoldFill className="icon" />}
            </div>

            {Object.keys(menu).map((menuTitle, index) => (
                <div
                    key={index}
                    className="menu-item"
                    onMouseEnter={() => !isShowMenu && setHoveredMenu(menuTitle)}
                    onMouseLeave={() => !isShowMenu && setHoveredMenu(null)}
                >
                    <div className="menu-header" onClick={() => toggleMenu(menuTitle)}>
                        <div className="menu-icon">{menu[menuTitle].icon}</div>
                        {isShowMenu && <div className="menu-title">{menuTitle}</div>}
                    </div>

                    {isShowMenu && expandedMenus.includes(menuTitle) && (
                        <ul className="sub-menu">
                            {menu[menuTitle].subMenu.map((subItem, subIndex) => (
                                <li key={subIndex}>{subItem.title}</li>
                            ))}
                        </ul>
                    )}

                    {!isShowMenu && hoveredMenu === menuTitle && (
                        <div className="hover-menu">
                            <ul className="sub-menu">
                                {menu[menuTitle].subMenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem.title}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
export default IconNavBlock;
