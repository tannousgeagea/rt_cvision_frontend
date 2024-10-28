// src/components/TenantServices.js
import React, { useState, useEffect } from 'react';
import { baseURL } from '../../components/api/base';
import useFetchData from '../../hooks/use-fetch-data';
import { useParams } from 'react-router-dom';
import ServiceCard from '../../components/ui/card/service-card2';
import "./landing.css"


const TenantServices = () => {

  const { tenantID } = useParams();
  const { data, loading, error } = useFetchData(`${baseURL}/api/v1/instances/${tenantID}`);
  const [services, setServices] = useState(data);

  useEffect(() => {
    if (data && data.length > 0) {
      setServices(data);  // Update services with the new data
      console.log('Data updated:', data);
    }
  }, [data]);

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
