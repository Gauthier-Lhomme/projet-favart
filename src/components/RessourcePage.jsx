import React, { useState, useEffect } from "react";
import aperçu from "../assets/Documents/placeholder.png";
import { api } from "../conf";
import {
  DivCard,
  FlexBox,
  FlexBox1,
  FlexBox2,
  H1,
  P,
  Img,
} from "../styled-components/RessourcePage";

import SideBar from "./Sidebar";
import Footer from "./Footer";

export default function RessourcePage() {
  const [ressources, setRessources] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`/ressources`).then((res) => {
      setRessources(res.data);
      setLoading(false);
    });
  }, [setRessources]);

  return (
    <>
      <FlexBox>
        <FlexBox1>
          <SideBar />
        </FlexBox1>
        <FlexBox2>
          {ressources.map((doc, i) => (
            <DivCard key={i}>
              <a href={doc.link}>
                <Img src={aperçu} alt="" />
              </a>
              <H1>{doc.title}</H1>
              <P>{doc.description}</P>
            </DivCard>
          ))}
        </FlexBox2>
      </FlexBox>
      <Footer />
    </>
  );
}
