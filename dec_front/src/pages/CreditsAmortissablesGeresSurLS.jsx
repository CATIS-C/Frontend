import React, { useState, useEffect } from 'react';
import { fetchCreditsClient, preDeclasser } from '../services/creditService';
import ClientSignatureBand from '../components/ClientSignatureBand';
import Layout from '../components/Layout';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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
    <Layout onPreDeclasser={handlePreDeclasser} footerTitle="Crédits Amortissables Gérés Sur LS">
      <div className="credits-amortissables">
        <ClientSignatureBand
          referenceClient={referenceClient}
          setReferenceClient={setReferenceClient}
          compte={compte}
          raisonSociale={raisonSociale}
          showSearchButton={true}
          onSearch={handleSearch}
        />

        <DataTable
  value={credits}
  paginator
  rows={5}
  responsiveLayout="scroll"
  emptyMessage="Aucun crédit disponible"
  className="p-datatable-sm"
>
  <Column field="synthese.libelleProduit" header="Libellé Produit" /* sortable */ />
  <Column field="synthese.numero" header="Numéro de Contrat" /* sortable */ />
  <Column field="synthese.type" header="Séquence" /* sortable */ />
  <Column field="synthese.numeroAutorisation" header="Référence" /* sortable */ />
  <Column field="synthese.montantAccorde" header="Montant du prêt (MAD)" /* sortable */ />
  <Column field="synthese.montantCapitalRestantDu" header="Capital Restant Dû (MAD)" /* sortable */ />
</DataTable>

      </div>
    </Layout>
  );
};

export default CreditsAmortissablesGeresSurLS;
