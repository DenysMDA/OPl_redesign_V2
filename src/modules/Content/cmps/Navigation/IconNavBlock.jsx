import React, { useEffect, useState } from "react";
import {
  RiMenuUnfoldFill,
  RiMenuFoldFill,
  RiFileTransferLine,
} from "react-icons/ri";
import { MdManageAccounts, MdOutlineContactSupport } from "react-icons/md";
import { FaHashtag } from "react-icons/fa6";
import { BsColumnsGap, BsGraphUpArrow, BsTelephone } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import "./IconNavBlock.scss";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";

export const menu = {
  Dashboard: {
    icon: <AiOutlineDashboard />,
    subMenu: [{ title: "Dashboard" }],
  },
  "Operator Settings": {
    icon: <MdManageAccounts />,
    subMenu: [
      { title: "Operator Configuration" },
      { title: "Customer Consents" },
    ],
  },
  "Number Management": {
    icon: <FaHashtag />,
    subMenu: [
      { title: "Manage by Tenant" },
      { title: "Manage by Number" },
      { title: "SenderId Management" },
    ],
  },
  History: {
    icon: <BsColumnsGap />,
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
      { title: "Inter Tenant Transfer Orders" },
    ],
  },
  Migrations: {
    icon: <RiFileTransferLine />,
    subMenu: [{ title: "Telco Migrations" }],
  },
  Administration: {
    icon: <GrUserAdmin />,
    subMenu: [
      { title: "Calling Profiles" },
      { title: "Number Profiles" },
      { title: "Operator Management" },
      { title: "Port-In Plans" },
    ],
  },
  Tools: {
    icon: <FaTools />,
    subMenu: [{ title: "TNI Number Search" }],
  },
  "Trunks & Calling": {
    icon: <BsTelephone />,
    subMenu: [
      { title: "Calling Profile Management" },
      { title: "Trunk Management" },
    ],
  },
  "Dashboard and data": {
    icon: <BsGraphUpArrow />,
    subMenu: [
      { title: "CDR & CQD download" },
      { title: "SLA & KPI dashboard" },
    ],
  },
  Support: {
    icon: <MdOutlineContactSupport />,
    subMenu: [
      {
        title:
          "Please submit customer and engineering related issues to the Microsoft ticketing system",
      },
    ],
  },
};

const IconNavBlock = ({ isShowMenu, toggleShowMenu, setActiveSubMenu }) => {
  const [expandedMenus, setExpandedMenus] = useState([]);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [activeSubMenuItem, setActiveSubMenuItem] = useState("Dashboard");

  const toggleMenu = (menuTitle) => {
    if (isShowMenu) {
      setExpandedMenus((prevExpandedMenus) =>
        prevExpandedMenus.includes(menuTitle)
          ? prevExpandedMenus.filter((title) => title !== menuTitle)
          : [...prevExpandedMenus, menuTitle]
      );
    }
  };

  // Function to set the active sub-menu item
  const handleSubMenuClick = (title) => {
    setActiveSubMenuItem(title);
    setActiveSubMenu(title);
  };

  useEffect(() => {
    // console.log(activeSubMenuItem);
  }, [activeSubMenuItem]);

  return (
    <div className="icon-nav-block-wrapper">
      <div
        className={`icon-nav-block ${isShowMenu ? "expanded" : "collapsed"}`}
      >
        <div className="icon">
          <div className="icon-collapse" onClick={toggleShowMenu}>
            <div className={`menu-icon ${isShowMenu ? "active" : ""}`}>
              {!isShowMenu ? (
                <RiMenuUnfoldFill className="icon" />
              ) : (
                <RiMenuFoldFill className="icon" />
              )}
            </div>
          </div>
        </div>

        {Object.keys(menu).map((menuTitle, index) => (
          <div
            key={index}
            className="menu-item"
            // style={{paddingBottom: `${expandedMenus.includes(menuTitle) ? "5" : "0"}px`}}
            onMouseEnter={() => !isShowMenu && setHoveredMenu(menuTitle)}
            onMouseLeave={() => !isShowMenu && setHoveredMenu(null)}
          >
            <div className="menu-header" onClick={() => toggleMenu(menuTitle)}>
              <div className="icon">
                <div className="menu-icon">{menu[menuTitle].icon}</div>
              </div>
              {isShowMenu && (
                <div
                  className={`menu-title menu-title__${
                    isShowMenu ? "active" : ""
                  }`}
                >
                  {menuTitle}
                </div>
              )}
              <div className="menu-expand-icon">
                {expandedMenus.includes(menuTitle) ? (
                  <HiOutlineMinusSm />
                ) : (
                  <HiOutlinePlusSm />
                )}
              </div>
            </div>

            {isShowMenu && expandedMenus.includes(menuTitle) && (
              <ul className="sub-menu">
                {menu[menuTitle].subMenu.map((subItem, subIndex) => {
                  // Проверяем, находится ли текущий элемент перед активным
                  const isBeforeActive =
                    menu[menuTitle].subMenu.findIndex(
                      (item) => item.title === activeSubMenuItem
                    ) > subIndex;

                  return (
                    <li key={subIndex} className="submenu-list">
                      <div
                        className={`icon-tree-direction-wrapper ${
                          activeSubMenuItem === subItem.title
                            ? "icon-tree-direction-wrapper__active"
                            : ""
                        }`}
                      >
                        <div
                          className={`icon-tree-direction ${
                            isBeforeActive
                              ? "icon-tree-direction__before-active"
                              : ""
                          }`}
                        />
                      </div>
                      <div
                        className={`sub-menu-item ${
                          activeSubMenuItem === subItem.title ? "active" : ""
                        }`}
                        onClick={() => handleSubMenuClick(subItem.title)}
                      >
                        {subItem.title}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}

            {!isShowMenu && hoveredMenu === menuTitle && (
              <div className={`hover-menu-wrapper`}>
                <div className="hover-menu">
                  <div className="sub-menu-wrapper">
                    <ul className="sub-menu">
                      {menu[menuTitle].subMenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="submenu-list"
                          onClick={() => handleSubMenuClick(subItem.title)}
                        >
                          <div
                            className={`sub-menu-item hover-sub-menu-item ${
                              activeSubMenuItem === subItem.title
                                ? "active"
                                : ""
                            }`}
                            onClick={() => handleSubMenuClick(subItem.title)}
                          >
                            {subItem.title}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default IconNavBlock;
