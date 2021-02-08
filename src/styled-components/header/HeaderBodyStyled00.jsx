import styled from "styled-components";
import { Device } from "../../assets/Device/Device.jsx";
import { Link } from "react-router-dom";

export const Page = styled.div`
  background-color: #f2f8fc;
  height: 86vh;
  display: flex;
  margin-top: 14vh;
  @media ${Device.mobile} {
    padding-bottom: 30vh;
  }
`;

export const Sommaire = styled.div`
  padding-top: 9vh;
  padding-left: 10vw;
  @media ${Device.mobile} {
    padding-top: 2vh;
    padding-left: 0;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-family: "Josefin Sans";
  padding-top: 5vh;
  text-decoration: none;
  @media ${Device.mobile} {
    text-align: center;
  }
`;

export const H1 = styled(Link)`
  text-decoration: none;
  color: #0d253f;
`;

export const Li = styled.li`
  font-size: 1rem;
  list-style: square inside;
  font-family: "Noto Sans CJK JP";
  padding-top: 1vh;
  padding-left: 3vw;
  color: #0d253f;
  @media ${Device.mobile} {
    list-style: none;
    text-align: center;
    padding-left: 0;
    margin-left: 1vw;
    margin-right: 1vw;
  }
`;

export const Illustration = styled.div`
  padding-top: 8vh;
  padding-left: 25vw;
  @media ${Device.mobile} {
    display: none;
  }
`;

export const Img = styled.img`
  border: solid black 3px;
  height: 70vh;
  -webkit-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
  box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.65);
`;
