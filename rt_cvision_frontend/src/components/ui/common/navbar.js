
import React from 'react';
import { useParams } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

  const { tenantID } = useParams();
  const items = [
    {
      "item": 'Live Stream',
      "ref": `/${tenantID}/livestream`,
    },

    {
      "item": 'Services',
      "ref": `/${tenantID}/services`,
    },

    {
      "item": 'Models',
      "ref": `/${tenantID}/models`,
    },

    {
      "item": 'Deploy',
      "ref": `/${tenantID}/deploy`,
    },

  ]
  return (
    <div className="navbar">
      <div className='navbar-header'>
        <h2>WASTEANT rt-CVision</h2>
      </div>
      <div className='navbar-content'>
        {items.map((item, index) => (
          <div className='navbar-item' key={index}>
            <a href={item.ref}>
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