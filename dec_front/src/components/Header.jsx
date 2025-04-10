import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => date.toLocaleDateString('fr-FR');
  const formatTime = (date) => date.toLocaleTimeString('fr-FR');

  return (
    <header className="header">
      <div className="navbar">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Accueil
        </Link>
        <Link to="/spd" className={location.pathname === '/spd' ? 'active' : ''}>
          Synthèse Pré-Déclassement
        </Link>
        <Link to="/cdr" className={location.pathname === '/cdr' ? 'active' : ''}>
          Comptabilisation d'un Dossier Risque
        </Link>
        <Link to="/srd" className={location.pathname === '/srd' ? 'active' : ''}>
          Suivi d'une Relation en Difficulté
        </Link>
        <Link to="/lec" className={location.pathname === '/lec' ? 'active' : ''}>
          Liste des Écritures Comptables
        </Link>
      </div>

      <div className="header-right">
        <span className="date">{formatDate(currentTime)}</span>
        <span className="time">{formatTime(currentTime)}</span>
      </div>
    </header>
  );
};

export default Header;
