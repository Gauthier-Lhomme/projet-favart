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
  background: rgb(35, 134, 201);
  background: linear-gradient(
    180deg,
    rgba(35, 134, 201, 1) 0%,
    rgba(18, 34, 57, 1) 100%
  );
  height: 182vh;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const FlexBox2 = styled.div`
  flex: 2;
  padding-right: 3vw;
  padding-left: 3vw;
  padding-top: 8vh;
`;

export const P = styled.h1`
  font-size: 1.5rem;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    margin-left: 2vw;
  }
`;

export const P2 = styled.p`
  font-size: 1rem;
  margin-top: 10vh;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    margin-left: 2vw;
    margin-top: 5vh;
  }
`;

export const Formulaire = styled.form`
  width: 65vw;
  margin-top: 8vh;
  margin-right: 2vw;
  display: flex;
  font-size: 1.5em;
  flex-direction: column;
  @media ${Device.mobile} {
    margin-left: 2vw;
  }
`;

export const DivLabel = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-bottom: 6vh;
  width: 100%;
  height: 2.7vh;
  @media ${Device.mobile} {
  }
`;

export const DivLabelText = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-bottom: 6vh;
  margin-top: 10vh;
  width: 100%;
  height: 2.7vh;
  @media ${Device.mobile} {
    margin-bottom: 2vh;
    margin-top: 8vh;
  }
`;

export const DivTheme = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh;
  width: 100%;
  text-align: start;
  height: 2.7vh;
  @media ${Device.mobile} {
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: black;
  margin-bottom: 0.5vw;
  width: 30%;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    display: none;
  }
`;

export const Input = styled.input`
  width: 50%;
  text-align: center;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    width: 82vw;
  }
`;

export const InputSite = styled.input`
  width: 75.6%;
  text-align: center;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    width: 82vw;
  }
`;

export const DivLabelCheck = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: start;
  flex-direction: row;
  margin-bottom: 6vh;
  margin-top: 4vh;
  width: 100%;
  @media ${Device.mobile} {
    margin-left: 2vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
`;

export const LabelCheck = styled.label`
  font-size: 1rem;
  color: black;
  margin-bottom: 0.5vw;
  width: 30%;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    width: 50%;
    margin-bottom: 0;
    padding-top: 0.5vh;
  }
`;

export const InputCheck = styled.input`
  width: 20%;
  text-align: center;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
  }
`;

export const Textarea = styled.textarea`
  width: 77%;
  height: 25vh;
  text-align: center;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    width: 86vw;
  }
`;

export const TextareaEnvies = styled.textarea`
  width: 77%;
  height: 25vh;
  text-align: center;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    width: 86vw;
  }
`;

export const StyledButton = styled.button`
  padding: 2 2vw;
  font-size: 1.5rem;
  font-family: "Josefin Sans";
  border: none;
  background: #122239;
  color: #c4c1c7;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
  height: 4vh;
  border-radius: 5px;
  margin-bottom: 5vh;
  &:hover {
    background: #008bd0;
    color: #d7d0db;
    cursor: pointer;
  }
  @media ${Device.mobile} {
    margin-left: 27vw;
    margin-bottom: 4vh;
    height: 9vw;
  }
`;
