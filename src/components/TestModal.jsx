import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  PictureContent,
  Picture,
  Flex,
  Button,
  Image,
  Title,
  Container,
  LogoTitle,
  Content,
  H3,
} from "../styled-components/TestModalStyle";

export default function DataTest() {
  const [projets, setProjets] = useState([]);
  const [isDisplay, setDisplay] = useState({ isDisplay: false, id: "" });

  useEffect(() => {
    axios
      .get("http://localhost:5050/projets")
      .then(function (response) {
        setProjets(response.data);
        console.log(response.data);
      })
      .catch(function (error) {});
  }, []);

  return (
    <>
      <Flex>
        <Title>Nos projets en cours</Title>
         {projets.map((projet) => (
          <div key={projet.id}>
            <Button
              onClick={() =>
                setDisplay({ isDisplay: !isDisplay.isDisplay, id: projet.id })
              }
            >
              <Image src={projet.logo} />
            </Button>
            <PictureContent
              onClick={() => console.log(projet.id)}
              className={
                isDisplay.isDisplay === true && isDisplay.id === projet.id
                  ? ""
                  : "hide"
              }
            >
              <Container>
                <LogoTitle>
                  <Picture src={projet.logo} />
                  <h1>{projet.titre}</h1>
                </LogoTitle>
                <Content>
                  <H3>Porteur du projet :</H3>
                  <p>{projet.porteurs}</p>
                  <H3>Les partenaires :</H3>
                  <p>{projet.partenaires}</p>
                  <H3>Territoires :</H3>
                  <p>{projet.territoires}</p>
                  <H3>Enjeux :</H3>
                  <p>{projet.enjeux}</p>
                  <H3>Mission Favart :</H3>
                  <p>{projet.missions}</p>
                  <H3>Outils Favart :</H3>
                  <p>{projet.outils}</p>
                </Content>
              </Container>
            </PictureContent>
          </div>
        ))}
      </Flex>
    </>
  );
}
