import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import de Link pour la navigation
import './SynthesePreDeclassement.css';

const SynthesePreDeclassement = () => {
  const [referenceClient, setReferenceClient] = useState('');
  const [preDeclassement, setPreDeclassement] = useState('');
  const [compte, setCompte] = useState('');
  const [raisonSociale, setRaisonSociale] = useState('');
  const [contrats, setContrats] = useState([]); // à remplir avec données plus tard

  // Liste des valeurs sous "Nature"
  const natures = [
    { name: "Suspension Crédit Co-Finance", path: "/suspension-credit-co-finance" },
    { name: "Crédit Amortissables géré sur SUPRA", path: "/credits-amortissables-geres-sur-supra" },
    { name: "Crédit Amortissables géré sur LS", path: "/credits-amortissables-geres-sur-ls" },
    { name: "CPI(s)/CVT(s)", path: "/cpi-cvt" },
    { name: "Compte(s) Secondaire(s)", path: "/comptes-secondaires" },
    { name: "Aures ASM", path: "/aures-asm" },
    { name: "ASM gérés sur LS", path: "/asm-geres-sur-ls" },
    { name: "Escompte(s)", path: "/escomptes" },
    { name: "Crédit AFM", path: "/credit-afm" }
  ];

  return (
    <div className="container">
      <div className="form-section">
        <div className="input-row">
          <label>Référence client:</label>
          <input
            type="text"
            placeholder="Entrez la référence"
            value={referenceClient}
            onChange={e => setReferenceClient(e.target.value)}
          />

          <label>Pré-déclassement:</label>
          <input
            type="text"
            placeholder="Entrez O ou N"
            value={preDeclassement}
            onChange={e => setPreDeclassement(e.target.value)}
          />
        </div>

        <div className="input-row">
          <label>Compte N°:</label>
          <input type="text" value={compte} readOnly />
        </div>

        <div className="input-row">
          <label>Raison Sociale:</label>
          <input type="text" value={raisonSociale} readOnly />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nature</th>
            <th>Nombre de Contrat/Compte ou Ligne</th>
          </tr>
        </thead>
        <tbody>
          {natures.length === 0 ? (
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>Aucune nature à afficher</td>
            </tr>
          ) : (
            natures.map((nature, index) => (
              <tr key={index}>
                <td>
                  {/* Lien dynamique basé sur le produit */}
                  <Link to={nature.path} style={{ textDecoration: 'none', color: 'blue' }}>
                    {nature.name}
                  </Link>
                </td>
                <td></td> {/* Case vide pour le moment */}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="btn-container">
        <button className="back-btn">Retour</button>
      </div>
    </div>
  );
};

export default SynthesePreDeclassement;
