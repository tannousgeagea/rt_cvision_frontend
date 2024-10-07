import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import DropArrowIcon from '../../..//assets/icons/down-arrow.png'
import './select.css'

const Select = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const selectRef = useRef(null)
    
    const handleToggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    const handleSelectedOption = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (selectRef.current && !selectRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <div className="select-container" ref={selectRef}>
            <div className="select-button" onClick={handleToggleDropDown}>
                {selectedOption ? <spin>{selectedOption}</spin> : <span>Select an option</span>}
                <img src={DropArrowIcon} alt="drop-arrow" className="select-drop-icon"/>
            </div>

            {isOpen && (
                <div className="select-dropdown">
                    {options.map((option, idx) =>(
                        <div className="select-option" key={idx} onClick={() => handleSelectedOption(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}

export default Select