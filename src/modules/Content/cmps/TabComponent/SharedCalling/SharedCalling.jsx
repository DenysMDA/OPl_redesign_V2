import React, { useState } from "react";
import "./SharedCalling.scss";
import ActionButtons from "../../shared/ActionButtons/ActionButtons"; // Импортируем стили

const SharedCalling = () => {
  const actions = [
    {
      label: "Add",
      onClick: () => console.log("Add clicked!"),
      disabled: false,
    },
    {
      label: "Edit",
      onClick: () => console.log("Edit clicked!"),
      disabled: true,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(
    "Disable in All Markets"
  );

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="header">
        <ActionButtons actions={actions} isSearchable={false} />
      </div>
      <div className="radio-button-group-wrapper">
        <div className="radio-button-group">
          <button
            className={`radio-button ${
              selectedOption === "Disable in All Markets" ? "active" : ""
            }`}
            onClick={() => handleOptionChange("Disable in All Markets")}
          >
            Disable in All Markets
          </button>
          <button
            className={`radio-button ${
              selectedOption === "Enable in All Markets" ? "active" : ""
            }`}
            onClick={() => handleOptionChange("Enable in All Markets")}
          >
            Enable in All Markets
          </button>
          <button
            className={`radio-button ${
              selectedOption === "Disable in Some Markets" ? "active" : ""
            }`}
            onClick={() => handleOptionChange("Disable in Some Markets")}
          >
            Disable in Some Markets
          </button>
        </div>
      </div>

      <div className="routing-permission-container sc-container">
        <div className="routing-permission-row sc-row">
          <p className="title">Status:</p>
          <p className="status">ACTIVE</p>
        </div>
        <div className="separator" />
        <div className="routing-permission-row sc-row">
          <p className="title">Locations:</p>
          <p className="value">{selectedOption}</p>
        </div>
      </div>
    </div>
  );
};

export default SharedCalling;

// import "./SharedCalling.scss"
// import ActionButtonsV2 from "../../shared/ActionButtonsV2";
//
// const SharedCalling = () => {
//
//     const actions = [
//         { label: "Add", onClick: () => console.log("Add clicked!"), disabled: false },
//         { label: "Edit", onClick: () => console.log("Edit clicked!"), disabled: true }, // Эта кнопка будет неактивной
//     ];
//
//     return (
//         <div>
//             <div className="header">
//                 <ActionButtonsV2 actions={actions} isSearchable={false}/>
//             </div>
//         </div>
//     );
// };
//
// export default SharedCalling;
