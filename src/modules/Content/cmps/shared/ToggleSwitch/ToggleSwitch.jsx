import React from "react";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ isOn, handleToggle, on = "ON", off = "OFF" }) => {
  return (
    <div className="switch" onClick={handleToggle}>
      <div className={`slider ${isOn ? "on" : "off"}`}>{isOn ? on : off}</div>
    </div>
  );
};

export default ToggleSwitch;
