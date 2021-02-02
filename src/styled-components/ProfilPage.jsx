import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const FlexBox = styled.div`
  display: flex;
  height: 150vh;
  @media ${Device.mobile} {
    flex-direction: column;
  }
`;

export const FlexBox1 = styled.div`
  flex: 1;
  background: rgb(35, 134, 201);
  background: linear-gradient(
    180deg,
    rgba(35, 134, 201, 1) 0%,
    rgba(18, 34, 57, 1) 100%
  );
  height: 100%;
  @media ${Device.mobile} {
    flex-direction: column;
    height: 5vh;
  }
`;

export const Text = styled.div`
  margin-top: 40vh;
  @media ${Device.mobile} {
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
`;

export const Name = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  padding-bottom: 2vh;
`;

export const Job = styled.h2`
  color: white;
  font-size: 1.6rem;
  text-align: center;
  padding-bottom: 2vh;
`;

export const Company = styled.h2`
  color: white;
  font-size: 1.8rem;
  text-align: center;
`;

export const FlexBox2 = styled.div`
  flex: 2;
  height: 100vh;
  padding-right: 3vw;
  padding-left: 3vw;
  padding-top: 8vh;
`;

export const Card = styled.div`
  background-color: #cac7c7;
  padding: 2vh;
  margin-bottom: 4vh;
  margin-left: 25vh;
  width: 35vw;
  font-family: "Noto Sans CJK JP";
  box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  @media ${Device.mobile} {
    margin-left: 2vh;
    margin-bottom: 5vh;
    width: 80vw;
  }
`;

export const FlexText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 0.5vh;
`;

export const CardText = styled.h1`
  font-size: 1.2rem;
  padding-right: 1.1vw;
  font-weight: bold;
  @media ${Device.mobile} {
    font-size: 0.9rem;
  }
`;

export const CardBdd = styled.div`
  font-size: 1.1rem;
  @media ${Device.mobile} {
    font-size: 0.8rem;
  }
`;
