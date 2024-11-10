import React, { useState } from "react";
import {menu} from '../Content'

const IconButton = ({ icon: Icon, menuTitle, isActive, onClick }) => {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <div 
            className="icons-list"
            onMouseEnter={() => setIsMenu(true)}
            onMouseLeave={() => setIsMenu(false)}
        >
            <div
                className={`icon-wrapper ${isActive ? 'active' : ''}`}
                onClick={() => onClick(menuTitle)}
            >
                <Icon className='icon' />
            </div>

            {/* {isMenu && menu[menuTitle] && (
                <div className="tooltip-menu">
                    <ul>
                        {menu[menuTitle].subMenu.map((subItem) => (
                            <li key={subItem.title}>{subItem.title}</li>
                        ))}
                    </ul>
                </div>
            )} */}
        </div>
    );
};
export default IconButton;
