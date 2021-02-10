import styled from "styled-components";
import { Device } from "../assets/Device/Device";
import { Link } from "react-router-dom";

export const FlexBox1 = styled.div`
  flex: 1;
  background: rgb(35, 134, 201);
  background: linear-gradient(
    180deg,
    rgba(35, 134, 201, 1) 0%,
    rgba(18, 34, 57, 1) 100%
  );
  height: 100vh;
  width: 100%;
  @media ${Device.mobile} {
    flex-direction: column;
    height: 40vh;
  }
`;

export const Name = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  padding-bottom: 2vh;
  width: 100%;
  font-family: "Josefin Sans";
`;

export const Company = styled.h2`
  color: white;
  font-size: 1.8rem;
  text-align: center;
  font-family: "Josefin Sans";
`;

export const Info = styled.div`
  padding-top: 40vh;
  height: 10vh;
  @media ${Device.mobile} {
    padding-top: 15vh;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 4vh;
  font-family: "Josefin Sans";
  background-color: transparent;
  margin-top: 5vh;
  border: none;
`;

export const Link1 = styled(Link)`
  width: 10vw;
  color: white;
  font-size: 1.4rem;
`;
