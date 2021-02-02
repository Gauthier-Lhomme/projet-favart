import styled from "styled-components";
import { Device } from "../../assets/Device/Device.jsx";

export const Page = styled.div`
  background-color: #f2f8fc;
  height: 86vh;
  margin-top: 14vh;
`;

export const BlockTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  max-width: 85vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
  @media ${Device.mobile} {
    margin-bottom: 7vh;
  }
`;

export const Title = styled.h1`
  font-size: 17vh;
  color: black;
  text-transform: uppercase;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    font-size: 2.5rem;
  }
`;

export const TitleSpan = styled.span`
  font-size: 15vh;
  color: #1f89d1;
  text-transform: uppercase;
  @media ${Device.mobile} {
    font-size: 2.5rem;
  }
`;

export const BlockSentence = styled.div`
  margin-left: 8vw;
  @media ${Device.mobile} {
    margin-top: 1.5vh;
  }
`;

export const ContainerAuthorSentence = styled.div`
  max-width: 85vw;
  line-height: 3em;
  @media ${Device.mobile} {
    display: inline;
    text-align: left;
    line-height: 1.2em;
  }
`;
export const AuthorSentence = styled.p`
  font-size: 4vh;
  font-style: italic;
  color: black;
  font-family: "Josefin Sans";
  @media ${Device.mobile} {
    font-size: 1.5rem;
  }
`;

export const ContainerMoreInformation = styled.button`
  cursor: pointer;
  position: absolute;
  margin: 0 40vw;
  bottom: 0;
  height: 8vh;
  border: 0px;
  width: 20vw;
  border-radius: 20px 20px 0 0;
  background-color: #1f89d1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ visible }) => visible && `display: none;`}
  @media ${Device.mobile} {
    width: 50vw;
    margin-left: 25vw;
  }
`;

export const MoreInformationSentence = styled.p`
  color: white;
  font-size: 1.5rem;
  font-family: "Noto Sans CJK JP";
  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;
