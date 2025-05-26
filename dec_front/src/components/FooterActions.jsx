import React from 'react';
import './FooterActions.css';

const FooterActions = ({ onPreDeclasser, onRetour }) => {
  return (
    <footer className="footer-actions">
      {onPreDeclasser && (
        <button className="action-btn" onClick={onPreDeclasser}>
          Pré-déclasser
        </button>
      )}
      {onRetour && (
        <button className="action-btn" onClick={onRetour}>
          Retour
        </button>
      )}
      
    </footer>
  );
};

export default FooterActions;
