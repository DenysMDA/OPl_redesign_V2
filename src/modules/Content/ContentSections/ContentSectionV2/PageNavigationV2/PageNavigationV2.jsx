import React from "react";
import "./PageNavigationV2.scss";
import { MdOutlineCloudUpload } from "react-icons/md";

import { VscCollapseAll } from "react-icons/vsc";
import { VscExpandAll } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const PageNavigationV2 = ({
  onButtonClick,
  collapseAllTables,
  expandAllTables,
  togglePanelVisibility,
                            handleRowSelect
}) => {
  const buttons = [
    {
      label: "Upload New Number",
      // icon: <MdOutlineCloudUpload className="icon" />,
      action: () => onButtonClick("Upload New Number"),
    },
    // {
    //   label: "Collapse All",
    //   // icon: <VscCollapseAll className="icon" />,
    //   action: collapseAllTables,
    // },
    // {
    //   label: "Expand All",
    //   // icon: <VscExpandAll className="icon" />,
    //   action: expandAllTables,
    // },
    // {
    //   label: "",
    //   icon: <BsThreeDotsVertical className="icon icon-config" />,
    //   action: () => togglePanelVisibility(),
    // },
  ];

  return (
      <nav className="page-navigation">
        {buttons.map((button, index) => (
            <React.Fragment key={index}>
              <button className="nav-button" onClick={button.action}>
                {button.icon && button.icon}
                {button.label}
              </button>
            </React.Fragment>
        ))}
        <button className="nav-button nav-button-config" >
          <BsThreeDotsVertical className="icon icon-config" />
        </button>
      </nav>
  );
};

export default PageNavigationV2;
