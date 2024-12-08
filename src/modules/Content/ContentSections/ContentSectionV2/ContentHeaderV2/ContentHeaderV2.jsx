import React from "react";
import "./ContentHeaderV2.scss";
import PageNavigation from "../../../cmps/PageNavigation/PageNavigation";
import {FiSettings} from "react-icons/fi";
import PageNavigationV2 from "../PageNavigationV2/PageNavigationV2";

const ContentHeaderV2 = ({
                             activeSubMenu,
                             collapseAllTables,
                             expandAllTables,
                             pageNavigation = true,
                             togglePanelVisibility,
                             handleRowSelect,
                         }) => {
    const handleButtonClick = (buttonName) => {
        console.log(`${buttonName} button clicked`);
    };

    return (
        <div className="content-header">
            <h1>{activeSubMenu}</h1>
            {/* <div className="content-header-nav"> */}
            {pageNavigation ? (
                <PageNavigationV2
                    onButtonClick={handleButtonClick}
                    collapseAllTables={collapseAllTables}
                    expandAllTables={expandAllTables}
                    togglePanelVisibility={togglePanelVisibility}
                    handleRowSelect={handleRowSelect}
                />
            ) : (
                <FiSettings className="icon-setting"/>
            )}
        </div>
    );
};

export default ContentHeaderV2;
