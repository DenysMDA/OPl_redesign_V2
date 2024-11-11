import React from "react";
import "./PageNavigation.scss";

const PageNavigation = ({ onButtonClick }) => {
    const buttons = [
        { label: "Upload New Number", action: () => onButtonClick("Upload New Number") },
        { label: "Search Numbers", action: () => onButtonClick("Search Numbers") },
        { label: "Deny", action: () => onButtonClick("Deny") },
        { label: "Vetting", action: () => onButtonClick("Vetting") },
    ];

    return (
        <nav className="page-navigation">
            {buttons.map((button, index) => (
                <button key={index} className="nav-button" onClick={button.action}>
                    {button.label}
                </button>
            ))}
        </nav>
    );
};

export default PageNavigation;
