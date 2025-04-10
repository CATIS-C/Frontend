import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import de Link pour la navigation
import './CreditsAmortissablesGeresSurLS.css';

const CreditsAmortissablesGeresSurLS = () => {
  // Exemple de données (peuvent être remplacées par une récupération API plus tard)
  const [credits, setCredits] = useState([
    {
      numeroContrat: 'C123456',
      montant: 50000,
      duree: 24, // en mois
      tauxInteret: 4.5, // en %
      capitalRestant: 30000,
    },
    {
      numeroContrat: 'C654321',
      montant: 75000,
      duree: 36, // en mois
      tauxInteret: 5.0, // en %
      capitalRestant: 50000,
    },
    {
      numeroContrat: 'C789012',
      montant: 100000,
      duree: 48, // en mois
      tauxInteret: 4.2, // en %
      capitalRestant: 75000,
    }
  ]);

  // Utilisation de useEffect pour simuler une récupération de données (API)
  useEffect(() => {
    // Imaginons ici que tu récupères les crédits depuis un API
    // Exemple de code :
    // fetch('/api/credits')
    //   .then(response => response.json())
    //   .then(data => setCredits(data));
  }, []);

  return (
    <div className="credits-amortissables">
      <h1>Crédits Amortissables Gérés sur LS</h1>
      
      {/* Tableau des crédits */}
      <table>
        <thead>
          <tr>
            <th>Numéro de Contrat</th>
            <th>Montant (MAD)</th>
            <th>Durée (mois)</th>
            <th>Taux d'intérêt (%)</th>
            <th>Capital Restant (MAD)</th>
          </tr>
        </thead>
        <tbody>
          {credits.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>Aucun crédit disponible</td>
            </tr>
          ) : (
            credits.map((credit, index) => (
              <tr key={index}>
                <td>{credit.numeroContrat}</td>
                <td>{credit.montant}</td>
                <td>{credit.duree}</td>
                <td>{credit.tauxInteret}</td>
                <td>{credit.capitalRestant}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CreditsAmortissablesGeresSurLS;
