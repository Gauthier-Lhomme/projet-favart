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
  background: rgb(35, 134, 201);
  background: linear-gradient(
    180deg,
    rgba(35, 134, 201, 1) 0%,
    rgba(18, 34, 57, 1) 100%
  );
  height: 100vh;
  @media ${Device.mobile} {
    flex-direction: column;
    height: 5vh;
  }
`;

export const FlexBox2 = styled.div`
  flex: 2;
  height: 100vh;
  padding-right: 3vw;
  padding-left: 3vw;
  padding-top: 10vh;
  font-family: "Josefin Sans";
`;

export const Ressources = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5vh;
  margin-top: 15vh;
  color: #122239;
  text-decoration: underline;
`;

export const RessourcesFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 4vh;
`;

export const RessourcesExt = styled(Link)`
  width: 40%;
`;

export const RessourcesFav = styled(Link)`
  width: 40%;
`;

export const ButtonFavart = styled.button`
  width: 20vw;
  height: 10vh;
  margin-left: 2vw;
  background-color: #2386c9;
  color: white;
  margin-bottom: 5vh;
  border-radius: 10px;
  font-family: "Josefin Sans";
  font-size: 1.8rem;
  cursor: pointer;
  transition: all ease 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background: #cdcdcd;
    color: #0d1842;
  }
`;

export const ButtonExt = styled.button`
  width: 20vw;
  height: 10vh;
  margin-left: 2vw;
  background-color: #2386c9;
  color: white;
  margin-bottom: 5vh;
  border-radius: 10px;
  font-family: "Josefin Sans";
  font-size: 1.8rem;
  cursor: pointer;
  transition: all ease 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background: #cdcdcd;
    color: #0d1842;
  }
`;

export const Agir = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 3vh;
  margin-top: 12vh;
  color: #122239;
`;

export const AgirFlex = styled.div`
  display: flex;
  margin-top: 5vh;
  justify-content: space-around;
  align-items: center;
`;

export const TextAgir = styled.h1`
  flex: 2;
  color: #122239;
  @media ${Device.mobile} {
    padding-left: 0;
  }
`;

export const Flash = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 3vh;
  margin-top: 8vh;
  color: #122239;
  text-decoration: underline;
`;

export const TextFlash = styled.h1`
  flex: 2;
  padding-right: 3vw;
  color: #122239;
  @media ${Device.mobile} {
    margin-bottom: 5vh;
  }
`;

export const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 0.1vw;
  align-items: center;
  @media ${Device.mobile} {
    padding-top: 0vh;
  }
`;

export const ButtonEnd = styled.button`
  background-color: #122239;
  font-family: "Josefin Sans";
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  margin-top: 3vh;
  margin-bottom: 6vh;
  padding: 2vh;
  width: 21vw;
  cursor: pointer;
  transition: all ease 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background: #cdcdcd;
    color: #0d1842;
  }
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;
