import styled from "styled-components";
import { Device } from "../assets/Device/Device";
import { Link } from "react-router-dom";

export const FlexBox = styled.div`
  display: flex;
  height: 100vh;
  @media ${Device.mobile} {
    flex-direction: column;
    height: 120vh;
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
  padding-top: 25vh;
  @media ${Device.mobile} {
    padding-top: 40vh;
    padding-left: 4vw;
    height: 150vh;
  }
`;

export const Button1 = styled.button`
  width: 40vw;
  height: 10vh;
  margin-left: 11vw;
  background-color: #2386c9;
  color: white;
  margin-bottom: 5vh;
  border-radius: 10px;
  font-family: "JosefinSans-SemiBold";
  font-size: 1.8rem;
  cursor: pointer;
  transition: all ease 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background: #cdcdcd;
    color: #0d1842;
  }
  @media ${Device.mobile} {
    width: 70vw;
    height: 15vh;
  }
`;

export const Button2 = styled.button`
  width: 40vw;
  height: 10vh;
  margin-left: 11vw;
  background-color: #1f6da4;
  color: white;
  margin-bottom: 5vh;
  border-radius: 10px;
  font-family: "JosefinSans-SemiBold";
  font-size: 1.8rem;
  cursor: pointer;
  transition: all ease 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background: #cdcdcd;
    color: #0d1842;
  }
  @media ${Device.mobile} {
    width: 70vw;
    height: 15vh;
  }
`;

export const Button3 = styled.button`
  width: 40vw;
  height: 10vh;
  margin-left: 11vw;
  background-color: #173f63;
  color: white;
  margin-bottom: 5vh;
  border-radius: 10px;
  font-family: "JosefinSans-SemiBold";
  font-size: 1.8rem;
  cursor: pointer;
  transition: all ease 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background: #cdcdcd;
    color: #0d1842;
  }
  @media ${Device.mobile} {
    width: 70vw;
    height: 15vh;
  }
`;

export const Button4 = styled.button`
  width: 40vw;
  height: 10vh;
  margin-left: 11vw;
  background-color: #122239;
  color: white;
  margin-bottom: 5vh;
  border-radius: 10px;
  font-family: "JosefinSans-SemiBold";
  font-size: 1.8rem;
  cursor: pointer;
  transition: all ease 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background: #cdcdcd;
    color: #0d1842;
  }
  @media ${Device.mobile} {
    width: 70vw;
    height: 15vh;
    margin-bottom: 10vh;
  }
`;

export const Link1 = styled(Link)`
  width: 100%;
`;
