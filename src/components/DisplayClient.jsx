import React, { useState, useEffect } from "react";
import { api } from "../conf";

import {
  FlexBox,
  FlexBox1,
  FlexBox2,
  Name,
  Job,
  Company,
  Text,
  Card,
  FlexText,
  CardText,
  CardBdd,
} from "../styled-components/DisplayClient";

import SideBar from "./Sidebar";

import Footer from "./Footer";

export default () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`/client`).then((res) => {
      setClients(res.data);
      setLoading(false);
    });
  }, [setClients]);

  return (
    <>
      <FlexBox>
        <FlexBox1>
          <SideBar />
        </FlexBox1>
        <FlexBox2>
          <div>
            {loading && <p>it's loading</p>}
            {!loading && (
              <>
                {clients.map((client, i) => (
                  <Card key={i}>
                    <FlexText>
                      <CardText>Prénom : </CardText>
                      <CardBdd>{client.username}</CardBdd>
                    </FlexText>
                    <FlexText>
                      <CardText>Nom : </CardText>
                      <CardBdd>{client.surname}</CardBdd>
                    </FlexText>
                    <FlexText>
                      <CardText>Email : </CardText>
                      <CardBdd>{client.email}</CardBdd>
                    </FlexText>
                    <FlexText>
                      <CardText>Téléphone : </CardText>
                      <CardBdd>{client.phone}</CardBdd>
                    </FlexText>
                    <FlexText>
                      <CardText>Métier : </CardText>
                      <CardBdd>{client.job}</CardBdd>
                    </FlexText>
                    <FlexText>
                      <CardText>Nom de la structure : </CardText>
                      <CardBdd>{client.structure_name}</CardBdd>
                    </FlexText>
                    <FlexText>
                      <CardText>Type de structure : </CardText>
                      <CardBdd>{client.structure_type}</CardBdd>
                    </FlexText>
                    <FlexText>
                      <CardText>Domaine de la structure : </CardText>
                      <CardBdd>{client.structure_field}</CardBdd>
                    </FlexText>
                    <FlexText>
                      <CardText>Domaine d'activité : </CardText>
                      <CardBdd>{client.job_field}</CardBdd>
                    </FlexText>
                    <FlexText>
                      <CardText>Territoire : </CardText>
                      <CardBdd>{client.territory}</CardBdd>
                    </FlexText>
                    <FlexText>
                      <CardText>Ses envies : </CardText>
                      <CardBdd>{client.wishes}</CardBdd>
                    </FlexText>
                    <FlexText>
                      <CardText>Site internet : </CardText>
                      <CardBdd>{client.website}</CardBdd>
                    </FlexText>
                  </Card>
                ))}
              </>
            )}
          </div>
        </FlexBox2>
      </FlexBox>
      <Footer />
    </>
  );
};
