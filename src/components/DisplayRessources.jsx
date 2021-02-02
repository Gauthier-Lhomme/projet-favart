import React, { useState, useEffect } from "react";
import RessourcesExt from "./DisplayRessourcesExt";

import axios from "axios";
import {
  DivCard,
  FlexBox,
  FlexBox1,
  FlexBox2,
  H1,
  P,
  Button,
  ButtonAdd,
  Text,
  Name,
  Job,
  Company,
} from "../styled-components/DisplayRessources";

export default function RessourcePage() {
  const [ressources, setRessources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://localhost:3001/ressources`,
    }).then((res) => {
      setRessources(res.data);
      setLoading(false);
    });
  }, [ressources]);

  const removeDoc = (idRessources_Favart) => {
    let url = `http://localhost:3001/ressources/${idRessources_Favart}`;
    axios.delete(url).then((res) => {
      const del = ressources.filter(
        (ressources) => idRessources_Favart !== ressources.idRessources_Favart
      );
      setDoc(del);
    });
  };

  return (
    <FlexBox>
      <FlexBox1>
        <Text>
          <Name>Surname</Name>
          <Job>Function</Job>
          <Company>Company</Company>
        </Text>
      </FlexBox1>
      <FlexBox2>
        {ressources.map(({ idRessources_Favart, title, description }) => (
          <DivCard key={idRessources_Favart}>
            <P>{idRessources_Favart}</P>
            <H1>{title}</H1>
            <P>{description}</P>
            <Button onClick={() => removeDoc(idRessources_Favart)}>
              Supprimer
            </Button>
          </DivCard>
        ))}
        <ButtonAdd to="/addressources">Ajouter un projet</ButtonAdd>
        <RessourcesExt />
      </FlexBox2>
    </FlexBox>
  );
}
