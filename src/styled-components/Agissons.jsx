import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const Background = styled.div`
  background-color: #f2f8fc;
`;

export const P = styled.p`
  font-size: 2.5rem;
  text-align: center;
  margin-top: 15vh;
  margin-bottom: 6vh;
  font-family: "Josefin Sans";
  font-weight: bold;
  @media ${Device.mobile} {
    font-size: 1.5rem;
    margin-right: 4vw;
    margin-left: 4vw;
    margin-bottom: 0;
  }
`;

export const Card = styled.div`
  background-color: #cfcece;
  width: 50vw;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5vh;
  margin-left: 11vw;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media ${Device.mobile} {
    width: 90vw;
    height: 70vh;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
  }
`;

export const CardText = styled.div`
  width: 50vw;
  margin-right: 5vw;
  @media ${Device.mobile} {
    width: 80vw;
    margin-right: 0vw;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-family: "Josefin Sans";
  padding-bottom: 2vh;
  padding-left: 1vw;
  text-align: justify;
  @media ${Device.mobile} {
    text-align: center;
    font-size: 1.7rem;
  }
`;

export const IdeeForte = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Noto Sans CJK JP";
  text-align: center;
  padding-left: 1vw;
  padding-bottom: 2vh;
  line-height: 1.2rem;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const Text = styled.h2`
  font-size: 1.1rem;
  padding-left: 1vw;
  font-family: "Noto Sans CJK JP";
  padding-bottom: 1vh;
  line-height: 1.2rem;
  text-align: justify;
  @media ${Device.mobile} {
    font-size: 0.85rem;
    text-align: center;
  }
`;

export const CardImg = styled.img`
  width: 30vw;
  position: absolute;
  left: 90vh;
  border: 2px solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media ${Device.mobile} {
    width: 70vw;
    left: 10vw;
    bottom: -20vh;
  }
`;

export const Card2 = styled.div`
  background-color: #cfcece;
  width: 50vw;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5vh;
  margin-left: 38.3vw;
  position: relative;
  -webkit-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  @media ${Device.mobile} {
    width: 90vw;
    height: 55vh;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    margin-top: 25vh;
  }
`;

export const CardText2 = styled.div`
  width: 50vw;
  margin-left: 3vw;
  margin-right: 2vw;
  @media ${Device.mobile} {
    width: 80vw;
    margin-left: 0vw;
  }
`;

export const Title2 = styled.h1`
  font-size: 2rem;
  font-family: "Josefin Sans";
  padding-bottom: 2vh;
  padding-left: 1vw;
  @media ${Device.mobile} {
    text-align: center;
    font-size: 1.7rem;
    padding-left: 0;
  }
`;

export const IdeeForte2 = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Noto Sans CJK JP";
  text-align: center;
  padding-left: 1vw;
  padding-bottom: 2vh;
  line-height: 1.2rem;
  @media ${Device.mobile} {
    font-size: 1rem;
    padding-left: 0;
  }
`;

export const Text2 = styled.h2`
  font-size: 1.1rem;
  padding-left: 1vw;
  font-family: "Noto Sans CJK JP";
  padding-bottom: 1vh;
  line-height: 1.2rem;
  text-align: justify;
  @media ${Device.mobile} {
    font-size: 0.85rem;
    text-align: center;
    padding-left: 0;
  }
`;

export const CardImg2 = styled.img`
  width: 30vw;
  position: absolute;
  right: 90vh;
  border: 2px solid;
  -webkit-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  @media ${Device.mobile} {
    width: 70vw;
    left: 10vw;
    bottom: -19vh;
  }
`;

export const Card3 = styled.div`
  background-color: #cfcece;
  width: 50vw;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5vh;
  margin-left: 11vw;
  position: relative;
  -webkit-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  @media ${Device.mobile} {
    width: 90vw;
    height: 70vh;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    margin-top: 50vw;
  }
`;

export const CardText3 = styled.div`
  width: 50vw;
  margin-right: 5vw;
  @media ${Device.mobile} {
    width: 80vw;
    margin-right: 0vw;
  }
