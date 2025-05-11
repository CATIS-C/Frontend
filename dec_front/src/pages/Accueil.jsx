import React from 'react';
import './Accueil.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer
} from 'recharts';

const Accueil = () => {
  const data = [
    { name: 'Jan', pre: 20, dec: 10 },
    { name: 'Fév', pre: 30, dec: 14 },
    { name: 'Mars', pre: 45, dec: 22 },
    { name: 'Avr', pre: 25, dec: 18 },
    { name: 'Mai', pre: 35, dec: 20 },
    { name: 'Juin', pre: 40, dec: 25 },
    { name: 'Juil', pre: 38, dec: 19 },
    { name: 'Août', pre: 32, dec: 21 },
    { name: 'Sept', pre: 44, dec: 28 },
    { name: 'Oct', pre: 50, dec: 30 },
    { name: 'Nov', pre: 28, dec: 15 },
    { name: 'Déc', pre: 33, dec: 17 },
  ];

  const totalPre = data.reduce((sum, item) => sum + item.pre, 0);
  const totalDec = data.reduce((sum, item) => sum + item.dec, 0);

  return (
    <div className="home-wrapper">
      {/* Bienvenue stylisé */}
      <section className="welcome-section">
      <h1>Bienvenue sur l’application de gestion du pré-déclassement et du déclassement</h1>

      <hr style={{
  border: 'none',
  borderTop: '1px solid #fff8',
  margin: '10px 0 18px 0',
  width: '60px'
}} />
<p>
  Cette plateforme est conçue pour accompagner les équipes métiers dans le suivi complet du cycle de <strong>pré-déclassement</strong> et de <strong>déclassement</strong>. Elle permet d’analyser les produits à déclasser par client, de consulter une synthèse détaillée avec tous les attributs pertinents, d’exporter les tableaux récapitulatifs, et de gérer les différentes étapes de comptabilisation des dossiers. L’application offre également des outils de pilotage pour le suivi des situations en difficulté et la consultation des écritures comptables, garantissant ainsi un traitement fiable, fluide et centralisé.
</p>




      </section>

      

      {/* Graphique mensuel */}
      <section className="charts-section">
        <h2>Évolution mensuelle</h2>
        <p>
          Visualisez la progression mensuelle des opérations pour anticiper les tendances et
          optimiser les processus.
        </p>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pre" fill="#8884d8" name="Pré-déclassements" />
            <Bar dataKey="dec" fill="#ff8042" name="Déclassements" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Statistiques globales centrées */}
      <section className="stats-section">
        <h2>Statistiques globales</h2>
        <div className="stat-cards">
          <div className="stat-card">
            <h3>{totalPre}</h3>
            <p>Total pré-déclassements</p>
          </div>
          <div className="stat-card">
            <h3>{totalDec}</h3>
            <p>Total déclassements</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
