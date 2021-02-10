import ImgRessources from "../assets/ImgRessources.jpg";

import SideBar from "./Sidebar";

import {
  FlexBox,
  FlexBox1,
  FlexBox2,
  Ressources,
  RessourcesFlex,
  TextRessources,
  RessourcesImg,
  Agir,
  AgirFlex,
  TextAgir,
  AgirImg,
  Flash,
  TextFlash,
} from "../styled-components/ClientPage";

export default function connexion() {
  return (
    <FlexBox>
      <FlexBox1>
        <SideBar />
      </FlexBox1>
      <FlexBox2>
        <Ressources>Accéder au centre de ressources Favart</Ressources>
        <RessourcesFlex>
          <TextRessources>
            Lorem ipsum color si damet Lorem ipsum color si dametLorem ipsum
            color si dametLorem ipsum color si dametLorem ipsum color si
            dametLorem ipsum color si
          </TextRessources>
          <RessourcesImg src={ImgRessources}></RessourcesImg>
        </RessourcesFlex>
        <Agir to="/updateclient">Votre profil</Agir>
        <AgirFlex>
          <AgirImg src={ImgRessources}></AgirImg>
          <TextAgir>Accédez à votre profil afin de le modifier.</TextAgir>
        </AgirFlex>
        <Flash>Echange flash avec nous</Flash>
        <TextFlash>
          Lorem ipsum color si damet Lorem ipsum color si dametLorem ipsum color
          si dametLorem ipsum color si dametLorem ipsum color si dametLorem
          ipsum color si
        </TextFlash>
      </FlexBox2>
    </FlexBox>
  );
}