`;

export const Title3 = styled.h1`
  font-size: 2rem;
  font-family: "Josefin Sans";
  padding-bottom: 2vh;
  padding-left: 1vw;
  @media ${Device.mobile} {
    text-align: center;
    font-size: 1.7rem;
    padding-left: 0vw;
  }
`;

export const IdeeForte3 = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Noto Sans CJK JP";
  text-align: center;
  padding-left: 1vw;
  padding-bottom: 2vh;
  line-height: 1.2rem;
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const Text3 = styled.h2`
  font-size: 1.1rem;
  padding-left: 1vw;
  font-family: "Noto Sans CJK JP";
  padding-bottom: 1vh;
  line-height: 1.2rem;
  text-align: justify;
  @media ${Device.mobile} {
    font-size: 0.85rem;
    text-align: center;
  }
`;

export const CardImg3 = styled.img`
  width: 30vw;
  position: absolute;
  left: 90vh;
  border: 2px solid;
  -webkit-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  @media ${Device.mobile} {
    width: 70vw;
    left: 10vw;
    bottom: -17vh;
  }
`;

export const Card4 = styled.div`
  background-color: #cfcece;
  width: 50vw;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: 38.3vw;
  position: relative;
  -webkit-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  @media ${Device.mobile} {
    width: 90vw;
    height: 70vh;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    margin-top: 21vh;
    margin-bottom: 25vh;
  }
`;

export const CardText4 = styled.div`
  width: 50vw;
  margin-left: 3vw;
  margin-right: 2vw;
  @media ${Device.mobile} {
    width: 80vw;
    margin-left: 0vw;
  }
`;

export const Title4 = styled.h1`
  font-size: 2rem;
  font-family: "Josefin Sans";
  padding-bottom: 2vh;
  padding-left: 1vw;
  @media ${Device.mobile} {
    text-align: center;
    font-size: 1.7rem;
    padding-left: 0;
  }
`;

export const IdeeForte4 = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Noto Sans CJK JP";
  text-align: center;
  padding-left: 1vw;
  padding-bottom: 2vh;
  line-height: 1.2rem;
  @media ${Device.mobile} {
    font-size: 1rem;
    padding-left: 0;
  }
`;

export const Text4 = styled.h2`
  font-size: 1.1rem;
  padding-left: 1vw;
  font-family: "Noto Sans CJK JP";
  padding-bottom: 1vh;
  line-height: 1.2rem;
  text-align: justify;
  @media ${Device.mobile} {
    font-size: 0.85rem;
    text-align: center;
    padding-left: 0;
  }
`;

export const CardImg4 = styled.img`
  width: 30vw;
  position: absolute;
  right: 90vh;
  border: 2px solid;
  -webkit-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  @media ${Device.mobile} {
    width: 70vw;
    left: 10vw;
    bottom: -19vh;
  }
`;

export const Ingenieries = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 8.5vw;
  margin-left: 8.5vw;
  margin-bottom: 8vh;
  @media ${Device.mobile} {
  }
`;

export const Button1 = styled.a`
  position: relative;
  background-color: black;
  border: solid 1px black;
  width: 15vw;
  height: 9vh;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }
  @media ${Device.mobile} {
    display: none;
  }
`;

export const P1 = styled.p`
  font-size: 2.5rem;
  font-family: "Josefin Sans";
  position: absolute;
  left: 15%;
  top: 30%;
  color: white;
`;

export const P2 = styled.p`
  font-size: 2.5rem;
  font-family: "Josefin Sans";
  position: absolute;
  left: 8.5%;
  top: 30%;
  color: white;
`;

export const P3 = styled.p`
  font-size: 2.5rem;
  font-family: "Josefin Sans";
  position: absolute;
  left: 14.5%;
  top: 30%;
  color: white;
`;

export const Explorer = styled.img`
  width: 15vw;
  height: 9vh;
  opacity: 50%;
`;

export const Engager = styled.img`
  width: 15vw;
  height: 9vh;
  opacity: 50%;
`;

export const Construire = styled.img`
  width: 15vw;
  height: 9vh;
  opacity: 50%;
`;

export const Deployer = styled.img`
  width: 15vw;
  height: 9vh;
  opacity: 50%;
`;
