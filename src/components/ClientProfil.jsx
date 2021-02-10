import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import {
  FlexBox,
  FlexBox2,
  Card,
  FlexText,
  CardText,
  CardBdd,
} from "../styled-components/ClientProfil";

export default () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idClient } = useSelector((state) => state.idClientReducer);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://localhost:3001/client/${idClient}`,
    }).then((res) => {
      setClients(res.data[0]);
      setLoading(false);
    });
  }, [setClients]);

  return (
    <FlexBox>
      <FlexBox2>
        <div>
          {loading && <p>it's loading</p>}
          {!loading && (
            <>
              <Card>
                <FlexText>
                  <CardText>Prénom : </CardText>
                  <CardBdd>{clients.username}</CardBdd>
                </FlexText>
                <FlexText>
                  <CardText>Nom : </CardText>
                  <CardBdd>{clients.surname}</CardBdd>
                </FlexText>
                <FlexText>
                  <CardText>Email : </CardText>
                  <CardBdd>{clients.email}</CardBdd>
                </FlexText>
                <FlexText>
                  <CardText>Téléphone : </CardText>
                  <CardBdd>{clients.phone}</CardBdd>
                </FlexText>
                <FlexText>
                  <CardText>Métier : </CardText>
                  <CardBdd>{clients.job}</CardBdd>
                </FlexText>
                <FlexText>
                  <CardText>Nom de la structure : </CardText>
                  <CardBdd>{clients.structure_name}</CardBdd>
                </FlexText>
                <FlexText>
                  <CardText>Type de structure : </CardText>
                  <CardBdd>{clients.structure_type}</CardBdd>
                </FlexText>
                <FlexText>
                  <CardText>Domaine de la structure : </CardText>
                  <CardBdd>{clients.structure_field}</CardBdd>
                </FlexText>
                <FlexText>
                  <CardText>Domaine d'activité : </CardText>
                  <CardBdd>{clients.job_field}</CardBdd>
                </FlexText>
                <FlexText>
                  <CardText>Territoire : </CardText>
                  <CardBdd>{clients.territory}</CardBdd>
                </FlexText>
                <FlexText>
                  <CardText>Ses envies : </CardText>
                  <CardBdd>{clients.wishes}</CardBdd>
                </FlexText>
                <FlexText>
                  <CardText>Site internet : </CardText>
                  <CardBdd>{clients.website}</CardBdd>
                </FlexText>
              </Card>
            </>
          )}
        </div>
      </FlexBox2>
    </FlexBox>
  );
};
