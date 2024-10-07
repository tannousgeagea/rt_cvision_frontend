// src/components/WelcomePage.js
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "../../components/ui/button/select";
import "./welcome-page.css";
import productDemoGif from "../../assets/icons/product-demo.gif"
import goIcon from '../../assets/icons/go.png'

function WelcomePage() {
    const navigate = useNavigate();
    const [client, setClient] = useState(null)
    const [message, setMessage] = useState(""); // For animated text
    const fullMessage =
      "Welcome to rt-CVision - Real-time computer vision to monitor, analyze, and optimize waste management processes.";
  

    const options = ["AMK", "GML", "Tirme"];

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
      // navigate("/client");
      setClient(option);
    };

    const handleSelectedClient = () => {
      navigate(`/${client}`)
    }
  
    return (
      <div className="welcome-page">
        <div className="welcome-left">
            <div className="select-client">
                <h2>Select Client</h2>
                <div className="navigate-client">
                  <Select 
                    options={options}
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