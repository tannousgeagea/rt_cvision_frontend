import React from 'react';
import InputLabel from "./input-label";
import infoIcon from '../../../assets/icons/info.png'

const SelectInput = ({ name, value, description, options, onChange }) => {
  return (
    <div className="input-container">
        <InputLabel 
            name={name}
            description={description}
        />
        <div className="select-input">
            <select
                id={name}
                name={name}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
            >
                {options.map((option, idx) => (
                <option key={idx} value={option.value}>
                    {option}
                </option>
                ))}
            </select>
        </div>

    </div>
  );
};

export default SelectInput;