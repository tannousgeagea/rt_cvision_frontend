import React from "react";
import InputLabel from "./input-label";
import './input-style.css'
import infoIcon from '../../../assets/icons/info.png'

const CheckboxInput = ({ name, value, description, onChange }) => {
    return (
        <div className="input-container">
            <InputLabel 
                name={name}
                description={description}
            />
            <div className="checkbox-input">
                {Object.keys(value).map((key) => (
                    <div key={key} className="checkbox-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={value[key]}
                                onChange={(e) => onChange(name, { ...value, [key]: e.target.checked })}
                            />
                            <span>{key.replace(/_/g, ' ').toUpperCase()}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CheckboxInput