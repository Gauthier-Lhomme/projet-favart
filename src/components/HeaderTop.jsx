import React from "react";
import logo from "../assets/logo-icon-header/FAVART.jpg";
import twitter from "../assets/logo-icon-header/twitter.svg";
import linkedin from "../assets/logo-icon-header/linkedin.svg";
import mail from "../assets/logo-icon-header/mail.svg";
import connect from "../assets/logo-icon-header/connect.svg";
import user from "../assets/logo-icon-header/user.svg";

import {
  LinkLogo,
  LinkMail,
  DivHeaderTop,
  Logo,
  ContainerIcon,
  IconTwitter,
  IconLinkedin,
  IconMail,
  ContainerIconConnexion,
  IconConnexion,
  ContainerConnexionSentence,
  ConnexionSentence,
} from "../styled-components/HeaderTopStyled.jsx";

export default function HeaderTop({ token }) {
  return (
    <>
      <DivHeaderTop>
        <LinkLogo to="/sommaire">
          <Logo src={logo} alt="logo favart" />
        </LinkLogo>
        <ContainerIcon>
          <a href="https://twitter.com/favart_fr">
            <IconTwitter src={twitter} alt="logo twitter" />
          </a>
          <LinkMail to="/contact">
            <IconMail src={mail} alt="logo mail" />
          </LinkMail>
          <a href="https://www.linkedin.com/company/favart/"></a>
          <IconLinkedin src={linkedin} alt="logo linkedin" />
        </ContainerIcon>

          <ContainerConnexionSentence>
          {token.length < 1 ? (
            <ConnexionSentence to="/connexion">
              Connexion / Inscription
            </ConnexionSentence>
          ) : (
            <ConnexionSentence to="/clientpage"> Mon Profil </ConnexionSentence>
          )}
        </ContainerConnexionSentence>

        {token.length < 1 ? (
          <ContainerIconConnexion to="/connexion">
            <IconConnexion src={connect} alt="logo connexion" />
          </ContainerIconConnexion>
        ) : (
          <ContainerIconConnexion to="/clientpage">
            <IconConnexion src={user} alt="logo connexion" />
          </ContainerIconConnexion>
        )}
      </DivHeaderTop>
    </>
  );
}
