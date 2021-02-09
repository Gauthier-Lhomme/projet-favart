import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Body = styled.div`
  font-family: "Josefin Sans";
  background-color: #f2f8fc;
  margin-top: 21vh;
`;

export const FSentence = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-top: 15vh;
  margin-bottom: 6vh;
  margin-left: 5vw;
  color: #122239;
  margin-right: 5vw;
  font-family: "Josefin Sans";
  font-weight: bold;
  @media ${Device.mobile} {
    font-size: 1.5rem;
    margin-right: 4vw;
    margin-left: 4vw;
    margin-bottom: 0;
  }
`;

export const FPagraph = styled.p`
  line-height: 140%;
  color: #122239;
  margin: 5vh 7vw 5vh 7vw;
  font-size: 1.3rem;
  text-align: justify;
  @media ${Device.mobile} {
    text-align: justify;
  }
`;

export const H1Left = styled.h1`
  color: #122239;
  margin: 0 0 3vh 7vw;
  font-size: 3rem;
  @media ${Device.mobile} {
    text-align: center;
    font-size: 2.3rem;
    margin: 5vh 0 3vh 0;
    text-decoration: underline;
  }
`;

export const ContainerWhy = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 7vw 0 7vw;
  justify-content: center;
  text-align: justify;
  align-items: center;
  @media ${Device.mobile} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const List = styled.ul`
  padding-left: 1.5vw;
  padding: 1vh 0 6vh 0;
  @media ${Device.mobile} {
    padding-left: 5vw;
  }
`;

export const PWhy = styled.p`
  padding-left: 3vw;
  font-size: 1.2rem;
  color: #122239;
  line-height: 140%;
  @media ${Device.mobile} {
    text-align: justify;
    padding-left: 0;
  }
`;

export const ImgWhy = styled.img`
  width: 20vw;
  border: 2px solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media ${Device.mobile} {
    display: none;
  }
`;

export const H2Title = styled.h2`
  color: #122239;
  margin: 0 0 3vh 7vw;
  font-size: 3rem;
  margin-top: 8vh;
`;

export const PTitle = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  margin: 3vh 7vw 0vh 7vw;
  color: #122239;
  line-height: 140%;
`;

export const H1Right = styled.h1`
  color: #122239;
  margin: 0 0 3vh 7vw;
  font-size: 3rem;
  @media ${Device.mobile} {
    text-align: center;
    font-size: 2.3rem;
    margin: 0 0 1vh 0;
    display: flex;
    justify-content: center;
    text-decoration: underline;
  }
`;

export const ContainerWhom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: justify;
  align-items: center;
  margin: 0 7vw 0 7vw;
  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Device.mobile} {
    padding: 2vh;
  }
`;

export const ImgWhom = styled.img`
  width: 20vw;
  border: 2px solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media ${Device.mobile} {
    width: 70vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Legend = styled.p`
  padding-top: 2vh;
  text-align: center;
  color: #122239;
  @media ${Device.mobile} {
    padding: 2vh;
  }
`;

export const PWhom = styled.p`
  padding-right: 50px;
  font-size: 1.2rem;
  color: #122239;
  @media ${Device.mobile} {
    display: flex;
    justify-content: center;
    padding: 0;
    flex-direction: column;
  }
`;

export const PMap = styled.p`
  color: #122239;
  margin: 2vh 7vw 1vh 7vw;
  font-size: 1.2rem;
  text-align: justify;
`;

export const Map = styled.div`
  text-align: center;
  margin: 5vh 0 5vh 0;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const SubTitle = styled.h3`
  text-align: center;
  padding: 6vh 0 6vh 0;
  font-size: 1.5rem;
  color: #122239;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Listli = styled.li`
  list-style-type: disc;
  list-style-position: inside;
  padding-bottom: 1vh;
  @media ${Device.mobile} {
    text-align: start;
  }
`;

export const ListliWhom = styled.li`
  list-style-type: disc;
  padding-bottom: 1vh;
  list-style-position: inside;
  @media ${Device.mobile} {
    text-align: start;
  }
`;
