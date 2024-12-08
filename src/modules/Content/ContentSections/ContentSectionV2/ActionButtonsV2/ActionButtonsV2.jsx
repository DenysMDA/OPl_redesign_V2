// ActionButtonsV2.js
import React from "react";
import "./ActionButtonsV2.scss";
import {LuSearch} from "react-icons/lu";
import {FiSettings} from "react-icons/fi";
import {TiEdit} from "react-icons/ti";
import {RiDeleteBin6Line} from "react-icons/ri";
import {MdLibraryAdd} from "react-icons/md"; // Подключаем стили для компонента
import {CgMenuGridR} from "react-icons/cg";
import {GiHamburgerMenu} from "react-icons/gi";

const ActionButtonsV2 = ({actions, isSearchable, handleTypeSelect}) => {
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
                            <LuSearch className="icon"/>
                        </div>
                        <input placeholder="Search" type="text" className="search-input"/>
                    </div>
                )}
            </div>
            <div className="action-icon-block-right">
                <div className="visualiser-separator"/>
                {actions.map((action, index) => {
                    const Icon = iconMap[action.label] || null; // Получаем иконку из `iconMap`

                    const isDisabled = action.disabled;

                    return (
                        <div
                            key={index}
                            className={`action-icon-wrapper ${isDisabled ? "disabled" : ""}`}
                        >
                            <button onClick={action.onClick} disabled={isDisabled}>
                                {Icon && <Icon className="action-icon"/>} {action.label}
                            </button>
                        </div>
                    );
                })}

                <div className="visualiser-separator"/>
                <div className='visualiser-btn' onClick={() => handleTypeSelect(true)}>
                    <CgMenuGridR className="action-icon-visualiser"/>
                </div>

                <div className='visualiser-btn' onClick={() => handleTypeSelect(false)}>
                    <GiHamburgerMenu className="action-icon-visualiser"/>
                </div>

            </div>
        </div>
    );
};

export default ActionButtonsV2;
// const ActionButtonsV2 = ({ actions, isSearchable }) => {
//     return (
//         <div className="action-buttons">
//             <div className="action-icon-block">
//                 {actions.map((action, index) => {
//                     let Icon;
//                     switch (action.label) {
//                         case "Add":
//                             Icon = MdLibraryAdd;
//                             break;
//                         case "Edit":
//                             Icon = TiEdit;
//                             break;
//                         case "Delete":
//                             Icon = RiDeleteBin6Line;
//                             break;
//                         default:
//                             Icon = null;
//                     }
//                     return (
//                         <div key={index} className="action-icon-wrapper">
//                             <button onClick={action.onClick} >
//                                 {Icon && <Icon className="action-icon" />} {action.label}
//                             </button>
//                             {/*<div className="action-buttons-separator"></div>*/}
//                         </div>
//                     );
//                 })}
//             </div>
//             <div className="action-icon-block-right">
//                 {isSearchable && (
//                     <div className="search">
//                         <div className="search-icon">
//                             <LuSearch className="icon" />
//                         </div>
//                         <input placeholder="Search" type="text" className="search-input" />
//                     </div>
//                 )}
//                 <div className="table-setting">
//                     <FiSettings />
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default ActionButtonsV2;
