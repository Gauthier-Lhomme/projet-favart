import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Background = styled.div`
  margin-bottom: 7vh;
`;

export const H1 = styled.h1`
  font-family: "JosefinSans-Regular";
  font-size: 2rem;
  margin-top: 15vh;
  margin-left: 10vw;
  margin-right: 10vw;
  font-weight: bold;
  @media ${Device.mobile} {
  }
`;

export const H2 = styled.h2`
  font-family: "JosefinSans-Regular";
  font-size: 1.4rem;
  margin-top: 5vh;
  margin-left: 10vw;
  margin-right: 10vw;
  font-weight: bold;
  @media ${Device.mobile} {
  }
`;

export const P = styled.p`
  font-family: "JosefinSans-Regular";
  font-size: 1.2rem;
  margin-top: 2vh;
  margin-left: 10vw;
  margin-right: 10vw;
  @media ${Device.mobile} {
  }
`;
