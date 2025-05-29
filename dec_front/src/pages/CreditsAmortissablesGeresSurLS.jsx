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
  const [credits, setCredits] = useState([
    {
      synthese: {
        libelleProduit: "Crédit Équipement PME",
        numero: "CT-2024-001",
        type: "001",
        numeroAutorisation: "REF-EQ-2024-001",
        montantAccorde: "500,000.00",
        montantCapitalRestantDu: "320,500.00"
      }
    },
    {
      synthese: {
        libelleProduit: "Crédit Immobilier Professionnel",
        numero: "CT-2024-002",
        type: "002",
        numeroAutorisation: "REF-IM-2024-002",
        montantAccorde: "1,200,000.00",
        montantCapitalRestantDu: "980,750.00"
      }
    },
    {
      synthese: {
        libelleProduit: "Crédit Fonds de Roulement",
        numero: "CT-2024-003",
        type: "001",
        numeroAutorisation: "REF-FR-2024-003",
        montantAccorde: "300,000.00",
        montantCapitalRestantDu: "185,420.00"
      }
    },
    {
      synthese: {
        libelleProduit: "Crédit Véhicule Utilitaire",
        numero: "CT-2024-004",
        type: "003",
        numeroAutorisation: "REF-VU-2024-004",
        montantAccorde: "80,000.00",
        montantCapitalRestantDu: "45,200.00"
      }
    },
    {
      synthese: {
        libelleProduit: "Crédit Modernisation",
        numero: "CT-2024-005",
        type: "002",
        numeroAutorisation: "REF-MO-2024-005",
        montantAccorde: "750,000.00",
        montantCapitalRestantDu: "620,300.00"
      }
    },
    {
      synthese: {
        libelleProduit: "Crédit Export",
        numero: "CT-2024-006",
        type: "001",
        numeroAutorisation: "REF-EX-2024-006",
        montantAccorde: "2,000,000.00",
        montantCapitalRestantDu: "1,650,800.00"
      }
    }
  ]);

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