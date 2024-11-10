import React, { useRef, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import InputWithValidation from "../InputWithValidation";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Panel.scss";

const Panel = ({ isVisible, onClose }) => {
    const panelRef = useRef();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRequestSuccessful, setIsRequestSuccessful] = useState(false);

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
    const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

    return (
        <>
            {/* Оверлей для затемнения фона */}
            {isVisible && <div className={`overlay ${isVisible ? "visible" : ""}`} />} {/* Фон появляется при открытии панели */}

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

                <button className="send-btn" onClick={handleSendClick}>
                    Отправить
                </button>

                {isModalVisible && (
                    <div className="modal">
                        {isLoading ? (
                            <div className="loading">
                                <FaSpinner className="spinner-icon" />
                                <button className="cancel-btn" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                            </div>
                        ) : isRequestSuccessful ? (
                            <div className="success-message">
                                <p>Запрос успешно отправлен!</p>
                                <button className="ok-btn" onClick={handleCloseModal}>
                                    OK
                                </button>
                            </div>
                        ) : (
                            <>
                                <p>Вы уверены, что хотите отправить запрос?</p>
                                <div className="modal-buttons">
                                    <button className="submit-btn" onClick={handleSubmit}>
                                        Submit
                                    </button>
                                    <button className="cancel-btn" onClick={handleCloseModal}>
                                        Cancel
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Panel;
