import React from "react";
import HeaderBody from "./HeaderBody00";

import {
  ContainerHeaderMenu,
  ContainerHeaderMenuLink,
  MenuLink,
  MenuLinkSommaire,
} from "../../styled-components/header/HeaderMenuStyled00.jsx";

export default function HeaderMenu() {
  return (
    <>
      <ContainerHeaderMenu>
        <ContainerHeaderMenuLink>
          <MenuLinkSommaire to="/">00 - Sommaire </MenuLinkSommaire>
          <MenuLink to="/main">/ 01 </MenuLink>
          <MenuLink to="/agissons">/ 02 </MenuLink>
          <MenuLink to="/ilsetelles">/ 03 </MenuLink>
          <MenuLink to="/action">/ 04 </MenuLink>
        </ContainerHeaderMenuLink>
      </ContainerHeaderMenu>
      <HeaderBody />
    </>
  );
}
