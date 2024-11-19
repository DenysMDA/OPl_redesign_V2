import React from 'react';
import './DashTile.scss';
import UserChart from "./UserChart/UserChart";
import {HiExternalLink} from "react-icons/hi"; // Подключаем стили для компонента DashTile

const DashTile = ({ title, children, footerContent, className}) => {
    return (
        <div className={`tile ${className ? className : ''}`}>
            {/* Заголовок с классом drag-handle для перетаскивания */}
            <div className="tile-header drag-handle" style={{ cursor: 'move' }}>
                {title}
            </div>
            {/* Контент, который остаётся интерактивным */}
            <div className="tile-content">{children}</div>
            <div className="tile-footer">
                <>
                    <HiExternalLink/>
                    <span>learn more</span>
                </>
            </div>
        </div>
    );
};

export default DashTile;
