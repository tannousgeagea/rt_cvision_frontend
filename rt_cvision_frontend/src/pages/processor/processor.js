import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/use-fetch-data";
import Spinner from "../../components/ui/animation/spinner";
import ServiceCard from "../../components/ui/card/service-card2";
import ProcessorAccordion from "../../components/ui/panel/accordion";
import { motion, AnimatePresence } from "framer-motion";
import './processor.css'

const ProcessorPage = () => {
  const { tenantID, serviceID, processorName } = useParams();
  const { data, loading, error } = useFetchData(`http://10.7.0.6:23085/api/v1/processor/group/${processorName}`)
  const [showDetails, setShowDetails] = useState(false)
  const [index, setIndex] = useState(null)
  const [clickedCoords, setClickedCoords] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [services, setServices] = useState([])

  useEffect(() => {
    setServices(data)
  }, [data])

  const toggleActive = async (serviceId) => {
    const updatedServices = data.map((service) =>
      service.name === serviceId ? { ...service, is_active: !service.is_active } : service
    );
    setServices(updatedServices);
    };

  const handleClick = (idx, event) => {
    const rect = event.target.getBoundingClientRect();
    setClickedCoords({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });
    setShowDetails(true)
    setIndex(idx)
  };

  const handleClose = () => {
    setShowDetails(false);
  }

  if (error) return <p>Error loading data</p>

  const params = Array.isArray(data) ? data : data?.params || [];

  if (!params.length) {
    return <p>No parameters available</p>;
  }


  console.log(params)
  return (
      <div className="processor-container">
        <div className="processor-main">
          <div className="processor-content">
            {params.map((item, idx) => (
              <motion.div
                key={idx}
                onClick={(event) => handleClick(idx, event)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ServiceCard
                  key={item.id}
                  service={item}
                  onToggleActive={toggleActive}
                  onViewDetails={(event) => handleClick(idx, event)}
                />
              </motion.div>
            ))}
          </div>

          {loading && (
            <div className='loading-spinner'>
              <Spinner />
            </div>
          )}

          <AnimatePresence>
            {showDetails &&
              <motion.div
                className="expanded"
                initial={{
                  opacity: 0,
                  x: clickedCoords.x,
                  y: clickedCoords.y,
                  width: clickedCoords.width,
                  height: clickedCoords.height,
                }}
                animate={{
                  opacity: 1,
                  x: "50%",
                  y: "50%",
                  width: "80%",
                  height: "auto",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                exit={{
                  opacity: 0,
                  x: clickedCoords.x,
                  y: clickedCoords.y,
                  width: clickedCoords.width,
                  height: clickedCoords.height,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <ProcessorAccordion 
                  data={params[index]}
                  onClose={handleClose}
                />
              </motion.div>
            }
          </AnimatePresence>

        </div>
      </div>
    );
  };

export default ProcessorPage