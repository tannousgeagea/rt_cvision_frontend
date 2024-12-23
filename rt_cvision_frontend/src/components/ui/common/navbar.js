
import React from 'react';
import { useParams } from 'react-router-dom';
import './navbar.css';

import LiveStreamIcon from '../../../assets/icons/nav/live-stream.png'
import ServicesIcon from '../../../assets/icons/nav/services.png'
import ModelsIcon from '../../../assets/icons/nav/ai-model.png'
import DeployIcon from '../../../assets/icons/nav/shuttle.png'

const Navbar = () => {

  const { tenantID } = useParams();
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
  return (
    <div className="navbar">
      <div className='navbar-header'>
        <h2>RTCVision</h2>
      </div>
      <div className='navbar-content'>
        {items.map((item, index) => (
          <div className='navbar-item' key={index}>
            <a href={item.ref}>
              <img src={item.icon}></img>
              <span>{item.item}</span>
            </a>
          </div>
        ))}
      </div>


      {/* You can add more items here */}
    </div>
  );
};

export default Navbar;