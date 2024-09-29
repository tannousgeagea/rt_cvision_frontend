
import React from "react";
import ClientCard from "./client-card";
import './style.css'

function ClientList({ clients }) {
  return (
    <div className="client-list">
      {clients.map(client => (
        <ClientCard key={client.id} client={client} />
      ))}
    </div>
  );
}

export default ClientList;