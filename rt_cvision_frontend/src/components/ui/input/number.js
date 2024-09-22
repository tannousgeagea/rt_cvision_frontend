import React from "react";
import InputLabel from "./input-label";
import './input-style.css'
import infoIcon from '../../../assets/icons/info.png'

const NumberInput = ({ name, value, description, onChange }) => {
    return (
        <div className="input-container">
            <InputLabel 
                name={name}
                description={description}
            />
            <input 
                type="number"
                min="0"
                name={name}
                value={value} 
                onChange={(e) => onChange(name, parseFloat(e.target.value))}
            />
        </div>
    )
}

export default NumberInput