import React from "react";
import "./ContentHeader.scss";
import PageNavigation from "../PageNavigation/PageNavigation";

const ContentHeader = ({ activeSubMenu }) => {
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} button clicked`);
    // Handle the button action here
  };

  return (
    <div className="content-header">
      <h1>{activeSubMenu}</h1>
      {/* <div className="content-header-nav"> */}
      <PageNavigation onButtonClick={handleButtonClick} />
      {/* </div> */}
    </div>
  );
};

export default ContentHeader;
