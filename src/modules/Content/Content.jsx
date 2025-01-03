import React, { useState } from "react";
import "./Content.scss";
import Panel from "./cmps/Panel/Panel";
import IconNavBlock from "./cmps/Navigation/IconNavBlock";
import Dashboard from "./cmps/Dashboard/Dashboard";
import ContentSection from "./ContentSections/ContentSection/ContentSection";
import CustomPage from "./ContentSections/CustomPage/CustomPage";

const Content = () => {
  const [, setExpandedMenus] = useState([]);
  const [isShowMenu, setIsShowMenu] = useState(true);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("Operator Configuration");
  // const [theme, setTheme] = useState('light');
  const [areTablesCollapsed, setAreTablesCollapsed] = useState(false); // Новое состояние

  const [activeTable, setActiveTable] = useState(null); // Состояние для отслеживания активной таблицы

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

  const collapseAllTables = () => setAreTablesCollapsed(true);
  const expandAllTables = () => setAreTablesCollapsed(false);

  const handleTableFocus = (tableId) => {
    setActiveTable(tableId); // Устанавливаем активную таблицу
  };

  const togglePanelVisibility = () => {
    setIsPanelVisible((prev) => !prev);
  };

  const renderContent = () => {
    switch (activeSubMenu) {
      case "Dashboard":
        return <Dashboard />;
      case "Operator Configuration":
        return (
          <CustomPage
            activeSubMenu={activeSubMenu}
            collapseAllTables={collapseAllTables}
            expandAllTables={expandAllTables}
            togglePanelVisibility={togglePanelVisibility}
            activeTable={activeTable}
            handleTableFocus={handleTableFocus}
            areTablesCollapsed={areTablesCollapsed}
          />
        );
      default:
        return (
          <ContentSection
            activeSubMenu={activeSubMenu}
            collapseAllTables={collapseAllTables}
            expandAllTables={expandAllTables}
            togglePanelVisibility={togglePanelVisibility}
            activeTable={activeTable}
            handleTableFocus={handleTableFocus}
            areTablesCollapsed={areTablesCollapsed}
          />
        );
    }
  };

  return (
    <main className="main-wrapper">
      <IconNavBlock
        isShowMenu={isShowMenu}
        toggleShowMenu={toggleShowMenu}
        setActiveSubMenu={setActiveSubMenu}
      />

      {renderContent()}
      <Panel isVisible={isPanelVisible} onClose={togglePanelVisibility} />
    </main>
  );
};

export default Content;
