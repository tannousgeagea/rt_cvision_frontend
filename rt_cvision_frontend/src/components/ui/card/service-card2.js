// src/components/ServiceCard.js
import React from 'react';
import Switch from 'react-switch';
import './service-card2.css'

const ServiceCard = ({ service, onToggleActive, onViewDetails }) => {
  return (
    <div className="service-card">
      <div className='service-card-header'>
        <h3>{service.service_name}</h3>
        <label>
          <span>{service.is_active ? 'Active' : 'Not Active'}</span>
            <Switch
              checked={service.is_active}
              onChange={() => onToggleActive(service.id)}
              onColor="#4CAF50"  // Color when active
              offColor="#FF5722" // Color when inactive
              uncheckedIcon={false}  // Optional: Remove default "off" icon
              checkedIcon={false}    // Optional: Remove default "on" icon
            />
      </label>
      </div>
      <p className={service.is_active ? 'active' : 'inactive'}>
        Status: {service.status}
      </p>
      
      <button onClick={() => onViewDetails(service.id)}>Details</button>
    </div>
  );
};

export default ServiceCard;
