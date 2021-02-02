import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Img = styled.img`
  max-height: 20vh;
  max-width: 100%;
  padding-left:10vw;
  @media ${Device.mobile} {
    margin-left: 60vw;
    max-height: 25vh;
    max-width: 60vw;
  }
`;

export const Testing = styled.div`
  height: 30vh;
  width: 25vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  @media ${Device.mobile} {
    height: 25vh;
    padding-bottom: 8vh;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-left: 6vw;
  margin-top: 5vh;
  @media ${Device.mobile} {
    font-size: 1.5rem;
    text-align: start;
    padding-bottom: 3vh;
  }
`;

export const Margin = styled.div`
  margin: 0 6vw 0 6vw;
`;
