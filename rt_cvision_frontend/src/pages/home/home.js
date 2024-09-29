import React from "react";
import { useState } from "react";
import './home.css'
import '../style.css'
import VisionIcon from '../../assets/icons/vision.png'
import ClientList from "../../components/ui/client/client-list";


const HomePage = () => {

  const [clients, setClients] = useState([
    { id: 1, name: "Plant A", location: "Berlin", services: 4 },
    { id: 2, name: "Plant B", location: "Munich", services: 2 },
    { id: 3, name: "Plant C", location: "Frankfurt", services: 3 },
  ]);

  return (
    <div className="home-container">
      <div className="home-content">

        <div className='section-header'>
            <div className="section-title">
                <img src={VisionIcon} className="section-title grow" alt="vision-icon"></img>
                <span>Real-Time Computer Vision</span>
            </div>
        </div>

        <div className='content-section'>
          <ClientList clients={clients}/>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
