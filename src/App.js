import ClientPage from "./components/ClientPage";
import Connexion from "./components/Connection";
import HeaderTop from "./components/HeaderTop";
import MainPage from "./components/header/HeaderMenu01";
import Agissons from "./components/header/HeaderMenu02";
import IlsEtElles from "./components/header/HeaderMenu03";
import Action from "./components/header/HeaderMenu04";
import Sommaire from "./components/header/HeaderMenu00";
import Inscription from "./components/Inscription";
import DisplayClient from "./components/DisplayClient";
import RessourcePage from "./components/RessourcePage";
import RessourcePageExt from "./components/RessourceExtPage";
import RessourcesForm from "./components/UpdateRessourcesForm";
import RessourcesFormExt from "./components/UpdateRessourcesExtForm";
import DisplayRessources from "./components/DisplayRessources";

import { Switch, Route } from "react-router-dom";
import { Reset } from "styled-reset";

export default function App() {
  return (
    <div>
      <Reset />
      <HeaderTop />
      <Switch>
        <Route exact path="/sommaire" component={Sommaire} />
        <Route path="/ressources" component={RessourcePage} />
        <Route path="/displayressources" component={DisplayRessources} />
        <Route path="/ressourcesext" component={RessourcePageExt} />
        <Route path="/addressources" component={RessourcesForm} />
        <Route path="/addressourcesext" component={RessourcesFormExt} />
        <Route path="/" component={MainPage} />
        <Route path="/clientpage" component={ClientPage} />
        <Route path="/agissons" component={Agissons} />
        <Route path="/connexion" component={Connexion} />
        <Route path="/ilsetelles" component={IlsEtElles} />
        <Route path="/action" component={Action} />
        <Route path="/inscription" component={Inscription} />
        <Route path="/DisplayClient" component={DisplayClient} />
      </Switch>
    </div>
  );
}
