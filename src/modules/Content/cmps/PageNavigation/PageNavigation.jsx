import React from "react";
import "./PageNavigation.scss";
import { MdOutlineCloudUpload } from "react-icons/md";
import { MdContentPasteSearch } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { BsFillSendCheckFill } from "react-icons/bs";

const PageNavigation = ({ onButtonClick }) => {
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
      action: () => onButtonClick("Deny"),
    },
    {
      label: "Vetting",
      icon: <BsFillSendCheckFill className="icon" />,
      action: () => onButtonClick("Vetting"),
    },
  ];

  return (
    <nav className="page-navigation">
      {buttons.map((button, index) => (
        <button key={index} className="nav-button" onClick={button.action}>
          {button.icon}
          {button.label}
        </button>
      ))}
    </nav>
  );
};

export default PageNavigation;
