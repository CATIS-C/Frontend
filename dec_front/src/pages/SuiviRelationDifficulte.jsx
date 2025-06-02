import React from 'react';
import './SuiviRelationDifficulte.css';

const SuiviRelationDifficulte = () => {
  const data = [
    { produit: 'PROD1', statut: 'En cours', date: '2025-05-10' },
    { produit: 'PROD2', statut: 'Validé', date: '2025-05-12' },
    { produit: 'PROD3', statut: 'Rejeté', date: '2025-05-15' },
  ];

  return (
    <div className="srd-container">
      <h2 className="srd-title">Suivi des Relations en Difficulté</h2>
      <table className="srd-table">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Statut</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.produit}</td>
              <td className={`statut ${row.statut.toLowerCase()}`}>{row.statut}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuiviRelationDifficulte;
