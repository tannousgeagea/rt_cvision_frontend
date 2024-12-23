import React, { useState } from 'react';
import './accordion.css';
// import closeIcon from '../../assets/icons/close.png'
import { motion } from "framer-motion";
import { FaHeartbeat, FaClipboardList, FaCogs, FaCodeBranch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md'

const AccordionPanel = ({ title, children, icon, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-panel">
      <div
        className="accordion-header"
        style={{ backgroundColor: color }}
        onClick={togglePanel}
      >
        <div className="header-icon">{icon}</div>
        <div className="header-title">{title}</div>
        <div className="header-toggle">{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const ProcessorAccordion = ({ data, onClose }) => {
  return (
    <div className="accordion-container">
      <div className='accordion-header'>
        <h2>{data.name.toUpperCase().replace(/_/g, " ")}</h2>
        <div className="close-button" onClick={() => onClose()}>
          <MdClose size={24} color="#333" />
        </div>
      </div>

      <AccordionPanel
        title="Status"
        icon={<FaHeartbeat />}
        color="#4caf50"
      >
        <p>Status: {data.status}</p>
        <p>Last checked: {data.last_checked}</p>
      </AccordionPanel>
      <AccordionPanel
        title="Logs"
        icon={<FaClipboardList />}
        color="#2196f3"
      >
        <ul>
          <li>12:30 PM - Processor started</li>
          <li>12:31 PM - Task completed</li>
          <li>12:32 PM - No errors</li>
        </ul>
      </AccordionPanel>
      <AccordionPanel
        title="Commands"
        icon={<FaCogs />}
        color="#ff9800"
      >
        <button className="command-btn">Restart</button>
        <button className="command-btn">Shut Down</button>
      </AccordionPanel>
      <AccordionPanel
        title="Dependencies"
        icon={<FaCodeBranch />}
        color="#9c27b0"
      >
        <p>Connected systems: System A, System B</p>
        <p>Dependencies: Service X, Service Y</p>
      </AccordionPanel>
    </div>
  );
};

export default ProcessorAccordion;
