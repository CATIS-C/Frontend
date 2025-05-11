import React, { useState, useEffect } from 'react';
import './CreditsAmortissablesGeresSurLS.css';

const CreditsAmortissablesGeresSurLS = () => {
  const [identifiant, setIdentifiant] = useState('ID-00123');
  const [compte, setCompte] = useState('456789001234');
  const [raisonSociale, setRaisonSociale] = useState('Société XYZ');
  const [preDeclassement, setPreDeclassement] = useState('O');
  const [dossier, setDossier] = useState('DOS-789456');

  const [credits, setCredits] = useState([
    {
      numeroContrat: 'C123456',
      sequence: 'SEQ001',
      reference: 'REF001',
      libelleProduit: 'Crédit Immobilier',
      montant: 150000,
      capitalRestantDu: 60000
    },
    {
      numeroContrat: 'C789012',
      sequence: 'SEQ002',
      reference: 'REF002',
      libelleProduit: 'Crédit Auto',
      montant: 90000,
      capitalRestantDu: 35000
    }
  ]);

  useEffect(() => {
    // Simuler une récupération de données ici
  }, []);

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
        <div className="input-row">
          <label>Pré-déclassement:</label>
          <input
            type="text"
            value={preDeclassement}
            onChange={e => setPreDeclassement(e.target.value)}
          />
        </div>
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
    </div>
  );
};

export default CreditsAmortissablesGeresSurLS;
