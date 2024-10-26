// src/components/TenantServices.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceCard from '../../components/ui/card/service-card2';
import "./landing.css"


const TenantServices = () => {

  const { tenantID } = useParams();
  const [services, setServices] = useState([
    {
        "id": 1,
        "service_name": "RTCVision.eb1.g3",
        "is_active": true,
        "status": "Healthy"
    },
    {
        "id": 2,
        "service_name": "RTCVision.eb1.g4",
        "is_active": false,
        "status": "Healthy"
    },
    {
        "id": 3,
        "service_name": "RTCVision.eb2.g3",
        "is_active": true,
        "status": "Healthy"
    }
  ]);

  const toggleActive = async (serviceId) => {
    const updatedServices = services.map((service) =>
      service.id === serviceId ? { ...service, is_active: !service.is_active } : service
    );
    setServices(updatedServices);
    };

  const viewDetails = (serviceId) => {
    window.location.href = `/${tenantID}/services/${serviceId}`;
  };

  return (
    <div className='landing-container'>
        <div className='landing-header'>
            <span>Services</span>
        </div>
        <div className="tenant-services">
        {services.map((service) => (
            <ServiceCard
            key={service.id}
            service={service}
            onToggleActive={toggleActive}
            onViewDetails={viewDetails}
            />
        ))}
        </div>
    </div>

  );
};

export default TenantServices;
