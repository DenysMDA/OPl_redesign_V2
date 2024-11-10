import React, { useRef, useEffect } from "react";
import InputWithValidation from "./InputWithValidation";
import DropdownMenu from "./DropdownMenu"; // Импортируем новый компонент

const Panel = ({ isVisible, onClose }) => {
    const panelRef = useRef();

    // Закрыть панель при клике вне её границ
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (panelRef.current && !panelRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isVisible, onClose]);

    // Опции для DropdownMenu
    const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

    return (
        <div className={`panel ${isVisible ? "visible" : ""}`} ref={panelRef}>
            <button className="close-btn" onClick={onClose}>
                ✖
            </button>
            <h2>Configuration Panel</h2>

            <div className="input-group">
                <InputWithValidation
                    label="Email:"
                    type="text"
                    regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                    placeholder="example@mail.com"
                    errorMessage="Введите правильный адрес электронной почты"
                />
            </div>

            <div className="input-group">
                <InputWithValidation
                    label="Номер телефона:"
                    type="text"
                    regex={/^\+?[0-9]{10,15}$/}
                    placeholder="+1234567890"
                    errorMessage="Введите правильный номер телефона (10-15 цифр)"
                />
            </div>

            <div className="input-group">
                <InputWithValidation
                    label="Пароль:"
                    type="password"
                    regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/}
                    placeholder="Введите ваш пароль"
                    errorMessage="Пароль должен содержать минимум 8 символов, включая цифры, заглавные и строчные буквы"
                />
            </div>

            <div className="input-group">
                <label htmlFor="dropdown">Dropdown:</label>
                <DropdownMenu options={dropdownOptions} placeholder="Выберите опцию" />
            </div>

            <div className="radio-group">
                <label>
                    <input type="radio" name="radio" value="option1" />
                    Option 1
                </label>
                <label>
                    <input type="radio" name="radio" value="option2" />
                    Option 2
                </label>
            </div>

            <button className="send-btn">Отправить</button>
        </div>
    );
};

export default Panel;


// import React, { useRef, useEffect } from "react";
// import InputWithValidation from "./InputWithValidation";
// import DropdownMenu from "./DropdownMenu"; // Импортируем новый компонент
//
// const Panel = ({ isVisible, onClose }) => {
//     const panelRef = useRef();
//
//     // Закрыть панель при клике вне её границ
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (panelRef.current && !panelRef.current.contains(event.target)) {
//                 onClose();
//             }
//         };
//         if (isVisible) {
//             document.addEventListener("mousedown", handleClickOutside);
//         }
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isVisible, onClose]);
//
//     if (!isVisible) return null;
//
//     const dropdownOptions = ["Option 1", "Option 2", "Option 3"];
//
//     return (
//         <div className="panel" ref={panelRef}>
//             <button className="close-btn" onClick={onClose}>✖</button>
//             <h2>Configuration Panel</h2>
//
//             <div className="input-group">
//                 <InputWithValidation
//                     label="Email:"
//                     type="text"
//                     regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
//                     placeholder="example@mail.com"
//                     errorMessage="Введите правильный адрес электронной почты"
//                 />
//             </div>
//
//             <div className="input-group">
//                 <InputWithValidation
//                     label="Номер телефона:"
//                     type="text"
//                     regex={/^\+?[0-9]{10,15}$/}
//                     placeholder="+1234567890"
//                     errorMessage="Введите правильный номер телефона (10-15 цифр)"
//                 />
//             </div>
//
//             <div className="input-group">
//                 <InputWithValidation
//                     label="Пароль:"
//                     type="password"
//                     regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/}
//                     placeholder="Введите ваш пароль"
//                     errorMessage="Пароль должен содержать минимум 8 символов, включая цифры, заглавные и строчные буквы"
//                 />
//             </div>
//
//             <div className="input-group">
//                 <label htmlFor="dropdown">Dropdown:</label>
//                 <DropdownMenu options={dropdownOptions} placeholder="Выберите опцию" />
//             </div>
//
//             <div className="radio-group">
//                 <label>
//                     <input type="radio" name="radio" value="option1" />
//                     Option 1
//                 </label>
//                 <label>
//                     <input type="radio" name="radio" value="option2" />
//                     Option 2
//                 </label>
//             </div>
//
//             <button className="send-btn">Отправить</button>
//         </div>
//     );
// };
//
// export default Panel;
