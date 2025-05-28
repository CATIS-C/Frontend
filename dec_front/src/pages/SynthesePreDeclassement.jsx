import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ClientSignatureBand from '../components/ClientSignatureBand';
import Layout from '../components/Layout'; 
import './SynthesePreDeclassement.css';

const SynthesePreDeclassement = () => {
  const [referenceClient, setReferenceClient] = useState('');
  const [compte, setCompte] = useState('');
  const [raisonSociale, setRaisonSociale] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const natures = [
    { name: "Crédit Amortissables géré sur LS", path: "/credits-amortissables-geres-sur-ls", count: 2 },
    { name: "Suspension Crédit Co-Finance", path: "/suspension-credit-co-finance", count: 0 },
    { name: "Crédit Amortissables géré sur SUPRA", path: "/credits-amortissables-geres-sur-supra", count: 7 },
    { name: "CPI(s)/CVT(s)", path: "/cpi-cvt", count: 0 },
    { name: "Compte(s) Secondaire(s)", path: "/comptes-secondaires", count: 1 },
    { name: "Autres ASM", path: "/autres-asm", count: 0 },
    { name: "ASM gérés sur LS", path: "/asm-geres-sur-ls", count: 0 },
    { name: "Escompte(s)", path: "/escomptes", count: 0 },
    { name: "Crédit AFM", path: "/credit-afm", count: 0 }
  ];

  const hist = useHistory();

  const handleRetour = () => {
    hist.goBack();
  };

  

  return (
    <Layout onRetour={handleRetour}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px', fontWeight: 'bold' }}>
          <div>
            {currentDate} &nbsp; <span style={{ color: '#ff6600' }}>{currentTime}</span>
          </div>
        </div>

        <ClientSignatureBand
          referenceClient={referenceClient}
          setReferenceClient={setReferenceClient}
          compte={compte}
          raisonSociale={raisonSociale}
          showSearchButton={false}
        />

        <div className="synthese-section">
          <h2 className="section-title">Produits</h2>
          <div className="products-list">
            {natures.map((nature, index) => (
              <div key={index} className="product-item">
                <div className="product-info">
                  <Link to={nature.path} className="product-link">
                    {nature.name}
                  </Link>
                </div>
                <div className="product-badge">
                  <span className="count">{nature.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SynthesePreDeclassement;
