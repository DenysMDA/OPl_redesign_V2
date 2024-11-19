import './RoutingPermission.scss'
import {useState} from "react";

const RoutingPermission = () => {
    const [isSwitch1On, setIsSwitch1On] = useState(true);
    const [isSwitch2On, setIsSwitch2On] = useState(false);

    const handleSwitch1Toggle = () => {
        setIsSwitch1On(!isSwitch1On);
    };

    const handleSwitch2Toggle = () => {
        setIsSwitch2On(!isSwitch2On);
    };

    return (
        <div className="routing-permission-container">
            <div className="routing-permission-row">
                <p>Geocoordinate Transmission</p>
                <div className="switch" onClick={handleSwitch1Toggle}>
                    <div className={`slider ${isSwitch1On ? "on" : "off"}`}>
                        {isSwitch1On ? "ON" : "OFF"}
                    </div>
                </div>
            </div>
            <div className="separator"/>
            <div className="routing-permission-row">
                <p>Emergency Call Native Handoff</p>
                <div className="switch" onClick={handleSwitch2Toggle}>
                    <div className={`slider ${isSwitch2On ? "on" : "off"}`}>
                        {isSwitch2On ? "ON" : "OFF"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoutingPermission;
