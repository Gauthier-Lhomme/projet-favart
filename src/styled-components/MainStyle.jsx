import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Body = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: #e5e5e5;
  margin-top: 21vh;
`;

export const FSentence = styled.h1`
  color: #122239;
  font-size: 3rem;
  text-align: center;
  margin: 0 7vw 0 7vw;
  @media ${Device.mobile} {
    font-size: 1.8rem;
  }
`;

export const FPagraph = styled.p`
  line-height: 140%;
  margin: 5vh 7vw 5vh 7vw;
  font-size: 1.3rem;
  text-align: justify;
  @media ${Device.mobile} {
    text-align: justify;
  }
`;

export const H1Left = styled.h1`
  color: #122239;
  margin: 0 0 1vh 7vw;
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
  padding: 2vh 0 2vh 0;
  @media ${Device.mobile} {
    padding-left: 5vw;
  }
`;

export const PWhy = styled.p`
  padding-left: 3vw;
  font-size: 1.2rem;
  color: black;
  line-height: 140%;
  @media ${Device.mobile} {
    text-align: justify;
    padding-left: 0;
  }
`;

export const ImgWhy = styled.img`
  width: 30vw;
  height: 40vh;
  border-radius: 15px;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const H2Title = styled.h2`
  color: #122239;
  text-align: center;
  font-size: 2.5rem;
  margin-top: 8vh;
`;

export const PTitle = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  margin: 3vh 7vw 3vh 7vw;
  color: black;
  line-height: 140%;
`;

export const H1Right = styled.h1`
  color: #122239;
  display: flex;
  justify-content: flex-end;
  margin: 0 7vw 1vh 0;
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

export const ImgWhom = styled.img`
  width: 50vw;
  height: 50vh;
  border-radius: 15px;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const PWhom = styled.p`
  padding-right: 50px;
  font-size: 1.2rem;
  color: black;
  @media ${Device.mobile} {
    display: flex;
    justify-content: center;
    padding: 0;
    flex-direction: column;
  }
`;

export const PMap = styled.p`
  color: black;
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
  padding: 1vh;
  list-style-type: disc;

  @media ${Device.mobile} {
    padding: 2vh;
  }
`;

export const ListliWhom = styled.li`
  padding: 1vh;
  list-style-type: disc;
`;
