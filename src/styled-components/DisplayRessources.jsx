import styled from "styled-components";
import { Device } from "../assets/Device/Device";
import { Link } from "react-router-dom";

export const FlexBox = styled.div`
  display: flex;
  @media ${Device.mobile} {
    flex-direction: column;
  }
`;

export const FlexBox1 = styled.div`
  flex: 1;
  width: 25%;
  background: rgb(35, 134, 201);
  background: linear-gradient(
    180deg,
    rgba(35, 134, 201, 1) 0%,
    rgba(18, 34, 57, 1) 100%
  );
  height: 150vh;
  @media ${Device.mobile} {
    display: column;
    width: 100%;
  }
`;

export const FlexBox2 = styled.div`
  font-family: "Noto Sans CJK JP";
  color: #122239;
  width: 70%;
  display: flex;
  flex-direction: column;
  padding-top: 15vh;
  @media ${Device.mobile} {
    display: column;
    width: 100%;
    padding-top: 7vh;
  }
`;

export const DivCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 10vh;
  width: 40vw;
  margin-left: 2vh;
  margin-right: 2vh;
  margin-bottom: 4vh;
  @media ${Device.mobile} {
    width: 80%;
    height: 62vh;
    margin-bottom: 7vh;
  }
`;

export const H1 = styled.h1`
  font-size: 1rem;
  padding-bottom: 1vh;
  padding-left: 1vw;
  padding-top: 1vh;
  @media ${Device.mobile} {
    font-size: 1.2rem;
  }
`;

export const P = styled.p`
  font-size: 0.8rem;
  padding-bottom: 1vh;
  padding-left: 1vw;
  @media ${Device.mobile} {
    font-size: 1.1rem;
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
  @media ${Device.mobile} {
    font-size: 1.5rem;
  }
`;

export const Job = styled.h2`
  color: white;
  font-size: 1.6rem;
  text-align: center;
  padding-bottom: 2vh;
  @media ${Device.mobile} {
    font-size: 1.2rem;
  }
`;

export const Company = styled.h2`
  color: white;
  font-size: 1.8rem;
  text-align: center;
  @media ${Device.mobile} {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  font-size: 0.8rem;
  padding-bottom: 1vh;
  padding-left: 1vw;
  @media ${Device.mobile} {
    font-size: 1.1rem;
  }
`;

export const ButtonAdd = styled(Link)`
  font-size: 0.8rem;
  padding-bottom: 1vh;
  padding-left: 1vw;
  @media ${Device.mobile} {
    font-size: 1.1rem;
  }
`;
