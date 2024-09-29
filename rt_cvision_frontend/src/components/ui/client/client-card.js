// src/components/ClientCard.js
import React from "react";
import './style.css'

function ClientCard({ client }) {
  return (
    <div className="client-card">
      <h2>{client.name}</h2>
      <p>Location: {client.location}</p>
      <p>Services Deployed: {client.services}</p>
    </div>
  );
}

export default ClientCard;
