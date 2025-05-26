import React from 'react';
import './ClientSignatureBand.css';

const ClientSignatureBand = ({ 
  referenceClient, 
  setReferenceClient, 
  compte, 
  raisonSociale,
}) => {
  return (
    <div className="client-signature-band">
      <div className="signature-row">
        <div className="input-group">
          <label>Référence client:</label>
          <input
            type="text"
            placeholder="Entrez la référence"
            value={referenceClient}
            onChange={e => setReferenceClient(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label>Compte N°:</label>
          <input type="text" value={compte} readOnly />
        </div>
        
        <div className="input-group">
          <label>Raison Sociale:</label>
          <input type="text" value={raisonSociale} readOnly />
        </div>
        
      
      </div>
    </div>
  );
};

export default ClientSignatureBand;