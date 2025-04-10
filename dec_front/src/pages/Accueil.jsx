import React, { useState } from 'react';
import './Accueil.css';

const Accueil = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log('Recherche :', e.target.value);
  };

  return (
    <div className="home-container">
      <h1>Bienvenue sur l'application de gestion des Déclassements</h1>
      <p>Gérez efficacement vos contrats et suivez les processus de pré-déclassement et de déclassement.</p>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher un contrat"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="info-container">
        <h2>Explorez nos fonctionnalités :</h2>
        <ul className="features-list">
          <li><button className="feature-button">Synthèse Pré-Déclassement</button></li>
          <li><button className="feature-button">Crédit Amortissables Gérés sur LS</button></li>
          <li><button className="feature-button">Comptabilisation Dossier Risque</button></li>
          <li><button className="feature-button">Suivi Relation Difficile</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Accueil;
