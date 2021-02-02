import React, { useState } from "react";
import ProjetsCards from "../ProjetsCards";
import Logo from "../Logo";
import Footer from "../Footer";

import {
  Page,
  BlockTitle,
  ContainerTitle,
  Title,
  TitleSpan,
  BlockSentence,
  ContainerAuthorSentence,
  AuthorSentence,
  ContainerMoreInformation,
  MoreInformationSentence,
} from "../../styled-components/header/HeaderBodyStyled03.jsx";

export default function HeaderBody() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  return (
    <>
      <Page>
        <BlockTitle>
          <ContainerTitle>
            <Title>
              <TitleSpan>Ils </TitleSpan> et <TitleSpan>elles</TitleSpan> le
              font avec nous
            </Title>
          </ContainerTitle>
        </BlockTitle>
        <BlockSentence>
          <ContainerAuthorSentence>
            <AuthorSentence>
              "Il y a plus dans l'échange que dans la chose échangée", Claude
              Lévi-Strauss
            </AuthorSentence>
          </ContainerAuthorSentence>
        </BlockSentence>
        <ContainerMoreInformation visible={visible} onClick={onClick}>
          <MoreInformationSentence>En savoir plus</MoreInformationSentence>
        </ContainerMoreInformation>
        {visible && (
          <>
            <ProjetsCards />
            <Logo />
            <Footer />
          </>
        )}
      </Page>
    </>
  );
}
