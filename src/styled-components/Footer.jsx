import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const FooterMain = styled.footer`
  list-style: none;
  background-color: #122239;
  color: white;
  padding: 0.5%;
`;

export const DivContactUs = styled.div`
  padding-top: 5vh;
  display: flex;
  justify-content: space-around;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const Hr = styled.hr`
  width: 80%;
  background-color: #008bd0;
  color: #008bd0;
  height: 0.5vh;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const H1 = styled.h1`
  font-size: 3vh;
  text-align: center;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const UlIcons = styled.ul`
  padding-right: 1vw;
  display: flex;
  align-items: center;
  @media ${Device.mobile} {
    justify-content: space-around;
  }
`;

export const A = styled.a`
  padding-left: 2vw;
`;

export const DivEndFooter = styled.div`
  padding-top: 4vh;
  text-align: center;
  @media ${Device.mobile} {
    width: 100%;
    justify-content: space-around;
  }
`;

export const DivAdress = styled.div`
  padding-top: 2vh;
  display: flex;
  justify-content: space-around;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const H1Underline = styled.h1`
  padding-top: 2vh;
  font-size: 3vh;
  text-decoration: underline;
  text-decoration-color: #008bd0;
  text-decoration-thickness: 0.1em;
`;

export const UlIconsMobile = styled.ul`
  display: flex;
  justify-content: space-around;
  @media ${Device.desktop} {
    display: none;
  }
`;

export const Li = styled.li`
  font-size: 2vh;
  padding-top: 1vh;
`;
