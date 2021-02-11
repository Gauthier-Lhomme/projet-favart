import styled from "styled-components";
import { Device } from "../assets/Device/Device";
import { Link } from "react-router-dom";

export const DivHeaderTop = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  z-index: 15;
  top: 0;
  width: 100%;
  @media ${Device.mobile} {
    justify-content: space-between;
    height: 10vh;
  }
`;

export const LinkLogo = styled(Link)``;

export const Logo = styled.img`
  height: 8vh;
  width: 15vw;
  @media ${Device.mobile} {
    height: 10vh;
    width: 70vw;
  }
`;
export const ContainerIcon = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
  @media ${Device.mobile} {
    display: none;
  }
`;
export const IconTwitter = styled.img`
  width: 2vw;
`;
export const IconLinkedin = styled.img`
  width: 2vw;
`;

export const LinkMail = styled(Link)`
  padding-left: 2vw;
  padding-right: 2vw;
`;

export const IconMail = styled.img`
  width: 2vw;
`;

export const ContainerIconConnexion = styled(Link)`
  display: none;
  @media ${Device.mobile} {
    display: flex;
  }
`;

export const IconConnexion = styled.img`
  display: none;
  @media ${Device.mobile} {
    display: block;
    width: 9vw;
    height: 9vh;
    margin-right: 6vw;
  }
`;

export const ContainerConnexionSentence = styled.div`
  font-size: 0.8rem;
  font-family: "JosefinSans-SemiBold";
  @media ${Device.mobile} {
    display: none;
  }
`;

export const ConnexionSentence = styled(Link)`
  font-size: 1.5rem;
  color: #122239;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;
