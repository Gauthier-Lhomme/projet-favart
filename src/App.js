import ClientPage from "./components/ClientPage";
import { Reset } from "styled-reset";
import Connexion from "./components/Connexion";
import HeaderTop from "./components/HeaderTop";
import MainPage from "./components/header/HeaderMenu01";
import Agissons from "./components/header/HeaderMenu02";
import IlsEtElles from "./components/header/HeaderMenu03";
import Action from "./components/header/HeaderMenu04";
import Sommaire from "./components/header/HeaderMenu00";


import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderMenu from "./components/header/HeaderMenu03";

export default function App() {
  return (
    <div>
      <Reset />
      <HeaderTop />
      <Switch>
      <Route exact path="/" component={Sommaire}/>
      <Route exact path="/main"component={MainPage}/>
      <Route path="/clientpage" component={ClientPage} />
      <Route path="/agissons" component={Agissons}/>
      <Route path="ilsetelles" component={IlsEtElles}/>
      <Route path="/action" component={Action} />
      </Switch>
    </div>
  );
}
