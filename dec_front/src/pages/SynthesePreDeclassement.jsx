import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClientSignatureBand from '../components/ClientSignatureBand';
import './SynthesePreDeclassement.css';

const SynthesePreDeclassement = () => {
  const [referenceClient, setReferenceClient] = useState('');
  const [preDeclassement, setPreDeclassement] = useState('');
  const [compte, setCompte] = useState('');
  const [raisonSociale, setRaisonSociale] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const natures = [
    { name: "Crédit Amortissables géré sur LS", path: "/credits-amortissables-geres-sur-ls", count: 2 },
    { name: "Suspension Crédit Co-Finance", path: "/suspension-credit-co-finance", count: 3 },
    { name: "Crédit Amortissables géré sur SUPRA", path: "/credits-amortissables-geres-sur-supra", count: 7 },
    { name: "CPI(s)/CVT(s)", path: "/cpi-cvt", count: 15 },
    { name: "Compte(s) Secondaire(s)", path: "/comptes-secondaires", count: 4 },
    { name: "Autres ASM", path: "/autres-asm", count: 8 },
    { name: "ASM gérés sur LS", path: "/asm-geres-sur-ls", count: 12 },
    { name: "Escompte(s)", path: "/escomptes", count: 6 },
    { name: "Crédit AFM", path: "/credit-afm", count: 9 }
  ];

 const groupedNatures = [];
for (let i = 0; i < natures.length; i += 3) {
  groupedNatures.push(natures.slice(i, i + 3));
}
 
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px', fontWeight: 'bold' }}>
        <div>{currentDate} &nbsp; <span style={{ color: '#ff6600' }}>{currentTime}</span></div>
      </div>
      
      {/* Bande de signature réutilisable */}
      <ClientSignatureBand
        referenceClient={referenceClient}
        setReferenceClient={setReferenceClient}
        compte={compte}
        raisonSociale={raisonSociale}
        showSearchButton={false}
      />

      {/* Grille de produits 2x2 */}
      <div className="products-grid">
        {groupedNatures.map((group, groupIndex) => (
          <div key={groupIndex} className="products-row">
            {group.map((nature, index) => (
              <div key={index} className="product-card">
                <div className="product-nature">
                  <Link to={nature.path}>{nature.name}</Link>
                </div>
                <div className="product-count">{nature.count}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="btn-container">
        <button className="back-btn">Retour</button>
      </div>
    </div>
  );
};

export default SynthesePreDeclassement;