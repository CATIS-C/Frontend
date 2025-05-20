import React from 'react';
import './ConsultationContratLS.css';

const ConsultationContratLS = () => {
  return (
    <div className="contrat-container">
      <h2>Consultation d’un Contrat LS</h2>

      <div className="section">
        <h3>Informations Générales</h3>
        <div className="row">
          <span><strong>Contrat N°:</strong> S-0212796</span>
          <span><strong>Type Crédit:</strong> CRÉDIT ARRET ABLE</span>
        </div>
        <div className="row">
          <span><strong>Produit:</strong> 416 202 - CRÉDIT MT</span>
          <span><strong>Organisme:</strong> 007 A.W.B</span>
        </div>
        <div className="row">
          <span><strong>Date Départ Crédit:</strong> 01/07/2020</span>
          <span><strong>Statut:</strong> EN COURS DÉBLOCAGE</span>
        </div>
      </div>

      <div className="section">
        <h3>Montants</h3>
        <div className="row">
          <span><strong>Capital Concédé:</strong> 50 000 000.00</span>
          <span><strong>Capital Débloqué:</strong> 50 000 000.00</span>
          <span><strong>Capital Restant:</strong> 16 071 428.59</span>
        </div>
        <div className="row">
          <span><strong>Remboursements:</strong> 40 468 296.68</span>
          <span><strong>Amortissements:</strong> 33 928 571.41</span>
          <span><strong>Intérêts Perçus:</strong> 6 539 725.27</span>
        </div>
        <div className="row">
          <span><strong>Impayés:</strong> 0.00</span>
          <span><strong>Commissions:</strong> 0.00</span>
        </div>
      </div>

      <div className="section">
        <h3>Informations de Règlement</h3>
        <div className="row">
          <span><strong>Compte N°:</strong> 00 0126 H 00028006</span>
          <span><strong>Identifiant:</strong> 7285</span>
          <span><strong>Dossier:</strong> 10203</span>
        </div>
        <div className="row">
          <span><strong>Taux:</strong> 3.70%</span>
          <span><strong>Prochain Arrêté:</strong> 01/05/2025</span>
          <span><strong>Premier Remboursement:</strong> 01/08/2020</span>
        </div>
        <div className="row">
          <span><strong>Nombre d’Imp:</strong> 6</span>
          <span><strong>Quotité:</strong> 100%</span>
        </div>
      </div>

      <div className="section">
        <h3>Comptes Liés</h3>
        <div className="row">
          <span><strong>Compte Déblocage:</strong> 0126 H 00028006</span>
          <span><strong>Compte Remboursement:</strong> 0126 000170012</span>
          <span><strong>Compte Impayé:</strong> 0126 D 000264470</span>
        </div>
      </div>
    </div>
  );
};

export default ConsultationContratLS;
