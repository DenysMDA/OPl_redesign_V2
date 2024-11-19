import React, { useState } from "react";

const InputWithValidation = ({ label, type, regex, placeholder, errorMessage }) => {
    const [value, setValue] = useState("");
    const [isError, setIsError] = useState(false);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        // Проверка на валидность только если строка не пуста
        if (newValue && !regex.test(newValue)) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };

    return (
        <div className="input-with-validation">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={isError ? "input-error" : ""}
            />
            {/*{isError && <p className="error-message">{errorMessage}</p>}*/}
            <p className="error-message" style={{color: isError ? 'red' : 'transparent'}}>
                {errorMessage}
            </p>
        </div>
    );
};

export default InputWithValidation;
