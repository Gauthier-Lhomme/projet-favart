import styled from "styled-components";

export const DivMain = styled.div`
    padding-top : 10vh
`;

export const DivInfos = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DivCards = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  background-color: #2386c9;
  border-radius: 15px;
  color: white;
`;

export const DivCardMiddle = styled.div`
  background-color: #122239;
  width: 30%;
  border-radius: 15px;
  color: white;
  display: flex;
  flex-direction: column;

`;

export const Button = styled.button`
  background-color: #122239;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 2rem;
  padding : 2vh;
  cursor: pointer;
  &:hover {
    color: grey;
    transition-duration: 500ms;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  color: #122239;
  font-size: 4rem;
  margin-left: 4vw;
  margin-top: 8vh;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
}

`;

export const H2MiddleCard = styled.h2`
  padding-top : 2vh;
  font-size: 2rem;
  text-align : center;
  `

export const P = styled.p`
  font-size: 1.4rem;
  line-height: 4vh;
  padding-top : 4vh;
  font-family : "Noto Sans CJK JP";
  text-align : center;
`;

export const Ul = styled.ul`
padding-top : 2vh;
padding-bottom : 3vh;
  list-style: none;
  font-size: 1.4rem;
  line-height: 4vh;
`;
export const Li = styled.li`
  line-height: 4vh;
  text-align : center;
  font-family : "Noto Sans CJK JP";

`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled.div`
  padding: 2px 16px;
`;

export const ImgContainer = styled.img`
  width: 100%;
`;
export const CardFlex = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top : 9vh;
  `;


  export const DivCenter = styled.div`
  padding-top: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

  export const PContact = styled.p`  margin-left: 4vw;
  font-size: 1.4rem;
  line-height: 4vh;
  padding-top : 4vh;
  font-family : "Noto Sans CJK JP";
  `;

  export const H4 = styled.h4`
  font-size: 2rem;
  padding-top : 3vh;
  text-align : center;
  `

  export const ImgLogo = styled.img`
  background-color : #122239;
  padding : 1.5vh;
  text-align : center;
  margin-bottom : 3vh;

  `;

  export const DivLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top : 3vh;
  `