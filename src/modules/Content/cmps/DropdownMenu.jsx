// DropdownMenu.jsx
import React, { useState } from "react";

const DropdownMenu = ({ options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-menu">
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedOption ? selectedOption : placeholder}
                <span className={`arrow ${isOpen ? "up" : "down"}`} />
            </div>
            {isOpen && (
                <ul className="dropdown-options">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
