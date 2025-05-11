import React, { useState, useEffect } from 'react';
import './CreditsAmortissablesGeresSurLS.css';

const ConsultationContratLS = () => {
  const [contrat, setContrat] = useState({
    numeroContrat: '',
    credit: '',
    autorisation: '',
    compte: '',
    produit: '',
    identifiant: '',
    organisme: '',
    dossier: '',
    dateDepartCredit: '',
    taux: '',
    capitalConcede: '',
    prochainArrete: '',
    statut: '',
    premierRemboursement: '',
    capitalRestantDu: '',
    capitalDebloque: '',
    remboursement: '',
    amortissement: '',
    interet: '',
    interetsPercus: '',
    impayes: '',
    nombreImpayes: '',
    quotite: '',
    commissions: '',
    devise: '',
    compteRelais: '',
    compteDeBlocage: '',
    compteRemboursement: '',
    compteImpayes: '',
  });

  useEffect(() => {
    // Simuler la récupération des données depuis le backend
    const fetchContratData = async () => {
      // Remplacer cette simulation par une requête API réelle
      const response = {
        numeroContrat: 'C123456',
        credit: 'Crédit Immobilier',
        autorisation: 'Oui',
        compte: '456789001234',
        produit: 'Crédit Immobilier',
        identifiant: 'ID-00123',
        organisme: 'Banque XYZ',
        dossier: 'DOS-789456',
        dateDepartCredit: '2023-01-01',
        taux: '5%',
        capitalConcede: '200000 MAD',
        prochainArrete: '2025-01-01',
        statut: 'En cours de déblocage',
        premierRemboursement: '2023-06-01',
        capitalRestantDu: '150000 MAD',
        capitalDebloque: '50000 MAD',
        remboursement: '15000 MAD',
        amortissement: '5000 MAD',
        interet: '2000 MAD',
        interetsPercus: '1000 MAD',
        impayes: '0 MAD',
        nombreImpayes: '0',
        quotite: '60%',
        commissions: '500 MAD',
        devise: 'MAD',
        compteRelais: '789456',
        compteDeBlocage: '123789',
        compteRemboursement: '456123',
        compteImpayes: '789123',
      };
      setContrat(response);
    };

    fetchContratData();
  }, []);

  return (
    <div className="credits-amortissables">
      <h1>Consultation du Contrat LS</h1>
      <div className="form-section">
        <div className="input-row">
          <label>Numéro de Contrat:</label>
          <input type="text" value={contrat.numeroContrat} readOnly />

          <label>Crédit:</label>
          <input type="text" value={contrat.credit} readOnly />
        </div>

        <div className="input-row">
          <label>Autorisation:</label>
          <input type="text" value={contrat.autorisation} readOnly />

          <label>Compte N°:</label>
          <input type="text" value={contrat.compte} readOnly />
        </div>

        <div className="input-row">
          <label>Produit:</label>
          <input type="text" value={contrat.produit} readOnly />

          <label>Identifiant:</label>
          <input type="text" value={contrat.identifiant} readOnly />
        </div>

        <div className="input-row">
          <label>Organisme:</label>
          <input type="text" value={contrat.organisme} readOnly />

          <label>Dossier:</label>
          <input type="text" value={contrat.dossier} readOnly />
        </div>

        <div className="input-row">
          <label>Date Départ Crédit:</label>
          <input type="text" value={contrat.dateDepartCredit} readOnly />

          <label>Taux:</label>
          <input type="text" value={contrat.taux} readOnly />
        </div>

        <div className="input-row">
          <label>Capital Concedé:</label>
          <input type="text" value={contrat.capitalConcede} readOnly />

          <label>Prochain Arrêté le:</label>
          <input type="text" value={contrat.prochainArrete} readOnly />
        </div>

        <div className="input-row">
          <label>Statut:</label>
          <input type="text" value={contrat.statut} readOnly />

          <label>Premier Remboursement le:</label>
          <input type="text" value={contrat.premierRemboursement} readOnly />
        </div>

        <div className="input-row">
          <label>Capital Restant Dû:</label>
          <input type="text" value={contrat.capitalRestantDu} readOnly />

          <label>Capital Débloqué:</label>
          <input type="text" value={contrat.capitalDebloque} readOnly />
        </div>

        <div className="input-row">
          <label>Remboursement:</label>
          <input type="text" value={contrat.remboursement} readOnly />

          <label>Amortissement:</label>
          <input type="text" value={contrat.amortissement} readOnly />
        </div>

        <div className="input-row">
          <label>Intérêt:</label>
          <input type="text" value={contrat.interet} readOnly />

          <label>Intérêts Perçus:</label>
          <input type="text" value={contrat.interetsPercus} readOnly />
        </div>

        <div className="input-row">
          <label>Impayés:</label>
          <input type="text" value={contrat.impayes} readOnly />

          <label>Nombre d'Impayés:</label>
          <input type="text" value={contrat.nombreImpayes} readOnly />
        </div>

        <div className="input-row">
          <label>Quotité:</label>
          <input type="text" value={contrat.quotite} readOnly />

          <label>Commissions:</label>
          <input type="text" value={contrat.commissions} readOnly />
        </div>

        <div className="input-row">
          <label>Devise:</label>
          <input type="text" value={contrat.devise} readOnly />

          <label>Compte Relais:</label>
          <input type="text" value={contrat.compteRelais} readOnly />
        </div>

        <div className="input-row">
          <label>Compte de Blocage:</label>
          <input type="text" value={contrat.compteDeBlocage} readOnly />

          <label>Compte Remboursement:</label>
          <input type="text" value={contrat.compteRemboursement} readOnly />
        </div>

        <div className="input-row">
          <label>Compte Impayés:</label>
          <input type="text" value={contrat.compteImpayes} readOnly />
        </div>
      </div>
    </div>
  );
};

export default ConsultationContratLS;
