import React from "react";
import "./PageNavigation.scss";
import { MdOutlineCloudUpload } from "react-icons/md";
import { MdContentPasteSearch } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { BsFillSendCheckFill } from "react-icons/bs";

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
      label: "Deny",
      icon: <MdCancel className="icon" />,
      action: collapseAllTables,
    },
    {
      label: "Vetting",
      icon: <BsFillSendCheckFill className="icon" />,
      action: expandAllTables,
    },
  ];

  return (
    <nav className="page-navigation">
      {buttons.map((button, index) => (
        <>
          <button key={index} className="nav-button" onClick={button.action}>
            {button.icon}
            {button.label}
          </button>
          <div className="separator"></div>
        </>
      ))}
    </nav>
  );
};

export default PageNavigation;
