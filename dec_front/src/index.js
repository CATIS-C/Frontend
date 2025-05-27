import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import 'primereact/resources/themes/saga-orange/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import keycloak from '../src/services/keycloakService'; 
 
keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
  if (authenticated) {
    //Rafraîchissement automatique du token toutes les 6 sec
    setInterval(() => {
      keycloak.updateToken(70).catch(() => {
        keycloak.logout();
      });
    }, 6000);
 
    ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
      document.getElementById('root')
    );
  } else {
    keycloak.login();
  }
});