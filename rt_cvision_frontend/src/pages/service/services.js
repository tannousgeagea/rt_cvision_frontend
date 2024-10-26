import React from "react";
import './services.css'
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/use-fetch-data";
import Spinner from "../../components/ui/animation/spinner";
import ServiceCard from "../../components/ui/card/service-card2";

const ServicePage = () => {
  const { tenantID, serviceID } = useParams();
  const { data, loading, error } = useFetchData('/api/v1/processor')
  
  const toggleActive = async (serviceId) => {
    const updatedServices = services.map((service) =>
      service.id === serviceId ? { ...service, is_active: !service.is_active } : service
    );
    setServices(updatedServices);
    };

  const viewDetails = (serviceId) => {
    window.location.href = `/${tenantID}/services/${serviceID}/${serviceId}`;
  };

  if (error) return <p>Error ...</p>

  return (
      <div className="service-container">
        <div className="service-content">
          {Object.keys(data).map((item, idx) => (
            <ServiceCard
              key={item.id}
              service={item}
              onToggleActive={toggleActive}
              onViewDetails={viewDetails}
            />
            // </Link>
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