import React, { useState } from "react";
import "./TabComponent.scss";
import RoutingPermission from "./RoutingPermission/RoutingPermission";

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tab-container">
            <div className="tabs">
                <div
                    className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                    onClick={() => handleTabClick("tab1")}
                >
                    Routing Permission
                </div>
                <div
                    className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                    onClick={() => handleTabClick("tab2")}
                >
                    Shared Calling
                </div>
            </div>

            <div className="tab-content">
                {activeTab === "tab1" && (
                    <div className="content">
                        <RoutingPermission/>
                    </div>
                )}
                {activeTab === "tab2" && (
                    <div className="content">
                        <h3>Контент Вкладки 2</h3>
                        <p>Здесь отображается контент для второй вкладки.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// const TabComponent = () => {
//     const [activeTab, setActiveTab] = useState("tab1");
//
//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };
//
//     return (
//         <div className="tab-container">
//             <div className="tabs">
//                 <div
//                     className={`tab ${activeTab === "tab1" ? "active" : ""}`}
//                     onClick={() => handleTabClick("tab1")}
//                 >
//                     Вкладка 1
//                 </div>
//                 <div
//                     className={`tab ${activeTab === "tab2" ? "active" : ""}`}
//                     onClick={() => handleTabClick("tab2")}
//                 >
//                     Вкладка 2
//                 </div>
//             </div>
//
//             <div className="tab-content">
//                 {activeTab === "tab1" && (
//                     <div className="content">
//                         <h3>Контент Вкладки 1</h3>
//                         <p>Здесь отображается контент для первой вкладки.</p>
//                     </div>
//                 )}
//                 {activeTab === "tab2" && (
//                     <div className="content">
//                         <h3>Контент Вкладки 2</h3>
//                         <p>Здесь отображается контент для второй вкладки.</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

export default TabComponent;
