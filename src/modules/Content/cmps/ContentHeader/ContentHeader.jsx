import React from "react";
import "./ContentHeader.scss";
import PageNavigation from "../PageNavigation/PageNavigation";
import {FiSettings} from "react-icons/fi";

const ContentHeader = ({
                           activeSubMenu,
                           collapseAllTables,
                           expandAllTables,
                           pageNavigation = true
                       }) => {
    const handleButtonClick = (buttonName) => {
        console.log(`${buttonName} button clicked`);
        // Handle the button action here
    };

    return (
        <div className="content-header">
            <h1>{activeSubMenu}</h1>
            {/* <div className="content-header-nav"> */}
            {
                pageNavigation ?
                <PageNavigation
                    onButtonClick={handleButtonClick}
                    collapseAllTables={collapseAllTables}
                    expandAllTables={expandAllTables}
                /> : <FiSettings  className='icon-setting'/>
            }
        </div>
    );
};

export default ContentHeader;
