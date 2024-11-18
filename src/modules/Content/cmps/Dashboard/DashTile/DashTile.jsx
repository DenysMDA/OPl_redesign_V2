import React from 'react';
import './DashTile.scss'; // Подключаем стили для компонента DashTile

const DashTile = ({ title, children, footerContent }) => {
    return (
        <div className="tile">
            <div className="tile-header">{title}</div>
            <div className="tile-content">{children}</div>
            <div className="tile-footer">{footerContent}</div>
        </div>
    );
};

export default DashTile;
