import React from "react";
import "./TileWrapper.scss"; // Стили для компонента
import { TbArrowBigRight } from "react-icons/tb";
import { TbDotsVertical } from "react-icons/tb";

const TileWrapper = ({ columns, data, onTileClick, selectedItem }) => {
  return (
    <div className="tile-wrapper">
      {data.map((item) => {
        // Проверяем, является ли текущая плитка выбранной
        const isSelected = selectedItem && selectedItem.id === item.id;

        // Формируем Offers, включая только те, где значение true
        const offers = [];
        if (item.AudioConference) offers.push("Audio Conference");
        if (item.Calling) offers.push("Calling");

        return (
          <div
            key={item.id}
            className={`tile-item ${isSelected ? "selected-tile" : ""}`}
            onClick={() => onTileClick(item)} // Передаём объект плитки
          >
            {/* Основные поля */}
            <div className="tile-row tile-row-header">
              <div>
                <span className="tile-title">{item.Operator}</span>
                <p className="tile-value title-website">{item.Website}</p>
              </div>
              <div
                className={`tile-status ${
                  item.State === "Active"
                    ? "active"
                    : item.State === "Blocked"
                    ? "blocked"
                    : "privatepreview"
                }-state`}
              >
                {item.State}
              </div>
            </div>

            {/* Поле Offers */}
            <div className="tile-row tile-row-content">
              <span className="tile-label">Offers:</span>
              <span className="tile-value">
                {offers.length > 0 ? offers.join(", ") : "No Offers"}
              </span>
            </div>

            <div className="tile-footer">
              <div className="to-operator-block">
                <TbArrowBigRight className="to-operator-icon" />
                <span className="to-operator"> TO OPERATOR</span>
              </div>

              <div>
                <TbDotsVertical className="tile-settings" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TileWrapper;

// const TileWrapper = ({ data, onTileClick, selectedTile}) => {
//
//     return (
//         <div className="tile-wrapper">
//             {data.map((item, index) => {
//                 const isSelected = selectedTile === index; // Проверка на выбранную плитку
//
//                 // Формируем Offers, включая только те, где значение true
//                 const offers = [];
//                 if (item.AudioConference) offers.push("Audio Conference");
//                 if (item.Calling) offers.push("Calling");
//
//                 return (
//                     <div
//                         key={index}
//                         className={`tile-item ${isSelected ? "selected-tile" : ""}`}
//                         onClick={() => onTileClick(item, index)} // Передаём данные и индекс
//                     >
//                         {/* Основные поля */}
//                         <div className="tile-row tile-row-header">
//                             <div>
//                                 <span className="tile-title">{item.Operator}</span>
//                                 <p className="tile-value title-website">{item.Website}</p>
//                             </div>
//                             <div className={`tile-status ${
//                                 item.State === "Active" ? "active" : item.State === "Blocked" ? "blocked" : "privatepreview"
//                             }-state`}>
//                                 {item.State}
//                             </div>
//                         </div>
//
//                         {/* Поле Offers */}
//                         <div className="tile-row tile-row-content">
//                             <span className="tile-label">Offers:</span>
//                             <span className="tile-value"> {offers.length > 0 ? offers.join(", ") : "No Offers"}</span>
//                         </div>
//
//                         <div className='tile-footer'>
//                             <div className='to-operator-block'>
//                                 <TbArrowBigRight className='to-operator-icon'/>
//                                 <span className='to-operator'> TO OPERATOR</span>
//                             </div>
//
//                             <div>
//                                 <TbDotsVertical className='tile-settings'/>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };
//
// export default TileWrapper;
//
