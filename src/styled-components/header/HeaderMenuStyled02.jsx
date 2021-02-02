import styled from "styled-components";
import { Device } from "../../assets/Device/Device";
import { Link } from "react-router-dom";

export const ContainerHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  height: 6vh;
  background-color: #1f89d1;
  position: fixed;
  width: 100%;
  z-index: 15;
  top: 8vh;
  @media ${Device.mobile} {
    display: flex;
    justify-content: center;
    height: 10vh;
  }
`;

export const ContainerHeaderMenuLink = styled.div`
  margin-left: 6vw;
`;

export const MenuLink = styled(Link)`
  font-size: 1.5rem;
  color: #0e273d;
  font-family: "Josefin Sans";
  text-decoration: none;
  @media ${Device.mobile} {
    font-size: 1.5rem;
  }
`;

export const MenuLinkAgissons = styled(Link)`
  font-size: 1.5rem;
  color: white;
  font-family: "Josefin Sans";
  text-decoration: none;
  @media ${Device.mobile} {
    font-size: 1.5rem;
  }
`;
