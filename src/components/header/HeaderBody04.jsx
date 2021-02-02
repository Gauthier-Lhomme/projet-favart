import React, { useState } from "react";
import ActionPage from "../ActionPage";
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
} from "../../styled-components/header/HeaderBodyStyled04.jsx";

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
              Passons à <TitleSpan>l'action </TitleSpan>
            </Title>
          </ContainerTitle>
        </BlockTitle>
        <BlockSentence>
          <ContainerAuthorSentence>
            <AuthorSentence>
              "Cela semble toujours impossible, jusqu’à ce qu’on le fasse",
              Nelson Mandela
            </AuthorSentence>
          </ContainerAuthorSentence>
        </BlockSentence>
        <ContainerMoreInformation visible={visible} onClick={onClick}>
          <MoreInformationSentence>En savoir plus</MoreInformationSentence>
        </ContainerMoreInformation>
        {visible && (
          <>
            <ActionPage />
            <Footer />
          </>
        )}
      </Page>
    </>
  );
}
