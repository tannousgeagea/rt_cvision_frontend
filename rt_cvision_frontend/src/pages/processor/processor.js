import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/use-fetch-data";
import Spinner from "../../components/ui/animation/spinner";
import ProjectCard from "../../components/ui/card/service-card";
import ServiceCard from "../../components/ui/card/service-card2";
import ProcessorDetails from "../../components/ui/common/processor-details";
import '../style.css'
import './processor.css'
import '../service/services'
import closeIcon from '../../assets/icons/close.png'
import processorIcon from '../../assets/icons/capability.png'

const ProcessorPage = () => {
  const { tenantID, serviceID, processorName } = useParams();
  const { data, loading, error } = useFetchData(`http://localhost:23085/api/v1/processor/group/${processorName}`)
  const [showDetails, setShowDetails] = useState(false)
  const [index, setIndex] = useState(null)

  const toggleActive = async (serviceId) => {
    const updatedServices = services.map((service) =>
      service.id === serviceId ? { ...service, is_active: !service.is_active } : service
    );
    setServices(updatedServices);
    };

  const viewDetails = (serviceId) => {
    window.location.href = `/${tenantID}/services/${serviceID}/${serviceId}`;
  };

  const handleClick = (idx) => {
    setShowDetails(true);
    setIndex(idx)
  };

  const handleClose = () => {
    setShowDetails(false);
  }

  if (error) return <p>Error loading data</p>

  return (
      <div className="processor-container">
        <div className="processor-content">
          {data.map((item, idx) => (
            <div key={idx} onClick={() => handleClick(idx)}>
              <ServiceCard
                key={item.id}
                service={item}
                onToggleActive={toggleActive}
                onViewDetails={viewDetails}
              />
            </div>
          ))}

          {loading && 
            <div className='loading-spinner'>
              <Spinner />
            </div>
          }

          {showDetails &&
            <div className="expanded">
              <div className="close-button" onClick={() => handleClose()}>
                <img src={closeIcon} />
              </div>
              <ProcessorDetails data={data[index]}/>
            </div>
          }
        </div>
      </div>
    );
  };

export default ProcessorPage