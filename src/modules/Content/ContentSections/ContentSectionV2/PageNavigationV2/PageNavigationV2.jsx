import React, {useEffect, useRef, useState} from "react";
import "./PageNavigationV2.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegSquareCheck } from "react-icons/fa6";
import {FaRegSquare} from "react-icons/fa";


const PageNavigationV2 = ({
                              onButtonClick,
                              allComponents, // Список всех компонентов
                              selectedComponents, // Выбранные компоненты
                              toggleComponent, // Функция управления выбором
                          }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const closeDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener("mousedown", closeDropdown);
        } else {
            document.removeEventListener("mousedown", closeDropdown);
        }

        return () => {
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, [isDropdownOpen]);

    const buttons = [
        {
            label: "Upload New Number",
            action: () => onButtonClick("Upload New Number"),
        },
    ];

    return (
        <nav className="page-navigation">
            {buttons.map((button, index) => (
                <button key={index} className="nav-button" onClick={button.action}>
                    {button.label}
                </button>
            ))}
            <div className="dropdown-container" ref={dropdownRef}>
                <button
                    className="nav-button nav-button-config"
                    onClick={toggleDropdown}
                >
                    <BsThreeDotsVertical className={`icon icon-config ${isDropdownOpen ? 'icon-config-active' : ''}`} />
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <div className="dropdown-menu-header">Configuration</div>
                        {allComponents.map((comp) => (
                            <label key={comp.id} className="dropdown-item">
                                <input
                                    type="checkbox"
                                    checked={selectedComponents.includes(comp.id)}
                                    onChange={() => toggleComponent(comp.id)}
                                    className="hidden-input"
                                />
                                {selectedComponents.includes(comp.id) ? (
                                    <FaRegSquareCheck className="dropdown-icon active" />
                                ) : (
                                    <FaRegSquare className="dropdown-icon" />
                                )}
                                <span className={`dropdown-label ${selectedComponents.includes(comp.id) ? 'dropdown-label-active' : ''}`}>
                  {comp.label}
                </span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default PageNavigationV2;
