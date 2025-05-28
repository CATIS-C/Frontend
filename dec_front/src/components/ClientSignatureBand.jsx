import React from 'react';
import { Button } from 'primereact/button';
import './ClientSignatureBand.css';

const ClientSignatureBand = ({ 
  referenceClient, 
  setReferenceClient,
  onSearch
}) => {
  
  const handleSearch = () => {
    if (onSearch && referenceClient.trim()) {
      onSearch(referenceClient.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="client-signature-band">
      <div className="signature-row">
        <div className="search-input-group">
          <label>Référence Client :</label>
          <div className="search-input-wrapper">
            <input 
              type="text" 
              placeholder="Entrez la référence"
              value={referenceClient}
              onChange={e => setReferenceClient(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button 
              icon="pi pi-search" 
              className="search-icon"
              text
              onClick={handleSearch}
              disabled={!referenceClient.trim()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSignatureBand;