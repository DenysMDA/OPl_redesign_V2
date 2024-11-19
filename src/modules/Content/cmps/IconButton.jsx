import React, { useState } from "react";

const IconButton = ({ icon: Icon, menuTitle, isActive, onClick }) => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div
      className="icons-list"
      onMouseEnter={() => setIsMenu(true)}
      onMouseLeave={() => setIsMenu(false)}
    >
      <div
        className={`icon-wrapper ${isActive ? "active" : ""}`}
        onClick={() => onClick(menuTitle)}
      >
        <Icon className="icon" />
      </div>
    </div>
  );
};
export default IconButton;
