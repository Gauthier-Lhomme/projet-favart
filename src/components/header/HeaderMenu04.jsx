import React from "react";
import HeaderBody from "./HeaderBody04";

import {
  ContainerHeaderMenu,
  ContainerHeaderMenuLink,
  MenuLink,
  MenuLinkAction,
} from "../../styled-components/header/HeaderMenuStyled04.jsx";

export default function HeaderMenu() {
  return (
    <>
      <ContainerHeaderMenu>
        <ContainerHeaderMenuLink>
          <MenuLink to="/">00 /</MenuLink>
          <MenuLink to="/main"> 01 /</MenuLink>
          <MenuLink to="/agissons"> 02 /</MenuLink>
          <MenuLink to="/ilsetelles"> 03 </MenuLink>
          <MenuLinkAction to="/action">
            / 04 - Passons à l'action
          </MenuLinkAction>
        </ContainerHeaderMenuLink>
      </ContainerHeaderMenu>
      <HeaderBody />
    </>
  );
}
