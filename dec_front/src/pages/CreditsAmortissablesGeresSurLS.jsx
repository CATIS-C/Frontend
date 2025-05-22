import React, { useState, useEffect } from 'react';
import { fetchCreditsClient, preDeclasser } from '../services/creditService';
import './CreditsAmortissablesGeresSurLS.css';

const CreditsAmortissablesGeresSurLS = () => {
  const [identifiant, setIdentifiant] = useState('ID-00123');
  const [compte, setCompte] = useState('456789001234');
  const [raisonSociale, setRaisonSociale] = useState('Société XYZ');
  const [dossier, setDossier] = useState('DOS-789456');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    
  }, []);

  const handleSearch = async () => {
    try {
      const data = await fetchCreditsClient('typeRef', 'numRef');
      setCredits(data);
    } catch (error) {
      alert('Erreur lors de la recherche des crédits');
    }
  };

  const handlePreDeclasser = async () => {
    try {
      await preDeclasser(credits);
      alert('Pré-déclassement effectué avec succès.');
    } catch (error) {
      alert('Erreur lors du pré-déclassement');
    }
  };

  return (
    <div className="credits-amortissables">
      <h1>Crédits Amortissables Gérés sur LS</h1>

      <div className="form-section">
        <div className="input-row">
          <label>Identifiant:</label>
          <input type="text" value={identifiant} readOnly />

          <label>Dossier:</label>
          <input type="text" value={dossier} readOnly />
        </div>
        <div className="input-row">
          <label>Compte N°:</label>
          <input type="text" value={compte} readOnly />

          <label>Raison Sociale:</label>
          <input type="text" value={raisonSociale} readOnly />
        </div>
      </div>

      <div className="btn-container">
        <button className="back-btn" onClick={handleSearch}>Rechercher</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Numéro de Contrat</th>
            <th>Séquence</th>
            <th>Référence</th>
            <th>Libellé Produit</th>
            <th>Montant du prêt (MAD)</th>
            <th>Capital Restant Dû (MAD)</th>
          </tr>
        </thead>
        <tbody>
          {credits.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>Aucun crédit disponible</td>
            </tr>
          ) : (
            credits.map((credit, index) => (
              <tr key={index}>
                <td>{credit.numeroContrat}</td>
                <td>{credit.sequence}</td>
                <td>{credit.reference}</td>
                <td>{credit.libelleProduit}</td>
                <td>{credit.montant}</td>
                <td>{credit.capitalRestantDu}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="btn-container">
        <button className="back-btn" onClick={handlePreDeclasser}>Pré-déclasser</button>
      </div>
    </div>
  );
};

export default CreditsAmortissablesGeresSurLS;
