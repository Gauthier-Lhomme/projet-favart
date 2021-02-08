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

import { useSelector } from "react-redux";

export default function HeaderTop({ token }) {
  const { tokenClient } = useSelector((state) => state.tokenClientReducer);

  return (
    <>
      <DivHeaderTop>
        <LinkLogo to="/">
          <Logo src={logo} alt="logo favart" />
        </LinkLogo>
        <ContainerIcon>
          <a href="https://twitter.com/favart_fr">
            <IconTwitter src={twitter} alt="logo twitter" />
          </a>
          <LinkMail to="/contact">
            <IconMail src={mail} alt="logo mail" />
          </LinkMail>
          <a href="https://www.linkedin.com/company/favart/">
            <IconLinkedin src={linkedin} alt="logo linkedin" />
          </a>
        </ContainerIcon>

        <ContainerConnexionSentence>
          {tokenClient === "0" ? (
            <ConnexionSentence to="/connection">
              Connexion / Inscription
            </ConnexionSentence>
          ) : (
            <ConnexionSentence to="/clientpage"> Mon Profil </ConnexionSentence>
          )}
        </ContainerConnexionSentence>
      </DivHeaderTop>
    </>
  );
}
