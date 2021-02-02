import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Back = styled.div`
  position: relative;
`;

export const Background = styled.img`
  height: 91.4vh;
  width: 99.2vw;
  opacity: 0.5;
`;

export const Formulaire = styled.form`
  width: 65vw;
  display: flex;
  font-size: 1.5em;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  position: absolute;
  top: 15vh;
  left: 5vw;
  @media ${Device.mobile} {
    margin-left: 2vw;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: black;
  margin-bottom: 0.5vw;
  width: 30%;
  font-size: 1.5rem;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    display: none;
  }
`;

export const Input = styled.input`
  width: 50%;
  text-align: center;
  font-family: "Josefin Sans";
  opacity: 0.8;
  margin-bottom: 2vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media ${Device.mobile} {
    width: 82vw;
  }
`;

export const Textarea = styled.textarea`
  width: 51.5%;
  height: 25vh;
  text-align: center;
  font-family: "Josefin Sans";
  opacity: 0.8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media ${Device.mobile} {
    width: 86vw;
  }
`;

export const Button = styled.button`
  width: 8vw;
  height: 5vh;
  font-size: 1.5rem;
  font-family: "Josefin Sans";
  border: none;
  background: #122239;
  color: #c4c1c7;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
  border-radius: 5px;
  margin-top: 4vh;
  padding-top: 0.5vh;
  padding-bottom: 0.3vh;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background: #008bd0;
    color: #d7d0db;
    cursor: pointer;
  }
`;
