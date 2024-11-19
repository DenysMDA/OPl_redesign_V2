import React, {useRef, useEffect, useState} from "react";
import {FaSpinner, FaRegCheckCircle} from "react-icons/fa";
import InputWithValidation from "../InputWithValidation";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Panel.scss";
import ToggleSwitch from "../shared/ToggleSwitch/ToggleSwitch";

const Panel = ({isVisible, onClose}) => {
    const panelRef = useRef();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRequestSuccessful, setIsRequestSuccessful] = useState(false);
    const [isSwitch1On, setIsSwitch1On] = useState(true);
    const [isSwitch2On, setIsSwitch2On] = useState(false);

    // Закрыть панель при клике вне её границ
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (panelRef.current && !panelRef.current.contains(event.target) && !isModalVisible) {
                onClose();
            }
        };
        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isVisible, onClose, isModalVisible]);

    // Закрыть модальное окно через 2 секунды после успешного запроса
    useEffect(() => {
        if (isRequestSuccessful) {
            const timer = setTimeout(() => {
                setIsModalVisible(false);
            }, 2000);
            return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
        }
    }, [isRequestSuccessful]);

    // Функция для открытия модального окна
    const handleSendClick = () => {
        setIsModalVisible(true);
        setIsRequestSuccessful(false);
    };

    // Функция для отправки запроса
    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsRequestSuccessful(true);
        }, 2000);
    };

    // Функция для закрытия модального окна
    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    // Опции для DropdownMenu
    const dropdownOptions = ["CA", "US", "AU"];

    return (
        <>
            {/* Оверлей для затемнения фона */}
            {isVisible &&
                <div className={`overlay ${isVisible ? "visible" : ""}`}/>} {/* Фон появляется при открытии панели */}

            <div className={`panel ${isVisible ? "visible" : ""}`} ref={panelRef}>
                <button className="close-btn" onClick={onClose}>
                    ✖
                </button>
                <h2 className="panel-title">Configuration Panel</h2>
                <div className="title-separator"></div>

                <div className="group-wrapper">
                    <div className="input-group">
                        <InputWithValidation
                            label="Email"
                            type="text"
                            regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                            placeholder="example@mail.com"
                            errorMessage="wrong email format"
                        />
                    </div>

                    <div className="input-group">
                        <InputWithValidation
                            label="Phone Number"
                            type="text"
                            regex={/^\+?[0-9]{10,15}$/}
                            placeholder="+1234567890"
                            errorMessage="wrong phone number format"
                        />
                    </div>

                    <div className="input-group">
                        <InputWithValidation
                            label="Tenand ID"
                            type="password"
                            regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/}
                            placeholder="ID number"
                            errorMessage="wrong ID format"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="dropdown">Regions</label>
                        <DropdownMenu options={dropdownOptions} placeholder="Choose the option"/>
                    </div>
                </div>

                <div className="group-wrapper">
                    <p className="switcher-title">Routing Permission</p>
                    {/*<div className="separator"></div>*/}
                    <div className="toggle-group">
                        <label>Geocoordinate Transmission:</label>
                        <ToggleSwitch isOn={isSwitch1On} handleToggle={() => setIsSwitch1On(!isSwitch1On)}/>
                        <label>Emergency Call Native Handoff:</label>
                        <ToggleSwitch isOn={isSwitch2On} handleToggle={() => setIsSwitch2On(!isSwitch2On)}/>
                    </div>
                </div>


                <button className="send-btn" onClick={handleSendClick}>
                    Send
                </button>

                {isModalVisible && (
                    <div className="modal-wrapper">
                        <div className="modal">
                            {isLoading ? (
                                <div className="loading">
                                    <FaSpinner className="spinner-icon"/>
                                    <button className="cancel-btn" onClick={handleCloseModal}>
                                        Cancel
                                    </button>
                                </div>
                            ) : isRequestSuccessful ? (
                                <div className="success-message">
                                    <FaRegCheckCircle/>
                                    <p>SUCCESS!</p>
                                </div>
                            ) : (
                                <>
                                    <div>
                                        <p>Do you want to send the request?</p>
                                        <p className="modal-desc">
                                            Once confirmed, the request will be sent and you will not be able to change
                                            the configuration anymore. Are you sure you want to send the request?
                                        </p>
                                    </div>
                                    <div className="modal-buttons">
                                        <button className="submit-btn" onClick={handleSubmit}>
                                            Confirm
                                        </button>
                                        <button className="cancel-btn" onClick={handleCloseModal}>
                                            Cancel
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Panel;

// import React, {useRef, useEffect, useState} from "react";
// import {FaSpinner} from "react-icons/fa";
// import InputWithValidation from "../InputWithValidation";
// import DropdownMenu from "../DropdownMenu/DropdownMenu";
// import "./Panel.scss";
// import ToggleSwitch from "../shared/ToggleSwitch/ToggleSwitch";
// import { FaRegCheckCircle } from "react-icons/fa";
//
// const Panel = ({isVisible, onClose}) => {
//     const panelRef = useRef();
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isRequestSuccessful, setIsRequestSuccessful] = useState(false);
//     const [isSwitch1On, setIsSwitch1On] = useState(true);
//     const [isSwitch2On, setIsSwitch2On] = useState(false);
//     // Закрыть панель при клике вне её границ
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (panelRef.current && !panelRef.current.contains(event.target) && !isModalVisible) {
//                 onClose();
//             }
//         };
//         if (isVisible) {
//             document.addEventListener("mousedown", handleClickOutside);
//         }
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isVisible, onClose, isModalVisible]);
//
//     // Функция для открытия модального окна
//     const handleSendClick = () => {
//         setIsModalVisible(true);
//         setIsRequestSuccessful(false);
//     };
//
//     // Функция для отправки запроса
//     const handleSubmit = () => {
//         setIsLoading(true);
//         setTimeout(() => {
//             setIsLoading(false);
//             setIsRequestSuccessful(true);
//         }, 2000);
//     };
//
//     // Функция для закрытия модального окна
//     const handleCloseModal = () => {
//         setIsModalVisible(false);
//     };
//
//     // Опции для DropdownMenu
//     const dropdownOptions = ["CA", "US", "AU"];
//
//     return (
//         <>
//             {/* Оверлей для затемнения фона */}
//             {isVisible &&
//                 <div className={`overlay ${isVisible ? "visible" : ""}`}/>} {/* Фон появляется при открытии панели */}
//
//             <div className={`panel ${isVisible ? "visible" : ""}`} ref={panelRef}>
//                 <button className="close-btn" onClick={onClose}>
//                     ✖
//                 </button>
//                 <h2 className='panel-title'>Configuration Panel</h2>
//                 <div className="title-separator"></div>
//
//                 <div className="input-group">
//                     <InputWithValidation
//                         label="Email"
//                         type="text"
//                         regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
//                         placeholder="example@mail.com"
//                         errorMessage="wrong email format"
//                     />
//                 </div>
//
//                 <div className="input-group">
//                     <InputWithValidation
//                         label="Phone Number"
//                         type="text"
//                         regex={/^\+?[0-9]{10,15}$/}
//                         placeholder="+1234567890"
//                         errorMessage="wrong phone number format"
//                     />
//                 </div>
//
//                 <div className="input-group">
//                     <InputWithValidation
//                         label="Tenand ID"
//                         type="password"
//                         regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/}
//                         placeholder="ID number"
//                         errorMessage="wrong ID format"
//                     />
//                 </div>
//
//                 <div className="input-group">
//                     <label htmlFor="dropdown">Regions</label>
//                     <DropdownMenu options={dropdownOptions} placeholder="Choose the option"/>
//                 </div>
//                 <p className='switcher-title'>Routing Permission</p>
//                 <div className="separator"></div>
//                 <div className="toggle-group">
//                     <label>Geocoordinate Transmission:</label>
//                     <ToggleSwitch
//                         isOn={isSwitch1On}
//                         handleToggle={() => setIsSwitch1On(!isSwitch1On)}
//                     />
//                     <label>Emergency Call Native Handoff:</label>
//                     <ToggleSwitch
//                         isOn={isSwitch2On}
//                         handleToggle={() => setIsSwitch2On(!isSwitch2On)}
//                     />
//                 </div>
//
//                 <button className="send-btn" onClick={handleSendClick}>
//                     Send
//                 </button>
//
//                 {isModalVisible && (
//                     <div className="modal-wrapper">
//                         <div className="modal">
//                             {isLoading ? (
//                                 <div className="loading">
//                                     <FaSpinner className="spinner-icon"/>
//                                     <button className="cancel-btn" onClick={handleCloseModal}>
//                                         Cancel
//                                     </button>
//                                 </div>
//                             ) : isRequestSuccessful ? (
//                                 <div className="success-message">
//                                     <p>SUCCESS!</p>
//                                     <FaRegCheckCircle />
//                                     <button className="ok-btn" onClick={handleCloseModal}>
//                                         OK
//                                     </button>
//                                 </div>
//                             ) : (
//                                 <>
//                                     <div>
//                                         <p>Do you want to send the request?</p>
//                                         <p className='modal-desc'>
//                                             Once confirmed, the request will be sent and you will not be able to change the configuration anymore.
//                                             Are you sure you want to send the request?
//                                         </p>
//                                     </div>
//                                     <div className="modal-buttons">
//                                         <button className="submit-btn" onClick={handleSubmit}>
//                                             Confirm
//                                         </button>
//                                         <button className="cancel-btn" onClick={handleCloseModal}>
//                                             Cancel
//                                         </button>
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };
//
// export default Panel;
