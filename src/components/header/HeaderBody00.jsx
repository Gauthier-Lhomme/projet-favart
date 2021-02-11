import Footer from "../Footer";
import sommaire from "../../assets/Sommaire/sommaire.jpg";

import {
  Page,
  Sommaire,
  H1,
  Li,
  Illustration,
  Img,
  Title,
} from "../../styled-components/header/HeaderBodyStyled00.jsx";

export default function HeaderBody() {
  return (
    <>
      <Page>
        <Sommaire>
          <Title>
            <H1 to="/main">Pourquoi nous existons ?</H1>
          </Title>
          <ul>
            <Li>Pourquoi Favart ?</Li>
            <Li>Auprès de qui ?</Li>
            <Li>Avec qui ?</Li>
          </ul>
          <Title>
            <H1 to="/agissons">Comment nous agissons ?</H1>
          </Title>
          <ul>
            <Li>Explorer à travers le droit à l'expérimentation</Li>
            <Li>Engager de nouvelles communautés d'action</Li>
            <Li>Construire de nouveaux modèles économiques à impact</Li>
            <Li>Déployer des outils juridiques et financiers innovants</Li>
          </ul>
          <Title>
            <H1 to="/ilsetelles">Ils et elles le font avec nous</H1>
          </Title>
          <br />
          <Title>
            <H1 to="/action">Passons à l'action</H1>
          </Title>
          <ul>
            <Li>Expérimentons ensemble</Li>
            <Li>Notre équipe</Li>
          </ul>
        </Sommaire>
        <Illustration>
          <Img src={sommaire}></Img>
        </Illustration>
      </Page>
      <Footer />
    </>
  );
}
