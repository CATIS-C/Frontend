import React, { useState, useEffect } from 'react';
import { fetchCreditsClient, preDeclasser } from '../services/creditService';
import ClientSignatureBand from '../components/ClientSignatureBand';
import Layout from '../components/Layout';  
import './CreditsAmortissablesGeresSurLS.css';

const CreditsAmortissablesGeresSurLS = () => {
  const [referenceClient, setReferenceClient] = useState('');
  const [compte, setCompte] = useState('');
  const [raisonSociale, setRaisonSociale] = useState('');
  const [credits, setCredits] = useState([]);

  useEffect(() => {}, []);

  const handleSearch = async () => {
    try {
      const data = await fetchCreditsClient('NumeroClient', '2208407');
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
    <Layout onPreDeclasser={handlePreDeclasser}>
      <div className="credits-amortissables">
        <ClientSignatureBand
          referenceClient={referenceClient}
          setReferenceClient={setReferenceClient}
          compte={compte}
          raisonSociale={raisonSociale}
          showSearchButton={true}
          onSearch={handleSearch}
        />

        <div className="page-header">
          <h2 className="page-title">Crédits Amortissables Gérés Sur LS</h2>
        </div>

        <table>
          <thead>
            <tr>
              <th>Libellé Produit</th>
              <th>Numéro de Contrat</th>
              <th>Séquence</th>
              <th>Référence</th>
              <th>Montant du prêt (MAD)</th>
              <th>Capital Restant Dû (MAD)</th>
            </tr>
          </thead>
          <tbody>
            {credits.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>
                  Aucun crédit disponible
                </td>
              </tr>
            ) : (
              credits.map((credit, index) => (
                <tr key={index}>
                  <td>{credit.synthese.libelleProduit}</td>
                  <td>{credit.synthese.numero}</td>
                  <td>{credit.synthese.type}</td>
                  <td>{credit.synthese.numeroAutorisation}</td>
                  <td>{credit.synthese.montantAccorde}</td>
                  <td>{credit.synthese.montantCapitalRestantDu}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default CreditsAmortissablesGeresSurLS;