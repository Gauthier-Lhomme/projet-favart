import styled from "styled-components";
import { Device } from "../assets/Device/Device";
import { Link } from "react-router-dom";

export const Background = styled.div`
  background-color: #a2abb2;
  width: 99.2vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${Device.mobile} {
    height: 85vh;
    width: 100vw;
  }
`;

export const ContainerInscription = styled.div`
  background: #85a7bd;
  box-shadow: 4px 10px 16px 0px rgba(97, 97, 97, 1);
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 2vw;
  padding-right: 2vw;
  @media ${Device.mobile} {
    flex-direction: column;
    height: 60vh;
  }
`;

export const ContainerForm = styled.div`
  background-color: #ffff;
  height: 85vh;
  width: 50vw;
  box-shadow: 4px 10px 16px 0px rgba(97, 97, 97, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media ${Device.mobile} {
    width: 80vw;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
`;

export const Logo = styled.img`
  width: 28vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media ${Device.mobile} {
    width: 35vw;
    margin-bottom: 2vh;
    margin-top: 2vh;
  }
`;

export const Slogan = styled.h1`
  font-size: 3rem;
  text-align: center;
  padding-right: 5vw;
  padding-left: 5vw;
  font-weight: bold;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    display: none;
  }
`;

export const Span = styled.span`
  color: white;
  font-size: 3rem;
  font-family: "Josefin Sans";
`;

export const TitleForm = styled.h1`
  font-size: 3rem;
  font-family: "Josefin Sans";
  margin-top: 2vh;
  @media ${Device.mobile} {
    font-size: 1.6rem;
    margin-bottom: 2vh;
  }
`;

export const H2 = styled.h2`
  font-size: 0.8rem;
  font-family: "Noto Sans CJK JP";
  @media ${Device.mobile} {
    font-size: 0.9rem;
    margin-bottom: 2vh;
    margin-top: 2vh;
  }
`;

export const Formulaire = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivLabel = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3vh;
  width: 40vw;
  height: 7vh;
  @media ${Device.mobile} {
    margin-left: 17vw;
  }
`;

export const Input = styled.input`
  width: 70%;
  background-color: #f0f0f0;
  text-align: center;
  border-radius: 5px;
  @media ${Device.mobile} {
    width: 70vw;
  }
`;

export const Button = styled.button`
  width: 73%;
  height: 7vh;
  margin-left: 5.5vw;
  margin-top: 3vh;
  background-color: #03213a;
  color: white;
  font-family: "Noto Sans CJK JP";
  font-size: 1.8rem;
  transition: all 0.5s;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2386c9;
  }
  @media ${Device.mobile} {
    width: 73vw;
    margin-left: 0vw;
    height: 10vh;
    font-size: 1.3rem;
  }
`;

export const SpanLink = styled(Link)`
  font-size: 0.8rem;
  font-family: "Noto Sans CJK JP";
  text-decoration: none;
  @media ${Device.mobile} {
    font-size: 0.9rem;
    margin-bottom: 2vh;
    margin-top: 2vh;
  }
`;
