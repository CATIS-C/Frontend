import React, { useRef } from 'react';
import './Accueil.css';
import { Chart } from 'primereact/chart';

const Accueil = () => {
  const scrollRef = useRef(null);

  const produits = {
    "CPT-SEC": [12, 15, 18, 11, 14, 20, 23, 21, 19, 17, 16, 22],
    "CPI/CVT": [10, 14, 12, 15, 13, 19, 21, 20, 18, 17, 15, 20],
    "CAM-LS": [8, 12, 10, 13, 11, 15, 17, 16, 14, 13, 12, 16],
    "CAM-SUP": [5, 7, 6, 8, 7, 10, 11, 10, 9, 8, 7, 10],
    "SUSP-CCF": [6, 9, 8, 10, 9, 13, 14, 13, 12, 11, 10, 13],
    "AFM": [7, 10, 9, 11, 10, 14, 15, 14, 13, 12, 11, 14],
    "ESC": [4, 6, 5, 7, 6, 9, 10, 9, 8, 7, 6, 9],
    "ASM-LS": [3, 5, 4, 6, 5, 8, 9, 8, 7, 6, 5, 8],
    "ASM-AUT": [2, 4, 3, 5, 4, 7, 8, 7, 6, 5, 4, 7]
  };

  const fullNames = {
    "CPT-SEC": "Compte(s) Secondaire(s)",
    "CPI/CVT": "CPI(s)/CVT(s)",
    "CAM-LS": "Crédit Amortissables géré sur LS",
    "CAM-SUP": "Crédit Amortissables géré sur SUPRA",
    "SUSP-CCF": "Suspension Crédit Co-Finance",
    "AFM": "Crédit AFM",
    "ESC": "Escompte(s)",
    "ASM-LS": "ASM gérés sur LS",
    "ASM-AUT": "Autres ASM"
  };

  const labels = ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];

  const colors = [
    '#87CEEB',
    '#98FB98',
    '#FFB6C1',
    '#DDA0DD',
    '#F0E68C',
    '#FFA07A',
    '#20B2AA',
    '#D3D3D3',
    '#F5DEB3'  
  ];
 
  const lineData = {
    labels,
    datasets: Object.entries(produits).map(([key, data], index) => ({
      label: key,
      data,
      fill: false,
      borderColor: colors[index % colors.length],
      tension: 0.4
    }))
  };

  const doughnutData = {
    labels: Object.keys(produits),
    datasets: [
      {
        data: Object.values(produits).map(months => months.reduce((a, b) => a + b, 0)),
        backgroundColor: colors,
        hoverBackgroundColor: colors
      }
    ]
  };

 

  return (
    <div className="accueil-container">
      <div className="charts-container">
        <div className="left-chart">
          <h3>Évolution mensuelle par produit</h3>
         
          <div className="scroll-panel" ref={scrollRef}>
            <Chart
              type="line"
              data={lineData}
              options={{ maintainAspectRatio: false }}
              style={{ width: '1000px', height: '400px' }}
            />
          </div>
        </div>

        <div className="right-chart">
          <h3>Répartition globale des déclassements</h3>
          <div className="donut-container">
            <Chart
              type="doughnut"
              data={doughnutData}
              options={{ cutout: '70%' }}
              style={{ width: '400px', height: '400px', margin: '0 auto' }}
            />
          </div>
        </div>
      </div>

      <div className="legend">
  <h4>Légende des produits</h4>
  <div className="legend-list">
    {Object.entries(fullNames).map(([abbr, full]) => (
      <div key={abbr} className="legend-item">
        <strong>{abbr}</strong> : {full}
      </div>
    ))}
  </div>
</div>



    </div>
  );
};

export default Accueil;
