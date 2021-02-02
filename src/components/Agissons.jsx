import experimentation from "../assets/Agissons/experimentation.jpg";
import communauté from "../assets/Agissons/communauté.jpg";
import economique from "../assets/Agissons/economique.jpg";
import juridique from "../assets/Agissons/juridique.png";

import {
  P,
  Card,
  CardText,
  CardImg,
  Title,
  IdeeForte,
  Text,
  Liste,
  Card2,
  CardText2,
  CardImg2,
  Title2,
  IdeeForte2,
  Text2,
  Card3,
  CardText3,
  CardImg3,
  Title3,
  IdeeForte3,
  Text3,
  Card4,
  CardText4,
  CardImg4,
  Title4,
  IdeeForte4,
  Text4,
  Ingenieries,
  Button1,
  Explorer,
  Engager,
  Construire,
  Deployer,
  P1,
  P2,
  P3,
  Background,
} from "../styled-components/Agissons.jsx";

export default function Agissons() {
  return (
    <Background>
      <P>Mettre en œuvre les solutions de rupture à fort impact sociétal</P>
      <Ingenieries>
        <Button1 href="#experimentation">
          <Explorer src={experimentation}></Explorer>
          <P1>Explorer</P1>
        </Button1>
        <Button1 href="#engager">
          <Engager src={communauté}></Engager>
          <P1>Engager</P1>
        </Button1>
        <Button1 href="#construire">
          <Construire src={economique}></Construire>
          <P2>Construire</P2>
        </Button1>
        <Button1 href="#juridique">
          <Deployer src={juridique}></Deployer>
          <P3>Déployer</P3>
        </Button1>
      </Ingenieries>
      <Card>
        <CardText>
          <Title id="experimentation">
            Explorer à travers le droit à l’expérimentation
          </Title>
          <IdeeForte>
            Mobiliser de nouveaux moyens d’action en levant les freins
            réglementaires, d’ordre opérationnel, économique, juridique et
            financier, qui entravent l’alliance de la performance
            environnementale, sociale et économique.
          </IdeeForte>
          <Text>
            Favart, pionnier de la mobilisation du droit à l’expérimentation,
            met en œuvre depuis plus de 10 ans, un cadre juridique sécurisé pour
            les porteurs de projets et les collectivités territoriales afin
            d’expérimenter des solutions de rupture en dehors du droit commun et
            faire évoluer les politiques publiques en lien notamment avec le
            projet de loi 3D (Décentralisation, Différentiation,
            Déconcentration).
          </Text>
        </CardText>
        <CardImg src={experimentation}></CardImg>
      </Card>
      <Card2>
        <CardText2>
          <Title2 id="engager">
            Engager de nouvelles communautés d’action
          </Title2>
          <IdeeForte2>
            S’autoriser le droit à l’expérimentation territoriale avec les
            acteurs de proximité par l’engagement et l’animation de nouvelles
            communautés d’action.
          </IdeeForte2>
          <Text2>
            Favart met en œuvre de nouvelles stratégies d’alliance territoriale
            en assemblant toutes les compétences du territoire (acteurs publics,
            privés, associatifs, citoyens) afin de co-construire des solutions
            de rupture en réponse à des problèmes sociétaux de plus en plus
            complexes pris en charge par les acteurs de proximité.
          </Text2>
        </CardText2>
        <CardImg2 src={communauté}></CardImg2>
      </Card2>
      <Card3>
        <CardText3>
          <Title3 id="construire">
            Construire de nouveaux modèles économiques à impact
          </Title3>
          <IdeeForte3>
            Permettre l’alliance d’une triple performance performance
            environnementale, sociale et économique, pour favoriser le
            développement des solutions de rupture.
          </IdeeForte3>
          <Text3>
            Favart met en œuvre des modèles économiques basés sur la
            valorisation de l’empreinte territoriale générée par les solutions
            de rupture et de l’ensemble des actifs mobilisés, qu’ils soient
            financiers, naturels, ou humains en s’appuyant sur les principes des
            coûts évités, de la triple comptabilité et de l’inclusive tokenized
            economy.
          </Text3>
        </CardText3>
        <CardImg3 src={economique}></CardImg3>
      </Card3>
      <Card4>
        <CardText4>
          <Title4 id="juridique">
            Déployer des outils juridiques et financiers innovants
          </Title4>
          <IdeeForte4>
            Développer les outils juridiques et financiers adaptés à la
            recherche d’un profit qui maximise la valeur des capitaux naturels,
            humains et financiers.
          </IdeeForte4>
          <Text4>
            Favart met en œuvre des solutions juridiques et financières
            innovantes pour financer l’amorçage et l’essaimage des solutions de
            rupture sur les territoires à travers l’ingénierie des outils
            suivants : contrats à impact (1er structurateur indépendant
            français), entreprises à mission, fonds de pérennité économique
            (FPE), fonds d’innovation sociale (FIS), tokenized impact bonds
            (TIB).
          </Text4>
        </CardText4>
        <CardImg4 src={juridique}></CardImg4>
      </Card4>
    </Background>
  );
}
