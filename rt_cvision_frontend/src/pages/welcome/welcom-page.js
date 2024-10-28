// src/components/WelcomePage.js
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../components/api/base";
import useFetchData from "../../hooks/use-fetch-data";
import Select from "../../components/ui/button/select";
import productDemoGif from "../../assets/icons/product-demo.gif"
import goIcon from '../../assets/icons/go.png'
import "./welcome-page.css";

function WelcomePage() {
    const navigate = useNavigate();
    const [client, setClient] = useState(null)
    const [message, setMessage] = useState(""); // For animated text
    const { data, loading, error } = useFetchData(`${baseURL}/api/v1/tenants`)
    const fullMessage =
      "Welcome to rt-CVision - Real-time computer vision to monitor, analyze, and optimize waste management processes.";

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullMessage.length) {
            setMessage(fullMessage.slice(0, index + 1));
            index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
  
      return () => clearInterval(interval);
    }, []);

    const handleSelectClient = (option) => {
      setClient(option);
    };

    const handleSelectedClient = () => {
      navigate(`/${client.tenant_id.toLowerCase()}/services`)
    }
  
    return (
      <div className="welcome-page">
        <div className="welcome-left">
            <div className="select-client">
                <h2>Select Client</h2>
                <div className="navigate-client">
                  <Select 
                    options={data}
                    onSelect={handleSelectClient}
                  />

                  <div className="select-client-btn" onClick={handleSelectedClient}>
                      <img src={goIcon} alt="go-icon"></img>
                  </div>

                </div>

            </div>
        </div>

  
        <div className="welcome-right">
          <div className="product-gif-container">
            <img src={productDemoGif} alt="Product demo" className="product-gif" />
            <div className="overlay-text">
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default WelcomePage;