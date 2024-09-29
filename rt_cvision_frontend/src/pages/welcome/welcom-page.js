// src/components/WelcomePage.js
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./welcome-page.css";
import productDemoGif from "../../assets/icons/product-demo.gif"

function WelcomePage() {
    const navigate = useNavigate();
    const [message, setMessage] = useState(""); // For animated text
    const fullMessage =
      "Welcome to rt-CVision - Real-time computer vision to monitor, analyze, and optimize waste management processes.";
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullMessage.length) {
          // Safeguard to avoid undefined being appended
        //   setMessage((prev) => prev + (fullMessage[index] || ""));
            setMessage(fullMessage.slice(0, index + 1));
            index++;
        } else {
          clearInterval(interval); // Stop once the full message is shown
        }
      }, 50); // Adjust this for speed of animation
  
      return () => clearInterval(interval); // Cleanup
    }, []);

    const handleSelectClient = () => {
      navigate("/client");
    };
  
    return (
      <div className="welcome-page">
        <div className="welcome-left">
            <div className="select-client">
                <h2>Select Your Plant</h2>
                <p>Please select your incineration plant to view the running services:</p>
                <div className="select-client-btn" onClick={handleSelectClient}>
                    Select Client
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