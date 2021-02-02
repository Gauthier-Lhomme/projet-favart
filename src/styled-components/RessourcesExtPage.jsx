import styled from "styled-components";
import { Device } from "../assets/Device/Device";

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
  width: 75%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
  height: 50vh;
  width: 40%;
  @media ${Device.mobile} {
    width: 80%;
    height: 62vh;
    margin-bottom: 7vh;
  }
`;

export const H1 = styled.h1`
  font-size: 1.7rem;
  padding-top: 2vh;
  padding-left: 2vh;
  @media ${Device.mobile} {
    font-size: 1.2rem;
  }
`;

export const P = styled.p`
  font-size: 1.2rem;
  padding-top: 4vh;
  padding-left: 2vh;
  padding-right: 2vh;
  @media ${Device.mobile} {
    font-size: 1.1rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 50%;
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
