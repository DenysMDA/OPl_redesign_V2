import React from "react";
import "./TileWrapper.scss"; // Стили для компонента

const TileWrapper = ({ columns, data, onTileClick, selectedTile, isActive }) => {
    return (
        <div className="tile-wrapper">
            {data.map((item, index) => {
                const isSelected = selectedTile === index; // Проверка на выбранную плитку
                return (
                    <div
                        key={index}
                        className={`tile-item ${isSelected ? "selected-tile" : ""}`}
                        onClick={() => onTileClick(item, index)} // Передаём данные и индекс
                    >
                        {columns.map((column) => (
                            <div key={column.accessor} className="tile-row">
                                <span className="tile-label">{column.Header}:</span>
                                <span className="tile-value">
                  {item[column.accessor] || "N/A"}
                </span>
                            </div>
                        ))}
                        {/*{isActive && isSelected && (*/}
                        {/*    <div className="tile-selected-icon">*/}
                        {/*        ✅ /!* Индикатор выбранной плитки *!/*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </div>
                );
            })}
        </div>
    );
};

export default TileWrapper;
