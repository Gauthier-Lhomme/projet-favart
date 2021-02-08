import React from "react";
import HeaderBody from "./HeaderBody02";

import {
  ContainerHeaderMenu,
  ContainerHeaderMenuLink,
  MenuLink,
  MenuLinkAgissons,
} from "../../styled-components/header/HeaderMenuStyled02.jsx";

export default function HeaderMenu() {
  return (
    <>
      <ContainerHeaderMenu>
        <ContainerHeaderMenuLink>
          <MenuLink to="/">00 /</MenuLink>
          <MenuLink to="/main"> 01 </MenuLink>
          <MenuLinkAgissons to="/agissons">/ 02 - Agissons </MenuLinkAgissons>
          <MenuLink to="/ilsetelles">/ 03 /</MenuLink>
          <MenuLink to="/action"> 04</MenuLink>
        </ContainerHeaderMenuLink>
      </ContainerHeaderMenu>
      <HeaderBody />
    </>
  );
}
