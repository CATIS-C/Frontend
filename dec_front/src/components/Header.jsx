import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown'; // pour toggle simple
import { Tooltip } from 'primereact/tooltip';   // optionnel, pour tooltip
import './Header.css';

// Simuler données utilisateur (à remplacer par récupération Keycloak)
const user = {
  firstName: "Mohamed",
  lastName: "Mohamed",
};

// Fonction de logout (à adapter selon ton backend/Keycloak)
const logout = () => {
  // Exemple basique, remplacer par vrai logout Keycloak
  alert("Déconnexion en cours...");
  // window.location.href = "/logout"; // ou redirection Keycloak
};

const Header = () => {
  const location = useLocation();

  // State mode sombre
  const [darkMode, setDarkMode] = useState(false);

  // Charger mode sombre depuis localStorage au montage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, []);

  // Toggle mode sombre
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      localStorage.setItem('darkMode', !prev);
      document.body.classList.toggle('dark-mode', !prev);
      return !prev;
    });
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <img src={require('../images/logo.png')} alt="Attijariwafa Bank" />
        </div>

        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          <i className="pi pi-home" style={{ marginRight: 6 }}></i> Accueil
        </Link>

        <Link to="/spd" className={location.pathname === '/spd' ? 'active' : ''}>
          <i className="pi pi-file" style={{ marginRight: 6 }}></i> Synthèse Pré-déclassement
        </Link>

        <Link to="/cdr" className={location.pathname === '/cdr' ? 'active' : ''}>
          <i className="pi pi-briefcase" style={{ marginRight: 6 }}></i> Comptas Dossiers Risque
        </Link>

        <Link to="/srd" className={location.pathname === '/srd' ? 'active' : ''}>
          <i className="pi pi-search" style={{ marginRight: 6 }}></i> Suivi relations difficiles
        </Link>

        <Link to="/lec" className={location.pathname === '/lec' ? 'active' : ''}>
          <i className="pi pi-list" style={{ marginRight: 6 }}></i> Écritures Comptables
        </Link>
      </div>

      <div className="header-right">
       <div className="user-info" title={`Connecté : ${user.firstName} ${user.lastName}`}>
  <i className="pi pi-user" style={{ marginRight: 6, fontSize: '1.2em' }}></i>
  <span>{user.firstName} {user.lastName}</span>
</div>


        <button className="logout-btn" onClick={logout} title="Se déconnecter">
          <i className="pi pi-power-off"></i>
        </button>

        <button 
          className="darkmode-toggle" 
          onClick={toggleDarkMode} 
          title={darkMode ? "Mode clair" : "Mode sombre"}
        >
          {darkMode 
            ? <i className="pi pi-sun" style={{ color: '#ffb300' }}></i>
            : <i className="pi pi-moon" style={{ color: '#444' }}></i>}
        </button>
      </div>
    </header>
  );
};

export default Header;
