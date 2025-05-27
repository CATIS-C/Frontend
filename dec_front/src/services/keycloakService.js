import Keycloak from 'keycloak-js';
 
const keycloak = new Keycloak({
  url: 'https://oauth.rct.attijariwafa.net:8443/auth',
  realm: 'AWB-MultiCanal-Realm',
  clientId: 'awb-credit-processing',
});
 
export default keycloak;