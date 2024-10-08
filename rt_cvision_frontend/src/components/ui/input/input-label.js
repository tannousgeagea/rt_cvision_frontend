import React from "react";
import './input-style.css'
import infoIcon from '../../../assets/icons/info.png'

const InputLabel = ({ name, description }) => {
    return (
        <div className="input-label">
            <label>{name.replace(/_/g, ' ').toUpperCase()}</label>
            <div className="info-section">
                <img src={infoIcon} alt="icon" />
                <div className="tooltip">
                    <p className="description"><strong>{description}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default InputLabel