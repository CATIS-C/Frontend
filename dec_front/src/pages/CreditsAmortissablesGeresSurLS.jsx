import React, { useState, useEffect } from 'react';
import { fetchCreditsClient, preDeclasser } from '../services/creditService';
import ClientSignatureBand from '../components/ClientSignatureBand';
import './CreditsAmortissablesGeresSurLS.css';

const CreditsAmortissablesGeresSurLS = () => {
  const [referenceClient, setReferenceClient] = useState('');
  const [compte, setCompte] = useState('');
  const [raisonSociale, setRaisonSociale] = useState('');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    // ici tu peux charger les données initiales ou mettre à jour la date/heure si besoin
  }, []);

  const handleSearch = async () => {
    try {
      const data = await fetchCreditsClient('NumeroClient', '2208407');
      setCredits(data);
      // Supposons que les données retournées contiennent aussi les infos client
      // setCompte(data.compte);
      // setRaisonSociale(data.raisonSociale);
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
      {/* Bande de signature réutilisable */}
      <ClientSignatureBand
        referenceClient={referenceClient}
        setReferenceClient={setReferenceClient}
        compte={compte}
        raisonSociale={raisonSociale}
        showSearchButton={true}
        onSearch={handleSearch}
      />

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
                <td>{credit.synthese.numero}</td>
                <td>{credit.synthese.type}</td>
                <td>{credit.synthese.numeroAutorisation}</td>
                <td>{credit.synthese.libelleProduit}</td>
                <td>{credit.synthese.montantAccorde}</td>
                <td>{credit.synthese.montantCapitalRestantDu}</td>
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