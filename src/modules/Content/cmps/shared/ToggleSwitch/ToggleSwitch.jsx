// ToggleSwitch.jsx
import React from "react";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ isOn, handleToggle }) => {
    return (
        <div className="switch" onClick={handleToggle}>
            <div className={`slider ${isOn ? "on" : "off"}`}>
                {isOn ? "ON" : "OFF"}
            </div>
        </div>
    );
};

export default ToggleSwitch;
