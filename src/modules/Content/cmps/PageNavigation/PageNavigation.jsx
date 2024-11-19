import React from "react";
import "./PageNavigation.scss";
import {MdOutlineCloudUpload} from "react-icons/md";
import {MdContentPasteSearch} from "react-icons/md";

import {VscCollapseAll} from "react-icons/vsc";
import {VscExpandAll} from "react-icons/vsc";
import {FiSettings} from "react-icons/fi";

const PageNavigation = ({
                            onButtonClick,
                            collapseAllTables,
                            expandAllTables,
                            togglePanelVisibility
                        }) => {
    const buttons = [
        {
            label: "Upload New Number",
            icon: <MdOutlineCloudUpload className="icon"/>,
            action: () => onButtonClick("Upload New Number"),
        },
        {
            label: "Collapse All",
            icon: <VscCollapseAll className="icon"/>,
            action: collapseAllTables,
        },
        {
            label: "Expand All",
            icon: <VscExpandAll className="icon"/>,
            action: expandAllTables,
        },
        {
            label: "",
            icon: <FiSettings className='icon icon-config'/>,
            action: () => togglePanelVisibility(),
        },
    ];

    return (
        <nav className="page-navigation">
            {buttons.map((button, index) => (
                <React.Fragment key={index}>
                    <button className="nav-button" onClick={button.action}>
                        {button.icon}
                        {button.label}
                    </button>
                    <div className="separator"></div>
                </React.Fragment>
            ))}
        </nav>
    );
};

export default PageNavigation;
