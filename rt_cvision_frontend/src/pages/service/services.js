import React, { useState, useEffect } from "react";
import './services.css'
import { useParams } from "react-router-dom";
import { baseURL } from "../../components/api/base";
import Spinner from "../../components/ui/animation/spinner";
import ServiceCard from "../../components/ui/card/service-card2";
import useServiceData from "../../hooks/use-service-data";

const ServicePage = () => {
  const { tenantName, tenantID, serviceID } = useParams();
  const { data, loading, error } = useServiceData(baseURL, serviceID);
  const [services, setServices] = useState([])

  useEffect(() => {
    setServices(data)
  }, [data])

  const toggleActive = async (serviceId) => {
    const updatedServices = services.map((service) =>
      service.id === serviceId ? { ...service, is_active: !service.is_active } : service
    );
    setServices(updatedServices);
    };

  const viewDetails = (serviceId) => {
    window.location.href = `/${tenantName}/${tenantID}/services/${serviceID}/${serviceId}`;
  };

  if (error) return <p>Error ...</p>

  return (
      <div className="service-container">
        <div className="service-content">
          {services.map((item, idx) => (
            <ServiceCard
              key={idx}
              service={item}
              onToggleActive={toggleActive}
              onViewDetails={viewDetails}
            />
          ))}
          
          {loading && 
            <div className='loading-spinner'>
              <Spinner />
            </div>
          }
        </div>
      </div>
    );
  };

export default ServicePage