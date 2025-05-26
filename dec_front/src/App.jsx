import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Header from './components/Header';
import SynthesePreDeclassement from './pages/SynthesePreDeclassement';
import CreditsAmortissablesGeresSurLS from './pages/CreditsAmortissablesGeresSurLS';
import ComptabilisationDossierRisque from './pages/ComptabilisationDossierRisque';
import SuiviRelationDifficulte from './pages/SuiviRelationDifficulte';
import ListeEcrituresComptables from './pages/ListeEcrituresComptables';
import ConsultationContratLS from './pages/ConsultationContratLS';
import Accueil from './pages/Accueil';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/spd" component={SynthesePreDeclassement} />
        <Route path="/credits-amortissables-geres-sur-ls" component={CreditsAmortissablesGeresSurLS} />
        <Route path="/cdr" component={ComptabilisationDossierRisque} />
        <Route path="/srd" component={SuiviRelationDifficulte} />
        <Route path="/lec" component={ListeEcrituresComptables} />
        <Route path="/consulter" component={ConsultationContratLS} />
      </Switch>
    </Router>
  );
};

export default App;
