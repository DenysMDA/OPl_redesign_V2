// ActionButtonsV2.js
import React from "react";
import "./ActionButtonsV2.scss";
import { LuSearch } from "react-icons/lu";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdLibraryAdd } from "react-icons/md"; // Подключаем стили для компонента
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const ActionButtonsV2 = ({
  actions,
  isSearchable,
  handleTypeSelect,
  selectedTileType,
}) => {
  const iconMap = {
    Add: MdLibraryAdd,
    Edit: TiEdit,
    Delete: RiDeleteBin6Line,
    Row: GiHamburgerMenu,
    Tiles: CgMenuGridR,
  };

  return (
    <div className="action-buttonsv2">
      <div className="action-icon-block">
        {isSearchable && (
          <div className="search">
            <div className="search-icon">
              <LuSearch className="icon" />
            </div>
            <input placeholder="Search" type="text" className="search-input" />
          </div>
        )}
      </div>
      <div className="action-icon-block-right">
        <div className="visualiser-separator" />
        {actions.map((action, index) => {
          const Icon = iconMap[action.label] || null; // Получаем иконку из `iconMap`

          const isDisabled = action.disabled;

          return (
            <div
              key={index}
              className={`action-icon-wrapper ${isDisabled ? "disabled" : ""}`}
            >
              <button onClick={action.onClick} disabled={isDisabled}>
                {Icon && <Icon className="action-icon" />} {action.label}
              </button>
            </div>
          );
        })}

        <div className="visualiser-separator" />

        <div className="visualiser-btn" onClick={() => handleTypeSelect(true)}>
          <CgMenuGridR
            className={`action-icon-visualiser ${
              selectedTileType ? "action-icon-visualiser-active" : ""
            }`}
          />
        </div>

        <div className="visualiser-btn" onClick={() => handleTypeSelect(false)}>
          <GiHamburgerMenu
            className={`action-icon-visualiser ${
              !selectedTileType ? "action-icon-visualiser-active" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ActionButtonsV2;
