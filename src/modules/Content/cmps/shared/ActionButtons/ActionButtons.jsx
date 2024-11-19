// ActionButtons.js
import React from "react";
import "./ActionButtons.scss";
import {LuSearch} from "react-icons/lu";
import {FiSettings} from "react-icons/fi";
import {TiEdit} from "react-icons/ti";
import {RiDeleteBin6Line} from "react-icons/ri";
import {MdLibraryAdd} from "react-icons/md"; // Подключаем стили для компонента


const ActionButtons = ({ actions, isSearchable }) => {
    return (
        <div className="action-buttons">
            <div className="action-icon-block">
                {actions.map((action, index) => {
                    let Icon;
                    switch (action.label) {
                        case "Add":
                            Icon = MdLibraryAdd;
                            break;
                        case "Edit":
                            Icon = TiEdit;
                            break;
                        case "Delete":
                            Icon = RiDeleteBin6Line;
                            break;
                        default:
                            Icon = null;
                    }

                    // Используем свойство `disabled` из объекта `action`
                    const isDisabled = action.disabled;

                    return (
                        <div
                            key={index}
                            className={`action-icon-wrapper ${isDisabled ? "disabled" : ""}`}
                        >
                            <button onClick={action.onClick} disabled={isDisabled}>
                                {Icon && <Icon className="action-icon" />} {action.label}
                            </button>
                            {/*<div className="action-buttons-separator"></div>*/}
                        </div>
                    );
                })}
            </div>
            <div className="action-icon-block-right">
                {isSearchable && (
                    <div className="search">
                        <div className="search-icon">
                            <LuSearch className="icon" />
                        </div>
                        <input placeholder="Search" type="text" className="search-input" />
                    </div>
                )}
                <div className="table-setting">
                    <FiSettings />
                </div>
            </div>
        </div>
    );
};

export default ActionButtons;
// const ActionButtons = ({ actions, isSearchable }) => {
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
// export default ActionButtons;
