import React from "react";
import "./PageNavigation.scss";
import { MdOutlineCloudUpload } from "react-icons/md";
import { MdContentPasteSearch } from "react-icons/md";

import { VscCollapseAll } from "react-icons/vsc";
import { VscExpandAll } from "react-icons/vsc";

const PageNavigation = ({
  onButtonClick,
  collapseAllTables,
  expandAllTables,
}) => {
  const buttons = [
    {
      label: "Upload New Number",
      icon: <MdOutlineCloudUpload className="icon" />,
      action: () => onButtonClick("Upload New Number"),
    },
    {
      label: "Search Numbers",
      icon: <MdContentPasteSearch className="icon" />,
      action: () => onButtonClick("Search Numbers"),
    },
    {
      label: "Collapse All",
      icon: <VscCollapseAll className="icon" />,
      action: collapseAllTables,
    },
    {
      label: "Expand All",
      icon: <VscExpandAll className="icon" />,
      action: expandAllTables,
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
