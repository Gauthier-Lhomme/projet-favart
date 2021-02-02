import styled from "styled-components";
import { Device } from "../assets/Device/Device";
import { Link } from "react-router-dom";

export const DivHeaderTop = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-evenly;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  @media ${Device.mobile} {
    justify-content: space-evenly;
    height: 10vh;
  }
`;

export const Logo = styled.img`
  height: 8vh;
  width: 15vw;
  @media ${Device.mobile} {
    height: 10vh;
    width: 40vw;
    margin-right: 20vw;
    margin-left: 25vw;
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
  @media ${Device.mobile} {
    width: 3vh;
  }
`;

export const ContainerConnexionSentence = styled.div`
  font-size: 0.8rem;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    display: none;
  }
`;

export const ConnexionSentence = styled(Link)`
  font-size: 1.5rem;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;
