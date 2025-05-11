import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SynthesePreDeclassement.css';
 
const SynthesePreDeclassement = () => {
  const [referenceClient, setReferenceClient] = useState('');
  const [preDeclassement, setPreDeclassement] = useState('');
  const [compte, setCompte] = useState('');
  const [raisonSociale, setRaisonSociale] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
 
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
<div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px', fontWeight: 'bold' }}>
<div>{currentDate} &nbsp; <span style={{ color: '#ff6600' }}>{currentTime}</span></div>
</div>
 
      <div className="form-section">
<div className="input-row">
<label>Référence client:</label>
<input
            type="text"
            placeholder="Entrez la référence"
            value={referenceClient}
            onChange={e => setReferenceClient(e.target.value)}
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
          {natures.map((nature, index) => (
<tr key={index}>
<td>
<Link to={nature.path}>{nature.name}</Link>
</td>
<td></td>
</tr>
          ))}
</tbody>
</table>
 
      <div className="btn-container">
<button className="back-btn">Retour</button>
</div>
</div>
  );
};
 
export default SynthesePreDeclassement;