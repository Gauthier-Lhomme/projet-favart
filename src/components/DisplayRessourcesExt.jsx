import React, { useState, useEffect } from "react";

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
      url: `http://localhost:3001/ressourcesext`,
    }).then((res) => {
      setRessources(res.data);
      setLoading(false);
    });
  }, [ressources]);

  const removeDoc = (idRessources_Externes) => {
    let url = `http://localhost:3001/ressourcesext/${idRessources_Externes}`;
    axios.delete(url).then((res) => {
      const del = ressources.filter(
        (ressources) =>
          idRessources_Externes !== ressources.idRessources_Externes
      );
      setDoc(del);
    });
  };

  return (
    <FlexBox>
      <FlexBox2>
        {ressources.map(({ idRessources_Externes, title, description }) => (
          <DivCard key={idRessources_Externes}>
            <P>{idRessources_Externes}</P>
            <H1>{title}</H1>
            <P>{description}</P>
            <Button onClick={() => removeDoc(idRessources_Externes)}>
              Supprimer
            </Button>
          </DivCard>
        ))}
        <ButtonAdd to="/addressourcesext">Ajouter un projet</ButtonAdd>
      </FlexBox2>
    </FlexBox>
  );
}
