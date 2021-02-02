import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const DivMain = styled.div`
  padding-top: 10vh;
  background-color: #e5e5e5;
  font-family: "Noto Sans CJK JP";
`;

//Informations cards

export const DivInfos = styled.div`
  display: flex;
  justify-content: space-around;
  @media ${Device.mobile} {
    flex-direction: column;
    margin-bottom: 0vh;
    align-items: center;
  }
`;

export const DivCards = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  background-color: #2386c9;
  border-radius: 15px;
  color: white;
  @media ${Device.mobile} {
    width: 80%;
    margin-bottom: 6vh;
    padding-bottom: 3vh;
    padding-top: 3vh;
  }
`;

export const DivCardMiddle = styled.div`
  background-color: #122239;
  width: 30%;
  border-radius: 15px;
  color: white;
  display: flex;
  flex-direction: column;
  @media ${Device.mobile} {
    width: 80%;
    margin-bottom: 6vh;
    padding-bottom: 3vh;
    padding-top: 3vh;
  }
`;

export const Ul = styled.ul`
  padding-top: 2vh;
  padding-bottom: 3vh;
  list-style: none;
  font-size: 1.4rem;
`;
export const Li = styled.li`
  line-height: 3.5vh;
  margin-left: 4vh;
  margin-right: 2vh;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const H2 = styled.h2`
padding-top : 3vh;
  text-align: center;
  font-size: 2rem;
  @media ${Device.mobile} {
    font-size: 1.4rem;
  }
}

`;

export const H2MiddleCard = styled.h2`
  font-size: 2rem;
  text-align: center;
  padding-top: 3vh;

  @media ${Device.mobile} {
    font-size: 1.4rem;
  }
`;

//Buttons
export const Button = styled.button`
  background-color: #122239;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 2rem;
  margin-top: 8.9vh;
  padding: 2vh;
  cursor: pointer;
  &:hover {
    color: grey;
    transition-duration: 500ms;
  }
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const ButtonCardMiddle = styled.div`
  background-color: #2386c9;
  color: white;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 2rem;
  margin-left: 15vh;
  margin-bottom: 3.2vh;
  padding: 2vh;
  width: 43%;
  cursor: pointer;
  font-family: "Noto Sans CJK JP";
  &:hover {
    color: grey;
    transition-duration: 500ms;
  }
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const ButtonFlash = styled.button`
  background-color: #122239;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 2rem;
  margin-top: 9vh;
  padding: 2vh;
  cursor: pointer;
  &:hover {
    color: grey;
    transition-duration: 500ms;
  }
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const DivCenter = styled.div`
  padding-top: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${Device.mobile} {
    padding-top: 0vh;
  }
`;

//Text styles

export const P = styled.p`
  font-size: 1.4rem;
  line-height: 3vh;
  padding-top: 4vh;
  margin-left: 4vh;
  margin-right: 2vh;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  color: #122239;
  font-size: 4rem;
  padding-bottom: 6vh;
  margin-left: 4vw;
  margin-top: 8vh;
  @media ${Device.mobile} {
    font-size: 2.2rem;
  }
`;

//Staff cards

export const CardFlex = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 9vh;
  @media ${Device.mobile} {
    flex-direction: column;
    margin-bottom: 2vh;
    align-items: center;
  }
`;
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 50vh;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media ${Device.mobile} {
    width: 80%;
    margin-bottom: 5vh;
  }
`;

export const ImgContainer = styled.img`
  margin-left: 15%;
  width: 70%;
  border-radius: 50%;
`;

export const Container = styled.div`
  padding: 2px 16px;
`;

export const PContact = styled.p`
  margin-left: 4vw;
  font-size: 1.4rem;
  line-height: 4vh;
  padding-top: 4vh;
  font-family: "Noto Sans CJK JP";
  @media ${Device.mobile} {
    font-size: 1rem;
    padding-bottom: 5vh;
  }
`;

export const H4 = styled.h4`
  font-size: 2rem;
  padding-top: 3vh;
  text-align: center;
`;
export const DivLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3vh;
`;

export const ImgLogo = styled.img`
  background-color: #122239;
  padding: 1.5vh;
  text-align: center;
  margin-bottom: 3vh;
`;
