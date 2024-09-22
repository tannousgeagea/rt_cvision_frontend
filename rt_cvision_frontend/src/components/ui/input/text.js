import React from "react";
import InputLabel from "./input-label";
import infoIcon from '../../../assets/icons/info.png'
import './input-style.css'

const TextInput = ({ name, value, description, onChange }) => {
    return (
        <div className="input-container">
            <InputLabel 
                name={name}
                description={description}
            />

            <input 
                type="text"
                name={name}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
            />
        </div>
    )
}

export default TextInput