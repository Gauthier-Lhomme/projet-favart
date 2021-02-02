import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateClient from "./UpdateClientForm.jsx";

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
} from "../styled-components/ProfilPage.jsx";
import ContactUs from "./ContactUs.jsx";
import UpdateClient from "./UpdateClientForm.jsx";

export default () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3001/client/9").then((res) => {
      setClients(res.data[0]);
      setLoading(false);
    });
  }, []);

  return (
    <FlexBox>
      <FlexBox1>
        <Text>
          <Name>Name</Name>
          <Job>Function</Job>
          <Company>Company</Company>
        </Text>
      </FlexBox1>
      <FlexBox2>
        <div>
          {loading ? (
            <p>it's loading</p>
          ) : (
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
        <div>
          <UpdateClient clients={clients} />
          <ContactUs />
        </div>
      </FlexBox2>
    </FlexBox>
  );
};
