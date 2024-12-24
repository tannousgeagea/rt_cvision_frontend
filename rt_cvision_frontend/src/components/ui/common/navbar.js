
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './navbar.css';

import Logo from '../../../assets/icons/nav/vision.png'
import HamburgerIcon from '../../../assets/icons/nav/menu.png'; // Hamburger menu icon
import CloseIcon from '../../../assets/icons//nav/close.png';
import LiveStreamIcon from '../../../assets/icons/nav/live-stream.png'
import ServicesIcon from '../../../assets/icons/nav/services.png'
import ModelsIcon from '../../../assets/icons/nav/ai-model.png'
import DeployIcon from '../../../assets/icons/nav/shuttle.png'

const Navbar = () => {

  const { tenantID } = useParams();
  const [isExpanded, setIsExpanded] = useState(true);

  const items = [
    {
      "item": 'Live Stream',
      "ref": `/${tenantID}/livestream`,
      "icon": LiveStreamIcon,
    },

    {
      "item": 'Services',
      "ref": `/${tenantID}/services`,
      "icon": ServicesIcon
    },

    {
      "item": 'Models',
      "ref": `/${tenantID}/models`,
      "icon": ModelsIcon
    },

    {
      "item": 'Deploy',
      "ref": `/${tenantID}/deploy`,
      "icon": DeployIcon
    },

  ]

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded); // Toggle the navbar state
  };


  return (
    <div className={`navbar ${isExpanded ? 'expand' : 'collapsed'}`}>
      <div className='navbar-header'>
        <button className="toggle-button" onClick={toggleNavbar}>
          <img src={isExpanded ? CloseIcon : HamburgerIcon} alt="Toggle" />
        </button>
        <div className='navbar-title'>
          <img src={Logo}></img>
          {isExpanded && <h2>RTCVision</h2>}
        </div>
      </div>
      <div className='navbar-content'>
        {items.map((item, index) => (
          <div className={`navbar-item ${isExpanded ? 'expand' : 'collapsed'}`} key={index}>
            <a href={item.ref}>
              <img src={item.icon} alt={item.icon}></img>
              {isExpanded && <span>{item.item}</span>}
            </a>
          </div>
        ))}
      </div>


      {/* You can add more items here */}
    </div>
  );
};

export default Navbar;