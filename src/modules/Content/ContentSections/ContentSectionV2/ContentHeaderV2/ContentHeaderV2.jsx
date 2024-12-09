import React from "react";
import "./ContentHeaderV2.scss";
import PageNavigationV2 from "../PageNavigationV2/PageNavigationV2";

const ContentHeaderV2 = ({
  activeSubMenu,
  collapseAllTables,
  expandAllTables,
  togglePanelVisibility,
  handleRowSelect,
  allComponents, // Пробрасываем в PageNavigationV2
  selectedComponents, // Пробрасываем в PageNavigationV2
  toggleComponent, // Пробрасываем в PageNavigationV2
}) => {
  return (
    <div className="content-header">
      <h1>{activeSubMenu}</h1>
      <PageNavigationV2
        collapseAllTables={collapseAllTables}
        expandAllTables={expandAllTables}
        togglePanelVisibility={togglePanelVisibility}
        handleRowSelect={handleRowSelect}
        allComponents={allComponents} // Передаем в PageNavigationV2
        selectedComponents={selectedComponents} // Передаем в PageNavigationV2
        toggleComponent={toggleComponent} // Передаем в PageNavigationV2
        onButtonClick={(buttonName) =>
          console.log(`${buttonName} button clicked`)
        }
      />
    </div>
  );
};

// const ContentHeaderV2 = ({
//                              activeSubMenu,
//                              collapseAllTables,
//                              expandAllTables,
//                              pageNavigation = true,
//                              togglePanelVisibility,
//                              handleRowSelect,
//                          }) => {
//     const handleButtonClick = (buttonName) => {
//         console.log(`${buttonName} button clicked`);
//     };
//
//     return (
//         <div className="content-header">
//             <h1>{activeSubMenu}</h1>
//             {/* <div className="content-header-nav"> */}
//             {pageNavigation ? (
//                 <PageNavigationV2
//                     onButtonClick={handleButtonClick}
//                     collapseAllTables={collapseAllTables}
//                     expandAllTables={expandAllTables}
//                     togglePanelVisibility={togglePanelVisibility}
//                     handleRowSelect={handleRowSelect}
//                 />
//             ) : (
//                 <FiSettings className="icon-setting"/>
//             )}
//         </div>
//     );
// };

export default ContentHeaderV2;
