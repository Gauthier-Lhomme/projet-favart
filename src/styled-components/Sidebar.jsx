import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const FlexBox1 = styled.div`
  flex: 1;
  background: rgb(35, 134, 201);
  background: linear-gradient(
    180deg,
    rgba(35, 134, 201, 1) 0%,
    rgba(18, 34, 57, 1) 100%
  );
  height: 100vh;
  width: 25%;

  @media ${Device.mobile} {
    flex-direction: column;
    height: 5vh;
  }
`;

export const Name = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  padding-bottom: 2vh;
`;

export const Company = styled.h2`
  color: white;
  font-size: 1.8rem;
  text-align: center;
`;

export const Info = styled.div`
  padding-top: 85%;
`;
